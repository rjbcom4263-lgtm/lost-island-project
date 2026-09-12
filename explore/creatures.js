export const species = {
  triceratops: {
    name: '트리케라톱스',
    kind: '초식 공룡',
    description: '세 개의 뿔과 넓은 목깃이 특징인 초식 공룡. 움직이는 웹 관찰 표본입니다.',
  },
  tyrannosaurus: {
    name: '티라노사우루스',
    kind: '육식 공룡',
    description: '커다란 머리와 강한 뒷다리를 가진 육식 공룡. 움직이는 웹 관찰 표본입니다.',
  },
  pteranodon: {
    name: '프테라노돈',
    kind: '익룡',
    description: '긴 부리와 머리 볏을 가진 비행 파충류. 공룡과 구분되는 익룡 관찰 표본입니다.',
  },
  elasmosaurus: {
    name: '엘라스모사우루스',
    kind: '해양 파충류',
    description: '긴 목과 네 개의 지느러미를 가진 해양 파충류. 공룡과 구분되는 수장룡 관찰 표본입니다.',
  },
};

// Original, self-contained SVG drawings. No model downloads or animation runtime.
const drawings = {
  triceratops: `
    <ellipse class="creature-shadow" cx="182" cy="200" rx="117" ry="11" fill="#081d18" opacity=".24"/>
    <g stroke="#173d33" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <g class="creature-body">
        <path class="creature-tail" d="M121 122C83 121 59 143 24 132C50 160 94 156 128 149Z" fill="#528a64"/>
        <g class="creature-leg creature-leg-back" fill="#376a51">
          <path d="M125 141L138 147L143 180L159 188L155 195L126 195L121 175Z"/>
          <path d="M209 142L225 145L225 181L240 189L236 195L210 195L201 165Z"/>
        </g>
        <path d="M88 138C91 103 121 90 159 91C195 91 222 104 240 129L228 158C202 176 161 175 130 161L108 163Z" fill="#629e73"/>
        <path d="M102 127C130 98 182 101 208 116" fill="none" stroke="#93bd88" stroke-width="10"/>
        <path d="M111 150C143 157 184 167 221 149L222 164C176 180 131 170 111 157Z" fill="#cfcc96" stroke="none"/>
        <path d="M136 96L129 116M156 94L150 115M176 97L170 118M195 103L188 122" fill="none" stroke="#3c7757" stroke-width="7"/>
        <g class="creature-leg creature-leg-front" fill="#6ba477">
          <path d="M114 143C109 155 111 175 115 191L114 199L140 199L147 194L133 186L132 160"/>
          <path d="M209 149C204 164 202 181 207 194L204 200L231 200L237 194L223 186L231 161"/>
          <path d="M118 196L119 200M128 196L129 200M211 196L212 200M221 196L222 200" fill="none" stroke="#e1d5a6"/>
        </g>
        <g class="creature-head">
          <path d="M222 138L203 126L196 107L199 91L210 85L212 69L226 72L239 62L249 77L262 81L263 100L270 114L258 142Z" fill="#477d59"/>
          <path d="M224 126L211 109L219 87L237 82L250 99L248 123Z" fill="#aeb680" stroke="#709163"/>
          <path d="M237 111C255 110 266 129 278 139L308 150L320 161L310 178L284 183L259 173L242 151Z" fill="#7aab78"/>
          <path d="M258 129L282 91L276 138Z" fill="#f4e3b4"/>
          <path d="M272 132L299 106L291 146Z" fill="#e9d5a2"/>
          <path d="M301 153L309 135L316 160Z" fill="#f4e3b4"/>
          <path d="M281 171L308 174L316 163L324 165L317 180L292 183Z" fill="#c7ca92"/>
          <path d="M255 144L267 145" stroke="#31513b" stroke-width="4"/>
          <circle cx="263" cy="149" r="4.5" fill="#f3d281" stroke-width="1.5"/>
          <circle cx="264" cy="149" r="2" fill="#172c25" stroke="none"/>
          <circle cx="308" cy="162" r="2" fill="#264834" stroke="none"/>
        </g>
      </g>
    </g>`,
  tyrannosaurus: `
    <ellipse class="creature-shadow" cx="176" cy="204" rx="111" ry="10" fill="#21190e" opacity=".24"/>
    <g stroke="#533c2b" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <g class="creature-body">
        <path class="creature-tail" d="M160 121C112 124 71 161 22 147C47 173 96 177 166 152Z" fill="#b78a4c"/>
        <g class="creature-leg creature-leg-back">
          <path d="M174 134C192 139 200 158 184 174L178 187L194 198L219 201L216 207L186 207L165 191L166 174L155 153Z" fill="#967047"/>
        </g>
        <path d="M139 135C145 108 169 99 190 98L216 60L247 63L244 100L223 127C217 151 198 169 173 169C153 168 137 155 139 135Z" fill="#bf9454"/>
        <path d="M165 114L155 127M186 107L175 125M206 88L195 107M218 74L209 88" stroke="#876443" stroke-width="9"/>
        <path d="M237 85C231 114 218 144 197 154L181 144L188 131L210 101L218 78Z" fill="#dfc495" stroke="none"/>
        <path d="M214 114L229 124L229 133L240 137M228 127L239 130" fill="none" stroke-width="7" stroke="#a87f4d"/>
        <path d="M237 131L243 133M237 137L242 140" fill="none" stroke="#f6e6bd" stroke-width="3"/>
        <g class="creature-leg creature-leg-front">
          <path d="M162 135C181 128 193 147 184 164L166 181L163 194L183 200L202 201L207 207L176 208L147 202L149 178L158 162C147 152 149 140 162 135Z" fill="#c3975a"/>
          <path d="M186 203L192 208M176 204L182 208M198 203L204 207" stroke="#f1e0b9" stroke-width="3"/>
        </g>
        <g class="creature-head">
          <path d="M216 72L216 48L233 35L274 34L294 44L324 51L330 74L314 83L270 84L249 96L227 92Z" fill="#c89a56"/>
          <path d="M245 83L264 84L278 95L312 90L321 81L327 85L316 105L278 112L247 100Z" fill="#d5b784"/>
          <path d="M264 82L315 80L312 91L278 98Z" fill="#5c3f32" stroke="none"/>
          <path d="M272 83L277 92L281 83M287 82L292 91L296 81M302 81L307 88L311 80" fill="#f7edcb" stroke="none"/>
          <path d="M251 45L270 43L277 49" stroke="#826441" stroke-width="6" fill="none"/>
          <circle cx="268" cy="55" r="5" fill="#f5d170" stroke-width="2"/>
          <path d="M269 51L269 58" stroke="#382e24" stroke-width="2.5"/>
          <circle cx="318" cy="63" r="2.6" fill="#745238" stroke="none"/>
          <path d="M287 69L309 68" stroke="#af824c" stroke-width="3" fill="none"/>
        </g>
      </g>
    </g>`,
  pteranodon: `
    <ellipse class="creature-shadow" cx="184" cy="208" rx="58" ry="7" fill="#231714" opacity=".15"/>
    <g class="creature-soar" stroke="#634334" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <g class="creature-wing creature-wing-far">
        <path d="M190 125L231 67L288 26L280 100L310 145L263 123L239 141L213 139Z" fill="#b47a50"/>
        <path d="M192 128L241 85L288 26M241 85L263 123M241 85L310 145" fill="none" stroke="#dfb67b"/>
      </g>
      <path d="M178 145L148 175L173 164L185 158L188 174L197 173L192 151" fill="#ba8250"/>
      <g class="creature-wing creature-wing-near">
        <path d="M182 125L130 87L50 23L58 95L25 150L91 129L124 153L151 140Z" fill="#d19b62"/>
        <path d="M182 125L109 89L50 23M109 89L58 95M109 89L25 150M109 89L124 153M109 89L151 140" fill="none" stroke="#edc78c" stroke-width="3"/>
        <path d="M59 47L109 90L168 122" fill="none" stroke="#f0d8a6" stroke-width="4"/>
      </g>
      <path d="M159 153C151 137 161 124 177 113L204 98L219 111L200 132L189 152L176 160Z" fill="#bb8350"/>
      <path d="M170 151L207 114L213 117L191 142L182 155Z" fill="#e5c799" stroke="none"/>
      <g class="creature-head">
        <path d="M209 106L164 66L218 88L231 83L246 90L241 111L221 123Z" fill="#d09a65"/>
        <path d="M240 93L325 115L240 116L226 111Z" fill="#e5be84"/>
        <path d="M243 107L315 114" fill="none" stroke-width="1.5"/>
        <circle cx="235" cy="99" r="4" fill="#f5dc9c" stroke-width="1.5"/>
        <circle cx="236" cy="99" r="2" fill="#382b24" stroke="none"/>
      </g>
    </g>`,
  elasmosaurus: `
    <ellipse class="creature-shadow creature-water" cx="176" cy="184" rx="126" ry="14" fill="#5cbdc3" opacity=".14"/>
    <g class="creature-swim" stroke="#274e57" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path class="creature-tail" d="M116 129C81 122 55 144 22 151L71 155L123 146Z" fill="#467f87"/>
      <g class="creature-flipper creature-flipper-back" fill="#3b6978">
        <path d="M126 125C116 104 99 87 82 85L98 116L138 141Z"/>
        <path d="M188 123C186 101 204 82 224 75L214 108L204 136Z"/>
      </g>
      <path d="M94 138C95 112 141 104 174 111C202 116 205 127 224 111C247 91 243 61 268 48L289 47L295 61L281 70C266 90 272 117 242 145C222 164 210 164 194 160C166 173 112 169 97 151Z" fill="#568f99"/>
      <path d="M103 140C137 151 178 151 207 143C242 146 258 99 266 78L279 63L291 62C266 85 278 121 243 151C229 164 215 169 194 159C170 173 121 169 104 154Z" fill="#abc9bb" stroke="none"/>
      <path d="M115 125L112 137M133 118L131 133M151 117L151 131M170 122L167 135M184 126L181 138" fill="none" stroke="#3d727e" stroke-width="6"/>
      <g class="creature-flipper creature-flipper-front" fill="#699ea6">
        <path d="M121 144C104 151 78 181 65 188C98 198 127 176 139 159Z"/>
        <path d="M185 148C200 156 215 181 233 191C205 202 183 178 171 158Z"/>
        <path d="M122 156L82 185M186 159L219 187" stroke="#b3cfbd" stroke-width="2" fill="none"/>
      </g>
      <g class="creature-head">
        <path d="M269 56C271 42 284 38 297 42L306 48L328 48L338 56L334 66L303 72L281 66Z" fill="#619aa2"/>
        <path d="M294 63L331 60L333 65L305 73L285 66" fill="#bdd0b9"/>
        <circle cx="297" cy="51" r="4" fill="#f4d481" stroke-width="1.5"/>
        <circle cx="298" cy="51" r="2" fill="#23404c" stroke="none"/>
        <circle cx="328" cy="53" r="1.8" fill="#254d57" stroke="none"/>
      </g>
    </g>`,
};

