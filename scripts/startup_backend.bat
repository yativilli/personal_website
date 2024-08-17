TITLE Startup Backend Personal Website

ECHO Please Wait... Starting Express Backend
cd ..\personal_backend

:: Install Dependencies
call npm install
timeout 3

:: Run and Open Backend Server
start http://localhost:3000
npm run start

exit 0 