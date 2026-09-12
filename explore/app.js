import { species, creatureSVG, creatureStyles } from './creatures.js';

const $ = (id) => document.getElementById(id);
const style = document.createElement('style');
style.textContent = creatureStyles;
document.head.append(style);
const colors = ['#9fc4a1', '#d2ba77', '#db976e', '#b29acb'];
const stages = ['첫 번째 탐사권', '환경 적응 탐사권', '상위 탐사권', '미지의 심층권'];
const numerals = ['I', 'II', 'III', 'IV'];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
let activeStage = 0;
let selectedSpecies = 'triceratops';
let selectedRegion;
let map;
let creaturesLayer;
let routesLayer;
let creatures = [];
let regions = [];
let pins = [];
let bounds;
let elapsed = 0;
let lastFrame = 0;

// Paths are a visual preview in image pixels, not gameplay navigation or spawn data.
const paths = [
  { type: 'triceratops', region: 'grassland-continent', speed: 6, offset: 0, points: [[370,230],[410,215],[456,204],[482,182]] },
  { type: 'triceratops', region: 'grassland-continent', speed: 5, offset: 7, points: [[350,207],[392,186],[422,194],[453,180]] },
  { type: 'triceratops', region: 'grassland-continent', speed: 4, offset: 17, points: [[470,155],[503,150],[540,175]] },
  { type: 'tyrannosaurus', region: 'jungle-region', speed: 7, offset: 2, points: [[143,335],[167,352],[198,328],[222,310]] },
  { type: 'tyrannosaurus', region: 'grassland-continent', speed: 6, offset: 20, points: [[516,202],[548,187],[577,158]] },
  { type: 'pteranodon', region: 'jungle-region', speed: 22, offset: 0, points: [[182,240],[258,200],[338,235],[397,275]] },
  { type: 'pteranodon', region: 'anchor-archipelago', speed: 19, offset: 6, points: [[590,345],[682,307],[761,347],[820,387]] },
  { type: 'pteranodon', region: 'frozen-mountains', speed: 17, offset: 10, points: [[756,148],[814,96],[895,123],[961,187]] },
  { type: 'elasmosaurus', region: 'plesiosaur-territory', speed: 12, offset: 8, points: [[560,715],[617,731],[691,751],[745,727]] },
  { type: 'elasmosaurus', region: 'open-sea', speed: 10, offset: 22, points: [[890,565],[920,605],[975,644],[1047,650]] }
];

function announce(message) { $('announcement').textContent = message; }

