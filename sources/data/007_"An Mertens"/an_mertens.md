---
title: Conversation avec An Mertens
authors: An Mertens avec Maëva Borg, Anna Diop-Dubois et Jérémie Nuel
---

<span class="decoration"> </span>
<span class="decoration"> </span>

An Mertens est artiste, auteure et membre active de Constant, une association sans but lucratif gérée par des artistes, basée à Bruxelles depuis 1997 et active dans les domaines de l’art, des médias et de la technologie. Constant développe, questionne et expérimente, avec comme point de départ les féminismes, le copyleft, les logiciels Free/Libre + Open Source. Par conséquent, les pratiques artistiques numériques développées par Constant sont souvent collectives. 

Dans ses recherches, An porte un regard attentif à comment les algorithmes et le code, avec leur personnalités et de ses formes diverses et ambiguës, peuvent transformer les créations (littéraires) dites physiques, en publications numériques, installations, marches et performances. Son amour des pratiques Oulipiennes l'a amenée en 2012 à créer Algolit avec Catherine Lenoble, comme un projet au sein de Constant. Algolit est un groupe de travail autour du code et la littérature libres.
Son roman expérimental "Tot Later" est paru en 2013 dans les éditions De Bezige Bij, Antwerpen. Depuis lors, avec le groupe de recherche artistique Algolit, elle a créé des situations et des oeuvres qui montrent la perspective narrative des algorithmes, et notamment les algorithmes d’apprentissage automatique. La dernière exposition s’appelait ‘Data Workers’ et a eu lieu au Mundaneum à Mons en mars/avril 2019.
https://www.algolit.net
https://www.paramoulipist.be/ 

Q : Est-ce que ces expérimentations algolittéraires sont pensées pour révéler des questions politiques, sociétales ? 
Oui, clairement. Algolit suit la traditon oulipienne, dans ses méthodes et sa philosophie. Georges Perec, par exemple, dans Espèces d'espaces. Journal d'un usager de l'espace (Galilée, Paris, 1974) mentionne : ‘J'écris: j'habite ma feuille de papier, je l'investis, je la parcours.’  Le travail de Perec n'exprime pas seulement ses pensées, mais aussi sa façon de penser. Dans l'espace-temps de la page, il est conscient de la topologie dans laquelle cette page vit, les conditions institutionnelles et les instructions qui façonnent la page pour le lecteur. Pensez aux conventions de l'histoire littéraire, de l'édition, aux habitudes de lecture des gens ... L'écriture se fait dans un domaine et les textes sont des territoires spécifiques. 
La notion d’algolittérature s’inscrit dans la tradition littéraire avant-gardiste européenne et dans la culture numérique F/LOSS. La notion d’algolittérature est un moyen de situer la machine comme un narrateur dans le monde. Ce qui intéresse les membres d’Algolit, c’est la perspective de la machine, les procédés de fabrication et les idéologies qui se cachent derrière l'interface. Leur but est de produire des récits et des textes du point de vue de l'algorithme, du logiciel. Dans cette optique-là, il est possible de rendre le processus entier visible ou seulement une petite partie (p.ex. manières de transformer du texte en chiffres: one-hot-vector, matrices de co-occurrences, tf-idf; techniques pour chercher des motifs dans les ‘vector spaces’: support vector machine, réseau de neurones, Naïve Bayes; l’accessibilité et la construction des sets de données….). Tout est aussi intéressant.
Tandis que les avant-gardistes européens du 20e siècle poursuivaient l'objectif de rompre avec les conventions, cette approche algolittéraire cherche à rendre les conventions visibles. Ce sont les conventions qui restent souvent invisibles et reignent partout. Cette fois-ci, il ne s’agit pas des conventions de la page blanche et du marché littéraire, comme chez Perec, mais de celles des bits et des octets, des serveurs et des services et des modèles algorithmiques d'entreprises, pour lesquels le monde entier travaille en cliquant des liens et en distribuant des coeurs et des ‘likes’. Les algorithmes qui donnent forme à nos opérations en ligne, opèrent derrière des interfaces. On ne les rencontre que rarement, souvent quand ils disfonctionnent. Les œuvres algolittéraires essaient de les montrer de façon ‘dénudée’, de sorte qu’on comprend leur collectivité, leurs fonctionnements, par qui ils ont été créés, avec quelles idéologies. En publiant les sources des œuvres – dans un dépôt gitlab – les lecteurs peuvent aussi les étudier et les utiliser eux-mêmes.
Le choix de distinguer l'art conceptuel des formes – et formules - traditionnelles des conventions d'art, va de pair avec le désir de distinguer l'art conceptuel de toute forme de marketing et de divertissement. Ce qui motive fondamentalement les artistes conceptuels, c'est l'expression d'une pensée à travers un processus esthétique. Il s'agit d'un engagement esthétique et éthique.

    Are these Algolittéraires experiments reveal some political or societal questions ? 


    Q : D'où proviennent les textes qui vous servent de base de données pour ces expérimentations ? 
