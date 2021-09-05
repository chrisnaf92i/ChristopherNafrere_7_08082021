-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 05 sep. 2021 à 18:16
-- Version du serveur :  8.0.26
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentary`
--

DROP TABLE IF EXISTS `commentary`;
CREATE TABLE IF NOT EXISTS `commentary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `date_publication` datetime NOT NULL,
  `image_url` text,
  `content` text,
  `publication_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `commentary`
--

INSERT INTO `commentary` (`id`, `user_id`, `date_publication`, `image_url`, `content`, `publication_id`) VALUES
(13, 38, '2021-08-05 19:40:00', '', 'Bienvenu parmis nous Jonitha', 75);

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

DROP TABLE IF EXISTS `publication`;
CREATE TABLE IF NOT EXISTS `publication` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `date_publication` datetime NOT NULL,
  `image_url` text,
  `content` text,
  `commentary_id` int DEFAULT NULL,
  `likes` int DEFAULT '0',
  `dislikes` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `publication`
--

INSERT INTO `publication` (`id`, `user_id`, `date_publication`, `image_url`, `content`, `commentary_id`, `likes`, `dislikes`) VALUES
(65, 38, '2021-08-05 16:29:00', '', 'yo tout le monde c\'est squeezie', NULL, 0, 0),
(66, 42, '2021-08-05 17:01:00', '', 'wnjfaezjomjfqd\n', NULL, 0, 0),
(67, 42, '2021-08-05 17:17:00', '', '', NULL, 0, 0),
(68, 42, '2021-08-05 17:17:00', '', '', NULL, 0, 0),
(69, 42, '2021-08-05 17:18:00', '', '', NULL, 0, 0),
(75, 37, '2021-08-05 19:18:00', 'undefined', 'Salut voici mon premier poste, je suis Jonitha Nafrere et je suis la nouvelle responsable des ressource humaine au seins de Groupomania', NULL, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `publication_commentary`
--

DROP TABLE IF EXISTS `publication_commentary`;
CREATE TABLE IF NOT EXISTS `publication_commentary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `publication_id` int NOT NULL,
  `commentary_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `publication_commentary`
--

INSERT INTO `publication_commentary` (`id`, `publication_id`, `commentary_id`) VALUES
(15, 75, 75);

-- --------------------------------------------------------

--
-- Structure de la table `publication_userliked`
--

DROP TABLE IF EXISTS `publication_userliked`;
CREATE TABLE IF NOT EXISTS `publication_userliked` (
  `id` int NOT NULL AUTO_INCREMENT,
  `publication` int NOT NULL,
  `userLiked` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` char(1) NOT NULL DEFAULT '1',
  `last_name` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birthday` datetime NOT NULL,
  `profile_image_url` text,
  `biography` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `role`, `last_name`, `first_name`, `email`, `password`, `birthday`, `profile_image_url`, `biography`) VALUES
(37, '1', 'NAFRERE', 'jonitha', 'jonitha.nafrere@gmail.com', '$2b$10$uLeh/LUd2Y0OROUp6czohuzBYf4Ruazxm3FJTQrQf5TZBhYE8ua0S', '1979-08-02 00:00:00', NULL, 'fdqsfdsqfsqdfw'),
(38, '0', 'nafrere', 'christopher', 'nafrere.christopher@gmail.com', '$2b$10$TM2DbTpk6stJAoJYRBHvy.lymOV7QLBXhDcTPIcoLuY2J4L60LhCG', '2000-07-26 00:00:00', NULL, NULL),
(40, '1', 'kirstein', 'jean', 'jean.kirstein@gmail.com', '$2b$10$NHlQsp0DYleZG5UuYN/ixOQB6bnxhn9Fi.5rZFbt72Jt3yYArMm5G', '0835-04-07 00:00:00', NULL, NULL),
(41, '1', 'jaeger', 'eren', 'eren.jeager@gmail.com', '$2b$10$qUFOd/P/6t1H/is2jKzAJ.l/K8y9B5662KrORVSovjlGGq.3PnPgG', '0835-03-30 00:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `userliked`
--

DROP TABLE IF EXISTS `userliked`;
CREATE TABLE IF NOT EXISTS `userliked` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userLiked_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
