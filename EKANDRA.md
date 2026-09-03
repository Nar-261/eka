---
outils:
    backend: nodejs;
    frontend: React JS / native;
    bd: Mysql
---

# E-Kandra

## Globalité du projet

E-Kandra est une plateforme numérique ayant pour objectif de mettre en relation les personnes à la recherche d'un emploi avec les entreprises et les recruteurs.Le système combine les fonctionnalités d'un réseau social professionnel et celles d'une plateforme de recherche d'emploi.Les utilisateurs pourront créer leur profil professionnel, rechercher des offres, publier du contenu, et déposer des candidatures.Les entreprises pourront présenter leur organisation, publier des offres d'emploi, consulter les profils des candidats et gérer les candidatures reçues.

La recherche d'emploi peut être difficile en raison du manque d'informations centralisées, de la difficulté à trouver des offres correspondant réellement aux compétences d'un candidat et du manque de communication directe entre candidats et recruteurs.De leur côté, les entreprises peuvent avoir des difficultés à trouver rapidement des candidats correspondant aux compétences recherchées.

E-Kandra cherche donc à résoudre ce problème en proposant une plateforme permettant de :
- centraliser les offres d'emploi;
- faciliter la recherche d'emploi;
- présenter les compétences des candidats;
- faciliter la mise en relation entre candidats et recruteurs;
- permettre la communication entre les différents utilisateurs;
- faciliter la gestion des candidatures;

## Objectif du plateforme

La plateforme devra permettre :
1. aux utilisateurs de créer un compte ;
2. aux utilisateurs de créer et modifier leur profil professionnel ;
3. aux candidats d'ajouter leurs compétences et expériences ;
4. aux entreprises de créer leur profil ;
5. aux entreprises de publier des offres d'emploi ;
6. aux candidats de rechercher des offres ;
7. aux candidats de consulter les détails d'une offre ;
8. aux candidats de postuler à une offre ;
9. aux recruteurs de consulter les candidatures ;
10. aux utilisateurs d'interagir avec les publications ;
12. à l'administrateur de gérer la plateforme;

## Acteurs du Plateformes

1. Candidat
    - créer un compte ;
    - gérer son profil ;
    - rechercher des offres ;
    - consulter les offres ;
    - enregistrer des offres ;
    - postuler ;
    - suivre ses candidatures ;

2. Entreprise
    - créer un compte entreprise ;
    - créer son profil ;
    - présenter son activité ;
    - publier des offres ;
    - modifier ou supprimer ses offres ;
    - consulter les candidatures ;
    - consulter les profils des candidats ;
    - communiquer avec les candidats;

3. Administrateurs (prototype)
    - gérer les utilisateurs ;
    - gérer les entreprises ;
    - gérer les offres ;
    - supprimer les contenus non conformes ;
    - gérer les signalements ;
    - consulter des statistiques ;
    - suspendre ou réactiver un compte;

## Fonctionnalités principales 
1. Creation de compte
2. Authentification
3. Gestion du profil candidat/entreprise
4. Gestion des Offres 
5. Rechercher un offre
6. Gestion des candidatures

## Regles de Gestion
- Un utilisateur possède un seul compte.
- Un compte peut etre candidat ou entreprise ou simple utilisateur.
- Une entreprise peut publier plusieurs offres d'emploi.
- Une offre d'emploi appartient à une seule entreprise.
- Un candidat peut postuler à plusieurs offres.
- Une offre peut recevoir plusieurs candidatures.
- Une candidature appartient à un seul candidat et à une seule offre.
- Un candidat ne peut pas postuler deux fois à la même offre.
- Un administrateur peut gérer plusieurs utilisateurs.

## Donnee a stocker

> Utilisateur

- id_utilisateur
- nom
- prénom
- email
- mot_de_passe
- type_compte
- photo
- date_inscription
- statut

    **Candidat**
    - présentation
    - localisation
    - téléphone

    **Entreprise**
    - nom
    - description
    - secteur
    - adresse
    - logo

> Offre
- id_offre
- titre
- description
- localisation
- type_contrat
- salaire
- date_publication
- date_limite
- statut

> Candidature
- id_candidature
- date_candidature
- motivation
- statut

## Modele de donnees

    UTILISATEUR (id_utilisateur, nom, prenom, email, mot_de_passe, type_compte, photo, date_inscription, statut)
        - CANDIDAT (id_candidat, #id_utilisateur, presentation, localisation, telephone)
        - ENTREPRISE (id_entreprise, #id_utilisateur, nom_entreprise, description, secteur, adresse, site_web, logo)

    OFFRE (id_offre, #id_entreprise, titre, description, localisation, type_contrat, salaire, date_publication, date_limite, statut)

    CANDIDATURE (#id_candidat, #id_offre, date_candidature, motivation,statut)

## Modele de traitements

1. Inscription
    L'utilisateur s'inscrit sur la plateforme en remplissant le formulaire et en choisisant le type de compte qu'il souhaite creer (candidat par defaut peut postuler sur les offres mais ne peut pas envoyer d'offre et entreprise pour poster des offres), le systeme envoye un code de verification a l'email inserer par l'utilisateur. L'utilisateur ecrit le code envoyer pour valider la creation de son compte.

2. Creation d'offre par le compte Entreprise
    l'utilisateur remplit le formulaire et l'envoye pour enregistrer l'offre , il peut le consulter sur son profil pour gerer les condidatures et peut cloturer les recrutements a tout moment

3. Postuler a un offre d'emploi (compte candidat)
    l'utilisateur regarde les offres publier et postule sur celle qui lui convienne ensuite il ecrit sa motivation, regarder ces candidatures dans son profil