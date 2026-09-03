-- Base de données E-Kandra
-- MySQL 8 / InnoDB

CREATE DATABASE IF NOT EXISTS ekandra CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE ekandra;

CREATE TABLE utilisateur (
    id_utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    type_compte ENUM('candidat', 'entreprise', 'utilisateur') NOT NULL DEFAULT 'utilisateur',
    photo VARCHAR(255) NULL,
    date_inscription DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    statut ENUM('actif', 'inactif', 'suspendu') NOT NULL DEFAULT 'actif',
    CONSTRAINT chk_utilisateur_email CHECK (email LIKE '%@%')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE candidat (
    id_candidat INT PRIMARY KEY AUTO_INCREMENT,
    id_utilisateur INT NOT NULL UNIQUE,
    presentation TEXT NULL,
    localisation VARCHAR(255) NULL,
    telephone VARCHAR(30) NULL,
    CONSTRAINT fk_candidat_utilisateur
        FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
        ON UPDATE CASCADE
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE entreprise (
    id_entreprise INT PRIMARY KEY AUTO_INCREMENT,
    id_utilisateur INT NOT NULL UNIQUE,
    nom_entreprise VARCHAR(255) NOT NULL,
    description TEXT NULL,
    secteur VARCHAR(150) NULL,
    adresse VARCHAR(255) NULL,
    logo VARCHAR(255) NULL,
    CONSTRAINT fk_entreprise_utilisateur
        FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
        ON UPDATE CASCADE
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE offre (
    id_offre INT PRIMARY KEY AUTO_INCREMENT,
    id_entreprise INT NOT NULL,
    titre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    localisation VARCHAR(255) NOT NULL,
    type_contrat ENUM('cdi', 'cdd', 'stage', 'alternance', 'freelance', 'temps_partiel', 'autre') NOT NULL,
    salaire DECIMAL(12,2) NULL,
    date_publication DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    date_limite DATETIME NULL,
    statut ENUM('active', 'fermee') NOT NULL DEFAULT 'active',
    CONSTRAINT fk_offre_entreprise
        FOREIGN KEY (id_entreprise) REFERENCES entreprise(id_entreprise)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT chk_offre_dates CHECK (date_limite IS NULL OR date_limite >= date_publication)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE candidature (
    id_candidature INT PRIMARY KEY AUTO_INCREMENT,
    id_candidat INT NOT NULL,
    id_offre INT NOT NULL,
    date_candidature DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    motivation TEXT NOT NULL,
    statut ENUM('en_attente', 'acceptee', 'refusee') NOT NULL DEFAULT 'en_attente',
    CONSTRAINT fk_candidature_candidat
        FOREIGN KEY (id_candidat) REFERENCES candidat(id_candidat)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_candidature_offre
        FOREIGN KEY (id_offre) REFERENCES offre(id_offre)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT uq_candidature_unique UNIQUE (id_candidat, id_offre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_utilisateur_type_compte ON utilisateur(type_compte);
CREATE INDEX idx_offre_entreprise ON offre(id_entreprise);
CREATE INDEX idx_offre_statut ON offre(statut);
CREATE INDEX idx_candidature_offre ON candidature(id_offre, statut);
CREATE INDEX idx_candidature_candidat ON candidature(id_candidat, statut);

-- Exemple de données de test
--INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, type_compte, photo, statut) VALUES
--('Dupont', 'Alice', 'alice@example.com', 'hash_password', 'candidat', NULL, 'actif');
--INSERT INTO candidat (id_utilisateur, presentation, localisation, telephone) VALUES
--(1, 'Développeuse backend', 'Antananarivo', '+261331234567');
--INSERT INTO entreprise (id_utilisateur, nom_entreprise, description, secteur, adresse, site_web, logo) VALUES
--(2, 'E-Kandra', 'Plateforme de recrutement', 'Technologie', 'Antananarivo', NULL);
--INSERT INTO offre (id_entreprise, titre, description, localisation, type_contrat, salaire, date_limite, statut) VALUES
--(1, 'Développeuse Full Stack', 'Recrutement d une développeuse pour gérer le backend et le frontend.', 'Antananarivo', 'cdi', 1500000.00, '2026-10-15 00:00:00', 'active');
