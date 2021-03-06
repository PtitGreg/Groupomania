# Projet 7 de la formation Dev web Openclassrooms

Projet terminé et validé

## Lancement du projet

### Prérequis

Il vous faut avoir installé sur votre machine :

<ul>
  <li> Git : https://git-scm.com/downloads</li>
  <li> Node.js : https://nodejs.org/en/</li>
  <li> MySql :  https://dev.mysql.com/downloads/installer/</li>
</ul>

## BACK END

Cloner ce repository à sur votre ordinateur :

```
git clone https://github.com/PtitGreg/Groupomania.git
```

## .env

Dans le fichier "/backend/.env_a_adapter", mettre les éléments demandés entre guillemets dans le fichier et le renommer en ".env"

```
PORT = ""
TOKEN_KEY = ""
```

Dans le fichier   "/frontend/.env_a_adapter indiquer le même numéro de port que le backend si dessus à la place des guillemets et le renommer en ".env"

Ouvrir MySql command Line client ou équivalent puis effectuer ces deux lignes de commandes :

```
CREATE DATABASE groupomania;
USE groupomania;
```

Ouvrir un terminal dans le dossier backend puis effectuer les lignes de
commandes suivantes :

```
npm install
npm start
```
En créant un compte avec "admin@groupomania.com", les droits admin seront automatiquement créés.

Sequelize est configuré pour que la database Groupomania se synchronise automatiquement via la commande "sync()" dans app.js.

## FRONT END

Ouvrir un autre terminal dans le dossier frontend puis effectuer les lignes de
commandes suivantes :

```
npm install
npm start
```

## Scénario

Vous êtes développeur depuis plus d'un an chez **CONNECT-E**, une petite agence
web regroupant une douzaine d'employés.

Votre directrice, Stéphanie, invite toute l'agence à prendre un verre pour
célébrer une bonne nouvelle ! Elle vient de signer un contrat pour un nouveau
projet ambitieux ! 🥂

Le client en question est **Groupomania**, un groupe spécialisé dans la grande
distribution et l'un des plus fidèles clients de l'agence.

<p align="center">
 <img src="https://user.oc-static.com/upload/2019/09/04/15676009353158_image2.png" width="300px"/>
</p>
<p align="center">Le logo de Groupomania</p>

Le projet consiste à construire un **réseau social interne** pour les employés
de Groupomania. Le but de cet outil est de faciliter les interactions entre
collègues. Le département RH de Groupomania a laissé libre cours à son
imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques
pour favoriser les échanges entre collègues.

Stéphanie vous envoie un message via l’outil de messagerie instantanée de
l’entreprise.

<p align="center">
 <img src="https://user.oc-static.com/upload/2019/11/19/15741782856137_15718405231143_fakechat%20%2810%29.png" width="800px"/>
</p>
<p align="center">La conversation entre Sophie et vous
</p>

Quelques minutes plus tard, vous recevez un mail de Stéphanie.

> De : Stéphanie R
>
> À : Moi
>
> **Lancement projet Groupomania**
>
> ---
>
> Bonjour,
>
> Comme convenu, voici les
> [spécifications fonctionnelles](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Specs_FR_DWJ_VF.pdf).
> Tu trouveras également les
> [logos](<https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Logos+(3).zip>)
> de l’organisation pour l’habillage du site.
>
> Par ailleurs, Groupomania et moi avons convenu que l’un des employés du groupe
> testera un MVP du produit, avec une seule des deux fonctionnalités proposées.
>
> Cela nous permettra de nous assurer que nous répondons à leurs attentes.
>
> Après plusieurs réunions avec Groupomania, il semble que les paramètres du
> projet changent régulièrement, je pense qu’une organisation “agile” serait
> plus adaptée pour s’adapter aux besoins du client au fur et à mesure des
> commentaires et affiner l’application au fil de l’eau.
>
> Je suis à ta disposition pour toute question.
>
> Stéphanie
>
> De : Moi
>
> À : Stéphanie R
>
> Re : **Lancement projet Groupomania**
>
> ---
>
> Merci Stéphanie pour toutes ces informations !
>
> Si je comprends bien, je dois fournir une première version d’une des
> fonctionnalités proposées par Groupomania et j’ai carte blanche concernant la
> forme que cela va prendre ?
>
> Merci pour ces précisions.
>
> De : Stéphanie R
>
> À : Moi
>
> Re : re : **Lancement projet Groupomania**
>
> ---
>
> Oui, c’est ça !
>
> La seule contrainte est que le client utilise une base de données
> relationnelles qui se manipule avec le langage SQL pour le stockage de
> données. Il faudra donc en tenir compte lorsque tu construiras ton
> application. Tu devras t’assurer que l’utilisateur puisse requêter les données
> requises depuis SQL et puisse soumettre ces changements à la base de données
> SQL. Les données de connexion doivent également être sécurisées.
>
> Merci.
>
> Stéphanie
>
> De : Moi
>
> À : Stéphanie R
>
> Re : re : re : **Lancement projet Groupomania**
>
> ---
>
> Ah oui, je vois ! Peux-tu me préciser quelles tâches entrent dans le périmètre
> de ma mission ?
>
> Merci
>
> De : Stéphanie R
>
> À : Moi
>
> Re : re : re : re : **Lancement projet Groupomania**
>
> ---
>
> Bien sûr. Tu vas devoir :
>
> choisir la fonctionnalité que tu vas développer, estimer le temps que tu
> passeras sur le développement de chaque fonctionnalité, développer la première
> version de l'application. Deux dernières choses, tu devras faire en sorte que
> la web app puisse se connecter et se déconnecter à l’application et que la
> session de l’utilisateur persiste pendant qu’il est connecté.
>
> Pour ce projet, il faut que tu utilises un framework Front-End. Tu peux
> utiliser celui que tu préfères (React, Vue, Angular, Ember, Meteor,
> Aurelia...). Par contre, le projet doit être codé en Javascript, donc
> n'utilise pas le framework Symfony par exemple. Enfin, tes pages devront
> respecter les standards WCAG.
>
> Bon courage et à dispo si besoin :smiley:
>
> Stéphanie

Avec tous ces éléments en tête, vous vous attaquez à la réalisation de ce beau
projet.

## Compétences évaluées

- Authentifier un utilisateur et maintenir sa session
- Personnaliser le contenu envoyé à un client web
- Gérer un stockage de données à l'aide de SQL
- Implémenter un stockage de données sécurisé en utilisant SQL

## Résultat de la soutenance


1. Authentifier un utilisateur et maintenir sa session

Validé

Commentaires :

un token d'authentification de delai de 8h garde la session de l'utilisateur active

2. Gérer un stockage de données à l'aide de SQL

Validé

Commentaires :

 l’utilisateur peut faire une requête des données depuis SQL.

 l’utilisateur peut soumettre des changements à la base de données SQL.

3. Implémenter un stockage de données sécurisé en utilisant SQL

Validé

Commentaires :

la base de données stocke les informations de connexion des utilisateurs de manière sécurisée.

4. Personnaliser le contenu envoyé à un client web

Validé

Commentaires :

 l’application web contient les logos fournis par le client

 l’application web respecte la gamme de couleur demandée par le client

 la page est conforme aux normes WCAG.

Livrable

Points forts :

un projet qui répond parfaitement au cahier de charges

Le design respecte une charte graphique inspirée du logo

Axes d'amélioration :

Soutenance

Remarques :

Le projet a été bien présenté, grace à des slides organisés et pertinents. Les choix sont bien justifiés.

Projet validé!
