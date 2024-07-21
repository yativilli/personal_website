TITLE Startup Script Personal Website

:: Start Frontend
ECHO Please Wait... Starting Express Backend
start .\scripts\startup_frontend.bat

:: Start Backend
ECHO Please Wait... Starting Angular Frontend
start .\scripts\startup_backend.bat

:: Start Xampp-Database and import Database
ECHO Please Wait... Setting Up Xampp Database
start .\scripts\startup_xampp.bat