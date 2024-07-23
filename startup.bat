TITLE Startup Script Personal Website

:: Start Frontend
ECHO Please Wait... Starting Express Backend
start /MIN .\scripts\startup_frontend.bat

:: Start Backend
ECHO Please Wait... Starting Angular Frontend
start /MIN .\scripts\startup_backend.bat

:: Start Xampp-Database and import Database
ECHO Please Wait... Setting Up Xampp
start /MIN .\scripts\startup_xampp.bat

ECHO Please Wait... Setting Up mysql
start /MIN .\scripts\startup_mysql.bat

exit 0 