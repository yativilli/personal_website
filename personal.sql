SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS personal_website;
USE personal_website;

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(400) NOT NULL,
  `description` text NOT NULL,
  `repository` varchar(400) NOT NULL,
  `image` varchar(400) NOT NULL,
  `in_collaboration_with` varchar(400) NOT NULL,
  `purpose` text NOT NULL,
  `status` varchar(400) NOT NULL
);

ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;
COMMIT;

INSERT INTO `projects` (`id`, `name`, `description`, `repository`, `image`, `in_collaboration_with`, `purpose`, `status`) VALUES
(1, 'Personal Portfolio', 'A personal portfolio website to showcase my projects and skills.', 'https://github.com/user/portfolio', 'https://example.com/images/portfolio.png', '', 'To showcase my work and attract potential employers.', 'Completed'),
(2, 'E-commerce Platform', 'An e-commerce platform for buying and selling products online.', 'https://github.com/user/ecommerce', 'https://example.com/images/ecommerce.png', 'John Doe', 'To provide a user-friendly platform for online shopping.', 'In Progress'),
(3, 'Chat Application', 'A real-time chat application with various features.', 'https://github.com/user/chatapp', 'https://example.com/images/chatapp.png', 'Jane Smith', 'To facilitate real-time communication between users.', 'Completed'),
(4, 'Task Manager', 'A task management tool to help users keep track of their tasks.', 'https://github.com/user/taskmanager', 'https://example.com/images/taskmanager.png', '', 'To improve productivity by organizing tasks.', 'In Progress'),
(5, 'Blog Platform', 'A platform for users to create and share blog posts.', 'https://github.com/user/blogplatform', 'https://example.com/images/blogplatform.png', 'Alex Johnson', 'To provide a space for users to express their thoughts and ideas.', 'Planning'),
(6, 'Fitness Tracker', 'A mobile app to track fitness activities and goals.', 'https://github.com/user/fitnesstracker', 'https://example.com/images/fitnesstracker.png', '', 'To help users maintain a healthy lifestyle by tracking their fitness activities.', 'Completed'),
(7, 'Recipe Sharing App', 'An app for users to share and discover new recipes.', 'https://github.com/user/recipesharing', 'https://example.com/images/recipesharing.png', 'Emily Davis', 'To create a community for food enthusiasts to share and discover recipes.', 'In Progress'),
(8, 'Online Learning Platform', 'A platform for online courses and tutorials.', 'https://github.com/user/onlinelearning', 'https://example.com/images/onlinelearning.png', '', 'To provide accessible education to users worldwide.', 'Planning'),
(9, 'Event Management System', 'A system to manage and organize events efficiently.', 'https://github.com/user/eventmanagement', 'https://example.com/images/eventmanagement.png', 'Michael Brown', 'To streamline the process of organizing and managing events.', 'Completed'),
(10, 'Weather Forecast App', 'An app to provide weather forecasts and alerts.', 'https://github.com/user/weatherforecast', 'https://example.com/images/weatherforecast.png', '', 'To provide accurate and up-to-date weather information to users.', 'In Progress');

COMMIT;
