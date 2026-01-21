@echo off
set PATH=C:\Program Files\nodejs;%PATH%
cd /d "%~dp0"
call npm install
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Installation complete! Starting dev server...
    echo.
    call npm run dev
) else (
    echo.
    echo Installation failed with error code %ERRORLEVEL%
)
pause
