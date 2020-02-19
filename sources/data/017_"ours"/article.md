---
title: B.L.O.B, présentation de la chaîne graphique
authors: Corentin Brulé
runningTitle: blob
---

##### «&#8239;Ours&#8239;»

BLOB est un dispostitif éditorial (aka «&#8239;revue&#8239;») des laboratoires Random(lab) de l’ESAD Saint-Étienne et NRV de l’ENSBA Lyon.
Il est donc le support d’expérimentations de pédagogie et de recherche, à la fois dans son contenu, dans sa mise en page, mais aussi dans le développement d’outils nécessaires à sa fabrication.
Ainsi, BLOB a été pensé comme une chaîne éditoriale entre les contributions des auteurs et leurs diffusions, dont certains maillons nécessiteraient d’être fabriquer sur-mesure.

Le choix d’un mode d’édition dit «&#8239;web to print&#8239;» (du web vers l’impression) permet de différencier structurellement le contenu (sémantique) de la forme (présentation).
Cette séparation qui n’existe pas dans les outils traditionels de mise en page met en avant la modification des contenus en dehors de la maquette ; problématique récurente de ce type de publication «&#8239;dans le flux&#8239;», dont les temporalitées se fabriquent autours des contenus.

Sortir des méthodes traditionelles d’édition c’est aussi se permettre d’utiliser des logiciels non-propriétaires sans chercher forcément à copier les critères de l’industrie, qui sont en réalité imposés par les outils (monopole de certains éditeurs de logiciel). De nouvelles contraintes formelles se sont ainsi imposées et il restait à décier de soit les assumer et jouer avec, soit complexifier l’outil pour recréer des fonctionnalitées aux quelles nous sommes habitués. Ce numéro 0 reste avant tout un teste des limites techniques et des opportunitées formelles de cette technologie.

Paged.js est une bibliothèque javascript qui permet de manipuler des documents Web à destination de l’impression. En d’autres termes elle fabrique un environement de travail d’édition au sein d’un navigateur web.
La découpe par page, l’enchainement des paragraphes, la pagination ou la gestion de titre courant sont d’autant d’aspects propres à l’objet technique «livre» et qui ne sont pas ou mal pris en charge par les technologie web standards.
Les modules d’impression des navigateurs par exemple, ne sont pas encore conçu pour faire correctement et précisément ces manipulations.
Pourtant, la puissance de flexibilité et de configurabilité du couple «html/css» pour la mise en page n’est plus à prouver et la présence d’un langage de programation (javascript) au sein du processus de rendu offre (enfin) des possiblités paramétiques (et pas seulement comme une extension permettant d’automatiser des manipulations sur une maquette rigide).
Même si elle ne fait pas partie des priorités pour les developpeurs de navigateurs (parcequ’une pratique encore marginale) on peut tout de même remarquer un effort de support de plus en plus de fonctionalités CSS pour l’impression.
On peut donc voir Paged.js comme une extension des capacités de la manipulation et de rendu de document des navigateurs web, ou comme une émulation de l’objet technique «livre».

Paged.js n’est qu’un des nombreux scripts qui manipulent le contenu (sémantique) de la revue avant sa diffusion.
Par exemple les contributions des auteurs se font en Markdown, langage de balisage léger, permettant de stucturer rapidement et facilement le texte brut de l’article. Il faut donc convertir ces documents en HTML (langage de contenu structuré, standard du web).
Les articles sont convertis et placés les un à la suite des autres dans la page web. Déjà des éléments spécifique à la revue sont générer comme la table des matières ou le cartouche contenant le titre et le nom des auteurs au début de chaque article.
Ces étapes ont lieu «côté serveur», c’est à dire qu’elles sont réalisées par un logiciel qui va ensuite «servir» la page web, comme n’importe quel site.

Ont lieux ensuites des étapes dites «côté client», c’est à dire réalisées par le navigateur web.
Un script nommé Hyphenopoly va repérer dans l’intégralité du texte de la revue, les césures possibles par les règles spécifiques à la langue (ici, française). Ainsi le texte pourra être césuré correctement si un élément de mise en page le demande.
Voici un exemple de fonctionalité spécifique à l’édition qui est mal prise en charge par les navigateurs web, qui doit donc être automatisé par un scipt.
Ensuite, une série de modification sont réalisées sur le contenu pour répondre à des spécificités d’acessiblité des pages web. Invisibles pour les «lecteurs visuels» et donc inutiles pour l’impression, elle permettent de faciliter la vie des autre lecteurs  (logiciel de lecture d’écran pour les mal voyant par exemple)

C’est ici, et seulement ici, que la séparation «écran» et «édition» a lieu. L’objectif est de garder le plus longtemps possible une source commune aux deux sorties pour minimiser et maitriser les différences formelles entre les deux.
Paged.js découpe alors le contenu en «pages», cette étape est donc l’occasion de mettre en place d’autres spécificités du livre comme les notes en bas de page.
Ces manipulations sont des scritps que nous avons écrit et qui s’appliquent après la mise en page de chaque page.

 Cette séparation de rendus sur les différents navigateurs des utilisateurs fait partie de la pratique du web design et la liberté de parametrage des internaute doit être respectée, anticipée et accompagnée. Dans le cas de l’impression, il faut une unique source, qui soit le plus stable possible. L’un des rôle de Paged.js est aussi d’aténuer les différences de rendus entre les navigateurs web. Pourtant des différences persistent et sont parfois difficilement identifiables. Par exemple le moteur de rendu webkit prend généralement mieux en charge des fonctionalitées propres à l’impression mais Firefox et son moteur Gecko est souvent le premier à intègrer les fonctionnalités standards CSS comme le parametrage fin de la typographie comme les césures et la justification (sourtout en français).

Nous avons fait le choix de travailler au sein d’un dépot git, logiciel de versionnage traditionellement utilsé pour des projets de developpements de logiciels. Ainsi l’historique de l’écriture et des correction des contenus cotoie celui du developpement de l’outil de mise en page et de diffusion en ligne.
Voici un [entrevus] des modifictions qui ont eu lieu pour fabriquer ce numéro de la revue, découpé en «comit», c’est-à-dire en modifications commentées, plus ou moins précises.