Avec Algolit on choisit d’utiliser exclusivement du code et des textes qui sont publiés sous licence libre ou qui sont arrivés en domaine public. En termes de données à utiliser, le projet Gutenberg est comme la cave d’Ali Baba. On y retrouve une masse de livres en format brut (.txt) qui sont directement prêts à utiliser. Wikipedia est aussi une mine d’or pour nous – tout comme pour les développeurs commerciaux et académiques. Afin de pouvoir entraîner des modèles de réseaux de neurones, ils existe aussi des paquets pré-entraînés en ligne, prêts à télécharger, comme le Glove Reader. Bien qu’on les utilise de temps en temps, on ne les utilise jamais tels quels, mais plutôt avec le but de montrer comment ils ont été composés, quels types de données ils comprennent et en essayant de comprendre comment ils donnent formes au monde.
On ose aussi utiliser des modèles avec beaucoup trop peu de données de ce que le standard exige. L’Algolittérateur, par exemple, est un modèle de réseaux de neurones qui est entraîné avec une vingtaine de romans de Jules Verne, tandis qu’il faudrait plutôt 4500 pourqu’un modèle fonctionne ‘bien’. Ce choix est comme une méthodologie qui permet alors de montrer les procédures qui opèrent à la base du modèle, plutôt que de focaliser sur ses performances optimalisées.
Pour l’exposition au Mundaneum, on a travaillé avec les textes digitalisés de leur archive (3 % de la totalité). Ceci permet de rendre visible le processus de nettoyage qui est nécessaire afin de pouvoir travailler avec les données. ‘Data is dirty by nature.’ Les livress ont scannées et les scans sont lu par un logiciel de OCR (Optical Character Recognition). Comme il s’agit de documents anciens, les typos ne sont souvent pas reconnues, ni les plis dans les pages ou le jaunissement du papier. 
En concluant une collaboration avec le Digital Proofreader’s Project, on a pu éviter de devoir faire tout le travail manuel de correction seul.e.s. Un groupe de bénévoles en ligne a assuré le nettoyage d’une série de publications qui ont été ensuite uploadées sur gutenberg.org. En partenariat avec une institution locale, comme le Mundaneum à Mons, et en utilisant leurs œuvres numérisées, il est possible de sensibiliser le public au fait que non seulement Internet, mais aussi les collections locales très spécialisées, sont des sources de matériel fantastiques pour les artistes. En travaillant avec des experts de la collection, on a appris à connaître le matériel avant de travailler avec celui-ci. Cet échange intense entre archiviste et créateur produit des créations algorithmiques d'une qualité différente. Etre conscient des données avec lesquelles on alimente le ‘training data’ d’un modèle, permet de comprendre mieux ce qu’il en fait …


