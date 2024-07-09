SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS personal_website;
USE personal_website;

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` nvarchar NOT NULL,
  `description` text NOT NULL,
  `repository` nvarchar NOT NULL,
  `image` nvarchar NOT NULL,
  `in_collaboration_with` nvarchar NOT NULL,
  `purpose` text NOT NULL,
  `status` nvarchar NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;
COMMIT;

