# shellcheck disable=SC2148

docker compose down -v
docker compose up -d

# Espera a que la base de datos esté lista para aceptar conexiones.
# El contenedor de PostgreSQL puede tardar unos segundos en inicializarse.
echo "Waiting for database to be ready..."
sleep 5

go run ./backend/cmd/server &

cd frontend || return

npm run dev