Peux-tu nous parler de ta forêt algorithmique ? 
La forêt algorithmique est une métaphore que j’ai inventée afin de pouvoir mémoriser les différents modèles algorithmiques qui existent, avec le seul but de pouvoir réussir à l’examen ‘Computer Modeling for Language Understanding’, une module que j’ai suivie en 2016 au département de Linguistique Computationnelle à l’Université d’Anvers.
Travailler intensivement avec l’ordinateur m’a aussi amené vers des visites intensives à la forêt de Soignes, des balades comme réponse au besoin de détoxification. Au départ, je ne savais distinguer, ni nommer, aucun type d’arbre. Finalement, j’ai décidé de suivre un cours de guide nature, un peu avant de me plonger dans le machine learning. Assez vite, j’ai observé le parallèle entre les deux mondes. Les entreprises qui collectionnent nos données digitales, ne sont pas intéressées à nous comme individus, mais comme éléments d’un réseau, d’une espèce, d’un groupe de consommateurs. De la même façon, on ne regarde que rarement un arbre individuel quand on visite une forêt. Il n’attire notre attention que quand il s’agit d’un ‘outlier’, qui se distingue des autres, parce qu’il est énorme, malade, âgé, d’une espèce particulière…. L’arbre individuel ne nous intéresse pas.
Petit à petit j’ai commencé à développer cette métaphore. Elle fonctionne dans le contexte de l’évolution écologique d’une forêt. Quand il y a très peu de terre et d’aliments, ce sont les pionniers qui arrivent – comme le pin et le bouleau – qui préparent le terrain pour les espèces plus développées, comme le chène ou le hêtre qui demandent un sol bien alimenté pour fonctionner. Le développement des algorithmes suit un processus similaire.

    For these same experiments, where do the texts, used as database, come from ? 

    Can you talk about your algorithmic forest ?


    Q: Nous savons que les outils informatiques de traitements du langage privilégient l'anglais au détriment des autres langues (Néerlandais, Français). En tant que polyglotte, comment appréhendes-tu cette problématique?
Avec beaucoup de frustrations…
Lors de la première exposition d’Algolit à la Maison du Livre à Bruxelles (en novembre 2017), on s’est rendu compte que les francophones réagissaient très fort à l’Algolittérateur qu’on avait entraîné avec les romans de Jules Verne pour l’occasion. Du coup, on a entraîné le même modèle avec une série d’oeuvres de Felix Timmermans, un auteur néeralndophone belge qui est entré en domaine public il y a quelques années et dont le style est exubéramment lyrique. Il invente beaucoup de nouveaux mots mélodieux. Gijs de Heij et moi – deux néerlandophones d’Algolit – étions surprises de l’émotion qu’on sentait, en voyant l’algorithme générer des phrases inexistantes surréelles d’un lyrisme semblable. C’est comme si une nouvelle dimension était ouverte. Je n’ai jamais eu cette sensation avec des textes anglophones. Ils sont juste très drôles.
Trouver des outils d’analyse de texte qui fonctionnent bien pour d’autres langues que l’anglais, est compliqué. Ca montre à quel point le développement est ‘inspiré’ par les flux d’argent. En tout cas, l’Algolittérateur nous a donnés beaucoup envie de focaliser sur d’autres langues et de commencer à trouver ou créer des solutions concrètes.

    Q : Jean Pierre Balpe parle lui de méta auteur, autrement dit le méta auteur est celui est responsable du modèle linguistique mais il n'est pas le producteur du texte alors que la machine l'est. Comment interpréter cette définition ?   Dans un cadre de co-création artiste et programmeur, artiste et réseau de neurones, qui est l'auteur ? 
