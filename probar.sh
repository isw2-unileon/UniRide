# shellcheck disable=SC2148

docker compose down -v
docker compose up -d

go run ./backend/cmd/server &

cd frontend || return

npm run dev