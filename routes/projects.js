var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var data = [
    {
      "id": 1,
      "name": "Personal Portfolio Website",
      "description": "A personal website to showcase my projects and skills.",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "repository": "https://github.com/username/portfolio",
      "liveDemo": "https://username.github.io/portfolio",
      "image": "https://example.com/images/portfolio.png"
    },
    {
      "id": 2,
      "name": "Task Manager App",
      "description": "A web application to manage daily tasks.",
      "technologies": ["React", "Node.js", "Express", "MongoDB"],
      "repository": "https://github.com/username/task-manager",
      "liveDemo": "https://task-manager.example.com",
      "image": "https://example.com/images/task-manager.png"
    },
    {
      "id": 3,
      "name": "Weather Forecast App",
      "description": "An app to display weather forecasts using a third-party API.",
      "technologies": ["Vue.js", "Vuetify", "Axios"],
      "repository": "https://github.com/username/weather-app",
      "liveDemo": "https://weather-app.example.com",
      "image": "https://example.com/images/weather-app.png"
    },
    {
      "id": 4,
      "name": "E-commerce Platform",
      "description": "A full-featured e-commerce platform for buying and selling products.",
      "technologies": ["Angular", "Firebase", "Bootstrap"],
      "repository": "https://github.com/username/e-commerce",
      "liveDemo": "https://e-commerce.example.com",
      "image": "https://example.com/images/e-commerce.png"
    },
    {
      "id": 5,
      "name": "Chat Application",
      "description": "A real-time chat application using WebSockets.",
      "technologies": ["React", "Socket.io", "Node.js", "Express"],
      "repository": "https://github.com/username/chat-app",
      "liveDemo": "https://chat-app.example.com",
      "image": "https://example.com/images/chat-app.png"
    }
  ];
  res.send(data);
});

router.get('/1', function (req, res, next) {
  var data = {
    "id": 1,
    "name": "Personal Portfolio Website",
    "description": "A personal website to showcase my projects and skills.",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "repository": "https://github.com/username/portfolio",
    "liveDemo": "https://username.github.io/portfolio",
    "image": "https://example.com/images/portfolio.png"
  };
  res.send(data);
});

module.exports = router;
