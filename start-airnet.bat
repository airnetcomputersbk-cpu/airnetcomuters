@echo off
title Airnet Computers - All-In-One Service Hub
set "PATH=C:\Program Files\nodejs;C:\Users\airnet\AppData\Roaming\npm;%PATH%"
cd /d "%~dp0"

echo ===================================================
echo   Airnet Computers Online Service Center
echo   Starting all services (Backend + Frontend)...
echo ===================================================
echo.

node scripts/run-all.mjs
pause
