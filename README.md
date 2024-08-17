# personal_website

## Requirements
For developing, only Node.js and Xampp must be preinstalled.
Xampp must be saved in the C:\-Directory. Otherwise, the start command won't work

## Docker
### Backend
`cd C:\mypath\backend`
`docker build -t backend .`
`docker run --name backend_personal -p 3000:3000 backend`

### Frontend
`cd C:\mypath\frontend`
`docker build -t frontend .`
`docker run --name frontend_personal -p 4200:4200 frontend`