@echo off
docker compose down -v
docker compose up -d

rem Espera a que la base de datos esté lista para aceptar conexiones.
echo "Waiting for database to be ready..."
timeout /t 5 /nobreak > nul

rem Ejecuta el backend en una nueva ventana para no bloquear la terminal
start "UniRide Backend" go run ./backend/cmd/server

cd frontend
npm run dev