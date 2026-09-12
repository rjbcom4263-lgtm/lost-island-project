#!/usr/bin/env sh
set -eu
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example. Change POSTGRES_PASSWORD before public deployment."
fi
docker compose up -d
echo "Wiki.js: http://localhost:8080"