function selectSpecies(type) {
  selectedSpecies = type;
  $('specimen-art').innerHTML = creatureSVG(type, { large: true });
  $('species-name').textContent = species[type].name;
  $('species-kind').textContent = species[type].kind;
  $('species-description').textContent = species[type].description;
  document.querySelectorAll('[data-species]').forEach(button => {
    const active = button.dataset.species === type;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function selectRegion(region, focus = true) {
  selectedRegion = region.id;
  $('record-number').textContent = `${String(regions.indexOf(region) + 1).padStart(2, '0')} / 14`;
  $('region-stage').textContent = `${numerals[region.stage - 1]} · ${stages[region.stage - 1]}`;
  $('region-stage').style.color = colors[region.stage - 1];
  $('region-title').textContent = region.name;
  $('region-description').textContent = region.description;
  $('region-biome').textContent = region.biome;
  $('region-gear').textContent = region.gear;
  $('region-resources').replaceChildren(...region.resources.map(resource => {
    const span = document.createElement('span'); span.textContent = resource; return span;
  }));
  document.querySelectorAll('[data-region]').forEach(button => {
    const active = button.dataset.region === region.id;
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  pins.forEach(({region: candidate, marker}) => marker.getElement()?.classList.toggle('is-selected', candidate.id === region.id));
  if (focus) map.setView(toLatLng([region.x, region.y]), Math.max(map.getZoom(), .25), { animate: !reducedMotion.matches });
  const resident = paths.find(path => path.region === region.id);
  if (resident) selectSpecies(resident.type);
}

function applyFilters() {
  const query = $('search').value.trim().toLocaleLowerCase('ko');
  const visible = new Set(regions.filter(region => (!activeStage || region.stage === activeStage) && region.name.toLocaleLowerCase('ko').includes(query)).map(region => region.id));
  $('region-count').textContent = `${visible.size} / ${regions.length}`;
  document.querySelectorAll('[data-region]').forEach(button => { button.hidden = !visible.has(button.dataset.region); });
  $('no-results').hidden = visible.size > 0;
  pins.forEach(({region, marker}) => {
    if (visible.has(region.id)) { marker.addTo(map); marker.getElement()?.classList.toggle('is-selected', region.id === selectedRegion); }
    else marker.remove();
  });
  creatures.forEach(creature => {
    if (visible.has(creature.region)) creature.marker.addTo(creaturesLayer);
    else creaturesLayer.removeLayer(creature.marker);
  });
  refreshRoutes(visible);
  updateMotionUI();
}

function refreshRoutes(visible) {
  routesLayer.clearLayers();
  const anchor = regions[0];
  regions.slice(1).filter(region => visible.has(region.id)).forEach(region => {
    L.polyline([toLatLng([anchor.x,anchor.y]), toLatLng([(anchor.x + region.x) / 2 + 40, (anchor.y + region.y) / 2 - 25]), toLatLng([region.x,region.y])], {
      color: colors[region.stage - 1], opacity: .5, weight: 1.5, interactive: false, className: 'expedition-route'
    }).addTo(routesLayer);
  });
}

function updateMotionUI() {
  document.body.classList.toggle('motion-paused', paused);
  $('pause').textContent = paused ? '▷ 재생' : 'Ⅱ 일시정지';
  $('pause').setAttribute('aria-pressed', String(paused));
  const count = creaturesLayer?.getLayers().length || 0;
  $('activity').textContent = paused ? '생태 움직임 일시정지' : !$('show-creatures').checked ? '생물 숨김 · 항로 관측 중' : `${count}개체 · 생태 움직임 재생 중`;
}

let imageHeight = 1086;
const toLatLng = ([x,y]) => [imageHeight - y, x];

// Traverse each path in both directions; segment lengths keep movement speed uniform.
function positionOnPath(creature, time) {
  const distance = ((time + creature.offset) * creature.speed) % (creature.length * 2);
  const reverse = distance > creature.length;
  let remaining = reverse ? creature.length * 2 - distance : distance;
  for (let i = 1; i < creature.points.length; i++) {
    const a = creature.points[i-1], b = creature.points[i], length = creature.lengths[i-1];
    if (remaining <= length || i === creature.points.length - 1) {
      const t = remaining / length;
      return {point: [a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t], facing: (b[0]-a[0]) * (reverse ? -1 : 1) >= 0 ? 1 : -1};
    }
    remaining -= length;
  }
}

function animate(timestamp) {
  if (!document.hidden && !paused) elapsed += Math.min((timestamp - lastFrame) / 1000 || 0, .05);
  lastFrame = timestamp;
  if (!paused && !document.hidden && $('show-creatures').checked) creatures.forEach(creature => {
    if (!creaturesLayer.hasLayer(creature.marker)) return;
    const current = positionOnPath(creature, elapsed);
    creature.marker.setLatLng(toLatLng(current.point));
    const element = creature.marker.getElement()?.querySelector('.creature-shell');
    if (element) element.style.transform = `scaleX(${current.facing})`;
  });
  requestAnimationFrame(animate);
}

async function start() {
  if (!window.L) throw new Error('Map library unavailable');
  const response = await fetch('./regions.json');
  if (!response.ok) throw new Error(`Region data: ${response.status}`);
  const data = await response.json();
  regions = data.regions;
  imageHeight = data.imageSize[1];
  bounds = [[0,0], [imageHeight,data.imageSize[0]]];
  map = L.map('map', { crs: L.CRS.Simple, minZoom: -3, maxZoom: 2, zoomSnap: .25, zoomDelta: .5, zoomControl: false, attributionControl: true, maxBounds: [[-180,-180], [imageHeight+180,data.imageSize[0]+180]], maxBoundsViscosity: .8 });
  L.imageOverlay('../docs/01-worldbuilding/assets/world-map-concept-v1.png', bounds, {alt: '사라진섬 세계지도 콘셉트 v1', attribution: '사라진섬 · 지도 콘셉트 v1'}).on('error', () => { $('map-error').hidden = false; }).addTo(map);
  map.setView([imageHeight / 2, data.imageSize[0] / 2], map.getBoundsZoom(bounds, true), {animate:false});
  creaturesLayer = L.layerGroup().addTo(map);
  routesLayer = L.layerGroup().addTo(map);
  regions.forEach((region, index) => {
    const item = document.createElement('button');
    item.className = 'region-item'; item.dataset.region = region.id;
    item.style.setProperty('--stage', colors[region.stage - 1]);
    item.setAttribute('aria-pressed', 'false');
    const number = document.createElement('span'); number.className = 'region-number'; number.textContent = String(index+1).padStart(2,'0');
    const label = document.createElement('span');
    const name = document.createElement('span'); name.className = 'region-name'; name.textContent = region.name;
    const subtitle = document.createElement('span'); subtitle.className = 'region-subtitle'; subtitle.textContent = `${numerals[region.stage-1]} · ${region.biome}`;
    const indicator = document.createElement('span'); indicator.className = 'region-indicator'; indicator.setAttribute('aria-hidden','true');
    label.append(name,subtitle); item.append(number,label,indicator);
    item.addEventListener('click', () => { selectRegion(region); announce(`${region.name} 선택. ${region.description}`); if (innerWidth <= 600) $('map').scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth',block:'center'}); });
    $('region-list').append(item);
    const marker = L.marker(toLatLng([region.x,region.y]), {icon:L.divIcon({className:'region-pin',html:`<span class="pin-core" style="--stage:${colors[region.stage-1]}">${numerals[region.stage-1]}</span>`,iconSize:[24,24],iconAnchor:[12,12]}),title:region.name,alt:region.name,keyboard:true,riseOnHover:true,zIndexOffset:50}).bindTooltip(region.name, {direction:'top',offset:[0,-12]});
    marker.on('add', () => marker.getElement()?.setAttribute('aria-label', `${region.name} · ${region.stage}단계`));
    marker.on('click', () => { selectRegion(region,false); announce(`${region.name} · ${region.description}`); });
    pins.push({region,marker});
  });
  const empty = document.createElement('p'); empty.id='no-results'; empty.className='no-results'; empty.textContent='일치하는 권역이 없어요. 다른 이름이나 단계를 선택해 주세요.'; empty.hidden=true; $('region-list').append(empty);

  paths.forEach(path => {
    const lengths = path.points.slice(1).map((point,index) => Math.hypot(point[0]-path.points[index][0],point[1]-path.points[index][1]));
    const creature = {...path,lengths,length:lengths.reduce((a,b)=>a+b,0)};
    const width = path.type === 'pteranodon' ? 77 : path.type === 'elasmosaurus' ? 106 : 88;
    const height = path.type === 'pteranodon' ? 66 : 59;
    creature.marker = L.marker(toLatLng(positionOnPath(creature,0).point), {icon:L.divIcon({className:'creature-marker',html:`<div class="creature-shell">${creatureSVG(path.type)}</div>`,iconSize:[width,height],iconAnchor:[width/2,height/2]}),title:`${species[path.type].name} 관찰`,alt:`${species[path.type].name} 관찰`,keyboard:true,zIndexOffset:path.type==='pteranodon'?500:150}).bindTooltip(`${species[path.type].name} · 눌러서 관찰`,{direction:'top',offset:[0,-20]});
    creature.marker.on('click', () => { selectRegion(regions.find(region=>region.id===path.region),false); selectSpecies(path.type); announce(`${species[path.type].name} 관찰 선택. ${species[path.type].description}`); });
    creatures.push(creature);
  });
  Object.entries(species).forEach(([type,entry]) => {
    const button = document.createElement('button'); button.textContent=entry.name; button.dataset.species=type;
    button.addEventListener('click',()=>selectSpecies(type)); $('species-picker').append(button);
  });
  $('search').addEventListener('input',applyFilters);
  document.querySelectorAll('[data-stage]').forEach(button=>button.addEventListener('click',()=>{
    activeStage=Number(button.dataset.stage);
    document.querySelectorAll('[data-stage]').forEach(option=>{const selected=option===button;option.classList.toggle('active',selected);option.setAttribute('aria-pressed',String(selected));});
    applyFilters();
  }));
  $('pause').addEventListener('click',()=>{paused=!paused;updateMotionUI();});
  reducedMotion.addEventListener('change',event=>{if(event.matches){paused=true;updateMotionUI();}});
  $('show-creatures').addEventListener('change',()=>{if($('show-creatures').checked)creaturesLayer.addTo(map);else creaturesLayer.remove();updateMotionUI();});
  $('show-routes').addEventListener('change',()=>{if($('show-routes').checked)routesLayer.addTo(map);else routesLayer.remove();});
  $('zoom-in').addEventListener('click',()=>map.zoomIn());
  $('zoom-out').addEventListener('click',()=>map.zoomOut());
  $('reset-map').addEventListener('click',()=>map.fitBounds(bounds,{padding:[22,65],animate:!reducedMotion.matches}));
  $('wide-mode').addEventListener('click',()=>{const wide=document.body.classList.toggle('wide');$('wide-mode').textContent=wide?'패널 보기 ↙':'넓게 보기 ↗';$('wide-mode').setAttribute('aria-pressed',String(wide));map.invalidateSize({animate:false});map.fitBounds(bounds,{padding:[22,65],animate:false});});
  $('find-creature').addEventListener('click',()=>{
    const target=creatures.find(creature=>creature.type===selectedSpecies);
    if(!target)return;
    activeStage=0;$('search').value='';
    document.querySelectorAll('[data-stage]').forEach(button=>{const active=button.dataset.stage==='0';button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    $('show-creatures').checked=true;creaturesLayer.addTo(map);applyFilters();
    const type=selectedSpecies;
    selectRegion(regions.find(region=>region.id===target.region),false);selectSpecies(type);
    map.setView(target.marker.getLatLng(),.75,{animate:!reducedMotion.matches});target.marker.openTooltip();
    announce(`${species[type].name} 위치로 이동했어요.`);
    if(innerWidth<=900)$('map').scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth',block:'center'});
  });
  document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){event.preventDefault();$('search').focus();}});
  new ResizeObserver(()=>map.invalidateSize({animate:false})).observe($('map'));
  selectRegion(regions[2],false);selectSpecies('triceratops');applyFilters();updateMotionUI();
  requestAnimationFrame(animate);
}

start().catch(error=>{console.error(error);$('map-error').hidden=false;$('activity').textContent='지도를 불러오지 못했어요';});