export function creatureSVG(type, { large = false } = {}) {
  const key = Object.hasOwn(drawings, type) ? type : 'triceratops';
  return `<svg class="creature-art creature-${key}${large ? ' creature-large' : ''}" viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${drawings[key]}</svg>`;
}

export const creatureStyles = `
  .creature-art { display: block; width: 100%; height: auto; overflow: visible; filter: drop-shadow(0 3px 2px #051b1830); }
  .creature-art * { transform-box: fill-box; }
  .creature-body { transform-origin: 50% 90%; animation: creature-breathe 1.6s ease-in-out infinite; }
  .creature-leg { transform-origin: 50% 6%; animation: creature-step .85s ease-in-out infinite alternate; }
  .creature-leg-back { animation-delay: -.85s; }
  .creature-tail { transform-origin: 95% 50%; animation: creature-tail 2.6s ease-in-out infinite alternate; }
  .creature-head { transform-origin: 12% 80%; animation: creature-look 3.6s ease-in-out infinite; }
  .creature-shadow { transform-origin: center; animation: creature-shadow 1.6s ease-in-out infinite; }
  .creature-soar { animation: creature-float 3s ease-in-out infinite; }
  .creature-wing { animation: creature-flap 1.7s ease-in-out infinite alternate; }
  .creature-wing-near { transform-origin: 97% 76%; }
  .creature-wing-far { transform-origin: 3% 86%; animation-name: creature-flap-far; }
  .creature-swim { animation: creature-float 3.8s ease-in-out infinite; }
  .creature-flipper { transform-origin: 65% 12%; animation: creature-paddle 2.4s ease-in-out infinite alternate; }
  .creature-flipper-back { transform-origin: 70% 90%; animation-delay: -2.4s; }
  .creature-water { animation-duration: 3.8s; }
  .motion-paused .creature-art *, .creature-art.motion-paused * { animation-play-state: paused !important; }
  @keyframes creature-breathe { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px) rotate(.5deg); } }
  @keyframes creature-step { from { transform: rotate(-7deg); } to { transform: rotate(7deg); } }
  @keyframes creature-tail { from { transform: rotate(-3deg); } to { transform: rotate(4deg); } }
  @keyframes creature-look { 0%,70%,100% { transform: rotate(0); } 35% { transform: rotate(-3deg); } }
  @keyframes creature-shadow { 0%,100% { transform: scaleX(1); opacity: .2; } 50% { transform: scaleX(.94); opacity: .15; } }
  @keyframes creature-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px) rotate(-1deg); } }
  @keyframes creature-flap { from { transform: rotate(-11deg) scaleY(.9); } to { transform: rotate(8deg) scaleY(1); } }
  @keyframes creature-flap-far { from { transform: rotate(11deg) scaleY(.9); } to { transform: rotate(-8deg) scaleY(1); } }
  @keyframes creature-paddle { from { transform: rotate(-8deg); } to { transform: rotate(9deg); } }
  @media (prefers-reduced-motion: reduce) { .creature-art * { animation: none !important; } }
`;