(Je préfère ressembler ces deux éléments)
C’est une grande question à laquelle je n’ai pas encore de réponse claire. C’est une des questions que j’aimerais bien rechercher cette année, en lisant, en faisant des interviews et des expérimentations. Ainsi, fin avril j’ai interviewé Allison Parrish, auteur et chercheuse à New York. Je lui ai posé une question similaire. Sa réponse était assez claire : ‘il n’y a qu’une auteure et c’est moi. Je me rends compte que cela peut paraître contradictoire, puisqu’il y a beaucoup plus d’auteurs qui font partie de l’oeuvre, autant les auteurs de code comme les auteurs de données. Mais en réclamant le droit d’auteur, j’assume aussi la responsabilité pour la création de la machine et le texte qui est généré. Le jour où il y a un soucis, on sait à qui s’addresser.’
La grande différence entre sa pratique artistique et la notre, c’est la notion de collectivité. Au cours des rencontres mensuelles, les membres d’Algolit avons développé une méthodologie qui mène à la compréhension du code de modèles existants, en essayant des scripts, en jouant avec l'input et l'output, en disséquant le processus de modèles d'apprentissage automatique, en explorant des jeux de données, en inspectant les méthodes qui permettent de transformer les mots en numéros, en créant des perspectives différentes sur les données et, finalement, en adaptant les scripts à nos besoins et en peaufinant nos outils. On est tous à la fois programmeur, auteur, lecteur, de façon alternante. 
Ceci questionne par définition la notion d’auteur individuel. Aucune personne présente dans l’espace ne connaît toutes les réponses aux questions. Dans ce genre de processus, les initiés peuvent devenir débutants et les débutants peuvent devenir initiés. En réunissant des personnes de différents niveaux, disciplines et perspectives, Algolit, tout comme n’importe quel groupe de création artistique numérique, ouvre le champ de l'apprentissage et encourage la collaboration, autant dans le développement d'idées que dans les processus de création. Ceci complexifie encore cette question.

   
    Jean-Pierre Balpe talks about "meta-author", that is to say that the meta-author is responsible of the linguistical model, but it isn't the producer of this same texte. But, the machine is. How do you place yourself in this definition ? 

    In the context/frame of "co-creation" between an Artist and a Programmer, who is the Author ? 

    And between an Artist and an A.I ? 

    Do you consider that this co-creation is actually a collaboration as mutual equality, or is there an executant and a guide ? 


    Q : La littérature algorithmique semble mettre en avant d'avantage les modalités d'écriture (le programme, le code) que le texte, quelle hiérarchie fais-tu entre le processus de création et le résultat ? Lequel archives-tu ? Lequel gardes-tu ? 
Dans notre méthodologie, trois principes règnent :
- le déplacement des techniques dans un autre contexte, pour lequel elles n’ont pas été conçues
- ne pas essayer d’optimaliser les techniques, mais créer des interfaces, des visualisations, des commentaires de code, de telle façon qu’elles arrivent à s’exprimer d’une façon ou d’une autre
- choisir le niveau de compréhension, chaque modèle est composé comme un oignon. Il est possible par exemple d’éxecuter un modèle tel quel, de se focaliser sur l’art de l’approximation (la statistique, les formules d’algèbre…) ou de simplement réaliser des parties de modèles sans utiliser le code, les explorer et les performer physiquement ou métaphoriquement.
Dans le processus de création, le code influence le choix des textes et vice versa. C’est un travail qui connaît souvent plusieures phases, d’un moment de présentation à l’autre. Ce n’est pas toujours facile de terminer le processus de création, même s’il y a déjà eu plusieures ‘fins’.

    Quelle place donnes tu au texte lui-même, ou aux textes, car ils peuvent être générés à l'infini ? (reproductibilité)
    À quel moment faut-il figer ces générations dans une publication ?
