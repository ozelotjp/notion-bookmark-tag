```bash
docker compose up -d --build

# Develop web application
docker compose exec web npm ci
docker compose exec web quasar dev

# Develop functions
docker compose exec firebase npm --prefix functions ci
docker compose exec firebase npm --prefix functions run build:watch

# Start Firebase Emulators
docker compose exec firebase firebase login --no-localhost
docker compose exec firebase firebase emulators:start
```
