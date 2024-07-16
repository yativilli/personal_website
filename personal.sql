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
  `technology` text NOT NULL,
  `purpose` text NOT NULL,
  `status` varchar(400) NOT NULL
);

ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

INSERT INTO `projects` (`id`, `name`, `description`, `repository`, `image`, `in_collaboration_with`, `technology`, `purpose`, `status`) VALUES
(1, 'Project Alpha', 'This is the description for Project Alpha.', 'https://github.com/user/project-alpha', 'https://example.com/images/alpha.png', 'Company A', 'JavaScript, Node.js, Express', 'To build a robust API for managing tasks.', 'Completed'),
(2, 'Project Beta', 'This is the description for Project Beta.', 'https://github.com/user/project-beta', 'https://example.com/images/beta.png', 'Company B', 'Python, Django, PostgreSQL', 'To develop a web application for inventory management.', 'In Progress'),
(3, 'Project Gamma', 'This is the description for Project Gamma.', 'https://github.com/user/project-gamma', 'https://example.com/images/gamma.png', 'Company C', 'Java, Spring Boot, MySQL', 'To create a microservices architecture for e-commerce.', 'In Progress'),
(4, 'Project Delta', 'This is the description for Project Delta.', 'https://github.com/user/project-delta', 'https://example.com/images/delta.png', 'Company D', 'PHP, Laravel, MongoDB', 'To build a CMS for managing content.', 'Completed'),
(5, 'Project Epsilon', 'This is the description for Project Epsilon.', 'https://github.com/user/project-epsilon', 'https://example.com/images/epsilon.png', 'Company E', 'Ruby, Ruby on Rails, SQLite', 'To develop a social media platform.', 'Pending'),
(6, 'Project Zeta', 'This is the description for Project Zeta.', 'https://github.com/user/project-zeta', 'https://example.com/images/zeta.png', 'Company F', 'C#, .NET Core, SQL Server', 'To create an enterprise resource planning system.', 'Completed'),
(7, 'Project Eta', 'This is the description for Project Eta.', 'https://github.com/user/project-eta', 'https://example.com/images/eta.png', 'Company G', 'JavaScript, React, Node.js', 'To build a single-page application for project management.', 'In Progress'),
(8, 'Project Theta', 'This is the description for Project Theta.', 'https://github.com/user/project-theta', 'https://example.com/images/theta.png', 'Company H', 'Go, Gin, MySQL', 'To develop a high-performance API for data analytics.', 'Pending'),
(9, 'Project Iota', 'This is the description for Project Iota.', 'https://github.com/user/project-iota', 'https://example.com/images/iota.png', 'Company I', 'Swift, iOS, Firebase', 'To create a mobile app for fitness tracking.', 'Completed'),
(10, 'Project Kappa', 'This is the description for Project Kappa.', 'https://github.com/user/project-kappa', 'https://example.com/images/kappa.png', 'Company J', 'Kotlin, Android, Firestore', 'To develop an Android app for online education.', 'In Progress');

COMMIT;