Le texte est au centre de ma pratique artistique et de la recherche avec le groupe d’Algolit. Les résultats des scripts (petits programmes informatiques) sont en effet infinis par nature, en nombre et en charactère. Et ils peuvent facilement être sauvegardés dans des documents au format texte. Avec plus d'effort, il est possible de mettre en page les textes et les enregistrer comme PDF, y compris une couverture créée automatiquement, le tout prêt à être imprimé. Les scripts peuvent également être intégrés dans des pages web, de sorte que lorsqu’une page est actualisée - ou lorsqu’un bouton sur la page est appuyé - une nouvelle copie unique est générée en une fraction de seconde. 
La possibilité d'entrelacer différents registres de matériel source, et suite au caractère aléatoire qui est typique de l'écriture algolittéraire, il est impossible de récréer le même livre. Ce phénomène du roman «génératif» est une des réponses ‘net-native’ à la matérialité numérique, au plaisir d'imprimer sur du papier particulier, par exemple, une toute nouvelle série de livres uniques pour une exposition. Le potentiel existe, la réalisation peut être une ligne de recherche et d’expérimentation à suivre. Même si l’idée d’algolittérature fait pense à une production de livres au départ, l'édition ne se fait pas nécessairement sur papier.
Les résultats des processus algolittéraires ne sont donc pas toujours des livres. L'écriture, l'édition et la conception se font en parallèle. En fonction de l'auteur, le résultat peut être un site Web, une installation interactive, une performance, une peinture ... La multidisciplinarité qui caractérise les artistes avec un intérêt pour le texte et la langue, se reflète dans les œuvres. Algolit, par exemple, est composé d’un programmeur, de graphistes, d’artistes visuels, d’un artiste sonore, d’une écrivaine et d’un statisticien. La série de modèles utilisés dans les différents domaines - des services aux entreprises, aux sciences médicales et à la création artistique – est limitée. Une oeuvre algolittéraire peut donc être à la fois image et texte, à la fois performance et écoute et écriture, à la fois lecture et dactylographie, à la fois poétique et narratif, .... 

    L'e-litterature seems to highlights more the producing methods (the program, the code) than the production itself. 

    What kind of hierarchy do you make between the creation and the result ? Which one do you archive, and which one do you keep ? 

    What place do you give to the text itself, or the texts, they can indeed be generated endlessly ? (in terms of reproductibility)

    These generations, at which moment do they have to be kept frozen in a printed edition ?


    Q : Est-ce que l'on peut parler d'un programme informatique comme d'un sujet ?
Lors des préparations de l’exposition on a beaucoup discuté de cette question, et surtout de comment éviter à les montrer comme des humanoides. Il est clair qu’un script en soi peut avoir une certaine forme d’autonomie, et les modèles de prédiction sont aussi fascinants dans ce sens. 
Mais on surestime souvent l’agencement d’un programme informatique. On oublie les heures de travail manuel et le dialogue permanent avec l’être humain qui sont nécessaires pour le faire fonctionner. Le paysage est aussi très fragmenté et soujacent aux changements rapides. Il n’existe aucun programme qui sait fonctionner en dehors du contexte pour lequel il a été créé.
Au sein d’Algolit, on est tous d’accord qu’il est nécessaire de trouver d’autres formes de représentation pour indiquer leur agencement. En premier lieu parce qu’ils fonctionnement d’une façon très différente qui peut nous enrichir en tant qu’être humain. 
Souvent, on fait l’exercice d’exécuter un programme informatique, sans utiliser de code ni de machine. C’est là où on se rend compte de nos forces respectives. La répétition, par exemple, telle qu’un machine la pratique, nous rend totalement nerveux. En travaillant de cette façon, on pourrait dire, avec un clin d’oeil, que nous, les membres d’Algolit, sommes les ambassadeurs de ce nouveau peuple, un peu inquiétant parce que trop secret mais qui occupe une place de plus en plus importante sur notre planète. Les robots ont été conçus comme des ouvriers au service de l’être humain, mais deviennent progressivement si complexes et si puissants qu'ils commencent à mener leur vie de façon prèsqu’autonome, même s’ils restent invisibles. Créer de l’algolittérature est une tentative de comprendre leur language et de leur donner une voix, de permettre d’entrer en dialogue avec eux, dans l’idée d’alphabétiser de plus en plus de gens en leur évitant la nécessité d’étudier intensivement pendant quelques années. Il s'agit de création littéraire conceptuelle avec un objectif contemporain spécifique.

    Can we assume that a computer program can be a subject in itself ?

    Can a computer program be a subject in itself ?


    Q : En tant qu'Algolit, l'intelligence artificielle vous sert à créer de nouveaux textes. 
    Si ce n'a pas été déjà le cas, est-ce que penser les identités des intelligences artificielles, c'est à dire leur histoire passée, présente et future peut rentrer dans votre cadre de travail et expérimentations ?
