-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 23, 2020 at 07:12 PM
-- Server version: 5.7.24
-- PHP Version: 7.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `authapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `unique_id` varchar(23) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `encrypted_password` varchar(80) NOT NULL,
  `salt` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `unique_id`, `nama`, `email`, `encrypted_password`, `salt`) VALUES
(3, '5fd64175bea1b9.61853500', 'Jery Hardianto', 'hardiantojr29@gmail.com', '5/lzVjzE+iH3PhuSjsXNFa9sC/lmMmE2OGZiNmVl', 'f2a68fb6ee'),
(4, '5fd641a8ed1918.77747419', 'tets1', 'test123@gmail.com', 'DF8eOZRUcIt5WBeICDl2ycvE3tZjMTBjNjBkOWJl', 'c10c60d9be'),
(9, '5fe230d0e64bf2.17949332', 'IKMPKU YOGYAKARTA', 'ikpmku@gmail.com', 'zUP0ZnVVUH3gAmQc04EkXRaQ9GwwZDQ0NDg0ZTI2', '0d44484e26'),
(10, '5fe38265367288.22394359', '', '', 'gx5tiAMhFJNfbVq3tf2J8ykYp4ViYmIwNWVmZWJi', 'bbb05efebb'),
(11, '5fe38482432046.82370074', 'ththrth', 'hthth', 'vcS0RqWgSOeJkx5BrDt6Vi2v8GZkYzRmODNiZjQ0', 'dc4f83bf44'),
(12, '5fe3919b788c42.70468313', 'Admin test', 'admin@gmail.com', 'gEeQG0G2CG+H6kdlyFBLz3gBIRNhODAzZDAyYTAy', 'a803d02a02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_id` (`unique_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
