-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 28 déc. 2019 à 12:47
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `espace_membre_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `description` text,
  `way_number` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `date_of_create` date DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `picture_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `first_name`, `last_name`, `birth_date`, `mail`, `password`, `sexe`, `description`, `way_number`, `street`, `zip_code`, `city`, `date_of_create`, `longitude`, `latitude`, `picture_url`) VALUES
(1, 'bluexy', 'romain', 'lenoir', '1993-06-06', 'romain-l58@hotmail.com', 'fekfjlezjlez', 'Homme', 'une description inutile', '68', 'route de villorget', '58200', 'Cosne-Cours-sur-Loire', '2019-09-21', '2.981343', '47.437295', NULL),
(2, 'maxou58', 'maxime', 'desforges', '1996-02-12', 'maxou92@hotmail.com', 'rsr5r4g54rgr5e4rre', 'Homme', 'Encore une description inutile', '10', 'rue jean jacques rousseau', '92130', 'Issy-les-Moulineaux', '2019-09-22', '2.260465', '48.822919', NULL),
(7, 'LaMarmotte', 'Léa', 'Marmande', '1994-06-07', 'lea789@gmail.fr', 'jlkjlkkljvdsv5465vr', 'Femme', 'Collègue de TAF', '8', 'rue gambetta', '03300', 'Cusset', '2019-10-04', '3.455829', '46.133934', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