On essaie de l’intégrer, au moins les histoires passées et présentes. Nos installations et œuvres sont en général accompagnées de récits qui donnent du contexte. C’est une des méthodologies qu’on a mis en place pour élaborer l’aspect politique et sociétal de notre travail. Pour l’exposition ‘Data Workers’ on a créé un podcast que les gens pouvaient télécharger sur leur téléphone pour les écouter pendant la visite de l’exposition. Tous les récits sont aussi partagés en ligne : www.algolit.net

    As Algolit, does the A.I have been used to create new texts/manifestos ? 

    Can it be used to think about telling stories about their past/present/future stories ? 

    Q : On parle beaucoup en ce moment des biais sexiste, xénophobe, homophobe dans les dispositifs de machine learning. La question de l'entraînement des algorithmes avec des données biaisées revient souvent. Comment évaluer et corriger ce problème ?
Les scientifiques les plus réputés de partout au monde se penchent sur la question de comment évaluer et corriger ce problème. Ce n’est pas à moi d’essayer d’y répondre. En travaillant avec les modèles et le texte, on peut juste constater que nos langues sont induites de clichés et de stéréotypes. Et que si on utilise des textes pour entraîner un modèle, le modèle retrouvera les motifs de clichés et les réinforcera. Dans les textes du Mundaneum, on a vu émerger très vite un langage bureacratique dur, par exemple. 
En plus, tout le monde n’est pas représenté dans les données. Souvent la création d’un modèle est soumise à un timing et un budget précis et alors le choix sera pour les données les plus accessibles au lieu de la création d’un set de données équilibré. La question que vous posez, à mon avis, c’est la grande question éthique urgente du 21e siècle.

    Currently, we have been talking about the sexist / xenophobic / homophobic aspects in the Machine Learning devices. The question of training the algorithms with distorted datas comes back often.

    For you, How can we find a way to estimate/ grade and correct this problem ?


    Q : Peux tu nous parler de Naive Bayes ? Cette petite graine de ta forêt algorithmique que tu as nourri avec des textes écrits autant par des hommes que des femmes (d'où le titre de la performance "naive bayes raconte" présentée à la gaité lyrique) ? 
‘Naive Bayes raconte’ est un conte algorithmique. Il propose un voyage par la forêt algorithmique dans lequel je remixe du code, de la fiction, des données littéraires, de nature et des faits historiques. Naive Bayes est un classificateur, qui permet de ‘classer’ des données en tant que ‘écrit par une femme ou un homme’, ‘positif ou négatif’, ‘spam ou non-spam’. Il est très fort utilisé dans nos applications. Mais c’est aussi le théorème qui est à la base de la statistique moderne. Il a une histoire fascinante et a été utilisé, par exemple, par Alan Turing pour craquer le code de l’Enigma Machine pendant la deuxième guerre mondiale. ‘The Theory That Would Not DIe’ de Sharon Bertsch McGrayne est un livre fascinant qui ne parle que de Naive Bayes. 

    (Context : Naive Bayes, peformance as an Introduction of the Conference "Does the Artificial Intelligence is sexist ?" at the Computer Grrrls exhibition)  Can you talk about Naive Bayes ? This little seed of your algorithmic forest that you've been feeding with texts, written as much as Men as Women ?  


    Q : Quels liens fais-tu entre intelligence artificielle, esprits, et mythes ? 
    Vois-tu une dimension mystique dans le fonctionnement des algorithmes ? 
En décembre 2018 j’ai coordonnée une session de travail de Constant qui s’appelait Alchorisma (http://constantvzw.org/w/?u=http://media.constantvzw.org/wefts/109/). Pendant une semaine, on a été en résidence avec une vingtaine de personnes pour rallier l’intelligence artificielle à une vision cosmogénique du monde, dans laquelle les arbres, les pierres et les esprits prennent une place aussi importante – ou plus importante – que l’être humain. Comment créer des modèles qui intègrent cette idéologie ? Quelles formes prennent-ils ?
Si les robots acquièrent un certain agencement, je préfère leur donner une place parmi tous les autres formes d’agencement dites non-humaines. Dans les visions du monde qui prennent en considération les dimensions invisibles, les arbres, les esprits, les pierres sont consultés depuis toujours afin d’avoir de nouvelles perspectives sur des situations quotidiennes. Les machines de recherche et d’autres modèles de prédiction fonctionnent d’une façon similaire. Un broker qui veut savoir quelles actions acheter ou vendre à quel moment, se fait assister par un modèle algorithmique qui analyse les news en ligne. Dans l’exposition ‘Data Workers’ on a appelé la zone des modèles entraînés, ‘Les Oracles’. 

    Which link do you make between A.I, spirits and myths ?

    Do you see a mystical form in this algorithmic world ? 


    Q : Constant organise principalement des sessions de travail transdisciplinaires. Est-ce que en tant que membre de Constant, s'impliquer dans un un travail de médiation et de partage auprès du grand public dans la tradition du logiciel libre fait parti des objectifs du projet ? 
Non. Notre public est plutôt un public de professionnels, artistes, académiques, amateurs. Les idées développées au sein de sessions de travail sont souvent amenées vers un grand public par après, mais en général, pas par nous, plutôt par les participants des sessions de travail ou par d’autres organisations. Nous préférons nous focaliser sur la création d’espaces de partage et d’expérimentations, puisqu’on sent qu’il existe un besoin chez les ‘makers’ de se ressourcer, de se retrouver, d’étudier ensemble, sans aucune obligation de produire ou performer.

    Comment introduire les concepts de littérature algorithmique, d'usage des logiciels libres auprès d'un public non-averti ? Est-ce un défi pour Constant d'ouvrir ces concepts à un public plus large ?  
La littérature algorithmique est née comme un projet de Constant en 2012, mais entretemps le groupe de recherche Algolit est devenu indépendant. Au sein d’Algolit, il existe cette envie d’ouvrir les œuvres vers un grand public. C’est un travail de longue haleine si on veut conserver ce cocktail précis d’ingrédients esthétiques et éthiques. Le plus grand danger c’est de devenir une machine de promotion d’outils. Donc on y va avec des petits pas joyeux. Par contre, on organise aussi des ateliers auprès des étudiants d’arts, ce qui permet une ouverture considérable.
 
    D'un point de vu plus personnel, comment vois-tu la question de la sensibilisation aux outils informatiques? 
Ca fait partie intégrale de ma pratique artistique, mais ça n’a jamais été la priorité de sensibiliser. Je préfère que les gens prennent goût aux outils à travers de l’expérience de l’oeuvre. C’est ainsi que moi-même, j’ai décidé un jour à m’y intéresser aussi, parce que j’admirais le travail unique, radical et politique d’autres artistes FLOSS et je me rendais bien compte que l’esthétique était étroitement liée aux outils. Les outils libres permettent simplement une plus grande liberté aux créateurs.

    Constant organises interdisciplinary work sessions. As a member of Constant, do you think that organising workshops for a younger generation can be a part of your way to work ? Or maybe, using the place of Constant as a temporary place of mutual assistance concerning computers. 

    How can we introduce the concepts of i-Literature, of open source besides non-experienced persons ? 

    Is that a challenge for Constant to open these concepts to a wider public ? 

    In your point of view, how can you come up to the awareness of the Digital Technologies ? 


    Q: Peux-tu nous parler de tes projets à venir ? 
L’année qui suit est un peu particulière. Algolit continuera comme groupe indépendant. En plus, j’ai obtenu une bourse de recherche pour approfondir la réflexion et la pratique algolittéraires. Parmi les questions que je veux traiter, est la question de la forme et l’accessibilité au public, le droit d’auteur, mais aussi la relation de l’algorithme à la nature, par exemple. Avant Descartes, tous les mathématiciens avaient aussi une relation spirituelle avec la nature. On y retrouve des motifs, des formes géométriques, des modèles qui ont inspiré des générations de mathématiciens, statisticiens et autres. Comment pourrait-on rétablir ce lien ? Et comment en faire de la littérature !
