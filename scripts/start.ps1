if (-not (Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
  Write-Host "Created .env from .env.example. Change POSTGRES_PASSWORD before public deployment."
}
docker compose up -d
Write-Host "Wiki.js: http://localhost:8080"
