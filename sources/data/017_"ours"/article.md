---
title: BLOB, présentation de la chaîne graphique
authors: Corentin Brulé
runningTitle: BLOB
---

BLOB est un support d’expérimentation et de recherche, à la fois dans son contenu, dans sa mise en page, mais aussi dans le développement d’outils nécessaires à sa fabrication.
Ainsi, BLOB a été pensé comme une chaîne éditoriale entre les contributions des auteurs et leurs diffusions, dont certains maillons nécessiteraient d’être fabriqués sur mesure.

Le choix d’un mode d’édition dit «&#8239;web to print&#8239;» (du web vers l’impression) permet de différencier structurellement le contenu (sémantique) de la forme (présentation).
Cette séparation qui n’existe pas dans les outils traditionnels de mise en page permet la modification des contenus en dehors de la maquette&#8239;; problématique récurrente de ce type de publication «&#8239;dans le flux&#8239;», dont les temporalités et l’éditorialisation se construisent autours des contenus.

Sortir des méthodes traditionnelles d’édition c’est aussi se permettre d’utiliser des logiciels non-propriétaires sans chercher forcément à copier les critères de l’industrie, qui sont en réalité imposés par le monopole de certains éditeurs de logiciels. De nouvelles contraintes formelles se sont ainsi imposées et il restait à décider de les assumer et de jouer avec&#8239;; ou de complexifier l’outil pour recréer des fonctionnalités auxquelles nous sommes habitués. Ce numéro 0 reste avant tout un test des limites techniques et des opportunités formelles de cette technologie.

Paged.js est une bibliothèque Javascript qui permet de manipuler des documents Web à destination de l’impression. En d’autres termes, elle fabrique un environnement de travail d’édition au sein d’un navigateur web.
L’organisation par page, l’enchaînement des paragraphes, la pagination ou la gestion des titres courants sont autant d’aspects propres à l’objet technique «&#8239;livre&#8239;» et qui ne sont pas ou mal pris en charge par les technologies web standards construites autour de documents linéaires (que l’on dit «&#8239;liquides&#8239;», c’est-à-dire qui s’adaptent à la fenêtre sur laquelle ils sont affichés).

Les modules d’impression des navigateurs, par exemple, ne sont pas encore conçus pour faire correctement et précisément ces manipulations. Pourtant, la puissance de flexibilité et de configurabilité du couple «&#8239;html&#8239;/&#8239;css&#8239;» pour la mise en page n’est plus à prouver et la présence d’un langage de programmation (Javascript) au sein du processus de rendu offre (enfin!) des possibilités graphiques paramétriques (et plus seulement comme des extensions permettant d’automatiser des manipulations sur une maquette rigide).

Même si elle ne fait pas partie des priorités pour les développeurs de navigateurs (parce que relevant d’une pratique encore marginale) on peut tout de même remarquer que de plus en plus de fonctionnalités CSS pour l’impression commence à être supportées.

On peut donc voir Paged.js comme une extension des capacités des navigateurs web à manipuler et afficher des contenus organisés sous forme de pages, telle une «&#8239;émulation&#8239;» d’un livre au sein d’un document linéaire.

Paged.js n’est qu’un des nombreux scripts qui manipulent le contenu de la revue avant sa diffusion.
Par exemple, les contributions des auteurs se font en Markdown, langage de balisage léger, permettant de structurer rapidement et facilement le texte «&#8239;brut&#8239;» de l’article. Il faut donc ensuite convertir ces documents en HTML (langage de contenu structuré, standard du web) et les placer les uns à la suite des autres dans la page.
Lors de cette opération, certains éléments spécifiques à la revue sont générés automatiquement comme la table des matières ou le cartouche contenant le titre et le nom des auteurs au début de chaque article. Ces étapes ont lieu «&#8239;côté serveur&#8239;», c’est à dire qu’elles sont réalisées par un logiciel qui va ensuite «&#8239;servir&#8239;» le document comme n’importe quelle page de site web.

Ont lieu ensuite des étapes «&#8239;côté client&#8239;», c’est-à-dire réalisées par le navigateur web.
Un script nommé Hyphenopoly va repérer dans l’intégralité du texte de la revue, les césures possibles par les règles spécifiques à la langue (ici, française). Ainsi le texte pourra être césuré correctement si un élément de mise en page le demande.
Voici un exemple de fonctionnalité spécifique à l’édition qui est mal pris en charge par les navigateurs web et qui doit donc être automatisé par un script si l’on ne veut pas devoir le faire à la main (comme s’il s’agissait d’une composition avec des caractères de plomb).

Ensuite, une série de modifications est réalisée sur la page pour répondre à des spécificités d’accessibilité des pages web pour permettre à tous les lecteurs qui n’utilisent pas leurs yeux d’accéder au contenu (autant les personnes atteintes de déficience visuelle que les *bots*).
C’est ici, et seulement ici, que la séparation «&#8239;écran&#8239;» et «&#8239;édition&#8239;» a lieu. L’objectif est de garder le plus longtemps possible une source commune aux deux sorties pour minimiser et maîtriser les différences formelles entre les deux.
Paged.js découpe alors le contenu en «&#8239;pages&#8239;», cette étape est donc l’occasion de mettre en place d’autres spécificités du livre comme les notes en bas de page. Ces manipulations sont des scripts écrit spécifiquement pour BLOB qui s’appliquent après la présentation de chaque page.

L’un des rôle de Paged.js est aussi d’atténuer les variations d’affichage entre les navigateurs web. Cela fait partie de la pratique du web design et la liberté de paramétrage des internautes doit être respectée, anticipée et accompagnée. Dans le cas de l’impression, il faut une unique source, qui soit le plus stable possible tout au long du développement. Elle consiste, la plupart du temps, en une impression dans un fichier PDF, format propriétaire mais standard dans l’édition et l’imprimerie.

Pourtant des différences persistent et sont parfois difficilement identifiables. Par exemple, le moteur de rendu Webkit (Chrome) prend généralement mieux en charge des fonctionnalités propres à l’impression que d’autres navigateurs. Le moteur Gecko (Firefox) est souvent le premier à intégrer les fonctionnalités standards CSS comme le paramétrage fin de la typographie (les césures et le réglage des approches). Ce numéro de BLOB est donc aussi un assemblage de différents rendus selon les particularités de la mise en page des articles.

Nous avons fait le choix de travailler au sein d’un dépôt Git, logiciel de versionnage traditionnellement utilisé pour des projets de développement de logiciels. Ainsi l’historique de l’écriture et des corrections des contenus côtoie ceux de la mise en page et du développement des outils relatifs à l’édition et la diffusion en ligne. Voici un aperçu de quelques modifications publiées sous forme de *comit*, c’est-à-dire d’ajouts ou de suppressions de données plus ou moins conséquentes et commentées de manière succinte&#8239;.

<table>
<tr><th>id</th><th>utilisateur</th><th>date</th><th>commentaire</th><th>ajouts et suppressions</th></tr>
<tr><th>c4dc890</th><th>jeremie nuel</th><th>12 Dec 2019</th><th>correction de la table des matières</th><th>34+ & 48- sur 21 fichiers</th></tr>
<tr><th>c219839</th><th>Corentin Brulé</th><th>12 Dec 2019</th><th>maj gestion des trop longues notes</th><th>52+ & 24- sur 4 fichiers</th></tr>
<tr><th>c219839</th><th>dol-dol</th><th>27 Fev 2020</th><th>encore-ctions DOL</th><th>3+ & 2- sur 1 fichier</th></tr>
</table>
