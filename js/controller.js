(() => {

    function Controller(){
        
        const __this = this;
        var __inputs    = {};
        var __keydown   = [];
        var __resources = {
            gender: [
                {id: 1, name: 'Homme'},
                {id: 2, name: 'Femme'}
            ],
            astrals: [
                {id:  1, name: "Wymund l'Anachorète"    },
                {id:  2, name: "La Grande Croix"        },
                {id:  3, name: "Le Trait du Peintre"    },
                {id:  4, name: "Gnuthus le Buffle"      },
                {id:  5, name: "Dragomas le Dragon"     },
                {id:  6, name: "Le Crépuscule"          },
                {id:  7, name: "Le Fourreau de Grungni" },
                {id:  8, name: "Mammit le Sage"         },
                {id:  9, name: "Mummit le Fou"          },
                {id: 10, name: "Les Deux Bœufs"         },
                {id: 11, name: "Le Danseur"             },
                {id: 12, name: "Le Tambour"             },
                {id: 13, name: "Le Flûtiste"            },
                {id: 14, name: "Vobist le Pâle"         },
                {id: 15, name: "La Charrette Brisée"    },
                {id: 16, name: "La Chèvre Sauvage"      },
                {id: 17, name: "Le Chaudron de Ryha"    },
                {id: 18, name: "Cackelfax le Coq"       },
                {id: 19, name: "Le Grimoire"            },
                {id: 20, name: "L'Étoile du Sorcier"    }
            ],
            races: [
                { id: 1, nom: "Humain", move: 4, enc: 10 },
                { id: 2, nom: "Nain", move: 3, enc: 20},
                { id: 3, nom: "Halfling", move: 4, enc: 10},
                { id: 4, nom: "Elfe", move: 5, enc: 10}
            ],
            jobs: [
                { id:   1, nom: "Abbé" , stats: [10,0,10,10,10,30,25,20,0,6,0,0] },
                { id:   2, nom: "Abbé lanceur de sorts" , stats: [10,0,10,10,10,30,25,20,0,6,0,2] },
                { id:   3, nom: "Acolyte de Khorne" , stats: [20,0,10,15,5,0,15,0,1,4,0,0] },
                { id:   4, nom: "Acolyte de Nurgle" , stats: [10,0,0,20,5,0,15,15,0,3,0,1] },
                { id:   5, nom: "Acolyte de Slaanesh" , stats: [5,5,0,0,10,0,20,25,0,3,0,1] },
                { id:   6, nom: "Acolyte de Tzeentch" , stats: [5,5,0,0,5,20,10,20,0,3,0,1] },
                { id:   7, nom: "Agent du Suaire" , stats: [15,10,10,10,20,20,30,10,1,4,0,0] },
                { id:   8, nom: "Agitateur" , stats: [5,5,0,0,5,10,0,10,0,2,0,0] },
                { id:   9, nom: "Allumeur de réverbères" , stats: [5,0,5,0,10,5,5,5,0,2,0,0] },
                { id:  10, nom: "Ambassadeur" , stats: [10,10,5,10,10,30,30,40,0,6,0,0] },
                { id:  11, nom: "Amiral" , stats: [25,20,15,15,15,30,30,35,1,6,0,0] },
                { id:  12, nom: "Anachorète" , stats: [0,5,5,10,10,0,10,0,0,2,0,0] },
                { id:  13, nom: "Ancien de Village" , stats: [0,0,0,0,0,20,20,30,0,4,0,0] },
                { id:  14, nom: "Apothicaire" , stats: [0,0,0,5,5,10,10,5,0,2,0,0] },
                { id:  15, nom: "Apprenti chaman" , stats: [5,5,0,5,5,10,10,10,0,2,0,1] },
                { id:  16, nom: "Apprenti maître des runes" , stats: [5,0,5,0,0,10,15,0,0,2,0,1] },
                { id:  17, nom: "Apprenti margicien" , stats: [0,0,5,0,0,10,5,10,0,2,0,1] },
                { id:  18, nom: "Apprenti sorcier" , stats: [0,0,0,0,5,10,15,5,0,2,0,1] },
                { id:  19, nom: "Apprentie sorcière" , stats: [0,0,0,10,5,10,10,0,0,2,0,1] },
                { id:  20, nom: "Archer monté" , stats: [15,25,15,15,15,0,15,5,1,4,0,0] },
                { id:  21, nom: "Argousin" , stats: [20,20,10,10,10,20,10,5,1,4,0,0] },
                { id:  22, nom: "Aristocrate" , stats: [25,15,10,10,10,20,20,30,1,6,0,0] },
                { id:  23, nom: "Arrimeur" , stats: [0,5,10,10,5,0,5,0,0,2,0,0] },
                { id:  24, nom: "Artisan" , stats: [0,0,5,5,10,5,10,0,0,2,0,0] },
                { id:  25, nom: "Aspirant champion" , stats: [25,10,20,20,20,10,20,10,2,8,0,0] },
                { id:  26, nom: "Assassin" , stats: [25,25,10,10,30,20,10,20,2,4,0,0] },
                { id:  27, nom: "Astrologue" , stats: [5,5,0,5,10,25,20,20,0,4,0,0] },
                { id:  28, nom: "Ataman" , stats: [10,10,5,15,5,30,20,25,0,4,0,0] },
                { id:  29, nom: "Aubergiste" , stats: [10,5,5,10,20,10,10,20,0,4,0,0] },
                { id:  30, nom: "Baleinier" , stats: [5,5,10,10,10,0,0,0,0,2,0,0] },
                { id:  31, nom: "Bandit de grand chemin" , stats: [20,20,10,10,30,20,15,25,1,4,0,0] },
                { id:  32, nom: "Baron du crime" , stats: [20,20,15,15,20,25,20,30,1,6,0,0] },
                { id:  33, nom: "Bateleur" , stats: [5,10,0,0,10,0,5,10,0,2,0,0] },
                { id:  34, nom: "Batelier" , stats: [10,5,5,5,10,5,0,0,0,2,0,0] },
                { id:  35, nom: "Bedeau" , stats: [10,10,5,5,0,20,15,10,0,4,0,0] },
                { id:  36, nom: "Berger gasconnais" , stats: [5,10,0,0,10,5,0,0,1,2,0,0] },
                { id:  37, nom: "Berserk norse" , stats: [15,0,10,10,0,0,10,0,0,2,0,0] },
                { id:  38, nom: "Bestigor" , stats: [20,0,15,15,20,5,20,10,1,6,0,0] },
                { id:  39, nom: "Bourgeois" , stats: [5,0,0,0,5,10,5,5,0,2,0,0] },
                { id:  40, nom: "Bourreau" , stats: [15,0,20,10,10,10,20,15,0,4,0,0] },
                { id:  41, nom: "Brute" , stats: [20,10,15,15,15,0,15,10,1,6,0,0] },
                { id:  42, nom: "Bûcheron" , stats: [10,0,10,0,5,0,10,0,0,3,0,0] },
                { id:  43, nom: "Cadet" , stats: [5,5,0,0,5,10,5,10,0,2,0,0] },
                { id:  44, nom: "Canonnier" , stats: [15,25,10,10,15,30,15,0,0,5,0,0] },
                { id:  45, nom: "Capitaine" , stats: [30,20,20,20,20,15,15,25,2,7,0,0] },
                { id:  46, nom: "Capitaine de navire" , stats: [25,20,15,20,20,20,25,30,2,6,0,0] },
                { id:  47, nom: "Cartographe" , stats: [5,0,0,5,5,10,5,5,0,2,0,0] },
                { id:  48, nom: "Cataclyste" , stats: [15,15,5,15,20,35,40,20,0,5,0,4] },
                { id:  49, nom: "Catéchiste" , stats: [0,0,5,5,10,20,15,10,0,4,0,0] },
                { id:  50, nom: "Cavalcadour" , stats: [5,15,15,10,15,20,15,25,0,5,0,0] },
                { id:  51, nom: "Cavalier ailé" , stats: [25,15,15,15,15,0,15,15,1,4,0,0] },
                { id:  52, nom: "Cénobite" , stats: [5,0,5,10,0,5,10,5,0,2,0,0] },
                { id:  53, nom: "Chaman" , stats: [10,10,5,10,10,15,20,15,0,4,0,2] },
                { id:  54, nom: "Chaman bray" , stats: [5,0,5,10,10,10,15,10,1,6,0,2] },
                { id:  55, nom: "Champion" , stats: [40,40,25,25,30,0,20,0,2,8,0,0] },
                { id:  56, nom: "Champion de justice" , stats: [35,0,15,15,20,10,15,0,2,6,0,0] },
                { id:  57, nom: "Champion du Chaos" , stats: [30,15,25,30,25,15,30,15,2,9,0,0] },
                { id:  58, nom: "Champion du Chaos exalté" , stats: [40,20,30,40,30,20,40,20,3,10,0,0] },
                { id:  59, nom: "Champion hiérogrammate" , stats: [10,5,0,10,0,15,0,10,0,3,0,2] },
                { id:  60, nom: "Champion homme-bête" , stats: [30,10,25,25,30,10,20,15,2,8,0,0] },
                { id:  61, nom: "Chantre" , stats: [10,10,0,0,15,10,15,20,0,4,0,0] },
                { id:  62, nom: "Charbonnier" , stats: [5,0,5,5,5,5,5,5,0,2,0,0] },
                { id:  63, nom: "Charlatan" , stats: [10,10,5,10,15,15,15,25,0,4,0,0] },
                { id:  64, nom: "Chasseur" , stats: [0,15,0,5,10,5,0,0,0,3,0,0] },
                { id:  65, nom: "Chasseur cornu" , stats: [5,5,10,0,5,0,10,0,0,3,0,0] },
                { id:  66, nom: "Chasseur de primes" , stats: [5,10,5,0,10,0,5,0,0,2,0,0] },
                { id:  67, nom: "Chasseur de vampires" , stats: [20,20,10,20,15,15,20,0,1,4,0,0] },
                { id:  68, nom: "Chef" , stats: [30,20,20,20,35,15,20,20,2,8,0,0] },
                { id:  69, nom: "Chef de bande" , stats: [20,30,10,20,10,10,10,20,2,6,0,0] },
                { id:  70, nom: "Chef de guerre" , stats: [20,0,20,20,10,5,10,10,2,5,0,0] },
                { id:  71, nom: "Chevalier" , stats: [25,0,15,15,15,5,15,5,1,4,0,0] },
                { id:  72, nom: "Chevalier de la Quête" , stats: [35,0,20,20,25,10,25,25,2,6,0,0] },
                { id:  73, nom: "Chevalier du Cercle Intérieur" , stats: [35,10,20,20,20,15,25,15,2,8,0,0] },
                { id:  74, nom: "Chevalier du Champ Vedoyant" , stats: [20,20,15,15,10,5,10,5,1,4,0,0] },
                { id:  75, nom: "Chevalier du Chaos" , stats: [20,5,15,15,20,5,15,5,1,6,0,0] },
                { id:  76, nom: "Chevalier du Corbeau" , stats: [35,15,20,20,20,15,30,10,2,8,0,0] },
                { id:  77, nom: "Chevalier du Graal" , stats: [40,0,30,30,25,10,25,25,2,8,0,0] },
                { id:  78, nom: "Chevalier du Royaume" , stats: [25,0,15,15,15,0,10,15,1,4,0,0] },
                { id:  79, nom: "Chevalier du soleil" , stats: [25,0,10,20,20,10,15,10,1,5,0,0] },
                { id:  80, nom: "Chevalier errant" , stats: [15,0,5,5,5,0,5,5,1,2,0,0] },
                { id:  81, nom: "Chevalier Panthère" , stats: [30,0,15,15,15,10,10,15,1,6,0,0] },
                { id:  82, nom: "Chiffonnier" , stats: [5,0,5,10,5,0,5,5,0,2,0,0] },
                { id:  83, nom: "Chirurgien barbier" , stats: [5,0,0,0,10,10,10,5,0,2,0,0] },
                { id:  84, nom: "Cocher" , stats: [5,10,0,0,10,0,5,5,0,2,0,0] },
                { id:  85, nom: "Collecteur de taxes" , stats: [10,5,5,10,5,0,5,0,0,2,0,0] },
                { id:  86, nom: "Combattant des tunnels" , stats: [10,0,5,5,10,0,5,0,1,2,0,0] },
                { id:  87, nom: "Compagnon maître des runes" , stats: [10,5,10,5,5,20,25,5,0,3,0,2] },
                { id:  88, nom: "Compagon sorcier" , stats: [5,5,0,5,10,20,25,10,0,3,0,2] },
                { id:  89, nom: "Comte vampire" , stats: [20,10,25,20,20,15,20,15,2,7,0,2] },
                { id:  90, nom: "Conducteur de bestiaux" , stats: [5,10,10,5,10,0,5,0,0,2,0,2] },
                { id:  91, nom: "Contrebandier" , stats: [5,5,0,0,10,10,0,10,0,2,0,0] },
                { id:  92, nom: "Contremaître" , stats: [10,5,10,10,5,5,15,15,0,4,0,0] },
                { id:  93, nom: "Coupe-jarret" , stats: [10,0,5,5,0,0,5,5,1,2,0,0] },
                { id:  94, nom: "Courtisan" , stats: [5,5,0,0,10,20,20,20,0,4,0,0] },
                { id:  95, nom: "Courtisan des Principautés" , stats: [15,5,10,15,15,20,20,10,0,4,0,0] },
                { id:  96, nom: "Croisé" , stats: [30,10,20,20,20,20,25,15,2,8,0,0] },
                { id:  97, nom: "Démagogue" , stats: [10,10,0,10,15,20,15,30,1,4,0,0] },
                { id:  98, nom: "Démon exalté" , stats: [50,0,40,40,30,30,40,20,4,15,0,4] },
                { id:  99, nom: "Démon exalté de Khorne" , stats: [50,0,40,40,30,30,40,20,6,15,0,0] },
                { id: 100, nom: "Diestro estalien" , stats: [15,0,5,5,10,5,0,0,1,2,0,0] },
                { id: 101, nom: "Dilettante" , stats: [5,5,5,5,5,5,5,5,0,2,0,0] },
                { id: 102, nom: "Dresseur" , stats: [10,10,10,10,15,10,10,15,0,4,0,0] },
                { id: 103, nom: "Dresseur d'ours" , stats: [5,0,10,5,5,0,10,5,0,2,0,0] },
                { id: 104, nom: "Duelliste" , stats: [20,20,10,20,20,15,15,10,1,4,0,0] },
                { id: 105, nom: "Éclaireur" , stats: [5,10,0,0,10,10,5,0,0,2,0,0] },
                { id: 106, nom: "Éclaireur (créatures)" , stats: [10,20,10,10,20,10,15,0,1,4,0,0] },
                { id: 107, nom: "Écorcheur d'âmes" , stats: [10,10,0,10,15,30,35,15,0,4,0,3] },
                { id: 108, nom: "Écumeur des marais" , stats: [5,5,0,10,10,10,0,0,0,2,0,0] },
                { id: 109, nom: "Écuyer" , stats: [10,5,5,5,5,0,0,5,1,2,0,0] },
                { id: 110, nom: "Égoutier" , stats: [10,5,0,10,5,0,10,0,0,2,0,0] },
                { id: 111, nom: "Embaumeur" , stats: [0,0,5,5,0,15,10,5,0,2,0,0] },
                { id: 112, nom: "Émissaire elfe" , stats: [5,5,0,0,5,10,5,10,0,2,0,0] },
                { id: 113, nom: "Envoûteur" , stats: [5,5,5,10,10,10,15,15,0,4,0,2] },
                { id: 114, nom: "Érudit" , stats: [5,5,5,5,10,30,15,15,0,4,0,0] },
                { id: 115, nom: "Esclavagiste" , stats: [20,20,20,0,10,0,10,0,0,4,0,0] },
                { id: 116, nom: "Esclave" , stats: [5,0,5,5,10,0,5,0,0,4,0,0] },
                { id: 117, nom: "Escroc" , stats: [5,5,0,0,10,5,5,10,0,2,0,0] },
                { id: 118, nom: "Espion" , stats: [15,15,5,10,20,20,35,20,1,4,0,0] },
                { id: 119, nom: "Étudiant" , stats: [0,0,0,0,10,10,5,10,0,2,0,0] },
                { id: 120, nom: "Ex-détenu" , stats: [10,0,5,10,5,0,10,0,0,2,0,0] },
                { id: 121, nom: "Exorciste" , stats: [0,0,10,15,15,20,35,20,1,6,0,2] },
                { id: 122, nom: "Explorateur" , stats: [20,20,10,15,15,25,20,15,1,6,0,0] },
                { id: 123, nom: "Fanatique" , stats: [10,0,5,10,0,0,10,5,0,2,0,0] },
                { id: 124, nom: "Faussaire" , stats: [5,5,10,10,20,20,10,10,0,3,0,0] },
                { id: 125, nom: "Femme-médecine" , stats: [0,0,0,5,0,15,10,5,0,2,0,0] },
                { id: 126, nom: "Fermier" , stats: [5,5,10,10,5,0,5,0,0,2,0,0] },
                { id: 127, nom: "Flagellant" , stats: [15,0,10,15,5,0,20,10,1,6,0,0] },
                { id: 128, nom: "Fossoyeur" , stats: [5,5,10,10,0,0,10,0,0,2,0,0] },
                { id: 129, nom: "Fouet de dieu" , stats: [25,0,25,25,10,0,30,20,2,8,0,0] },
                { id: 130, nom: "Franc-archer" , stats: [0,40,10,10,25,10,20,15,1,4,0,0] },
                { id: 131, nom: "Frère de la cape" , stats: [15,10,15,15,25,30,25,30,1,6,0,0] },
                { id: 132, nom: "Garde" , stats: [10,5,5,0,5,10,0,5,0,2,0,0] },
                { id: 133, nom: "Garde des profondeurs" , stats: [10,0,5,5,5,0,5,0,1,2,0,0] },
                { id: 134, nom: "Garde du corps" , stats: [10,0,5,5,5,0,0,0,1,3,0,0] },
                { id: 135, nom: "Garde noir" , stats: [25,15,10,15,15,5,20,0,1,4,0,0] },
                { id: 136, nom: "Gardien du temple" , stats: [10,5,5,5,5,0,5,0,0,2,0,0] },
                { id: 137, nom: "Gardien tribal" , stats: [5,5,0,0,10,10,5,0,0,2,0,0] },
                { id: 138, nom: "Geôlier" , stats: [10,0,10,10,0,0,5,0,0,3,0,0] },
                { id: 139, nom: "Gladiateur" , stats: [15,0,0,10,10,0,10,0,0,2,0,0] },
                { id: 140, nom: "Gran-chaman bray" , stats: [20,10,15,20,20,20,30,20,2,8,0,4] },
                { id: 141, nom: "Grand Chaman" , stats: [15,15,10,15,15,20,25,20,1,6,0,3] },
                { id: 142, nom: "Grand maître" , stats: [40,15,25,25,25,15,30,20,2,8,0,0] },
                { id: 143, nom: "Grand prêtre" , stats: [20,20,15,15,15,20,30,25,1,6,0,3] },
                { id: 144, nom: "Grand prêtre (cloîtré)" , stats: [10,10,15,15,25,30,30,25,1,6,0,3] },
                { id: 145, nom: "Grand prêtre (ordinaire)" , stats: [20,20,20,15,20,20,30,25,1,7,0,0] },
                { id: 146, nom: "Grenouillère" , stats: [0,0,0,5,10,5,10,5,0,2,0,0] },
                { id: 147, nom: "Guerrier du Chaos" , stats: [10,0,10,10,10,0,10,0,1,4,0,0] },
                { id: 148, nom: "Héraut" , stats: [10,10,5,5,15,15,10,20,0,4,0,0] },
                { id: 149, nom: "Herrimault" , stats: [5,10,0,0,10,0,0,10,1,2,0,0] },
                { id: 150, nom: "Hiérogrammate" , stats: [5,0,0,5,0,5,15,5,0,2,0,1] },
                { id: 151, nom: "Homme d'arme" , stats: [10,0,5,10,10,0,0,0,0,2,0,0] },
                { id: 152, nom: "Homme lige" , stats: [10,5,5,5,5,0,5,0,1,2,0,0] },
                { id: 153, nom: "Hors-la-loi" , stats: [10,10,0,0,10,5,0,0,1,2,0,0] },
                { id: 154, nom: "Ingénieur" , stats: [10,15,5,5,10,20,10,0,0,4,0,0] },
                { id: 155, nom: "Ingénieur de siège" , stats: [0,10,10,10,25,20,10,10,0,4,0,0] },
                { id: 156, nom: "Ingénieur du Chaos" , stats: [10,10,0,5,10,10,0,0,0,3,0,0] },
                { id: 157, nom: "Initié" , stats: [5,5,0,5,0,10,10,10,0,2,0,0] },
                { id: 158, nom: "Intendant" , stats: [10,10,10,10,0,30,20,25,0,4,0,0] },
                { id: 159, nom: "Investigateur verenéen" , stats: [10,10,10,10,20,30,20,20,1,5,0,0] },
                { id: 160, nom: "Joueur" , stats: [5,5,0,0,10,10,0,10,0,2,0,0] },
                { id: 161, nom: "Kossar kislevite" , stats: [10,10,0,10,0,0,10,0,0,2,0,0] },
                { id: 162, nom: "Magister vigilant" , stats: [15,10,5,10,20,25,30,15,0,5,0,3] },
                { id: 163, nom: "Magus de Khorne" , stats: [40,5,20,30,10,0,15,5,2,7,0,0] },
                { id: 164, nom: "Magus de Nurgle" , stats: [15,5,5,30,10,5,20,15,2,5,0,2] },
                { id: 165, nom: "Magus de Slaanesh" , stats: [10,10,5,5,20,30,0,40,1,5,0,2] },
                { id: 166, nom: "Magus de Tzeentch" , stats: [10,10,5,5,10,40,20,30,1,5,0,2] },
                { id: 167, nom: "Maître de guilde" , stats: [10,10,0,10,15,30,20,35,1,5,0,0] },
                { id: 168, nom: "Maître des runes" , stats: [15,10,15,10,10,25,35,10,1,5,0,3] },
                { id: 169, nom: "Maître hiérogrammate" , stats: [10,10,5,15,0,25,30,15,1,4,0,3] },
                { id: 170, nom: "Maître sorcier" , stats: [10,10,0,10,15,30,35,15,0,4,0,3] },
                { id: 171, nom: "Maître-artisan" , stats: [0,0,10,10,20,10,10,10,0,3,0,0] },
                { id: 172, nom: "Malandrin" , stats: [5,5,10,0,10,5,0,0,0,2,0,0] },
                { id: 173, nom: "Malédictor" , stats: [0,0,0,0,5,10,15,5,0,2,0,1] },
                { id: 174, nom: "Maquignon" , stats: [0,5,5,0,5,5,5,5,0,2,0,0] },
                { id: 175, nom: "Maraudeur" , stats: [10,0,5,5,10,0,10,0,1,2,0,0] },
                { id: 176, nom: "Marchand" , stats: [10,10,5,5,10,25,20,20,0,4,0,0] },
                { id: 177, nom: "Maresquier" , stats: [5,10,0,5,10,5,0,0,0,3,0,0] },
                { id: 178, nom: "Marin" , stats: [10,5,10,0,10,0,0,0,1,2,0,0] },
                { id: 179, nom: "Matelot" , stats: [10,10,10,0,5,0,5,0,1,3,0,0] },
                { id: 180, nom: "Matriarche vedma" , stats: [0,0,5,20,10,40,30,15,0,6,0,3] },
                { id: 181, nom: "Médecin" , stats: [0,0,10,10,15,30,20,15,0,4,0,0] },
                { id: 182, nom: "Médiateur" , stats: [0,0,0,0,0,10,10,10,0,2,0,0] },
                { id: 183, nom: "Ménestrel" , stats: [10,10,0,0,15,10,5,25,0,4,0,0] },
                { id: 184, nom: "Mercanti" , stats: [0,0,0,5,10,5,5,10,0,2,0,0] },
                { id: 185, nom: "Mercenaire" , stats: [10,10,5,5,5,0,5,0,1,2,0,0] },
                { id: 186, nom: "Messager" , stats: [5,5,0,5,10,5,5,0,0,2,0,0] },
                { id: 187, nom: "Métayer" , stats: [5,10,0,0,10,5,10,10,0,3,0,0] },
                { id: 188, nom: "Milicien" , stats: [10,5,5,5,10,0,0,0,0,2,0,0] },
                { id: 189, nom: "Mineur" , stats: [5,5,10,5,0,5,5,0,0,2,0,0] },
                { id: 190, nom: "Moine" , stats: [10,0,5,10,0,15,15,15,0,4,0,0] },
                { id: 191, nom: "Moine mendiant" , stats: [5,0,5,5,10,25,15,15,0,4,0,0] },
                { id: 192, nom: "Moine mendiant lanceur de sorts" , stats: [5,0,5,5,10,25,15,15,0,4,0,0] },
                { id: 193, nom: "Monte-en-l'air" , stats: [10,10,5,5,25,10,10,0,0,4,0,0] },
                { id: 194, nom: "Muletier" , stats: [5,10,0,5,10,10,5,0,0,2,0,0] },
                { id: 195, nom: "Mystique" , stats: [0,0,0,10,10,10,15,15,0,4,0,0] },
                { id: 196, nom: "Mystique strigany" , stats: [5,5,0,0,5,5,10,10,0,2,0,0] },
                { id: 197, nom: "Naufrageur" , stats: [5,10,0,5,5,0,5,5,0,2,0,0] },
                { id: 198, nom: "Navigateur" , stats: [10,10,5,5,10,25,10,5,0,4,0,0] },
                { id: 199, nom: "Noble" , stats: [10,5,0,0,5,5,5,10,0,2,0,0] },
                { id: 200, nom: "Nomade de la steppe" , stats: [10,10,0,5,5,0,10,0,0,2,0,0] },
                { id: 201, nom: "Officier en second" , stats: [15,15,10,15,10,10,10,10,1,4,0,0] },
                { id: 202, nom: "Oracle" , stats: [0,0,0,0,5,5,10,15,0,2,0,1] },
                { id: 203, nom: "Oracle 2" , stats: [5,0,5,0,5,10,5,10,0,2,0,0] },
                { id: 204, nom: "Pamphlétaire" , stats: [5,5,5,10,15,25,20,20,0,4,0,0] },
                { id: 205, nom: "Passeur" , stats: [5,5,10,5,5,5,0,0,0,2,0,0] },
                { id: 206, nom: "Patrouilleur" , stats: [10,10,5,0,10,5,5,0,0,2,0,0] },
                { id: 207, nom: "Patrouilleur fluvial" , stats: [0,10,10,5,10,5,5,0,0,2,0,0] },
                { id: 208, nom: "Paysan" , stats: [5,5,5,10,5,0,5,0,0,2,0,0] },
                { id: 209, nom: "Pêcheur" , stats: [0,5,10,5,10,5,0,0,0,2,0,0] },
                { id: 210, nom: "Pèlerin" , stats: [5,5,5,5,5,10,10,10,0,4,0,0] },
                { id: 211, nom: "Pèlerin du Graal" , stats: [10,5,5,5,5,0,0,5,0,2,0,0] },
                { id: 212, nom: "Pèlerin exalté" , stats: [20,10,10,10,15,10,10,10,1,6,0,0] },
                { id: 213, nom: "Pénitent" , stats: [10,0,10,10,0,0,5,0,0,3,0,0] },
                { id: 214, nom: "Percepteur" , stats: [10,0,0,0,10,10,5,5,0,2,0,0] },
                { id: 215, nom: "Pillard" , stats: [10,0,10,5,10,0,0,0,1,2,0,0] },
                { id: 216, nom: "Pilleur de tombes" , stats: [10,0,0,0,10,10,10,5,0,2,0,0] },
                { id: 217, nom: "Pisteur" , stats: [20,20,10,10,15,20,15,0,1,6,0,0] },
                { id: 218, nom: "Pistolier" , stats: [20,20,10,10,15,0,15,15,1,4,0,0] },
                { id: 219, nom: "Plaideur" , stats: [0,0,0,0,5,10,10,10,0,2,0,0] },
                { id: 220, nom: "Politicien" , stats: [5,5,5,10,0,20,10,20,0,4,0,0] },
                { id: 221, nom: "Porterune" , stats: [10,0,5,5,10,5,5,0,0,2,1,0] },
                { id: 222, nom: "Prélat" , stats: [10,10,10,15,15,20,30,30,0,6,0,0] },
                { id: 223, nom: "Prêtre" , stats: [10,10,5,10,5,10,20,15,0,4,0,1] },
                { id: 224, nom: "Prêtre (cloîtré)" , stats: [5,5,5,10,10,15,20,15,0,4,0,1] },
                { id: 225, nom: "Prêtre (ordinaire)" , stats: [10,10,10,10,10,10,20,15,0,5,0,0] },
                { id: 226, nom: "Prêtre consacré" , stats: [15,15,10,10,10,15,25,20,1,5,0,2] },
                { id: 227, nom: "Prêtre consacré (cloîtré)" , stats: [10,10,10,10,15,20,25,20,1,5,0,2] },
                { id: 228, nom: "Prêtre consacré (ordinaire)" , stats: [15,15,15,10,15,15,25,20,1,6,0,0] },
                { id: 229, nom: "Prêtre laïque" , stats: [15,10,5,10,10,15,20,20,0,6,0,0] },
                { id: 230, nom: "Prêtre-guerrier" , stats: [20,15,10,10,15,15,25,15,1,5,0,2] },
                { id: 231, nom: "Prince démon" , stats: [0,0,20,20,20,0,0,0,0,0,0,0] },
                { id: 232, nom: "Prince des voleurs" , stats: [20,20,10,10,40,25,20,25,1,6,0,0] },
                { id: 233, nom: "Racketteur" , stats: [20,15,15,10,10,0,15,10,1,5,0,0] },
                { id: 234, nom: "Raconteur" , stats: [5,0,0,0,5,10,10,10,0,2,0,0] },
                { id: 235, nom: "Ramasseur de fumier" , stats: [5,0,5,10,5,0,5,0,0,2,0,0] },
                { id: 236, nom: "Ramoneur" , stats: [5,0,5,5,5,0,5,5,0,2,0,0] },
                { id: 237, nom: "Ratier" , stats: [5,10,0,5,10,0,10,0,0,2,0,0] },
                { id: 238, nom: "Receleur" , stats: [15,10,10,5,10,5,10,10,1,4,0,0] },
                { id: 239, nom: "Régisseur" , stats: [5,5,5,0,0,10,5,10,0,2,0,0] },
                { id: 240, nom: "Répurgateur" , stats: [30,30,15,15,15,15,35,20,2,6,0,0] },
                { id: 241, nom: "Rôdeur des Principautés" , stats: [20,20,10,20,25,20,20,5,0,7,0,0] },
                { id: 242, nom: "Rôdeur fantôme" , stats: [20,30,15,15,25,20,20,0,2,6,0,0] },
                { id: 243, nom: "Sagemarche" , stats: [0,0,5,10,15,35,35,35,0,5,0,3] },
                { id: 244, nom: "Sans-visage" , stats: [10,30,10,20,10,10,10,35,2,6,0,0] },
                { id: 245, nom: "Scalde" , stats: [5,0,5,0,5,10,5,10,0,2,0,0] },
                { id: 246, nom: "Scribe" , stats: [0,0,0,0,10,10,10,5,0,2,0,0] },
                { id: 247, nom: "Seigneur des runes" , stats: [20,15,20,15,15,30,40,15,1,6,0,4] },
                { id: 248, nom: "Seigneur hiérogrammate" , stats: [15,10,10,20,0,35,40,20,1,5,0,4] },
                { id: 249, nom: "Seigneur sorcier" , stats: [15,15,5,15,20,35,40,20,0,5,0,4] },
                { id: 250, nom: "Seigneur vampire" , stats: [35,20,30,30,30,30,35,30,3,11,0,3] },
                { id: 251, nom: "Sentinelle halfling" , stats: [5,10,0,5,10,0,10,0,0,2,0,0] },
                { id: 252, nom: "Sergent" , stats: [20,15,10,10,10,10,10,20,1,4,0,0] },
                { id: 253, nom: "Serviteur" , stats: [5,0,5,0,10,5,10,5,0,2,0,0] },
                { id: 254, nom: "Soldat" , stats: [10,10,0,0,10,0,5,0,1,2,0,0] },
                { id: 255, nom: "Sorcier de village" , stats: [0,0,0,5,5,5,10,10,0,2,0,1] },
                { id: 256, nom: "Sorcier des marches" , stats: [0,0,5,5,5,20,20,20,0,3,0,2] },
                { id: 257, nom: "Sorcière de glace" , stats: [15,0,5,20,15,30,40,15,0,6,0,4] },
                { id: 258, nom: "Spadassin" , stats: [10,0,10,0,10,0,10,0,1,2,0,0] },
                { id: 259, nom: "Staraja vedma" , stats: [0,0,5,10,5,25,20,10,0,4,0,1] },
                { id: 260, nom: "Streltsi" , stats: [10,10,5,5,5,0,5,0,0,2,0,0] },
                { id: 261, nom: "Tchékiste" , stats: [10,5,5,5,5,5,5,0,0,2,0,0] },
                { id: 262, nom: "Thaumaturge" , stats: [10,10,10,10,15,15,20,20,0,4,0,2] },
                { id: 263, nom: "Tisseruine" , stats: [5,5,0,5,10,20,25,10,0,3,0,2] },
                { id: 264, nom: "Trafiquant de cadavres" , stats: [5,5,5,0,10,0,10,0,0,2,0,0] },
                { id: 265, nom: "Tueur de démons" , stats: [40,0,30,30,20,0,30,0,2,8,0,0] },
                { id: 266, nom: "Tueur de géants" , stats: [25,0,15,15,10,0,20,0,1,6,0,0] },
                { id: 267, nom: "Tueur de morts" , stats: [35,35,15,20,20,15,30,5,2,6,0,0] },
                { id: 268, nom: "Tueur de trolls" , stats: [10,0,5,5,5,0,10,0,1,3,0,0] },
                { id: 269, nom: "Vagabond" , stats: [5,10,0,0,10,5,0,5,0,2,0,0] },
                { id: 270, nom: "Valet" , stats: [0,0,0,0,10,10,5,10,0,2,0,0] },
                { id: 271, nom: "Vampire nouveau-né" , stats: [10,0,20,15,20,10,10,10,0,5,0,0] },
                { id: 272, nom: "Vaurien" , stats: [10,5,5,15,25,10,10,30,1,4,0,0] },
                { id: 273, nom: "Vendeur de journaux" , stats: [5,5,0,0,10,5,0,10,0,2,0,0] },
                { id: 274, nom: "Vétéran" , stats: [20,20,10,10,15,0,15,0,1,6,0,0] },
                { id: 275, nom: "Vierge de glace" , stats: [5,0,0,10,5,20,25,10,0,4,0,2] },
                { id: 276, nom: "Vitki" , stats: [15,10,10,10,10,15,25,20,1,5,0,2] },
                { id: 277, nom: "Voleur" , stats: [5,5,0,0,15,5,0,10,0,2,0,0] },
                { id: 278, nom: "Yeoman" , stats: [25,10,10,10,10,10,10,0,1,6,0,0] }
            ],
            weapons: [
                { id:  1, name: 'Arme à deux mains'     , enc: 200, cat: "Melée"        , group: 'lourde'      , damage: 'BF'  , range: '',      reload: '', attrs: 'Lente, Percutante'},
                { id:  2, name: 'Arme à une main'       , enc:  50, cat: "Melée"        , group: 'ordinaire'   , damage: 'BF'  , range: '',      reload: '', attrs: ''},
                { id:  3, name: 'Arme improvisée'       , enc:  35, cat: "Melée"        , group: 'ordinaire'   , damage: 'BF-4', range: '',      reload: '', attrs: ''},
                { id:  4, name: 'Bâton'                 , enc:  50, cat: "Melée"        , group: 'ordinaire'   , damage: 'BF-2', range: '',      reload: '', attrs: 'Assomante, Defensive'},
                { id:  5, name: 'Bouclier'              , enc:  50, cat: "Melée"        , group: 'ordinaire'   , damage: 'BF-2', range: '',      reload: '', attrs: 'Défensive'},
                { id:  6, name: 'Brise-épée'            , enc:  40, cat: "Melée"        , group: 'ordinaire'   , damage: 'BF-3', range: '',      reload: '', attrs: 'Spéciale'},
                { id:  7, name: 'Dague'                 , enc:  10, cat: "Melée"        , group: 'ordinaire'   , damage: 'BF-3', range: '',      reload: '', attrs: ''},
                { id:  8, name: 'Demi-lance'            , enc:  75, cat: "Melée"        , group: 'cavalerie'   , damage: 'BF'  , range: '',      reload: '', attrs: 'Epuisante, Percutante, Rapide'},
                { id:  9, name: 'Fléau d\'arme'         , enc:  95, cat: "Melée"        , group: 'fléaux'      , damage: 'BF-1', range: '',      reload: '', attrs: 'Epuisante, Percutante'},
                { id: 10, name: 'Fleuret'               , enc:  40, cat: "Melée"        , group: 'escrime'     , damage: 'BF-2', range: '',      reload: '', attrs: 'Précise, Rapide'},
                { id: 11, name: 'Gantelet'              , enc:   1, cat: "Melée"        , group: 'ordinaire'   , damage: 'BF-3', range: '',      reload: '', attrs: 'Assomante'},
                { id: 12, name: 'Hallebarde'            , enc: 175, cat: "Melée"        , group: 'lourde'      , damage: 'BF'  , range: '',      reload: '', attrs: 'Spéciale'},
                { id: 13, name: 'Lance d\'arçon'        , enc: 100, cat: "Melée"        , group: 'cavalerie'   , damage: 'BF+1', range: '',      reload: '', attrs: 'Epuisante, Percutante, Rapide'},
                { id: 14, name: 'Lance'                 , enc:  50, cat: "Melée"        , group: 'ordinaire'   , damage: 'BF'  , range: '',      reload: '', attrs: 'Rapide'},
                { id: 15, name: 'Main gauche'           , enc:  15, cat: "Melée"        , group: 'parade'      , damage: 'BF-3', range: '',      reload: '', attrs: 'Défensive'},
                { id: 16, name: 'Morgenstern'           , enc:  15, cat: "Melée"        , group: 'fléaux'      , damage: 'BF'  , range: '',      reload: '', attrs: 'Epuisante, Percutante'},
                { id: 17, name: 'Rapière'               , enc:  40, cat: "Melée"        , group: 'escrime'     , damage: 'BF-1', range: '',      reload: '', attrs: 'Rapide'},
                { id: 18, name: 'Rondache'              , enc:  10, cat: "Melée"        , group: 'parade'      , damage: 'BF-4', range: '',      reload: '', attrs: 'Assomante, Defensive'},
                { id: 19, name: 'Arbalète'              , enc: 120, cat: "A distance"   , group: 'ordinaire'   , damage: '4'   , range: '30/60', reload: '1', attrs: ''},
                { id: 20, name: 'Arbalète à répétition' , enc: 150, cat: "A distance"   , group: 'arbaletes'   , damage: '2'   , range: '12/32', reload: '', attrs: 'Spéciale'},
                { id: 21, name: 'Arbelète de poings'    , enc:  25, cat: "A distance"   , group: 'arbaletes'   , damage: '2'   , range: '8/16',  reload: '1', attrs: ''},
                { id: 22, name: 'Arc'                   , enc:  80, cat: "A distance"   , group: 'ordinaire'   , damage: '3'   , range: '24/48', reload: '1/2', attrs: ''},
                { id: 23, name: 'Arc court'             , enc:  75, cat: "A distance"   , group: 'ordinaire'   , damage: '3'   , range: '16/32', reload: '1/2', attrs: ''},
                { id: 24, name: 'Arc elfique'           , enc:  75, cat: "A distance"   , group: 'arc long'    , damage: '3'   , range: '36/72', reload: '1/2', attrs: 'Perforante'},
                { id: 25, name: 'Arc long'              , enc:  90, cat: "A distance"   , group: 'arc long'    , damage: '3'   , range: '30/60', reload: '1/2', attrs: 'Perforante'},
                { id: 26, name: 'Arme improvisée'       , enc:  10, cat: "A distance"   , group: 'ordinaire'   , damage: 'BF-4', range: '6/-',   reload: '1/2', attrs: ''},
                { id: 27, name: 'Bolas'                 , enc:  20, cat: "A distance"   , group: 'paralysante' , damage: '1'   , range: '8/16',  reload: '1/2', attrs: 'Immobilisante'},
                { id: 28, name: 'Dague/étoile de jet'   , enc:  10, cat: "A distance"   , group: 'jet'         , damage: 'BF-3', range: '6/12',  reload: '1/2', attrs: ''},
                { id: 29, name: 'Filet'                 , enc:  60, cat: "A distance"   , group: 'paralysante' , damage: ''    , range: '4/8' ,  reload: '1'  , attrs: 'Immobilisante'},
                { id: 30, name: 'Fouet'                 , enc:  40, cat: "A distance"   , group: 'paralysante' , damage: 'BF-4', range: '6/-',   reload: '1/2', attrs: 'Immobilisante, Rapide'},
                { id: 31, name: 'Fronde'                , enc:  10, cat: "A distance"   , group: 'lance-pierre', damage: '3'   , range: '16/32', reload: '1/2', attrs: ''},
                { id: 32, name: 'Fustibale'             , enc:  50, cat: "A distance"   , group: 'lance-pierre', damage: '4'   , range: '24/48', reload: '1/2', attrs: ''},
                { id: 33, name: 'Hache/Marteau de jet'  , enc:  40, cat: "A distance"   , group: 'jet'         , damage: 'BF-2', range: '8/16' , reload: '1/2', attrs: ''},
                { id: 34, name: 'Javeline'              , enc:  30, cat: "A distance"   , group: 'ordinaire'   , damage: 'BF-1', range: '8/16' , reload: '1/2', attrs: ''},
                { id: 35, name: 'Lance'                 , enc:  50, cat: "A distance"   , group: 'ordinaire'   , damage: 'BF'  , range: '8/-'  , reload: '1/2', attrs: ''},
                { id: 36, name: 'Lasso'                 , enc:  10, cat: "A distance"   , group: 'paralysante' , damage: ''    , range: '8/-'  , reload: '1/2', attrs: 'Immobilisante'}
            ],
            armors: [
                // covers: head, body, arms, legs
                { id:  1, name: 'Armure de cuir complète'    , enc:  80, cat: 'Cuir'  , covers: [1, 1, 1, 1], value: 1},
                { id:  2, name: 'Calotte de cuir'            , enc:  10, cat: 'Cuir'  , covers: [1, 0, 0, 0], value: 1},
                { id:  3, name: 'Gilet de cuir'              , enc:  40, cat: 'Cuir'  , covers: [0, 1, 0, 0], value: 1},
                { id:  4, name: 'Jambières de cuir'          , enc:  20, cat: 'Cuir'  , covers: [0, 0, 0, 1], value: 1},
                { id:  5, name: 'Veste de cuir'              , enc:  50, cat: 'Cuir'  , covers: [0, 1, 1, 0], value: 1},
                { id:  6, name: 'Armure de maille complète'  , enc: 210, cat: 'Maille', covers: [1, 1, 1, 1], value: 3},
                { id:  7, name: 'Cagoule de maille'          , enc:  30, cat: 'Maille', covers: [1, 0, 0, 0], value: 2},
                { id:  8, name: 'Chemise de maille'          , enc:  80, cat: 'Maille', covers: [0, 1, 1, 0], value: 2},
                { id:  9, name: 'Jambières de maille'        , enc:  40, cat: 'Maille', covers: [0, 0, 0, 1], value: 2},
                { id: 10, name: 'Manteau de maille'          , enc:  80, cat: 'Maille', covers: [0, 1, 0, 1], value: 2},
                { id: 11, name: 'Manteau de maille à manches', enc: 100, cat: 'Maille', covers: [0, 1, 1, 1], value: 2},
                { id: 12, name: 'Armure de plaques complètes', enc: 395, cat: 'Plate' , covers: [1, 1, 1, 1], value: 5},
                { id: 13, name: 'Brassard d\'acier'          , enc:  30, cat: 'Plate' , covers: [0, 0, 1, 0], value: 2},
                { id: 14, name: 'Casque'                     , enc:  40, cat: 'Plate' , covers: [1, 0, 0, 0], value: 2},
                { id: 15, name: 'Jambières d\'acier'         , enc:  40, cat: 'Plate' , covers: [0, 0, 0, 1], value: 2},
                { id: 16, name: 'Plastron'                   , enc:  75, cat: 'Plate' , covers: [0, 1, 0, 0], value: 2},
            ],
            skills: [
                { id:   1, label: "Canotage"                         , cat:   'f', advanced: false},
                { id:   2, label: "Charisme"                         , cat: 'soc', advanced: false},
                { id:   3, label: "Commandement"                     , cat: 'soc', advanced: false},
                { id:   4, label: "Commérage"                        , cat: 'soc', advanced: false},
                { id:   5, label: "Conduite d\'attelage"             , cat:   'f', advanced: false},
                { id:   6, label: "Déguisement"                      , cat: 'soc', advanced: false},
                { id:   7, label: "Déplacement silencieux"           , cat:  'ag', advanced: false},
                { id:   8, label: "Dissimulation"                    , cat:  'ag', advanced: false},
                { id:   9, label: "Equitation"                       , cat:  'ag', advanced: false},
                { id:  10, label: "Escalade"                         , cat:   'f', advanced: false},
                { id:  11, label: "Evaluation"                       , cat: 'int', advanced: false},
                { id:  12, label: "Fouille"                          , cat: 'int', advanced: false},
                { id:  13, label: "Intimidation"                     , cat:   'f', advanced: false},
                { id:  14, label: "Jeu"                              , cat: 'int', advanced: false},
                { id:  15, label: "Marchandage"                      , cat: 'soc', advanced: false},
                { id:  16, label: "Natation"                         , cat:   'f', advanced: false},
                { id:  17, label: "Perception"                       , cat: 'int', advanced: false},
                { id:  18, label: "Resistance à l\'alcool"           , cat:   'e', advanced: false},
                { id:  19, label: "Soin des animaux"                 , cat: 'int', advanced: false},
                { id:  20, label: "Survie"                           , cat: 'int', advanced: false},
                { id:  21, label: "Alphabet secret"                  , cat: 'int', advanced: true},
                { id:  22, label: "Baratin"                          , cat: 'soc', advanced: true},
                { id:  23, label: "Braconnage"                       , cat: 'ag' , advanced: true},
                { id:  24, label: "Conn. académiques (arts)"         , cat: 'int', advanced: true},
                { id:  25, label: "Conn. académiques (astronomie)"   , cat: 'int', advanced: true},
                { id:  26, label: "Conn. académiques (démonologie)"  , cat: 'int', advanced: true},
                { id:  27, label: "Conn. académiques (droit)"        , cat: 'int', advanced: true},
                { id:  28, label: "Conn. académiques (généalogie)"   , cat: 'int', advanced: true},
                { id:  29, label: "Conn. académiques (histoire)"     , cat: 'int', advanced: true},
                { id:  30, label: "Conn. académiques (ingénierie)"   , cat: 'int', advanced: true},
                { id:  31, label: "Conn. académiques (magie)"        , cat: 'int', advanced: true},
                { id:  32, label: "Conn. académiques (nécromancie)"  , cat: 'int', advanced: true},
                { id:  33, label: "Conn. académiques (philosophie)"  , cat: 'int', advanced: true},
                { id:  34, label: "Conn. académiques (runes)"        , cat: 'int', advanced: true},
                { id:  35, label: "Conn. académiques (science)"      , cat: 'int', advanced: true},
                { id:  36, label: "Conn. académiques (stratégie)"    , cat: 'int', advanced: true},
                { id:  37, label: "Conn. académiques (théologie)"    , cat: 'int', advanced: true},
                { id:  38, label: "Con. générales (bretonne)"        , cat: 'int', advanced: true},
                { id:  39, label: "Con. générales (elfes)"           , cat: 'int', advanced: true},
                { id:  40, label: "Con. générales (empire)"          , cat: 'int', advanced: true},
                { id:  41, label: "Con. générales (estalie)"         , cat: 'int', advanced: true},
                { id:  42, label: "Con. générales (halfeling)"       , cat: 'int', advanced: true},
                { id:  43, label: "Con. générales (kislev)"          , cat: 'int', advanced: true},
                { id:  44, label: "Con. générales (nains)"           , cat: 'int', advanced: true},
                { id:  45, label: "Con. générales (norsca)"          , cat: 'int', advanced: true},
                { id:  46, label: "Con. générales (ogres)"           , cat: 'int', advanced: true},
                { id:  47, label: "Con. générales (pays perdu)"      , cat: 'int', advanced: true},
                { id:  48, label: "Con. générales (frontalières)"    , cat: 'int', advanced: true},
                { id:  49, label: "Con. générales (tilée)"           , cat: 'int', advanced: true},
                { id:  50, label: "Crochetage"                       , cat: 'ag' , advanced: true},
                { id:  51, label: "Dressage"                         , cat: 'soc', advanced: true},
                { id:  52, label: "Emprise sur les animaux"          , cat: 'soc', advanced: true},
                { id:  53, label: "Escamotage"                       , cat: 'ag' , advanced: true},
                { id:  54, label: "Esquive"                          , cat: 'ag' , advanced: true},
                { id:  55, label: "Expression artistique"            , cat: 'soc', advanced: true},
                { id:  56, label: "Filature"                         , cat: 'ag' , advanced: true},
                { id:  57, label: "Focalisation"                     , cat: 'fm' , advanced: true},
                { id:  58, label: "Hypnotisme"                       , cat: 'fm' , advanced: true},
                { id:  59, label: "Langage mystique"                 , cat: 'int', advanced: true},
                { id:  60, label: "Langage secret"                   , cat: 'int', advanced: true},
                { id:  61, label: "Langue (bretonnien)"              , cat: 'int', advanced: true},
                { id:  62, label: "Langue (classique)"               , cat: 'int', advanced: true},
                { id:  63, label: "Langue (eltharin)"                , cat: 'int', advanced: true},
                { id:  64, label: "Langue (estalien)"                , cat: 'int', advanced: true},
                { id:  65, label: "Langue (gobelinoïde)"             , cat: 'int', advanced: true},
                { id:  66, label: "Langue (grumbarth)"               , cat: 'int', advanced: true},
                { id:  67, label: "Langue (halfling)"                , cat: 'int', advanced: true},
                { id:  68, label: "Langue (khazalid)"                , cat: 'int', advanced: true},
                { id:  69, label: "Langue (kislevien)"               , cat: 'int', advanced: true},
                { id:  70, label: "Langue (langage sombre)"          , cat: 'int', advanced: true},
                { id:  71, label: "Langue (norse)"                   , cat: 'int', advanced: true},
                { id:  72, label: "Langue (reikspiel)"               , cat: 'int', advanced: true},
                { id:  73, label: "Langue (tiléen)"                  , cat: 'int', advanced: true},
                { id:  74, label: "Lecture sur les lèvres"           , cat: 'int', advanced: true},
                { id:  75, label: "Lire/écrire"                      , cat: 'int', advanced: true},
                { id:  76, label: "Métier (apothicaire)"             , cat: 'int'   , advanced: true},
                { id:  77, label: "Métier (arquebusier)"             , cat: 'ag'   , advanced: true},
                { id:  78, label: "Métier (artiste)"                 , cat: 'ag'   , advanced: true},
                { id:  79, label: "Métier (brasseur)"                , cat: 'int'   , advanced: true},
                { id:  80, label: "Métier (calligraphe)"             , cat: 'ag'   , advanced: true},
                { id:  81, label: "Métier (cartographe)"             , cat: 'ag'   , advanced: true},
                { id:  82, label: "Métier (charpentier)"             , cat: 'ag'   , advanced: true},
                { id:  83, label: "Métier (charpentier naval)"       , cat: 'int'   , advanced: true},
                { id:  84, label: "Métier (cordonnier)"              , cat: 'ag'   , advanced: true},
                { id:  85, label: "Métier (cristallier)"             , cat: 'ag'   , advanced: true},
                { id:  86, label: "Métier (cuisinier)"               , cat: 'int'   , advanced: true},
                { id:  87, label: "Métier (embaumeur)"               , cat: 'int'   , advanced: true},
                { id:  88, label: "Métier (fabricant d\'arcs)"       , cat: 'ag'   , advanced: true},
                { id:  89, label: "Métier (fabricant d\'armes)"      , cat: 'f'   , advanced: true},
                { id:  90, label: "Métier (fabricant d\'armures)"    , cat: 'f'   , advanced: true},
                { id:  91, label: "Métier (fabricant de bougies)"    , cat: 'ag'   , advanced: true},
                { id:  92, label: "Métier (fermier)"                 , cat: 'f'   , advanced: true},
                { id:  93, label: "Métier (forgeron)"                , cat: 'f'   , advanced: true},
                { id:  94, label: "Métier (herboriste)"              , cat: 'int'   , advanced: true},
                { id:  95, label: "Métier (maçon)"                   , cat: 'ag'   , advanced: true},
                { id:  96, label: "Métier (marchand)"                , cat: 'soc'   , advanced: true},
                { id:  97, label: "Métier (meunier)"                 , cat: 'f'   , advanced: true},
                { id:  98, label: "Métier (mineur)"                  , cat: 'f'   , advanced: true},
                { id:  99, label: "Métier (orfèvre)"                 , cat: 'ag'   , advanced: true},
                { id: 100, label: "Métier (prospecteur)"             , cat: 'f'   , advanced: true},
                { id: 101, label: "Métier (tailleur)"                , cat: 'ag'   , advanced: true},
                { id: 102, label: "Métier (tanneur)"                 , cat: 'f'   , advanced: true},
                { id: 103, label: "Métier (tonnelier)"               , cat: 'f'   , advanced: true},
                { id: 104, label: "Navigation"                       , cat: 'ag' , advanced: true},
                { id: 105, label: "Orientation"                      , cat: 'int', advanced: true},
                { id: 106, label: "Pistage"                          , cat: 'int', advanced: true},
                { id: 107, label: "Préparation de poisons"           , cat: 'int', advanced: true},
                { id: 108, label: "Sens de la magie"                 , cat: 'fm' , advanced: true},
                { id: 109, label: "Soins"                            , cat: 'int', advanced: true},
                { id: 110, label: "Torture"                          , cat: 'soc', advanced: true},
                { id: 111, label: "Ventriloquie"                     , cat: 'soc', advanced: true}
            ],
            talents: [
                { id:  1, name : "Acrobatie équestre",      desc : "+10% en acrobatie équestre" },
                { id:  2, name : "Acuité auditive",         desc : "+20% en perception auditive" },
                { id:  3, name : "Acuité visuelle",         desc : "+10% en per. visuelle & Lect. sur les lèvres" },
                { id:  4, name : "Adresse au tir",          desc : "+20% en CT en visant (au lieu de +10%)" },
                { id:  5, name : "Ambidextre",              desc : "Pas malus utilisation arme main non directrice" },
                { id:  6, name : "Armes naturelles",        desc : "mains nues -> arme à une main (pas parade)" },
                { id:  7, name : "Calcul mental",           desc : "+10% Orientation & +20% perception estimation" },
                { id:  8, name : "Camouflage rural",        desc : "+10% Dépl. Sil. et Dissimulation milieu rural" },
                { id:  9, name : "Camouflage souterrain",   desc : "+10% Dépl. Sil. et Dissimulation souterrain" },
                { id: 10, name : "Camouflage urbain",       desc : "+10% Dépl. Sil. et Dissimulation milieu urbain" },
                { id: 11, name : "Chance",                  desc : "+1 point de fortune" },
                { id: 12, name : "Chirurgie",               desc : "+10% soins, +2 B grave, +20% En éviter amput." },
                { id: 13, name : "Code de la rue",          desc : "+10% Charisme & Comérage milieu du crime" },
                { id: 14, name : "Combat de rue",           desc : "+10% CC et dégâts à mains nues" },
                { id: 15, name : "Combattant virevoltant",  desc : "saut 1/2 action et portée +1m" },
                { id: 16, name : "Connaissance des pièges", desc : "+10% Crochetage et perception des pièges" },
                { id: 17, name : "Contorsionniste",         desc : "+10%Exp. Art. rapport +20%Agi libér., pas. Étr." },
                { id: 18, name : "Coups assomants",         desc : "Peut assomer F VS En (+10%/PA à la tête)" },
                { id: 19, name : "Coups précis",            desc : "critiques +1" },
                { id: 20, name : "Coups puissants",         desc : "+1 dégâts armes de corps à corps" },
                { id: 21, name : "Course à pied",           desc : "+1 M" },
                { id: 22, name : "Désarmement",             desc : "Peut désarmer Ag VS Ag" },
                { id: 23, name : "Dur à cuir",              desc : "+1 B" },
                { id: 24, name : "Dur en affaires",         desc : "+10% évaluation & Marchandage" },
                { id: 25, name : "Effrayant",               desc : "Vous provoquez la peur (chapitre 9)" },
                { id: 26, name : "Éloquence",               desc : "Personnes affectées par Charisme x 10" },
                { id: 27, name : "Étiquette",               desc : "+10 Charisme et comérage face à la noblesse" },
                { id: 28, name : "Force accrue",            desc : "+5% F" },
                { id: 29, name : "Frénésie",                desc : "1 round->+10% F&FM -10% CC&Int->att proche" },
                { id: 30, name : "Fuite",                   desc : "Si fuite -> +1 M pendant 1D10 rounds" },
                { id: 31, name : "Fureur vengeresse",       desc : "+5% CC VS orques, gobelins et hobgobelins" },
                { id: 32, name : "Grand voyageur",          desc : "+10% Connaissances générales et Langues" },
                { id: 33, name : "Guerrier né",             desc : "+5% CC" },
                { id: 34, name : "Harmonie aethyrique",     desc : "+10% Focalisation & Sens de la magie" },
                { id: 35, name : "Imitation",               desc : "+10%Dégui.,Expr.Art.(parole&dég.),Lan.(accent)" },
                { id: 36, name : "Incantation de bataille", desc : "+3 malus d'incantation sorts divins avec armure" },
                { id: 37, name : "Inspiration divine",      desc : "permet de lancer des sorts de sa divinité" },
                { id: 38, name : "Intelligent",             desc : "+5% Int" },
                { id: 39, name : "Intrigant",               desc : "+10% Cha. lié aux intrigues, FM -> Cha. d'autrui" },
                { id: 40, name : "Lévitation",              desc : "vous pouvez léviter (chapitre 6)" },
                { id: 41, name : "Linguistique",            desc : "+10% Lire/écrire & Langue" },
                { id: 42, name : "Lutte",                   desc : "+10% CC et F sur prise" },
                { id: 43, name : "Magie commune",           desc : "permet de lancer des sorts de magie commune" },
                { id: 44, name : "Magie mineure",           desc : "permet de lancer des sorts de magie mineure" },
                { id: 45, name : "Magie noire",             desc : "permet d'utiliser le Dhar pour lancer un sort" },
                { id: 46, name : "Magie vulgaire",          desc : "permet de lancer des sorts de magie vulgaire" },
                { id: 47, name : "Mains agiles",            desc : "+20% CC sur les sorts de contact" },
                { id: 48, name : "Maître artilleur",        desc : "-1/2 action pour la recharge des armes à poudre" },
                { id: 49, name : "Maîtrise (arbalètes)",          desc : "peut utiliser une arme requérant une formation" },
                { id: 50, name : "Maîtrise (arcs longs)",         desc : "peut utiliser une arme requérant une formation" },
                { id: 51, name : "Maîtrise (armes à feu)",        desc : "peut utiliser une arme requérant une formation" },
                { id: 52, name : "Maîtrise (armes de cavalerie)", desc : "peut utiliser une arme requérant une formation" },
                { id: 53, name : "Maîtrise (armes de jet)",       desc : "peut utiliser une arme requérant une formation" },
                { id: 54, name : "Maîtrise (armes de parade)",    desc : "peut utiliser une arme requérant une formation" },
                { id: 55, name : "Maîtrise (armes d\'escrime)",   desc : "peut utiliser une arme requérant une formation" },
                { id: 56, name : "Maîtrise (armes lourdes)",      desc : "peut utiliser une arme requérant une formation" },
                { id: 57, name : "Maîtrise (armes mécaniques)",   desc : "peut utiliser une arme requérant une formation" },
                { id: 58, name : "Maîtrise (armes paralysantes)", desc : "peut utiliser une arme requérant une formation" },
                { id: 59, name : "Maîtrise (fléaux)",             desc : "peut utiliser une arme requérant une formation" },
                { id: 60, name : "Maîtrise (lance-pierres)",      desc : "peut utiliser une arme requérant une formation" },
                { id: 61, name : "Méditation",              desc : "bonus au jet d'incantation de Mag sur rituels" },
                { id: 62, name : "Menaçant",                desc : "+10% Intimidation & Torture" },
                { id: 63, name : "Mort-vivant",             desc : "immunisé contre P, T, Ass, poi, mal, émo & esp" },
                { id: 64, name : "Orateur né",              desc : "Personnes affectées par Charisme x 100" },
                { id: 65, name : "Parade éclair",           desc : "échange une attaque rapide pour parade gratuite" },
                { id: 66, name : "Projectile puissant",     desc : "+1 dégâts des sorts de projectiles magiques" },
                { id: 67, name : "Rechargement rapide",     desc : "-1/2 action pour la recharge des armes à dist." },
                { id: 68, name : "Réflexes éclair",         desc : "+5 Ag" },
                { id: 69, name : "Résistance accrue",       desc : "+5% En" },
                { id: 70, name : "Résistance à la magie",   desc : "+10% FM contre la magie" },
                { id: 71, name : "Résistance au Chaos",     desc : "+10% FM VS Chaos et mutations du Chaos" },
                { id: 72, name : "Résistance aux maladies", desc : "+10% En VS maladies" },
                { id: 73, name : "Résistance aux poisons",  desc : "+10% En VS poison" },
                { id: 74, name : "Robuste",                 desc : "pas de malus en M si armure lourde" },
                { id: 75, name : "Sain d'esprit",           desc : "tests folie à 8 PF et automatique à 14" },
                { id: 76, name : "Sang-froid",              desc : "+5% FM" },
                { id: 77, name : "Sans peur",               desc : "immu. peur, Intimidation, troublant, Ter.->Peur" },
                { id: 78, name : "Savoir-faire nain",       desc : "+10 tests des compétences Métier en rapport" },
                { id: 79, name : "Science de la magie",     desc : "permet de lancer des sorts de ce domaine" },
                { id: 80, name : "Sens aiguisés",           desc : "+20% Perception" },
                { id: 81, name : "Sens de l'orientation",   desc : "+10% Orientation" },
                { id: 82, name : "Sixième sens",            desc : "test FM -> intervention du MJ" },
                { id: 83, name : "Sociable",                desc : "+5% Soc" },
                { id: 84, name : "Sombre savoir",           desc : "permet de lancer des sorts de ce domaine" },
                { id: 85, name : "Sur ses gardes",          desc : "dégaine gratuite 1/round" },
                { id: 86, name : "Talent artistique",       desc : "+20% métier artiste & évaluation œuvres d'art" },
                { id: 87, name : "Terrifiant",              desc : "provoque la terreur" },
                { id: 88, name : "Tir de précision",        desc : "ignore 1 point d'armure" },
                { id: 89, name : "Tir en puissance",        desc : "+1 dégât armes de tir" },
                { id: 90, name : "Tireur d'élite",          desc : "+5% CT" },
                { id: 91, name : "Troublant",               desc : "FM pour éviter -10% CC & CT" },
                { id: 92, name : "Valeureux",               desc : "+10% Peur, Terreur +10% FM vs Intimidation" },
                { id: 93, name : "Vision nocturne",         desc : "permet de voir dans la nuit à 30m" },
                { id: 94, name : "Vol",                     desc : "vous pouvez voler (chapitre 6)" }
            ],
            spells: [
                {id:  1,group:"Sort de magie commune (occulte)",name:"Feux follets",diff:6,castduration:'1/2',ingredient:"une luciole (+1)",desc: "Vous créez l\'illusion de plusieurs lumières lointaines  faisant penser à des torches ou des lanternes. Elles apparaissent dans un rayon de 100 mètres de vous (50 cases) et peuvent ensuite être envoyées dans n’importe quelle direction."}, 
                {id:  2,group:"Sort de magie commune (occulte)",name:"Fléchette magique",diff:6,castduration:'1/2',ingredient:"une flechette (+1)",desc:"Vous lancez une fléchette d'énergie magique sur un adversaire situé à 16 mètres (8 cases) ou moins. Une fléchette magique est un projectile magique infligeant des dégâts de 3"},
                {id:  3,group:"Sort de magie commune (occulte)",name:"Luminescence",diff:3,castduration:'1/2',ingredient:"une goutte d'huile pour lampe (+1)",desc:"Tout objet que vous tenez dans votre main se met à luire avec l'intensité d'une lanterne pendant 1 heure ou jusqu'à ce que vous le lâchiez."},  
                {id:  4,group:"Sort de magie commune (occulte)",name:"Mains molles",diff:4,castduration:"1/2",ingredient:"une noisette de beurre (+1)",desc:"Vous forcez le personnage ciblé, se trouvant dans un rayon de 24 mètres (12 cases), à laisser tomber ce qu'il tient dans ses mains.Le sujet peut résister au sort s'il réussit un test de Force Mentale."},
                {id:  5,group:"Sort de magie commune (occulte)",name:"Sommeil",diff:6,castduration:"1/2",ingredient:"un peu de duvet (+1)",desc:"Votre contact plonge votre adversaire dans un sommeil profond pendant 1d10 rounds à moins qu'il ne réussisse un test de Force Mentale. Les personnages endormis sont considérés comme sans défense. Sommeil est un sort de contact."},
                {id:  6,group:"Sort de magie commune (occulte)",name:"Sons",diff:4,castduration:"1/2",ingredient:"une clochette (+1)",desc:"Vous forcez le personnage ciblé, se trouvant dans un rayon de 24 mètres (12 cases), à laisser tomber ce qu'il tient dans ses mains.Le sujet peut résister au sort s'il réussit un test de Force Mentale"},
                {id:  7,group:"Sorts de Magie commune (vulgaire)",name:"Choc",diff:6,castduration:"1/2",ingredient:"une petite épingle (+1)",desc:"Votre contact assomme un adversaire pour un nombre de rounds égal à votre valeur de Magie, à moins qu'il ne réussisse un test de Force Mentale."},
                {id:  8,group:"Sorts de Magie commune (vulgaire)",name:"Flammerole",diff:3,castduration:"1/2",ingredient:"un morceau de silex (+1)",desc:"Une flamme bleue prend vie dans le creux de votre main et y reste tant que vous ne refermez pas les doigts et que vous ne lancez pas d'autre sort. La flamme est trop petite pour causer le moindre dégât en situation de combat."},
                {id:  9,group:"Sorts de Magie commune (vulgaire)",name:"Mauvaise fortune",diff:5,castduration:"3/2",ingredient:"une poupée représentant grossièrement la victime (+1)",desc:"Vous pouvez enchanter un objet (contact) de manière à ce que son porteur soit frappé de malchance. Pendant les prochaines 24 heures, le porteur de l'objet maudit subit un malus égal à votre valeur de Magie pour tous ses tests. Une seule par personnage."},
                {id: 10,group:"Sorts de Magie commune (vulgaire)",name:"Pare-pluie",diff:3,castduration:"1",ingredient:"une feuille fraîchement cueillie (+1)",desc:"Ce sort vous protège de la pluie et autres précipitations. Vous restez parfaitement sec, ainsi que votre équipement, même sous les plus fortes averses. Les effets du sort persistent pendant 1 heure, mais vous pouvez y mettre un terme avant."},
                {id: 11,group:"Sorts de Magie commune (vulgaire)",name:"Rafale",diff:4,castduration:"1/2",ingredient:"une plume d'oiseau (+1)",desc:"D'un mouvement de main, vous créez un bref coup de vent dans les environs. Cette rafale suffit à éteindre les bougies et à disperser les feuilles volantes, mais pas à renverser des objets plus lourds."},
                {id: 12,group:"Sorts de Magie commune (vulgaire)",name:"Sillage spectral",diff:4,castduration:"3/2",ingredient:"une pincée de sable (+1)",desc:"Vous ne laissez aucune trace visible derrière vous pendant 1 heure, quel que soit le type de terrain sur lequel vous évoluez. Quiconque tente un test de Pistage pour vous retrouver subit un malus de -30%."},
                {id: 13,group:"Magie mineure",name:"Alarme magique",diff:8,castduration:"1min",ingredient:"une clochette en cuivre (+1)",desc:"Vous créez une alarme silencieuse centrée sur le point que vous touchez. Si jamais une créature s'approche à moins de 2 mètres (1 case) de ce point, vous en serez immédiatement averti mentalement. Endormi, vous serez alors réveillé..."},
                {id: 14,group:"Magie mineure",name:"Anathème",diff:10,castduration:"1",ingredient:"une clochette (+1)",desc:"Marque de manière invisible la cible. Les créatures vivantes sentent inconsciemment sa présence, ce qui les rend mal à l'aise et hostiles. La cible subit un malus de -20% aux tests de Sociabilité."},
                {id: 15,group:"Magie mineure",name:"Arme consacrée",diff:6,castduration:"1/2",ingredient:"un peu d'eau bénite (+1)",desc:"Vous enchantez une arme de corps à corps, de tir, ou encore jusqu'à 5 munitions. Ces objets n'acquièrent aucun bonus, mais ils sont considérés comme magiques. Les armes consacrées le restent pendant 1 heure."},
                {id: 16,group:"Magie mineure",name:"Armure aethyrique",diff:5,castduration:"1/2",ingredient:"un anneau de cotte de mailles (+1)",desc:"Vous recevez pendant 1 minute (6 rounds) un nombre de points d'Armure égal à votre valeur de Magie sur toutes les parties du corps. Ce sort ne peut pas être lancé si vous portez/enfilez déjà une armure normale."},
                {id: 17,group:"Magie mineure",name:"Beauté",diff:16,castduration:"2",ingredient:"une rose d'hiver (+2)",desc:"Vous semblez beaucoup plus beau que vous ne l'êtes, et ignorez les malus en Sociabilité issus de changements d'apparence, qu'il s'agisse du vieillissement (mutations, marques, chaos, etc). Dure X heure, par point de magie"},
                {id: 18,group:"Magie mineure",name:"Bouclier fantôme",diff:12,castduration:"2",ingredient:"un cercle de sel (+2)",desc:"Aucune créature ayant le trait Éthéré ne peut entrer dans rayon de l'effet, cell dans le rayon doivent en sortir a leur prochaine action. Si vous vous déplacez, le bouclier fantôme prend fin. Dure X heure, par point de magie."},
                {id: 19,group:"Magie mineure",name:"Détermination renforcée",diff:8,castduration:"1/2",ingredient:"un symbole seigneurial (+1)",desc:"La cible bénéficie d'un bonus de +10% au prochain test de Force Mentale."},
                {id: 20,group:"Magie mineure",name:"Dissipation",diff:13,castduration:"1",ingredient:"un petit marteau en argent (+2)",desc:"Vous mettez un terme prématuré à un sort actif (12 mètres / 6 cases). Vous pouvez faire cesser immédiatement le sort ciblé (non rituel / non invocation) par un test réussi de Focalisation, en subissant un malus de -10% par point de Magie du lanceur."},
                {id: 21,group:"Magie mineure",name:"Dormance",diff:8,castduration:"2",ingredient:"un éclat d'obsidienne (+1)",desc:"Votre sort réprime la puissance d'un objet magique, et redevient ordinaire. Vous devez lancer un test de Focalisation Assez difficile (-10%), ou difficile (-20%) si l'objet est tenu. Pour chaque degré de réussite, les pouvoirs de l'objet sont réprimés pendant 1 round."},
                {id: 22,group:"Magie mineure",name:"Grand prêche",diff:4,castduration:"1/2",ingredient:"une corne de taureau (+1)",desc:"La voix de la cible s'entend très distinctement sur un rayon de 500 mètres, sans pour autant casser les oreilles. Le sort dure jusqu'à ce que la cible termine de parler."},
                {id: 23,group:"Magie mineure",name:"Lien",diff:18,castduration:"1",ingredient:"une mince chaîne en argent (+2)",desc:"Vous vous liez à un autre lanceur de sorts consentant, partageant votre Inspiration divine ou Science de la magie. Vous bénéficiez d'un bonus de +1 aux jets d'incantation par degré de réussite qu'obtiennent sur un test de Focalisation des individus liés."},
                {id: 24,group:"Magie mineure",name:"Manipulation distante",diff:4,castduration:"1/2",ingredient:"un petit éventail (+1)",desc:"Vous déplacez de petits objets. Vous pouvez ainsi agir sur un objet léger (enc <= 10) situé dans un rayon de 12 mètres (6 cases) et n'étant pas attaché, ouvrir ou fermer toute porte non verrouillée, faire tomber un objet (enc <= 50)"},
                {id: 25,group:"Magie mineure",name:"Marche dans les airs",diff:11,castduration:"1",ingredient:"une plume d’aigle (+2)",desc:"Vous évoluez brièvement dans les airs, ce qui triple votre valeur de Mouvement, avant de retrouver la terre ferme. Vous pouvez atteindre une hauteur de 6 mètres, ce qui permet de passer par-dessus certains obstacles"},
                {id: 26,group:"Magie mineure",name:"Rejet de la souillure",diff:12,castduration:"1",ingredient:"un brin de fléau-des-sorcières (+2)",desc:"Les créatures dotées de mutations du Chaos qui tentent de vous attaquer au corps à corps doivent réussir un test de FM par round sous peine de ne pouvoir s'en prendre à vous, et donc se tourner vers une autre cible. En cas de succès, -10% CC. 1round/Magie"},
                {id: 27,group:"Magie mineure",name:"Sanctuaire",diff:13,castduration:"1",ingredient:"une serrure (+2)",desc:"Vous lancez ce sort sur une pièce dans laquelle vous vous trouvez. Quiconque tente d'y entrer doit réussir un test de Force Mentale Assez facile (+10%) pour y parvenir. ne stoppe pas les objets. Dure 1 heure par point de magie"},
                {id: 28,group:"Magie mineure",name:"Silence",diff:10,castduration:"1/2",ingredient:"un bâillon (+1)",desc:"Vous réduisez magiquement au silence un personnage situé dans un rayon de 24 mètres (12 cases). La cible peut résister au sort en réussissant un test de Force Mentale, ou ne pourra pas parler pendant un nombre de rounds égal à votre valeur de Magie."},
                {id: 29,group:"Magie mineure",name:"Vazila",diff:4,castduration:"1",ingredient:"un fer à cheval (+1)",desc:"Si quelqu'un tente de vous voler votre cheval, vous en prenez aussitôt conscience. Dure 1 heure par point de magie"},
                {id: 30,group:"Magie mineure",name:"Verrou magique",diff:7,castduration:"1min",ingredient:"une petite clé (+1)",desc:"Vous enchantez une serrure ou un verrou situé à 2 mètres (1case) pendant 1 semaine. L'ouverture ne pourra être crochetée ou forcée. En revanche, le sort ne peut empêcher une porte d'être éventrée ou un coffre d'être fracassé."},
                {id: 31,group:"Magie mineure",name:"Voeu",diff:11,castduration:"1min",ingredient:"le vœu écrit (+2)",desc:"La cible jure de mener à bien une action ou au contraire de s'en abstenir, de son propre gré. Si elle enfreint son vœu, -1d10% Endurance definitive. Le sort est actif jusqu'à ce que le voeu soit exaucé, brisé, ou dissipé."},
                {id: 32,group:"Sort de magie commune (divine)",name:"Bénédiction de célérité",diff:4,castduration:"1/2",ingredient:"une ecaille de serpent (+1)",desc:"+5% Agilité, +1 Mouvement"},
                {id: 33,group:"Sort de magie commune (divine)",name:"Bénédiction de courage",diff:3,castduration:"1/2",ingredient:"une touffe de poil de chien (+1)",desc:"Un personnage sous l'effet de la peur ou de la terreur de retrouver son calme et d'agir à nouveau normalement"},
                {id: 34,group:"Sort de magie commune (divine)",name:"Bénédiction d'endurance",diff:3,castduration:"1/2",ingredient:"un morceau de carapace de torture (+1)",desc:"+5% Endurance, +5% FM"},
                {id: 35,group:"Sort de magie commune (divine)",name:"Bénédiction de protection",diff:7,castduration:"1",ingredient:"un petit objet portant le symbole de votre divinité (+1)",desc:"Quiconque tente de l'attaquer doit réussir un test de Force Mentale Assez facile (+10%). En cas d'échec, l'assaillant doit choisir une autre cible ou entreprendre une autre action"},
                {id: 36,group:"Sort de magie commune (divine)",name:"Bénédiction de puissance",diff:6,castduration:"1/2",ingredient:"un clou en fer (+1)",desc:"+5% CC, +5% Force"},
                {id: 37,group:"Sort de magie commune (divine)",name:"Bénédiction de soin",diff:5,castduration:"1/2",ingredient:"un rameau de houx (+1)",desc:"vos prières rendent 1 point de Blessures à un personnage blessé, lequel ne peut bénéficier d'un tel sort qu'une seule fois par bataille ou rencontre durant laquelle il a perdu des points de Blessures."},
                {id: 38,group:"Sort de magie commune (divine - Manaan)",name:"Bénédiction de Manann",diff:6,castduration:"1/2",ingredient:"un poisson (+1)",desc:"vos prières permettent à un personnage de retenir son souffle quand il reste sous l'eau trop longtemps."},
                {id: 39,group:"Sort de magie commune (divine - Manaan)",name:"Bénédiction du marin",diff:5,castduration:"1/2",ingredient:"un bout de corde (+1)",desc:"+5% en Canotage, Natation et Navigation"},
                {id: 40,group:"Sort de magie commune (divine - Morr)",name:"Bénédiction de Morr",diff:5,castduration:"1/2",ingredient:"une plume de corbeau (+1)",desc:"Le personnage est immunisé contre la Peur et la Terreur suscitées par les morts-vivants."},
                {id: 41,group:"Sort de magie commune (divine - Morr)",name:"Bénédiction de passage",diff:4,castduration:"1/2",ingredient:"une tenue funéraire déchirée (+1)",desc:"Toute arme que manie le personnage est considérée comme magique pour ce qui est de blesser les mortsvivants."},
                {id: 42,group:"Sort de magie commune (divine - Myrmidia)",name:"Bénédiction de fureur",diff:5,castduration:"1/2",ingredient:"une bille de cuivre polie (+1)",desc:"Vos prières passionnées remplissent un personnagede la fureur du juste, ce qui lui permet de rejouer une attaque au corps à corps ratée."},
                {id: 43,group:"Sort de magie commune (divine - Myrmidia)",name:"Bénédiction de Myrmidia",diff:4,castduration:"1/2",ingredient:"une pierre d'aigle (+1)",desc:"La cible peut agir en premier au prochain round, quel que soit l'ordre d'initiative. Néanmoins, si deux personnages ont un pouvoir leur permettant d'agir en premier, ils agissent dans l'ordre normal d'initiative."},
                {id: 44,group:"Sort de magie commune (divine - Ranald)",name:"Bénédiction de chance",diff:5,castduration:"1/2",ingredient:"un dé (+1)",desc:"votre bénédiction confère de la chance à un personnage, ce qui lui permet de rejouer son prochain jet raté, mais avec un malus de -10%. En cas de succès, le test est réussi."},
                {id: 45,group:"Sort de magie commune (divine - Ranald)",name:"Bénédiction de Ranald",diff:5,castduration:"1/2",ingredient:"un gant dans une bourse (+1)",desc:"vos prières bénissent un personnage de la main de Ranald, lui conférant un bonus de +5% aux tests de Crochetage et d'Escamotage."},
                {id: 46,group:"Sort de magie commune (divine - Shallya)",name:"Bénédiction de calme",diff:5,castduration:"1/2",ingredient:"une coupe remplie d'eau (+1)",desc:"S'il a gagné un point de Folie durant la minute écoulée, il a droit à un test de Force Mentale pour surmonter l'attaque mentale et se défaire de ce point de Folie. Une fois par combat ou rencontre."},
                {id: 47,group:"Sort de magie commune (divine - Shallya)",name:"Bénédiction de Shallya",diff:3,castduration:"1",ingredient:"une infusion (+1)",desc:"La cible a aussitôt droit à un autre test d'Endurance pour réduire la durée de la maladie d'un jour par degré de réussite. Cette prière ne peut être dite qu'une fois par maladie et par personne."},
                {id: 48,group:"Sort de magie commune (divine - Sigmar)",name:"Bénédiction de Sigmar",diff:4,castduration:"1/2",ingredient:"un fragment de fer météoritique (+1)",desc:"Avec cette prière, l'arme de prédilection de Sigmar est investie de la puissance du dieu. Vous bénissez un marteau de guerre afin qu'il inflige +1 aux dommages."},
                {id: 49,group:"Sort de magie commune (divine - Sigmar)",name:"Bénédiction d'unification",diff:7,castduration:"1/2",ingredient:"deux aimants (+1)",desc:"Si la cible souhaite attaquer un nain ou un humain de l'Empire, physiquement ou verbalement, elle doit jouer un test de Force Mentale Assez facile (+10%). En cas d'échec, elle perd ses actions du round et secoue la tête, dubitave."},
                {id: 50,group:"Sort de magie commune (divine - Taal)",name:"Bénédiction du chasseur",diff:5,castduration:"1/2",ingredient:"une flèche (+1)",desc:"Votre bénédiction confère à un personnage un bonus de +5% aux tests de Braconnage et de Pistage."},
                {id: 51,group:"Sort de magie commune (divine - Taal)",name:"Bénédiction de Taal",diff:6,castduration:"1/2",ingredient:"une outre d'eau (+1)",desc:"Vos prières confèrent à un personnage un bonus de +10% au prochain test d'Orientation ou de survie, tant qu'il est joué pendant la durée du sort."},
                {id: 52,group:"Sort de magie commune (divine - Ulric)",name:"Bénédiction de la main rouge",diff:6,castduration:"1/2",ingredient:"le sang d'un loup ayant péri d'une mort violente (+1)",desc:"La cible entre aussitôt en Frénésie. Si le personnage a le talent Frénésie, il reste enragé jusqu'à la fin du combat ; dans le cas contraire, la Frénésie dure 1 minute (6 rounds) ou jusqu'à la fin du combat s'il s'achève avant."},
                {id: 53,group:"Sort de magie commune (divine - Ulric)",name:"Bénédiction d'Ulric",diff:6,castduration:"1/2",ingredient:"une dent de loup (+1)",desc:"Vos mots très durs et les prières que vous aboyez bénissent un personnage en lui conférant la sauvagerie d'Ulric, il ajoute +1 au résultat de ses coups critiques pour 6 rounds."},
                {id: 54,group:"Sort de magie commune (divine - Verena)",name:"Bénédiction de sagesse",diff:6,castduration:"1",ingredient:"une plume de chouette (+1)",desc:"Votre prière solennelle confère une bonne dose de sagesse à un personnage, ce qui lui permet de rejouer un test d'Intelligence raté."},
                {id: 55,group:"Sort de magie commune (divine - Verena)",name:"Bénédiction de Verena",diff:3,castduration:"1/2",ingredient:"une touffe de poils de chiens (+1)",desc:"Tant qu'elle est sous l'effet de ce sort, la cible doit résussir un test de Force Mentale Assez facile (+10%) s'il souhaite commettre un crime. En cas d'échec, soudain rongé par la culpabilité, la cible ne passe pas à l'acte."},
                {id: 56,group:"Le domaine de Grunndred",name:"Coups douloureux",diff:8,castduration:"1/2",ingredient:"un nerf de bœuf (+1)",desc:"N'infligent pas plus de dommages, mais la douleur est insoutenable. Ainsi, tous ceux que vous touchez au combat subissent un malus de -10% à tous les tests effectués au round qui suit. N'affecte ni les démons si les morts-vivants."},
                {id: 57,group:"Le domaine de Grunndred",name:"Coup terrorisant",diff:14,castduration:"1/2",ingredient:"une goutte de votre propre sang (+2)",desc:"Toute créature que vous touchez et à laquelle vous infligez au moins un point de Blessures doit réussir un test de Terreur."},
                {id: 58,group:"Le domaine de Grunndred",name:"Manteau du voleur de bétail",diff:12,castduration:"1",ingredient:"vêtements voilant les sons (+2)",desc:"Applique les résultats de vos tests de Déplacement silencieux et Dissimulation au groupe, humanoïdes et grandss animaux (betail, cheval). Jusqu'a 10 humains et 20 animaux / point de magie. La moitié pour les animaux plus petits (chèvres, moutons)."},
                {id: 59,group:"Le domaine de Grunndred",name:"Menaces de terreur",diff:20,castduration:"1/2",ingredient:"un fouet (+2)",desc:"Disposez le grand gabarit où vous le souhaitez tant qu'il demeure à portée. Toutes les cibles doivent jouer un test de Terreur. Celles qui le ratent subissent un coup d'une valeur de dégâts de 4, sans oublier qu'elles sont victimes des effets de la terreur."},
                {id: 60,group:"Le domaine de Grunndred",name:"Mine redoutable",diff:17,castduration:"1",ingredient:"un membre d'une victime (+2)",desc:"vos prières vous confèrent le talent Effrayant. pour 1min/ point de magie"},
                {id: 61,group:"Le domaine de Grunndred",name:"Regard furieux",diff:4,castduration:"1",ingredient:"un masque en forme de crâne (+1)",desc:"Vous lancez un regard furieux à la cible et entonnez une prière. La cible doit aussitôt jouer un test de Peur."},
                {id: 62,group:"Le domaine de Händrich",name:"Aqcuisition du bourgeois",diff:9,"castduration":"1min",ingredient:"10% transactions réalisées, minimum 5co (+2)",desc:"vous implorez votre dieu de faire en sorte qu'un marchant local accepte de traiter avec vous. Pendant 1 heure par point de Magie, vous bénéficiez de +20% aux tests de Commérage effectués pour vérifier la disponibilité (cf. page 104 de WJDR)."},
                {id: 63,group:"Le domaine de Händrich",name:"Bagou",diff:11,"castduration":"1/2",ingredient:"10% transactions réalisées, minimum 5co (+2)",desc:"vous murmurez quelques prières au dieu des marchands et chacune de vos transactions semble se dérouler à merveille. Vous bénéficiez d'un bonus de +10% aux tests de Marchandage et doublez le nombre de degrés de réussite obtenus."},
                {id: 64,group:"Le domaine de Händrich",name:"Bonne affaire",diff:12,"castduration":"1",ingredient:"5% valeur des objets estimés, minimum de 3 co (+2)",desc:"vous priez Händrich et lui demandez son aide pour estimer un bien. Vous bénéficiez d'un bonus de +20% aux tests d'Évaluation et doublez le nombre de degrés de réussite obtenus."},
                {id: 65,group:"Le domaine de Händrich",name:"Bouche à oreille",diff:10,"castduration":"2",ingredient:"5 co (+1)",desc:"Tous les personnages situés à portée parlent en bien des transactions qu'ils ont effectuées avec vous. Bénéficiez d'un bonus de +10% aux tests de Sociabilité joués contre tous ceux qui ont eu vent de ces rapports positifs."},
                {id: 66,group:"Le domaine de Händrich",name:"Le temps c'est de l'argent",diff:19,"castduration":"1/2",ingredient:"10% de la dette (+2)",desc:"vous suppliez Händrich  de ne pas vous maudire pour ne pas vous être acquitté de la dette que vous avez contractée envers lui, partant du principe que plus il se montrera patient, plus le jeu en vaudra la chandelle. Si vous parvenez à lancer le sort, vous bénéficiez d'une semaine supplémentaire pour payer vos dettes envers le dieu des Marchands (c'est-à-dire jusqu'au Marktag suivant). En cas d'échec, vos dettes sont doublées et vous êtes aussitôt maudit."},
                {id: 67,group:"Le domaine de Händrich",name:"Loyauté achetée",diff:16,"castduration":"1/2",ingredient:"20% de la transaction (+2)",desc:"vous priez pour que Händrich bénisse la transaction et que chacun des partis respecte l'accord. Pour passer outre un marché béni par loyauté achetée, le personnage doit d'abord réussir un test de Force Mentale. En cas d'échec, il doit faire tout ce qui est en son pouvoir pour s'assurer de remplir sa part du marché. En outre, si le personnage manque à sa parole, il subit un malus de -10% aux tests de Charisme, Évaluation et Marchandage jusqu'à une semaine après le prochain Marktag."},
                {id: 68,group:"Le domaine de Khaine",name:"Dague de Khaine",diff:5,"castduration":"1/2",ingredient:"un doigt d'homme assassiné (+1)",desc:"vos prières imprègnent votre dague de la soif de sang de Khaine. Votre arme de corps à corps, qui doit impérativement être une dague, compte comme une arme magique accompagnée de l'attribut précise."},
                {id: 69,group:"Le domaine de Khaine",name:"Dard caudal",diff:9,"castduration":"1/2",ingredient:"une fiole de venin de scorpion (+1)",desc:"vos prières attirent le pouvoir mortel du scorpion jusqu'à votre lame. Votre arme de corps à corps, qui doit impérativement être une dague, inflige +1 dommage. De plus, si le coup fait perdre des points de Blessures, la victime doit réussir un test d'Endurance sous peine de perdre 1 point de Blessures supplémentaire par point dont vous disposez en Magie."},
                {id: 70,group:"Le domaine de Khaine",name:"Lame cachée",diff:7,"castduration":"1/2",ingredient:"une queue écrasée de scorpion (+1)",desc:"vous psalmodiez vos prières à la face de votre ennemi, détournant son attention de la véritable menace qui pèse sur lui : la lame cachée. Un poignard surgit alors depuis un angle improbable, tenu par un bras qui semble être le vôtre, ce n'est pourtant pas possible. Jouez un test de Capacité de Combat au prix d'une action gratuite. En cas de succès, vous infligez un coup d'une valeur de dégâts égale à votre BF, comme si vous aviez porté un coup avec une arme accompagnée de l'attribut précise."},
                {id: 71,group:"Le domaine de Khaine",name:"Le seigneur du meurtre",diff:20,"castduration":"1",ingredient:"le sang d'une créature ayant une valeur d'Attaques de 5 (+2)",desc:"vous psalmodiez votre prière et êtes investi du pouvoir mortel de Khaine. Vous gagnez +1 en Attaques par point de Magie dont vous disposez, et pouvez entreprendre l'action d'attaque rapide au prix d'une demi-action. Les attaques supplémentaires ne peuvent être utilisées que conjointement à une dague. Vous restez limité à une action d'attaque par round."},
                {id: 72,group:"Le domaine de Khaine",name:"Main ensanglantée",diff:12,"castduration":"1/2",ingredient:"une fiole de sang d'un homme assassiné (+2)",desc:"vous psalmodiez de noires prières au Prince Scorpion et vos mains se mettent à saigner, ce qui fait de vous un élu de Khaine. En réalité, elles dégoulinent du sang de l'individu assassiné et éclaboussent vos adversaires au combat. Tout ennemi désirant vous charger doit avant tout réussir un test de Force Mentale. En cas d'échec, l'assaillant perd son actio nde charge du round, pétrifié par la vision de tout ce sang. En outre, tous ceux qui vous affrontent subissent un malus de -10% aux tests de Capacité de Combat et d'Agilité car ils tentent instinctivement d'éviter le terrifiant ichor."},
                {id: 73,group:"Le domaine de Khaine",name:"Tourment éternel",diff:16,"castduration":"10 minutes",ingredient:"le cœur intact d'un cadavre (+2)",desc:"vous prononcez vos prières au-dessus d'un cadavre frais et revendiquez son âme au nom de Khaine. L'esprit (et le cadavre) est désormais immunisé contre les sorts de Nécromancie et ne connaîtra jamais la paix de Morr car il est expédié dans le Noir Royaume du Seigneur du Meurtre. On dit que ceux qui sont envoyés auprès de Khaine reviennent parfois pour obéir aux ordres de ses prêtres. Si cette rumeur est fondée, ce type d'événement est très rare."},
                {id: 74,group:"Le domaine de Manann",name:"Bénédiction de l'albatros",diff:20,"castduration":"1min",ingredient:"une bouteille de vin et un poisson (+2)",desc:"vous priez Manann depuis le pont d'un navire à flot (rien n'empêche qu'il mouille dans un port). Une fois l'invocation terminée, un albatros descend du ciel et suit l'embarcation où qu'elle se rende. L'animal attend jusqu'à 1 heure que le navire prenne la mer ; après cela, il reste en sa compagnie jusqu'à la mort ou jusqu'à ce que le navire fasse escale dans un port. Tant que le volatile est présent, l'embarcation ne peut pas couler, quels que soient les dégâts subis. Cependant, l'équipage n'est pas protégé et peut parfaitement passer par-dessus bord ou disparaître par d'éventuelles brèches causées dans la coque."},
                {id: 75,group:"Le domaine de Manann",name:"Bon vent",diff:16,"castduration":"1",ingredient:"un soufflet (+2)",desc:"Manann bénit le navire, qui bénéficie alors de vents favorables. Le vent souffle depuis un angle idéal pour que l'embarcation arrive à destination, et suffisammant fort pour qu'il se déplace à sa vitesse maximale (sans risquer l'intégrité des voiles ou de la coque). Le sort fonctionne, que vous connaissiez ou non le moyen de vous rendre à destination, tant que cette dernière vous est connue (il faut que vous y soyez déjà passé). Dans le cas contraire, vous devez préciser la direction à suivre. Le navire doit contourner tous les dangers qui se présentent, mais le vent confère un bonus de +10% aux tests en découlant."},
                {id: 76,group:"Le domaine de Manann",name:"Calme plat",diff:16,"castduration":"1",ingredient:"une dague sculptée dans un os de baleine (+2)",desc:"vous privez de vent les voiles d'un navire situé à portée. L'embarcation est parfaitement encalminée et reste immobile, à moins qu'elle ne dispose de rames. SI ce sort est lancé au beau milieu d'une tempête, il crée une zone de calme plat autour du navire et dans un rayon de 100 mètres de celui-ci. La mer est d'huile et le vent inexistant, alors que les bourrasques, la pluie et les vagues se déchaînent au-delà du périmètre protégé. Calme plat est centré sur le navire. Si ce dernier se déplace, la zone l'accompagne donc."},
                {id: 77,group:"Le domaine de Manann",name:"Déflagration marine",diff:10,"castduration":"1/2",ingredient:"une fiole d'eau de mer (+1)",desc:"un véritable torrent d'eau salée jaillit de votre main tendue. Il s'agit d'un projectile magique d'une valeur de dégâts de 4. La cible d'une déflagration marine doit réussir un test de Force sous peine d'être projeté au sol. Le sort éteint également les flammes dans un rayon de 4 mètres. L'eau venant tout droit de l'océan, il n'est pas rare qu'ele soit accompagnée de sable, de poissons et de crustacés, ces derniers étant assurément étonnés du sort qui leur est réservé."},
                {id: 78,group:"Le domaine de Manann",name:"Malédiction de l'albatros",diff:19,"castduration":"1",ingredient:"une plume d'albatros (+2)",desc:"nul ne doit prendre la colère des dieux à la légère. Vous maudissez les ennemis de Manann situés à portée. Utilisez le grand gabarit. Les cibles voient la valeur critique de tout coup critique subi augmenter de 2 points."},
                {id: 79,group:"Le domaine de Manann",name:"Marche sur les eaux",diff:14,"castduration":"1",ingredient:"un dytique desséché (+2)",desc:"désormais, vous pouvez marcher sur l'eau, mais également vous déplacer en milieu marécageux comme s'il s'agissait de terre ferme."},
                {id: 80,group:"Le domaine de Manann",name:"Marée monstre",diff:5,"castduration":"1",ingredient:"une poignée de sel (+1)",desc:"vous psalmodiez cette prière à l'attention d'un navire  situé dans votre champ de vision. Tous les tests de Canotage ou Navigation visant à contrôler ce navire subissent un malus de -10%."},
                {id: 81,group:"Le domaine de Manann",name:"Navigation bénie",diff:5,"castduration":"1min",ingredient:"une bouteille de vin (+1)",desc:"vous priez pour que Manann accorde sa bénédiction au départ d'un voyage en mer. Tous les tests d'Orientation ensuite entrepris bénéficient d'un bonus +10% tant que vous restez à bord. Le sort dure jsuqu'à votre prochain port d'escale."},
                {id: 82,group:"Le domaine de Manann",name:"Œil de pêcheur",diff:9,"castduration":"1/2",ingredient:"une petite ligne de pêche (+1)",desc:"l'œil de pêcheur vous permet de savoir où trouver la créature cherchée dans la mer. En lançant le sort, il vous suffit de nommer une créature ordinaire. Vous prenez alors conscience du meilleur endroit où la trouver dans votre champ de vision. Si vous pêchez, c'est là où vous avez intérêt à jeter votre filet ou votre ligne. Si vous cherchez des coquillages, c'est sans doute là où vous avez intérêt à plonger."},
                {id: 83,group:"Le domaine de Manann",name:"Pied marin",diff:12,"castduration":"1/2",ingredient:"un éclat de vois tiré d'une épave (+2)",desc:"votre prière maudit un personnage, qui a alors le sentiment de se trouver sur le pont d'un navire pris dans la tempête. La cible doit réussir un test d'Agilité par round pourrester debout. En cas d'échec, il lui faut entreprendre une demi-action et réussir un test d'Agilité pour se relever. Si elle doit jouer un tel test, elle subit un malus de -30% qui se cumule avec les malus déjà applicables."},
                {id: 84,group:"Le domaine de Manann",name:"Respiration aquatique",diff:7,"castduration":"1",ingredient:"un poisson vivant (+1)",desc:"votre pouvoir allié au pouvoir de Manann confère la capacité de respirer sous l'eau comme s'il s'agissait d'air."},
                {id: 85,group:"Le domaine de Manann",name:"Visage du noyé",diff:8,"castduration":"1/2",ingredient:"une tasse d'eau salée (+1)",desc:"vous psalmodiez votre prière en direction d'un personnage situé à portée. Ses poumons sont aussitôt remplis d'eau salée, ce qui l'empêche de parler et complique nombre d'actions en ce qui le concerne. Tant que l'eau est présente dans ses poumons, il subit un malus de -10% à tous les tests effectués. À chaque round, la cible a le droit d'entreprendre une demi-action pour jouer un test d'Endurance et recracher l'eau, ce qui met un terme au sort. Si la cible ne réussit pas un test d'Endurance pendant qu'elle est sous l'effet du visage du noyé, elle subit un coup d'une valeur de dégâts de 2 au moment où celui-ci s'achève."},
                {id: 86,group:"Le domaine de Morr",name:"Destruction de mort-vivant",diff:13,"castduration":"1/2",ingredient:"un pieu en bois (+2)",desc:"vous infligez un coup d'une valeur de dégâts de 8 à un adversaire ayant le talent Mort-vivant."},
                {id: 87,group:"Le domaine de Morr",name:"Discours de Morr",diff:20,"castduration":"1min",ingredient:"un grand miroir (+2)",desc:"l'esprit d'un humain mort apparaît devant vous et répond à un nombre de questions égal à votre valeur de Magie. Vous devez cependant disposer de tout ou partie du corps qui accueillait jadis cet esprit. Ce dernier ne saurait mentir et doit répondre, mais il choisit le volume exact d'informations dévoilées. Il est limité aux informations qu'il connaissait de son vivant. Si on lui pose une question à laquelle il n'a pas de réponse, il ne dit rien, mais ladite question entre dans le quota auquel vous avez droit. L'esprit quittant le royaume des morts avec la permission de Morr, tout corps ne peut être pris pour cible qu'une seule fois par ce sort, quel que soit celui qui le lance. Que la première incantation soit couronnée de succès ou non, toute tentative ultérieure visant ce même corps attire automatiquement la colère des dieux. Vous devez poser l'ensemble de vos questions dans un délai de 1 minute par point de Magie. Une fois ce laps de temps écoulé, l'esprit s'en retourne au royaume des morts."},
                {id: 88,group:"Le domaine de Morr",name:"Ligne de seuil",diff:11,"castduration":"1",ingredient:"un morceau de charbon (+2)",desc:"vous tracez au sol une ligne longue de 8 mètres tout en psalmodiant à l'attention de Morr. Tout mort-vivant doit réussir un test de Force Mentale pour la franchir ; ceux qui en sont dépourvus échouent automatiquement. Cette ligne conserve son pouvoir jusqu'au lever du soleil, chaque mort-vivant n'ayant droit qu'à une tentative pour la franchir. Si cette ligne ne constitue pas un cercle, les morts-vivants peuvent parfaitement en faire le tour. En règle générale, elle prend donc la forme d'une boucle ou est tracée en travers d'un pasasge."},
                {id: 89,group:"Le domaine de Morr",name:"Message onirique",diff:10,"castduration":"1min",ingredient:"un bout de laine (+1)",desc:"vous apapraissez dans les songes d'un personnage et délivrez un message ne dépassant pas 30 secondes. Le rêveur doit être quelqu'un que vous avez roncontré personnellement, doit parler une langue que vous connaissez et doit dormir au moment où le sort est lancé."},
                {id: 90,group:"Le domaine de Morr",name:"Préservation des morts",diff:5,"castduration":"1min",ingredient:"un morceau de fruit frais (+1)",desc:"vous enrayez provisoirement la décompositio nd'un cadavre, ce qui vous permet de le préserver. Tant que le sort faite effet, le corps ne peut pas être animé par un sort de Nécromancie."},
                {id: 91,group:"Le domaine de Morr",name:"Pressentiment",diff:8,"castduration":"1/2",ingredient:"un petit miroir (+2)",desc:"en lançant pressentiment, vous jouissez d'un aperçu soudain d'un événement à venir, même si les circonstances précises de celui-ci vous échappent. Vous bénéficiez d'un bonus de +10% à un test effectué dans les 24 heures, sans pour autant être obligé de déclarer son utilisation avant de faire le jet. Vous ne pouvez profiter que d'un pressentiment à la fois. Si vous utilisez le sort plus d'une fois au cours d'une période de 24 heures, vous devez réussir un test de Force Mentale par incantation supplémentaire sous peine de gagner 1 point de Folie."},
                {id: 92,group:"Le domaine de Morr",name:"Repos éternel",diff:16,"castduration":"10 minutes",ingredient:"un pieu en bois parfumé (+2)",desc:"vous psalmodiez une prière solennelle au-dessus d'un cadavre, vous assurant ainsi que son âme prend bien la direction du Royaume de Morr. Le cadavre est à jamais immunisé contre les sorts de Nécromancie. Si la cible est un mort-vivant, elle doit réussir un test de Force Mentale sous peine d'être aussitôt détruite. Si la cible n'a pas de Force Mentale, elle n'a droit à audun test pour éviter la destruction. Le prêtre doit toucher la cible totu au long de l'incantation. Ce rituel est pratiqué sur de nombreux cadavres du Vieux Monde, mais seuls les individus ayant le talent Inspiration divine peuvent user de son pouvoir."},
                {id: 93,group:"Le domaine de Morr",name:"Rêve directeur",diff:15,"castduration":"1min",ingredient:"un bâtonnet d'encens (+2)",desc:"vous recevez un rêve au sujet d'une ligne de conduite que Morr veut vous voir adopter. Ce rêve est toujours clair mais jamais complet. De plus, il n'aborde jamais les motivation de Morr. La vision vous montre généralement en train de réaliser une action précise, en un lieu précis. D'une façon ou d'une autre, vous connaissez le nom du lieu en question, son emplacement exact et la date convenue, mâma si tout ne vous paraît pas clair de prime abord. Vous n'avez aucun contrôle sur le contenu du rêve et rien ne vous garantit que vous survivrez aux actions entrevues. Des incantations successives délivrent quasi systématiquement le même rêve, du moins jusqu'à ce que le prêtre ait fait ce qui lui est demandé ou que le temps qui lui est imparti soit écoulé. Ne pas se conformer au rêve revient à enfreindre les règles du culte ; si vous avez prié pour bénéficier d'un tel rêve, vous avez tout interrêt à l'observer."},
                {id: 94,group:"Le domaine de Morr",name:"Révélation",diff:12,"castduration":"1min",ingredient:"un cheveu, un rognure d'ongle ou une goutte de sang de la cible (+2)",desc:"Morr vous offre une vision abordant un fait important de l'avenir d'un personnage. Souvent, il s'agit de la façon dont il va mourir, mais pas toujours. Le fait est toujours isolé ; vous apprendrez ainsi que quel'un va être tué par des orques, mais pas où ni comment. Si le sort est lancé sur un personnage joueur, le MJ doit utiliser le fait en question dans le sens de l'aventure en cours. Révélation ne peut être lancé qu'une fois par personnage. Le MJ demeure l'arbitre ultime quant à la qualité de l'information apprise."},
                {id: 95,group:"Le domaine de Morr",name:"Signe du corbeau",diff:9,"castduration":"1/2",ingredient:"une plume de corbeau (+1)",desc:"vous invoquez un corbeau fantomatique (le symbole de Morr) qui projette l'ombre de la mort sur le champ de bataille. Vous et vos alliés bénéficiez d'un bonus de +1 aux jets de dégâts pendant un nombre de rounds égal à votre valeur de Magie."},
                {id: 96,group:"Le domaine de Morr",name:"Sommeil des morts",diff:20,"castduration":"1",ingredient:"une petite faux en argent (+2)",desc:"vos prières plongent un groupe d'ennemis dans un profond sommeil. Utilisez le grand gabarit. Toutes les créatures affectées s'endorment pour 1d10 rounds, à moins de réussir un test de Force Mentale. Les personnages endormis sont sans défense. Cette prière est souvent employée pour apaiser la famille d'un défunt, en particulier ses membres les plus bruyants."},
                {id: 97,group:"Le domaine de Morr",name:"Vision de Morr",diff:15,"castduration":"1min",ingredient:"un champignon ramassé sur une tombe (+2)",desc:"vous priez et demandez à Morr de vous accorder une vision concernant un problème auquel vous faites actuellement face. Le MJ effectue secrètement un test de Sociabilité à votre place. En cas de réussite, vous recevez une vision correspondant à votre problème, qui peut vous donner des indices sur les moyens de le résoudre. En cas d'échec, la vision transmise est étrange et semble signifier quelque chose, mais elle n'a en réalité ni queue ni tête."},
                {id: 98,group:"Le domaine de Myrmidia",name:"Appel de la furie",diff:15,"castduration":"1",ingredient:"une pointe de lance brisée (+2)",desc:"vos prières passionnées inspirent à vos alliés une haine farouche de leurs ennemis. Tous les alliés situés à portée peuvent retenter leur première attaque ratée de chaque round."},
                {id: 99,group:"Le domaine de Myrmidia",name:"Art du combat",diff:10,"castduration":"1",ingredient:"un faisceau de bâtons (+1)",desc:"vous insufflez à vos alliés toute la maîtrise de Myrmidia. Tous les alliés situés à portée bénéficient d'un bonus de +10% en Capacité de Combat."},
                {id:100,group:"Le domaine de Myrmidia",name:"Bouclier de Myrmidia",diff:20,"castduration":"3/2",ingredient:"un bouclier (+2)",desc:"vos alliés jouissent de la protection de Myrmidia. Tous les alliés situés à portée gagnent +1 point d'Armure sur toutes les zones, jusqu'à un maximum de 5PA."},
                {id:101,group:"Le domaine de Myrmidia",name:"Commandant de légion",diff:6,"castduration":"1/2",ingredient:"un bec d'aigle (+1)",desc:"vous priez Myrmidia pour qu'elle appuie vos paroles par sa force, puis criez vos ordres. Jusqu'à la fin du round, toutes les cibles situées dans votre champ de vision entendent vos ordres, quel que soit leur éloignement. De plus, vous bénéficiez d'un bonus de +10% aux tests de Commandement visant à influencer la cible à ce round."},
                {id:102,group:"Le domaine de Myrmidia",name:"Commandement inspiré",diff:7,"castduration":"1",ingredient:"un bâton (+1)",desc:"vous jouissez d'une aura d'autorité, vos prières inspirant à vos alliés une grande foi en vos capacités. Vous bénéficiez d'un bonus de +20% aux tests de Commandement et de Connaissances académiques (stratégie/tactique). De plus, les alliés situés à portée peuvent retenter tout test de Peur ou de Terreur manqué pendant la durée du sort."},
                {id:103,group:"Le domaine de Myrmidia",name:"Courroux vengeur",diff:7,"castduration":"1",ingredient:"le sang d'une femme abusée (+1)",desc:"vos prières vous emplissent d'une colère et d'une haine sans borne. Vous avez le droit de retenter tout test de Capacité de Combat ou de Capacité de Tir raté, mais une seule fois. Tant que le sort fait effet, vous devez attaquer le plus proche ennemi en combat au corps à corps et toutes vos attaques doivent prendre la forme d'attaques à outrance, d'attaques rapides ou d'attaques de charge. De plus, vous ne pouvez fuir ou battre en retraite."},
                {id:104,group:"Le domaine de Myrmidia",name:"Dévotion de la vierge au bouclier",diff:17,"castduration":"1",ingredient:"un étendard à l'image de l'aigle (+2)",desc:"les prières que vous psalmodiez emplissent les enfants de Myrmidia du dévouement de ses plus courageuses vierges au bouclier. Tous les myrmidéens, Tiléens et Estaliens situés à portée gagnent le talent Sans peur."},
                {id:105,group:"Le domaine de Myrmidia",name:"Frappe éclair",diff:14,"castduration":"1",ingredient:"un talisman gravé d'un éclair (+2)",desc:"investi de la puissance de Myrmidia, vous bénéficiez de +1 en Attaques et pouvez entreprendre une action d'attaque rapide au prix d'une demi-action. Vous ne pouvez toujours entreprendre qu'une seule action d'attaque par round."},
                {id:106,group:"Le domaine de Myrmidia",name:"Hébétement",diff:16,"castduration":"1/2",ingredient:"un masque en cuivre martelé (+2)",desc:"vous prenez l'apparence furibonde de Myrmidia. Tout adversaire à qui vous portez un coup au corps à corps doit effectuer un test de Terreur. Chaque attaque réussie entraîne un nouveau test. Les créatures qui ratent leur test sont terrifiées."},
                {id:107,group:"Le domaine de Myrmidia",name:"Lance de Myrmidia",diff:5,"castduration":"1/2",ingredient:"une pierre à aiguiser (+1)",desc:"votre arme, qui doit impérativement être une lance, est investie de la puissance de Myrmidia. Elle est considérée comme magique et dotée de l'attribut perforante."},
                {id:108,group:"Le domaine de Myrmidia",name:"Soleil ardent",diff:20,"castduration":"1/2",ingredient:"une page mentionnant Furie extraite du Bellona Myrmidia (+2)",desc:"Myrmidia répond à vos prières à l'aide de flammes aveuglantes. Centrez le grand gabarit sur vous-même. Les créatures affectées (amis et ennemis, mais pas vous) subissent un coup d'une valeur de dégâts de 3 qui ne tient pas compte de l'armure. De plus, chaque cible doit réussir un test de Force Mentale sous peine d'être assommée au round suivant. Elle chancelle alors, à moitié aveuglée et tentant d'éteindre les flammèches qui dévorent ses vêtements."},
                {id:109,group:"Le domaine de Myrmidia",name:"Vision de l'aigle",diff:13,"castduration":"2",ingredient:"une lentille cerclée d'or (+2)",desc:"répondant à vos prières, Myrmidia vous envoie des visions d'un affrontement proche comme si vous étiez un aigle volant au-dessus du champ de battaille. Vous pouvez distinguer un combat précis se déroulant dans un rayon d'une lieue (4 km) par point de Magie. Vous distinguez toutes les actions principales et déplacements des participants, et bénéficiez ainsi d'un bonus de +10% aux tests de Connaissances académiques (stratégie/tactique) liés à cet affrontement. De plus, le régiment allié et les chefs d'unité sont dans votre champ de vision. Ceci dit, on considère que vous n'êtes pas conscient des combats qui vous entourent, si bien que vos adversaires bénéficient d'un bonus de +30% aux tests visant à vous toucher. Enfin, vous ne pouvez effectuer que des actions d'incantation."},
                {id:110,group:"Le domaine de Ranald",name:"Abondante fortune",diff:20,"castduration":"1",ingredient:"une paire d'osselets argentés (+2)",desc:"ce sort est identique à bonne fortune, se ce n'est qu'il vous affecte, ainsi que tous les alliés situés à portée. Chaque individu a le droit de décharger le sort sur un test de caractéristique ou de compétence différent."},
                {id:111,group:"Le domaine de Ranald",name:"Abondance ou disette",diff:16,"castduration":"14",ingredient:"une feuille de chou imprimée (+2)",desc:"vous implorez Ranald de manipuler les prix d'un objet ou service. Abondance ou disette pousse en quelque sorte les autochtones à croire que l'objet va devenir beaucoup plus répandu, si bien qu'ils en réduisent le prix, ou au contraire qu'il va devenir beaucoup plus rare, auquel cas sa valeur augmente. Choisissez l'objet ou service visé par le sort. Si vous décidez de le banaliser, son prix chute de 10%. Ce sort ne touche que les transactions se déroulant entre vous et autrui, tant que vous négociez le prix. Tous les arcs (et, par extension, les flèches) pourront ainsi devenir meilleur marché, mais ce ne sera pas le cas des autres armes à distance. De même, le prix du pain et des céréales pourra augmenter, mais cela n'affectera pas les autres denrées alimentaires. Les rumeurs provoquées par le sort ont tendance à persister après qu'il arrive à terme, une utilisation excessive pouvant même déclencher des émeutes, notamment lorsque l'on parle de disette."},
                {id:112,group:"Le domaine de Ranald",name:"Affaire en or",diff:10,"castduration":"1min",ingredient:"une pièce (+1)",desc:"Ranald vous guide vers la source la moins chère pour un type de bien précis. Lorsque vous entonnez cette prière, vous décidez de la zone géographique, du type et de la quantité de biens, sans oublier la qualité. Si les biens en question ne sont pas disponibles, vous en êtes parfaitement conscient. Sauf circonstances inhabituelles, le bien revient à 90% de son prix habituel. Pour ce qui est des articles Rares ou Très rares, le sort vous guidera vers la seule source disponible, qui vous facturera selon son bon vouloir."},
                {id:113,group:"Le domaine de Ranald",name:"Bonne fortune",diff:7,"castduration":"1",ingredient:"une patte de lapin (+1)",desc:"vous transmettez la chance de Ranald à un personnage. Le sujet du sort peut maintenant inverser l'ordre des dizaines et des unités du jet de pourcentage d'un test de compétence ou de caractéristique. Par exemple, un test de Dissimulation donnant 82% peut être transformé en 28%. Un même personange ne peut bénéficier que d'un seul sort de bonne fortune à la fois."},
                {id:114,group:"Le domaine de Ranald",name:"Confusion",diff:14,"castduration":"1",ingredient:"un bout de laine (+2)",desc:"vous embobinez une créature humanoïde (humain, elfe, orque, homme-bête, etc.) située à portée, si bien qu'elle agit selon vos désirs à moins de réussir un test de Force Mentale. À son prochain tour de jeu, vous pouvez décider des actions que la créature va effectuer, ce qu'elle fera sans hésiter. La cible fait tout ce que vous lui demandez, mais elle ne se blesse pas volontairement. Ceci dit, rien ne vous empêche de lui donner un ordre stupide dont l'issue pourrait lui nuire. Confusion ne marche pas sur les démons et les morts-vivants."},
                {id:115,group:"Le domaine de Ranald",name:"Empathie parfaite",diff:20,"castduration":"1/2",ingredient:"un miroir (+2)",desc:"vous comprenez parfaitement la personne à laquelle vous parlez. Cela signifie que vous passez outre la barrière de la langue, mais également que vous savez ce qu'elle pense vraiment, ainsi que ce qu'elle dit. Cela donne à tout marchand un avantage énorme dans le cadre de ses négociations. Vous bénéficiez d'un bonus de +50% aux tests de Marchandage effectués contre cette personne. Le sort est également utile en cas d'interrogatoire, mais les prêtres de Ranald sont généralement moins intéressés par ce type de chose. En fait, il y a peu de chances qu'ils utilisent le sort dans ce cadre, à moins que quelqu'un n'ose s'en servir contre eux !"},
                {id:116,group:"Le domaine de Ranald",name:"Furtivité de Ranald",diff:5,"castduration":"1",ingredient:"une touffe de poils de chats (+1)",desc:"Ranald vous bénit de son incroyable discrétion. Vous bénéficiez d'un bonus de +20% aux tests de Déplacement silencieux et de Dissimulation. Si vous venez à violer une alarme magique, vous pouvez passer outre, à condition de réussir un test de Focalisation."},
                {id:117,group:"Le domaine de Ranald",name:"Oeil de Ranald",diff:12,"castduration":"1",ingredient:"une petite balance (+2)",desc:"Ranald vous bénit et vous confère un sacré flair en matière d'estimation. Vous bénéficiez d'un bonus de +20% aux tests d'Évaluation et de Marchandage."},
                {id:118,group:"Le domaine de Ranald",name:"Ouverture",diff:9,"castduration":"1/2",ingredient:"une clef (+1)",desc:"vous déverrouillez une serrure ou un verrou, ou soulevez un loquet. L'objet visé ne peut être refermé le tems du sort (à moind que vous n'en décidiez autrement). Ouverture peut s'imposer sur un verrou magique en résussissant un test de Focalisation."},
                {id:119,group:"Le domaine de Ranald",name:"Sens des pièges",diff:16,"castduration":"2",ingredient:"les yeux d'un faucon (+2)",desc:"vos prières vous permettent de détecter magiquement tous les pièges situés à portée. Sens des pièges ne désamorce pas les pièges ; il vous permet uniquement de sentir leur présence et de les localiser."},
                {id:120,group:"Le domaine de Ranald",name:"Visage du pauvre",diff:16,"castduration":"1",ingredient:"une boîte pourvue d'un double fond (+2)",desc:"les objets précieux que vous et vos alliés portez sont introuvables en cas de fouille réalisae contre votre gré ou sans votre consentement. Même si votre sac de pièces d'or est ouvert et retourné, les inspecteurs du trésor public n'y trouveront que quelques miettes et une moitié de biscuit, ou autres objets dénués de valeur. Les prêtres pensent que Ranald garde vos biens pendant toute la durée du sort et prétend même que le dieu des Escrocs ne restitue pas toujours les objets qui lui sont confiés."},
                {id:121,group:"Le domaine de Ranald",name:"Visage immémoré",diff:14,"castduration":"1/2",ingredient:"un masque (+2)",desc:"en entonnant vos prières, vous empêchez les gens de se souvenir de vous. Toute créature dont vous croisez la route doit réussir un test de Force Mentale sous peine de ne pouvoir se rappeler que deux choses au sujet de votre apparence. Elles doivent être précises, mais c'est vous qui les choisissez. La plupart des utilisateurs de ce sort portent un chapeau et une cape extravagants, qu'ils peuvent facilement ôter et cacher. Cela permet à un prêtre de Ranald de se tailler un nom sans compromettre son identité réelle."},
                {id:122,group:"Le domaine de Shallya",name:"Chasuble de pureté",diff:20,"castduration":"1",ingredient:"une robe blanche (+2)",desc:"Vous immunisent contre les poisons/maladies, pour la durée du sort ou jusqu'à ce que vous entrepreniez une action violente. Les démons / disciples de Nurgle doivent réussir un test de FM -20% pour attaquer en mélée. Sinon, leur action est perdue à ce round."},
                {id:123,group:"Le domaine de Shallya",name:"Détresse retardée",diff:15,"castduration":"1/2",ingredient:"un cœur en argent (+2)",desc:"Vous pouvez toucher une créature et neutraliser les effets d'une maladie/trouble mental/poison ou de quelque autre mal. Une fois le sort à son terme, la cible en subit de nouveau les effets. Une détresse retardée qu'une fois par cible + mal."},
                {id:124,group:"Le domaine de Shallya",name:"Endurance de Shallya",diff:8,"castduration":"1/2",ingredient:"un bandage (+1)",desc:"vous faites appel au pouvoir de Shallya pour redonner un coup de fouet momentanné à la cible. La valeur d'Endurance de la créature touchée augmente de 10%, ce qui a pour effet d'augmenter également son bonus d'Endurance (+1)."},
                {id:125,group:"Le domaine de Shallya",name:"Esprit compatissant",diff:12,"castduration":"1",ingredient:"un bandeau (+2)",desc:"vos prières réconfortantes permettent à l'esprit d'une personne de supporter les horreurs du monde. Chaque fois que la cible joue un test de Force Mentale pour éviter de gagner un point de Folie, elle bénéficie d'un bonus de +10%."},
                {id:126,group:"Le domaine de Shallya",name:"Guérison des blessures",diff:6,"castduration":"1/2",ingredient:"une sangsue (+1)",desc:"vos prières soignent un personnage blessé d'un nombre de points de Blessures égal à 1d10 plus votre valeur de Magie."},
                {id:127,group:"Le domaine de Shallya",name:"Guérison de la folie",diff:20,"castduration":"1h",ingredient:"un goupillon d'eau bénite (+2)",desc:"vos prières soignent un personnage frappé de folie. Un trouble mental est alors neutralisé et tous ses effets sont éliminés. Vous ne pouvez lancer ce sort qu'une seule fois par trouble mental frappant la cible."},
                {id:128,group:"Le domaine de Shallya",name:"Guérison des maladies",diff:11,"castduration":"3/2",ingredient:"un cataplasme (+2)",desc:"vos prières soignent un personnage souffrant des effets d'une maladie. Ce sort ne peut rien pour veux qui sont déjà morts des suites d'une maladie. Vous ne pouvez lancer ce sort qu'une seule fois par maladie frappant la cible."},
                {id:129,group:"Le domaine de Shallya",name:"Guérison des poisons",diff:4,"castduration":"1/2",ingredient:"un crochet de serpent (+1)",desc:"vos prières soignent une personne souffrant des effets du poison. Le sujet en est débarrassé et tous ses effets sont annulés. Ce sort ne peut rien pour ceux qui sont déjà morts empoisonnés. On ne peut le lancer qu'une fois par empoisonnement."},
                {id:130,group:"Le domaine de Shallya",name:"Larmes dorées",diff:18,"castduration":"1/2",ingredient:"une larme (+2)",desc:"Soigne tout effet critique autre que 4, 9 ou 10, tant qu'elle est lancée dans les 2 rounds qui suivent. Ce sort ne rappelle pas les morts à la vie. De plus, il ne peut rien contre les points de Folie découlant de coups critiques."},
                {id:131,group:"Le domaine de Shallya",name:"Martyr",diff:14,"castduration":"1/2",ingredient:"une mèche de cheveux de la cible du corps (+2)",desc:"vous créez un lien d'empathie entre vous et une personne de votre choix située à portée. Tous les dégâts infligés au sujet du sort vous sont en réalité appliqués."},
                {id:132,group:"Le domaine de Shallya",name:"Purification",diff:16,"castduration":"1/2",ingredient:"une torche enflammée (+2)",desc:"Nurgle est abhorré par Shallya. Ce sort vous permet de cibler un démon / fidèle de Nurgle situé à portée. La cible de purification pert 1d10 points de Blessures, ignore  Endurance et armure, et doit réussir un test de FM ou être assomé pendant 1 round."},
                {id:133,group:"Le domaine de Shallya",name:"Résistance à la maladie",diff:4,"castduration":"1min",ingredient:"une fiole d'eau pure (+1)",desc:"vos prières renforcent les résistances naturelles de la cible. Chaque fois que celle-ci joue un test d'Endurance visant à résister à une maladie, elle bénéficie d'un bonus de +10%."},
                {id:134,group:"Le domaine de Sigmar",name:"Armure vertueuse",diff:6,"castduration":"1",ingredient:"un petit anneau de fer (+1)",desc:"un halo d'énergie vous protège. Vous bénéficiez de +1 point d'Armure sur toutes les zones, même si le maximum de 5 PA s'applique toujours."},
                {id:135,group:"Le domaine de Sigmar",name:"Chair immaculée",diff:12,"castduration":"1",ingredient:"une aile de colombe (+2)",desc:"repoussant la puissance du Chaosavec passion, vous implorez Sigmar de vous protéger contre les us des Puissances de la Destruction. Vous gagnez le talent Résistance au Chaos. Tant que le sort fait effet, il vous est impossible de lancer le moindre sort, quel que soit son type."},
                {id:136,group:"Le domaine de Sigmar",name:"Cœur du griffon",diff:14,"castduration":"1",ingredient:"une plume de griffon en filigrane d'or (+2)",desc:"vos prières stridentes enhardissent les élus de Sigmar, les emplissant de courage et de détermination. Tous les citoyens de l'Empire et alliés nains situés à portée gagnent le talent Sans peur."},
                {id:137,group:"Le domaine de Sigmar",name:"Comète de Sigmar",diff:16,"castduration":"1/2",ingredient:"une pointe de flèche en or (+2)",desc:"vous lancez un projectile enflammé prenant la forme de la célèbre comète à deux queues de Sigmar. L'astre miniature se dirige vers un adversaire de votre choix situé à portée. La comète de Sigmar est un projectile magique ayant une valeur de dégâts de 6."},
                {id:138,group:"Le domaine de Sigmar",name:"Étendard de bravoure",diff:14,"castduration":"1/2",ingredient:"un prisme (+2)",desc:"vous êtes investi de la puissance et de la majesté de Sigmar, qui vous font briller tel un phare dans la nuit. Tous vos alliés apeurés ou terrifiés capables de vous voir sont galvanisés par votre foi et votre courage. Ces personnages retrouvent alors leurs moyens et peuvent agir normalement à leur tour de jeu."},
                {id:139,group:"Le domaine de Sigmar",name:"Feu de l'âme",diff:20,"castduration":"1/2",ingredient:"une amulette en or gravée de la comète de Sigmar (+2)",desc:"les flammes purificatrices de Sigmar vous enveloppent tandis que son ire se manifeste sur terre. Centrez sur vous le grand gabarit. Les créatures affectées subissent un coup d'une valeur de dégâts de 3. Les morts-vivants et les démons y sont particulièrement sensibles, puisqu'ils subissent quant à eux un coup d'une valeur de dégâts de 5. Les armures n'offrent aucune protection contre feu de l'âme."},
                {id:140,group:"Le domaine de Sigmar",name:"Gare à la sorcière",diff:15,"castduration":"1",ingredient:"un parchemin bénit sur lequel est écrit ela prière (+2)",desc:"vos prières implorent Sigmar de vous protéger de ses pires ennemis. Vous bénéficiez d'un bonus de +20% aux tests de Force Mentale visant à résister à toute magie issue du talent Magie Noire. Si le sort en question n'autorise pas de test de Force Mentale, vous avez tout de même droit à un test de Force Mentale Difficile (-20%) pour y résister."},
                {id:141,group:"Le domaine de Sigmar",name:"Imposition des mains",diff:12,"castduration":"3/2",ingredient:"un gant de cuir (+2)",desc:"votre contact soigne un personnage blessé de 1d10 points de Blessures."},
                {id:142,group:"Le domaine de Sigmar",name:"Marteau de Sigmar",diff:5,"castduration":"1/2",ingredient:"un talisman gravé du symbole de Sigmar (+1)",desc:"votre marteau est investi de la puissance de Sigmar. Votre arme de corps à corps, qui doit impérativement être un marteau, est considérée comme magique et dotée de l'attribut percutante."},
                {id:143,group:"Le domaine de Sigmar",name:"Parole de damnation",diff:13,"castduration":"3/2",ingredient:"un miroir (+2)",desc:"votre juste prière emplit un hérétique d'un désespoir tel qu'il est confronté à la perspective de sa propre damnation. L'hérétique (tel que le définit le MJ, mais qui inclut les cultistes du Chaos, les nécormanciens, les envoûteurs, les traîtres à l'Empire et autres individus constituant des ennemis par nature en raison de leurs activités, de leur carrière et de leurs dieux et non de leur race) subit un malusde -20% aux tests de Volonté visant à résister aux sorts découlant d'une Inspiration divine, mais également contre les utilisations des compétences Intimidation et Torture."},
                {id:144,group:"Le domaine de Sigmar",name:"Rejet de l'hérésie",diff:8,"castduration":"1/2",ingredient:"un petit marteau en argent (+1)",desc:"vous priez au contact d'un objet inanimé, comme une porte ou un mur, et le renforcez considérablement. Son Endurance est doublée jusqu'à la fin du sort."},
                {id:145,group:"Le domaine de Sigmar",name:"Triomphe",diff:16,"castduration":"1",ingredient:"un marteau miniature forgé dans le bronze (+2)",desc:"vos prières, très pressantes, poussent vos alliés à redoubler d'efforts contre les ennemis de Sigmar. Tous les alliés situés à portée bénéficient de +1 en Attaques quand ils affrontent des usppôts du Chaos, des morts-vivants ou des peaux-vertes."},
                {id:146,group:"Le domaine de Taal et Rhya",name:"Ami des bêtes",diff:4,"castduration":"3/2",ingredient:"la langue d'un animal (+1)",desc:"avec l'aide de Taal, vous pouvez converser avec un animal et un seul situé à portée. Vous bénéficiez d'un bonus de +20% aux tests d'Emprise sur le sanimauxliés à la cible. Les animaux n'ont pas l'habitude de communiquer avec des hommes, si bien qu'ils ont parfois du mal à articuler leurs pensées. C'est au MJ de décider la quantité d'informations que l'animal connaît, sans oublier que la vision du monde d'un animal moyen est fort limitée, quand elle n'est pas nulle."},
                {id:147,group:"Le domaine de Taal et Rhya",name:"Bénédiction de la rivière",diff:10,"castduration":"2",ingredient:"un poisson vivant (+1)",desc:"vous implorez Taal, le seigneur des Rivières, de vous laisser traverser son domaine. Vous ignorez les malus découlant du port de dotations lorsque vous nagez dans un cours d'eau (en restant tout de même raisonnable ; à la discrétion du MJ). De plus, vous bénéficiez d'un bonus de +20% aux tests de Natation, et plutôt que de réduire votre valeur de Mouvement de moitié pour fixer votre vitesse à la nage, vous divisez votre valeur actuelle de Force par 10 (arrondi à l'entier supérieur). Par exemple, si vous avez une valeur de Force de 52%, votre valeur de Mouvement à la nage est égale à 6."},
                {id:148,group:"Le domaine de Taal et Rhya",name:"Cœur de bœuf",diff:14,"castduration":"1",ingredient:"un carré de peau de bœuf (+2)",desc:"vos prières confèrent à vos personnages la constitution d'un bœuf. La cible du sort a le droit de rejouer un test d'Endurance raté par round."},
                {id:149,group:"Le domaine de Taal et Rhya",name:"Coup de tonnerre",diff:12,"castduration":"1",ingredient:"un petit gong (+2)",desc:"vous provoquez un bruyant coup de tonnerre qui éclate quelque part à portée. Utilisez le grand gabarit. Les créatures affectées doivent réussir un test d'Endurance sous peine d'être assommées jusqu'à votre prochain tour de jeu. Le coup de tonnerre est si retentissant qu'on l'entend à 1,5 kilomètres à la ronde."},
                {id:150,group:"Le domaine de Taal et Rhya",name:"Fureur de Taal",diff:26,"castduration":"1",ingredient:"les bois d'un grand cerf (+3)",desc:"vous priez pour que le Roi des Dieux déchaîne toute sa fureur. Un personnage situé à portée subit 1d10 coups d'une valeur de dégâts de 4. La forme que prend la fureur de Taal dépend de l'environnement, mais elle s'accompagne le plus souvent d'éclairs, de crevasses, de montées des eaux ou de forêtsvenant à la vie. Ce sort est un projectile magique."},
                {id:151,group:"Le domaine de Taal et Rhya",name:"Jaissement  du cerf",diff:6,"castduration":"1/2",ingredient:"une touffe de poils de cerf (+1)",desc:"vous êtes investi de la puissance d'un cerf sauvage. Augmentez votre valeur de Mouvement de +1. Tant que vous êtes sous l'effet du sort, vous pouvez effectuer une charge au prix d'une demi-action."},
                {id:152,group:"Le domaine de Taal et Rhya",name:"Patte d'ours",diff:15,"castduration":"1",ingredient:"une griffe d'ours (+2)",desc:"votre contact confère à un personnage la force de l'ours. La cible de patte d'ours bénéficie d'un bonus de +20% en Force."},
                {id:153,group:"Le domaine de Taal et Rhya",name:"Plantes immobilisantes",diff:8,"castduration":"1",ingredient:"une marcotte (+1)",desc:"vous invoquez un enchevêtrement de plantes grimpantes qui apparaît à portée et gêne les mouvements de vos adversaires. Utilisez le grand gabarit. Les créatures affectées ne peuvent plus se déplacer à moins de réussir un test de Force, auquel cas leur valeur de Mouvement est tout de même réduit de moitié (arrondi à l'entier inférieur) tant qu'elles restent dans la zone d'effet. Ce sort ne peut être utilisé que dans les zones abritant racines et végétation naturelle."},
                {id:154,group:"Le domaine de Taal et Rhya",name:"Rage grondante",diff:10,"castduration":"1",ingredient:"une dent de grand prédateur (+1)",desc:"vous grognez quelques prières à l'attention de Taal qui vous emplissent de rage. Vous gagnez le talent Effrayant et êtes pris de frénésie, comme si vous aviez le talent Frénésie. Augmentez votre valeur d'Qttaques de +1."},
                {id:155,group:"Le domaine de Taal et Rhya",name:"Réconfort de Rhya",diff:18,"castduration":"1min",ingredient:"un bol de lait frais (+2)",desc:"vous implorez la Déesse Mère de porter assistance à ses enfants. Centrez sur vous le grand gabarit. Les créatures affectées sont aussi ragaillardies que si elles venaient de bénéficier d'une nuit complète de sommeil et de trois jours de guérison naturelle."},
                {id:156,group:"Le domaine de Taal et Rhya",name:"Seigneur de la nature",diff:15,"castduration":"1/2",ingredient:"un os maxilaire de l'espèce animale visée (+2)",desc:"soutenu par l'autorité de Taal, vous donnez à un animal des ordres qu'il exécute à la lettre. Choisissez un animal situé à portée. Vous décidez de sa prochaine action. Taal ne vous permet cependant pas d'abuser de ses sujets, si bien que vous ne pouvez lui ordonner de commettre un acte manifestement suicidaire, comme s'en prendre à plus gros que lui ou sauter du haut d'une falaise."},
                {id:157,group:"Le domaine de Taal et Rhya",name:"Vent violent",diff:19,"castduration":"1/2",ingredient:"une poignée de feuilles mortes (+2)",desc:"vous faites appel au Roi des Dieux, qui vous répond avec la plus grande des férocités. Centrez le grand gabarit sur vous. Les créatures affectées (ce qui ne vous inclut pas) sont frappées par des vents furieux et subissent un malus de -20% en Capacité de Combat et en Agilité. Au début de chaque round, tous les sujets doivent réussir un test d'Endurance sous peine d'être assomés. Aucune arme à distance ne peut être utilisée, que ce soit par vous ou l'une des victimes du sort. De plus, vous ne pouvez pas être pris pour cible par des attaques de projectiles non magiques (ce qui exclut armes à poudre et artillerie)."},
                {id:158,group:"Le domaine d'Ulric",name:"Cœur des loups",diff:18,"castduration":"3/2",ingredient:"un cœur de loup (+2)",desc:"vos alliés sont habités par l'esprit martial d'Ulric. Tous vos alliés situés à portée réussissent automatiquement les tests de Peur et de Terreur qu'il leur faut jouer. De plus, ils sont immunisés contre les effets liés à la compétence Intimidation ou au talent Troublant."},
                {id:159,group:"Le domaine d'Ulric",name:"Décret du roi des neiges",diff:21,"castduration":"2 actions complètes et 1 demi-action",ingredient:"une hache de qualité exceptionnelle (+3)",desc:"la haine d'Ulric éprouve à l'égard des faibles, des lâches et des individus déshonorants suinte dans chacune des paroles de mépris de la prière que vous braillez. Un feu froid et argenté frappe une cible située à portée, lui infligeant un coup d'une valeur de dégâts de 8 par round. Cependant, les pieux ulricains, ainsi que les individus courageux et honorables (à la discrétion du MJ), sont immunisés contre le sort, si bien que les flammes ne leur infligent pas de dégâts. Une armure n'offre aucune protection contre le décret du roi des neiges."},
                {id:160,group:"Le domaine d'Ulric",name:"Faveur d'Ulric",diff:15,"castduration":"3/2",ingredient:"une hache (+2)",desc:"cvotre contact réveille le berserk qui sommeille en l'un de vos alliés. On considère alors que le sujet du sort est doté du talent Frénésie. Les cibles qui ne sont pas consentantes ont le droit à un test de Force Mentale pour résister au sort."},
                {id:161,group:"Le domaine d'Ulric",name:"Froid mordant",diff:5,"castduration":"1/2",ingredient:"une touffe de poils de loup (+1)",desc:"vous dégagez une vague de froid à glacer le sang. Toute créature qui vous attaque au corps à corps subit un malus de 10% en Capacité de Combat. Ce sort n'affecte pas les morts-vivants, les créatures immunisées contre le froid et celles qui vivent dans un environnement glacé."},
                {id:162,group:"Le domaine d'Ulric",name:"Furie guerrière",diff:7,"castduration":"1",ingredient:"une tache de sang frais (+1)",desc:"l'esprit d'Ulric vous envahit et déchaîne votre soif de sang. Vous bénéficiez d'un bonus de +1 en Attaques. Tant que le sort furie guerrière reste actif, vous devez attaquer l'ennemi le plus proche au corps à corps, toutes vos attaques devant prendre la forme d'attaques à outrance, d'attaques de charge ou d'attaques rapides, et vous ne pouvez ni vous enfuir ni battre en retraite."},
                {id:163,group:"Le domaine d'Ulric",name:"Hurlement du loup",diff:11,"castduration":"1/2",ingredient:"une langue de loup (+2)",desc:"vous hurlez tel un véritable loup d'Ulric et instillez la soif de combat à vos compagnons. Jusqu'à votre prochain tour de jeu, tous les alliés situés à portée peuvent attaquer deux fois dans le cadre d'une charge, quelle que soit leur valeur d'Attaques (une charge n'autorise normalement qu'une seule attaque)."},
                {id:164,group:"Le domaine d'Ulric",name:"Meute sauvage",diff:11,"castduration":"1",ingredient:"une petite corne taillée dans un os de loup (+2)",desc:"vous hurlez vos prières de colère à l'attention d'Ulric et vos alliés se sentent animés par une violence à peine contenue. Tous les alliés situés à portée gagnent le talent Troublant."},
                {id:165,group:"Le domaine d'Ulric",name:"Morsure de givre",diff:9,"castduration":"1/2",ingredient:"une bille de sang gelé (+1)",desc:"vous priez pour qu'Ulric gèle le sang de vos ennemis. Un adversaire situé à portée perd 1d10 points de Blessures (qui ne tiennent pas compte de l'armure et du bonus d'Endurance). De plus, la cible doit réussir un test d'Endurance sous peine de ne pas pouvoir entreprendre la moindre action à son tour de jeu (bien qu'elle puisse alors se tourner vers des actions défensives, l'Esquive, etc.)."},
                {id:166,group:"Le domaine d'Ulric",name:"Mort aux faibles",diff:10,"castduration":"1/2",ingredient:"une griffe de loup brisée (+1)",desc:"vous récitez une prière caustique qui vous emplit de tout le mépris qu'Ulric ressent à l'égard des faibles et des lâches. Une fois par round, vous pouvez rejouer une attaque ratée contre une cible."},
                {id:167,group:"Le domaine d'Ulric",name:"Muscles de givre",diff:13,"castduration":"2",ingredient:"une poignée de graisse de loup (+2)",desc:"vos prières vous propagent des ondes de foid dans tout le corps et une gelée blanche vous recouvre la peau. Vous êtes immunisé contre l'hypothermie. Ce sort ne peut être tenté qu'une fois par jour."},
                {id:168,group:"Le domaine d'Ulric",name:"Rage effrénée",diff:21,"castduration":"3/2",ingredient:"une patte de louveteau mort (+3)",desc:"vous hurlez à l'attention du dieu de la Guerre et tous ceux qui lui sont favorables répondent à votre appel. Tous les alliés situés à portée qui sont pris de frénésie bénéficie de +1 en Attaques et n'ont besoin que d'une demi-action pour entreprendre une attaque rapide. Ils restent cependant limités à une action d'attaque par round."},
                {id:169,group:"Le domaine d'Ulric",name:"Tempête de glace",diff:20,"castduration":"1/2",ingredient:"un glaçon (+2)",desc:"vous invoquez une redoutable tempête de glace cinglante à portée pour décimer vos ennemis. Utilisez le grand gabarit. Toute créature affectée subit un coup d'une valeur de dégâts de 5 et doit réussir un test de Force Mentale sous peine d'être assommée pendant 1 round."},
                {id:170,group:"Le domaine de Verena",name:"Chaînes de Verena",diff:6,"castduration":"1/2",ingredient:"des chaînes de fer (+1)",desc:"vous immobilisez un personnage à l'aide de chaînes d'énergie magique invisibles. À moins de réussir un test de Force Mentale, la cible se retrouve sans défense. À son tour de jeu, elle ne peut rien faire d'autre que tenter de briser les liens, ce qui se traduit par un test opposé de sa Force contre votre compétence de Focalisation."},
                {id:171,group:"Le domaine de Verena",name:"Châtiment",diff:14,"castduration":"1",ingredient:"une goutte de sang de la victime du criminel (+2)",desc:"vous entamez la \"prière du châtiment\" et les coupables sont frappés du courroux de Verena. Une cible située à portée que vous savez coupable d'un crime doit réussir un test de Force Mentale (+20%) sous peine de subir d'atroces souffrances. Le criminel ne peut désormais plus entreprendre qu'une demi-action par round."},
                {id:172,group:"Le domaine de Verena",name:"Épée de justice",diff:10,"castduration":"1/2",ingredient:"un talisman gravé d'une balance (+1)",desc:"quand tout le reste a échoué, vos prières investissent votre arme, qui doit impérativement être une épée, et qui devient l'instrument de la justice de Verena. Elle est alors considérée comme magique et dotée de l'attribut précise. De plus, elle vous confère un bonus de +10% en Capacité de Combat quand vous attaquez des créatures que vous savez coupable d'un crime."},
                {id:173,group:"Le domaine de Verena",name:"Épreuve du feu",diff:18,"castduration":"1min",ingredient:"une opale de feu d'une valeur d'au moins 50 co (+2)",desc:"vous soumettez un personnage situé à portée à l'épreuve ultime ; vous l'accusez d'un grave méfait et il est alors englouti par des flammes d'origine divine. Si la cible est innocente des faits qui lui sont reprochés, les flammes ne lui infligent aucun dégât et si dissipent après 1 round. En revanche, si elle est coupable, elle subit à chaque round une valeur de dégâts de 8, pendant un nombre de rounds égale à votre valeur de Magie. Les règles traitant du feu (cf. page 136 de WJDR) s'appliquent. Ce miracle ne s'emploie pas à la légère, et les adeptes qui y recourent déraisonnablement sont sévèrement \"corrigés\" par leurs doyens."},
                {id:174,group:"Le domaine de Verena",name:"Équilibre préservé",diff:13,"castduration":"1",ingredient:"une balance en argent (+2)",desc:"par vos prières, vous suppliez Verena de rendre justice à ses serviteurs. Tout crime commis à votre encontre une fois le sort lancé (ou jusqu'à 1 minute avant l'incantation) est immédiatement \"renvoyé\" à son auteur. Si un voleur vous a dérobé votre bourse, la sienne tombe au sol. Si une brute vous envoie un coup de poing d'une valeur de dégâts de 4 en pleine poitrine, elle en subit un elle aussi. Bien évidemment, si vous commettez un crime, vous en êtes également victime à votre tour de jeu."},
                {id:175,group:"Le domaine de Verena",name:"Ouïe fine",diff:15,"castduration":"1min",ingredient:"une corne acoustique (+2)",desc:"vous pouvez écouter tout ce qui se déroule en un lieu situé dans votre champ de vision, quelle que soit la distance qui vous en sépare. Vous entendez comme si vous vous y trouviez."},
                {id:176,group:"Le domaine de Verena",name:"Paroles de vérité",diff:13,"castduration":"2",ingredient:"un miroir (+2)",desc:"vous pouvez poser une question à un personnage. Si ce dernier est en mesure de la comprendre, il devra y répondre sincèrement à moins de réussir un test de Force Mentale. Notez qu'un personnage ainsi contraint ne pourra énoncer que ce qu'il croit être la vérité, qu'il ait raison ou tort. Il est préférable que le MJ joue le test de Force Mentale en secret. Si la cible réussit son test, elle peut répondre ce qui lui plaît ou se taire. Vous ne pouvez poser à nouveau une même question à un personnage donné, sachant que les paraphrases et les variations autour du même thème ne sont pas valables ; les questions doivent être foncièrement différentes."},
                {id:177,group:"Le domaine de Verena",name:"Réprobation",diff:17,"castduration":"1min",ingredient:"une goutte de sang de la victime du criminel (+2)",desc:"vous accusez de manière très rituelle un personnage d'un crime. Si l'accusé est coupable, il doit en subir les conséquences jusqu'à ce qu'il avoue tout. La cible du sort doit entendre toute la prière, qui dure 1 minute. Si tel est le cas et qu'elle est bien coupable du crime mentionné, le sort prend effet. Dès lors, le personnage doit réussir un test d'Endurance par heure. En cas d'échec, il vomit jusqu'à ne plus rien avoir dans l'estomac, écœuré par sa propre culpabilité (durant l'heure qui suit, il subit un malus de -10% à toutes les caractéristiques de son profil principal). Ce sort dure 1 jour/point de Magie ou jusqu'à l'aveu du criminel auprès des autorités."},
                {id:178,group:"Le domaine de Verena",name:"Révélation du passé",diff:8,"castduration":"1min",ingredient:"les yeux d'un hibou (+1)",desc:"vous pouvez toucher un objet pour apprendre les trois principaux événements de son passé (définis par le MJ). En général, le sort révèle l'identité du créateur de l'objet, ses plus importants propriétaires ou des incidents célèbres le concernant. Révélation du passé ne peut être lancé sur un même objet qu'une seule fois."},
                {id:179,group:"Le domaine de Verena",name:"Sagesse du hibou",diff:17,"castduration":"1min",ingredient:"un crâne de hibou (+1)",desc:"vos prières inondent votre esprit de la sagesse de votre déesse. Doublez le nombre de degrés de réussite obtenus par vos tests d'Intelligence. De plus, vous pouvez rejouer un test d'Intelligence raté, mais cela a pour effet de mettre un terme au sort."},
                {id:180,group:"Le domaine de Verena",name:"Verena m'en est témoin",diff:14,"castduration":"0",ingredient:"un symbole sacré de Verena (+2)",desc:"en commençant tout simplement votre phrase par \"Verena m'en est témoin\", la véracité de vos propos saute aux yeux de votre auditoire. Tant que vous ne dites que la vérité, vous bénéficiez d'un bonus de +10% aux tests de Charisme et pouvez doubler le nombre de personnes affectées (après avoir tenu compte de tout talent approprié)."},
                {id:181,group:"Le domaine de Verena",name:"Vierge aveugle",diff:16,"castduration":"1/2",ingredient:"un bandeau de soie (+1) qui doit être porté",desc:"vos prières vous permettent de distinguer la vérité, même quand celle-ci est cachée. En réussissant un test d'Intelligence (que votre MJ peut effectuer en secret), vous savez si votre interlocuteur ment. De plus, un test de Perception vous permet de voir au travers des illusions et déguisements, mais également de remarquer les personnages et objets cachés dans votre champ de vision. Lorsque vous lancez ce sort, vous voyez au travers du bandeau comme s'il n'était pas là."},
                {id:182,group:"Le domaine de Dazh",name:"Brillance",diff:12,"castduration":"1/2",ingredient:"un symbole sacré dazhinyi (+2)",desc:"vos prières font apparaître une vague aveuglante de feu sacré. Toutes les créatures situées à portée doivent réussir un test d'Agilité sous peine d'être éblouies. Les victimes subissent alors un malus de -20% aux tests de Capacité de Combat, Capacité de Tir, Agilité et Perception pendant 1d10 rounds. Les cibles qui n'ont pas d'yeux (ou qui ont les yeux protégés) sont immunisées contre le sort."},
                {id:183,group:"Le domaine de Dazh",name:"Charbons ardents",diff:7,"castduration":"1",ingredient:"un morceau de charbon (+1)",desc:"vous murmurez une prière célébrant Dazh qui se lève se son lit de charbons à l'est. Si elle est inflammable (à la discrétion du MJ), la cible prend aussitôt feu."},
                {id:184,group:"Le domaine de Dazh",name:"Couronne de flammes",diff:13,"castduration":"1/2",ingredient:"une flamme ciselée d'or (+2)",desc:"vos prières font apparaître des flammes sacrées qui enveloppent tout votre corps. Quiconque tente de vous frapper à l'aide d'une arme de corps à corps doit réussir un test de Force Mentale sous peine de subir un malus de -30 au test de Capacité de Combat alors que la chaleur le repousse. En cas de réussite, le malus n'est que de -10. Tant que la couronne de flammes est active, vous êtes immunisé contre les dégâts des attaques de feu."},
                {id:185,group:"Le domaine de Dazh",name:"Danse des alari",diff:8,"castduration":"2",ingredient:"aun aiment doré (+1)",desc:"vous de mandez à Dazh d'illuminer la nuit, ce qu'il fait en vous envoyant ses guerriers, les alari. Les cieux du nord s'illuminent de flammes surnaturelles alors que les alari dansent. Ce sort produit produit assez de lumière pour voir correctement."},
                {id:186,group:"Le domaine de Dazh",name:"Dazh Szheg",diff:14,"castduration":"1",ingredient:"une loupe en or (+2)",desc:"vous demandez à Dazh d'incinérer vos ennemis et un rayon de lumière sacrée s'abat sur eux. Toutes les créatures situées dans la zone du petit gabarit doivent réussir un test d'Agilité assez difficile (-10) sous peine de subir 1d10+4 points de dégâts (qui ne tiennent pas compte de l'armure). Une cible qui perd au moins 1 point de Blessures prend également feu."},
                {id:187,group:"Le domaine de Dazh",name:"Invité sacré",diff:5,"castduration":"1",ingredient:"un parchemin de prière dazhinyi (+1)",desc:"vous invoquez Dazh afin qu'il vous bénisse tout le temps que vous passez chez autrui. Si votre hôte abuse de sa position ou vous traite mal, Dazh le maudit alors. La malédiction, fixée par le MJ, pourra prendre la forme suivante : les feux refusent de s'allumer, les feux ne dégagent aucune chaleur, ou le combustible brûle quatre fois plus vite que d'habitude. La malédiction dure jsuqu'à ce que votre hôte vous présente ses excuses ou demande pardon dans un temple de Dazh."},
                {id:188,group:"Le domaine de Tor",name:"Appel de Tor",diff:16,"castduration":"1",ingredient:"un symbole sacré torinyi (+2)",desc:"vous mugissez des prières à l'attention des cieux et Tor vous répond au moyen d'un coup de tonnerre. Au round suivant, tous les Kislevites situés à portée attaquent deux fois sur une action de charge. Toutefois, Tor ne tolère pas que l'on utilise cette prière à la légère, si bien que vous subissez automatiquement la colère des dieux si votre jet d'incantation échoue."},
                {id:189,group:"Le domaine de Tor",name:"Cieux fendus",diff:15,"castduration":"1/2",ingredient:"une fiole d'eau de pluie bénite (+2)",desc:"vous invoquez Tor afin qu'il fende les cieux à l'aide de sa formidable hache de bataille. Des nuages s'amoncellent dans le ciel, et au bout de 1d10 rounds, un déluge d'eau, de neige ou de grêle s'abat sur la zone. À chaque round, les cibles doivent réussir un test de Force sous peine de réduire leurs déplacements de moitié. Ce sort ne peut être lancé que si le ciel est déjà couvert."},
                {id:190,group:"Le domaine de Tor",name:"Fureur de Tor",diff:6,"castduration":"1/2",ingredient:"une pierre à aiguiser (+1)",desc:"vous implorez Tor de bénir vos efforts de guerre. Lorsque vous maniez une hache et obtenez un 10 aux dégâts, vous bénéficiez automatiquement de la fureur d'Ulric, sans avoir à relancer le dé."},
                {id:191,group:"Le domaine de Tor",name:"Tempête imminente",diff:9,"castduration":"1",ingredient:"un parchemin de prière torinyi (+1)",desc:"vos prières déclenchent un regain de tension, préparant ceux qui vous entourent au conflit à venir. Quand un personnage situé à portée au moment de l'incantation est surpris, il a droit à un test de Force Mentale Assez facile (+10) pour ne pas être pris au dépourvu et agir normalement."},
                {id:192,group:"Le domaine de Tor",name:"Tonnerre de guerre",diff:12,"castduration":"1",ingredient:"une cymbale en plaqué argent (+2)",desc:"vos prières amplifient les sons des combats alentour. Tous les ennemis situés à portée doivent réussir un test de Peur."},
                {id:193,group:"Le domaine de Tor",name:"Trait de Tor",diff:11,"castduration":"1",ingredient:"un éclair en argent (+1)",desc:"vous implorez Tor de déchaîner toute sa colère et un éclair part en direction de la cible. Il s'agit d'un projectile magique qui inflige 1d10+3 points de dégâts (qui ne tiennent pas compte de l'armure). Si la cible est tuée, la foudre poursuit son chemin jusqu'à un autre ennemi (s'il en reste) situé dans un rayon de 4 cases de la cible, et ainsi de suite jusqu'à ce qu'une cible survive."},
                {id:194,group:"Le domaine d'Ursun",name:"Force de l'ursidé",diff:8,"castduration":"1/2",ingredient:"une côte d'ours (+1)",desc:"vos prières vous confèrent une partie de la force d'Ursun. Vous bénéficiez d'un bonus de +10 aux tests de Force, d'un autre bonus de +10 (pour un total de +20) lorsque vous agrippez un adversaire, et vos attaques à mains nues infligent +1 point de dégâts."},
                {id:195,group:"Le domaine d'Ursun",name:"Fureur grondante",diff:9,"castduration":"1/2",ingredient:"une griffe d'ours tué par un piège (+1)",desc:"votre prière vous emplit d'une rage implacable. Vous gagnez les talents Frénésie et Menaçant, et bénéficiez en plus d'un bonus de +10 aux tests de Force Mentale et d'Endurance."},
                {id:196,group:"Le domaine d'Ursun",name:"Inflexible Ursun",diff:21,"castduration":"1",ingredient:"une fourrure d'ours des glaces (+3)",desc:"vos prières puisent directement dans l'orgueil national kislevite. Tous les Kislevites situés à portée gagnent les traits Sans peur et Troublant."},
                {id:197,group:"Le domaine d'Ursun",name:"Peau de l'ours des glaces",diff:10,"castduration":"1/2",ingredient:"une canine d'ours des glaces (+1)",desc:"vos prières attirent en vous l'esprit d'un ours des glaces. Pour toute la durée du sort, vos attaques infligent +1 point de dégâts, et vous gagnez les talents Sens aiguisés et Troublant. Enfin, vous bénéficiez d'un bonus de +10 aux tests d'Intimidation, Perception et Survie."},
                {id:198,group:"Le domaine d'Ursun",name:"Père ours",diff:9,"castduration":"1",ingredient:"une langue d'ours (+1)",desc:"vos prières attirent l'un des serviteurs d'Ursun. Un ours situé à portée n'attaquera que s'il est lui-même attaqué, et répondra à toutes les questions que vous lui poserez en s'appuyant sur ses connaissances (et non celles d'Ursun). Sa voix est noble et timbrée, et il parle dans la langue maternelle du prêtre. Cette prière ne fonctionne pas sur les lanceurs de sorts utilisant l'ours enragé."},
                {id:199,group:"Le domaine d'Ursun",name:"Sommeil de l'hiver",diff:14,"castduration":"1",ingredient:"une boule de neige (+2)",desc:"vos prières vous permettent d'abattre le profond sommeil de l'hiver sur vos ennemis. Toutes les créatures vivantes situées sous le petit gabarit doivent réussir un test de Force Mentale Assez difficile (–10) sous peine de s'endormir pour 1d10 rounds. Les personnages endormis sont sans défense."},
                {id:200,group:"Magie commune (occulte)",name:"Luminescence",diff:3,"castduration":"1/2",ingredient:"une goutte d'huile pour lampe (+1)",desc:"tout objet que vous tenez dans votre main se met à luire avec l'intensité d'une lanterne pendant 1 heure ou jusqu'à ce que vous le lâchiez."},
                {id:201,group:"Magie commune (occulte)",name:"Mains molles",diff:4,"castduration":"1/2",ingredient:"une noix de beurre (+1)",desc:"vous forcez le personnage ciblé, se trouvant dans un rayon de 24 mètres (12 cases), à laisser tomber ce qu'il tient dans ses mains. Le sujet peut résister au sort s'il réussit un test de Force Mentale."},
                {id:202,group:"Magie commune (occulte)",name:"Sons",diff:4,"castduration":"1/2",ingredient:"une clochette (+1)",desc:"vous créez un bruit illusoire dans un rayon de 24 mètres (12 cases) dont le volume peut aller du chuchotement au rugissement. La nature du son et son volume sont laissés à votre choix, sachant que vous pouvez tout reproduire sauf des paroles intelligibles. La durée de l'effet ne peut dépasser 1 round."},
                {id:203,group:"Magie commune (occulte)",name:"Feux follets",diff:6,"castduration":"1",ingredient:"une luciole (+1)",desc:"vous créez l'illusion de plusieurs lumières lointaines faisant penser à des torches ou des lanternes. Elles apparaissent dans un rayon de 100 mètres de vous (50 cases) et peuvent ensuite être envoyées dans n'importe quelle direction. Elles suivent naturellement les couloirs et les chemins, sans avoir besoin d'être contrôlées ou surveillées. Vous pouvez les diriger plus activement si vous le désirez, mais seulement si vous les gardez en ligne de vue. Vous ne pouvez effectuer aucune autre action tant que vous contrôlez les lumières, qui se déplacent à différentes allures, sans jamais aller moins vite que 8 mètres (4 cases) par round ou dépasser 16 mètres (8 cases) par round. Les lumières persistent pendant 1 heure, avant de faiblir progressivement et de s'évanouir."},
                {id:204,group:"Magie commune (occulte)",name:"Fléchette magique",diff:6,"castduration":"1/2",ingredient:"une fléchette (+1)",desc:"vous lancez une fléchette d'énergie magique sur un adversaire situé à 16 mètres (8 cases) ou moins. Malgré sa taille réduite, la fléchette d'énergie frappe avec une force considérable. Une fléchette magique est un projectile magique infligeant des dégâts de 3."},
                {id:205,group:"Magie commune (occulte)",name:"Sommeil",diff:6,"castduration":"1/2",ingredient:"un peu de duvet (+1)",desc:"votre contact plonge votre adversaire dans un sommeil profond pendant 1d10 rounds à moins qu'il ne réussisse un test de Force Mentale. Les personnages endormis sont considérés comme sans défense. Sommeil est un sort de contact."},
                {id:206,group:"Magie commune (vulgaire)",name:"Flammerole",diff:3,"castduration":"1/2",ingredient:"un morceau de silex (+1)",desc:"une flamme bleue prend vie dans le creux de votre main et y reste tant que vous ne refermez pas les doigts et que vous ne lancez pas d'autre sort. La flamme est trop petite pour causer le moindre dégât en situation de combat, mais elle produit une lueur équivalente à celle d'une bougie et peut servir à embraser des matériaux inflammables comme une torche ou du chaume."},
                {id:207,group:"Magie commune (vulgaire)",name:"Pare-pluie",diff:3,"castduration":"1",ingredient:"une feuille fraîchement cueillie (+1)",desc:"ce sort vous protège de la pluie et autres précipitations. Vous restez parfaitement sec, ainsi que votre équipement, même sous les plus fortes averses. Les effets du sort persistent pendant 1 heure, mais vous pouvez y mettre un terme avant cela si vous le désirez."},
                {id:208,group:"Magie commune (vulgaire)",name:"Rafale",diff:4,"castduration":"1/2",ingredient:"une plume d'oiseau (+1)",desc:"d'un mouvement de main, vous créez un bref coup de vent dans les environs. Cette rafale suffit à éteindre les bougies et à disperser les feuilles volantes, mais pas à renverser des objets plus lourds."},
                {id:209,group:"Magie commune (vulgaire)",name:"Sillage spectral",diff:4,"castduration":"3/2",ingredient:"une pincée de sable (+1)",desc:"vous ne laissez aucune trace visible derrière vous pendant 1 heure, quel que soit le type de terrain sur lequel vous évoluez. Quiconque tente un test de Pistage pour vous retrouver subit un malus de -30%."},
                {id:210,group:"Magie commune (vulgaire)",name:"Mauvaise fortune",diff:5,"castduration":"3/2",ingredient:"une poupée représentant grossièrement la victime (+1)",desc:"vous pouvez enchanter un objet de manière à ce que son porteur soit frappé de malchance. Il vous faut toucher l'objet pour pouvoir lancer le sort (si l'objet est porté par la personne, la règle concernant les sorts de contact s'applique). Pendant les prochaines 24 heures, le porteur de l'objet maudit subit un malus égal à votre valeur de Magie pour tous ses tests. Un même personnage ne peut être affecté que par un seul sort de mauvaise fortune à la fois."},
                {id:211,group:"Magie commune (vulgaire)",name:"Choc",diff:6,"castduration":"1/2",ingredient:"une petite épingle (+1)",desc:"votre contact assomme un adversaire pour un nombre de rounds égal à votre valeur de Magie, à moins qu'il ne réussisse un test de Force Mentale. Choc est un sort de contact."},
                {id:212,group:"Sorts de Magie commune (glace)",name:"Choc",diff:6,"castduration":"1/2",ingredient:"une petite épingle (+1)",desc:"votre contact assomme un adversaire pour un nombre de rounds égal à votre valeur de Magie, à moins qu'il ne réussisse un test de Force Mentale. Choc est un sort de contact."},
                {id:213,group:"Sorts de Magie commune (glace)",name:"Fléchette magique",diff:6,"castduration":"1/2",ingredient:"une fléchette (+1)",desc:"vous lancez une fléchette d'énergie magique sur un adversaire situé à 16 mètres (8 cases) ou moins. Malgré sa taille réduite, la fléchette d'énergie frappe avec une force considérable. Une fléchette magique est un projectile magique infligeant des dégâts de 3."},
                {id:214,group:"Sorts de Magie commune (glace)",name:"Froid",diff:6,"castduration":"1",ingredient:"une boule de glace (+1)",desc:"votre contact laisse derrière lui un givre étincelant. Utilisez le petit gabarit. La température de l'air ambiant tombe à 0° dans la zone."},
                {id:215,group:"Sorts de Magie commune (glace)",name:"Luminescence",diff:3,"castduration":"1/2",ingredient:"une goutte d'huile pour lampe (+1)",desc:"tout objet que vous tenez dans votre main se met à luire avec l'intensité d'une lanterne pendant 1 heure ou jusqu'à ce que vous le lâchiez."},
                {id:216,group:"Sorts de Magie commune (glace)",name:"Mains molles",diff:4,"castduration":"1/2",ingredient:"une noix de beurre (+1)",desc:"vous forcez le personnage ciblé, se trouvant dans un rayon de 24 mètres (12 cases), à laisser tomber ce qu'il tient dans ses mains. Le sujet peut résister au sort s'il réussit un test de Force Mentale."},
                {id:217,group:"Sorts de Magie commune (glace)",name:"Marche hivernale",diff:7,"castduration":"1",ingredient:"une raquette (+1)",desc:"vous demandez aux esprits de l'hiver de vous ouvrir le passage. Vous ne subissez aucun malus de déplacement en raison du blizzard, des congères, des surfaces gelées, etc."},
                {id:218,group:"Sorts de Magie commune (glace)",name:"Pare-pluie",diff:3,"castduration":"1",ingredient:"une feuille fraîchement cueillie (+1)",desc:"ce sort vous protège de la pluie et autres précipitations. Vous restez parfaitement sec, ainsi que votre équipement, même sous les plus fortes averses. Les effets du sort persistent pendant 1 heure, mais vous pouvez y mettre un terme avant cela si vous le désirez."},
                {id:219,group:"Sorts de Magie commune (glace)",name:"Rafale",diff:4,"castduration":"1/2",ingredient:"une plume d'oiseau (+1)",desc:"d'un mouvement de main, vous créez un bref coup de vent dans les environs. Cette rafale suffit à éteindre les bougies et à disperser les feuilles volantes, mais pas à renverser des objets plus lourds."},
                {id:220,group:"Sorts de Magie commune (vedma)",name:"Charmé",diff:6,"castduration":"1/2",ingredient:"une goutte de votre sang (+1)",desc:"vous attirez de minuscules esprits de la chance. Lorsque la cible utilise un point de Fortune, lancez 1d10. Sur un résultat de 8, 9 ou 10, le point de Fortune produit les effets désirés, mais n'est pas utilisé. Charmé cesse de fonctionner dès que le point de Fortune est ainsi épargné."},
                {id:221,group:"Sorts de Magie commune (vedma)",name:"Gêne",diff:6,"castduration":"1",ingredient:"un ongle de la victime (+1)",desc:"vous prononcez des paroles terribles et invoquez des esprits chargés de maudire une cible située à portée. Celle-ci a droit à un test de Force Mentale pour résister à l'influence des esprits. Cette malédiction perturbe le sujet, mais n'est absolument pas mortelle, pas plus qu'elle n'impose de pénalité, en dehors d'un certain embarras qui peut se traduire par un léger malus aux tests de Sociabilité (à l'appréciation du MJ, mais pas plus de –10). Gêne se manifeste par exemple de l'une des manières suivantes : verrues, furoncles, altération de la couleur des cheveux, flatulences incontrôlables, forte odeur des pieds, crise d'urticaire, etc."},
                {id:222,group:"Sorts de Magie commune (vedma)",name:"Luminescence",diff:3,"castduration":"1/2",ingredient:"une goutte d'huile pour lampe (+1)",desc:"tout objet que vous tenez dans votre main se met à luire avec l'intensité d'une lanterne pendant 1 heure ou jusqu'à ce que vous le lâchiez."},
                {id:223,group:"Sorts de Magie commune (vedma)",name:"Mains molles",diff:4,"castduration":"1/2",ingredient:"une noix de beurre (+1)",desc:"vous forcez le personnage ciblé, se trouvant dans un rayon de 24 mètres (12 cases), à laisser tomber ce qu'il tient dans ses mains. Le sujet peut résister au sort s'il réussit un test de Force Mentale."},
                {id:224,group:"Sorts de Magie commune (vedma)",name:"Mauvaise fortune",diff:5,"castduration":"3/2",ingredient:"une poupée représentant grossièrement la victime (+1)",desc:"vous pouvez enchanter un objet de manière à ce que son porteur soit frappé de malchance. Il vous faut toucher l'objet pour pouvoir lancer le sort (si l'objet est porté par la personne, la règle concernant les sorts de contact s'applique). Pendant les prochaines 24 heures, le porteur de l'objet maudit subit un malus égal à votre valeur de Magie pour tous ses tests. Un même personnage ne peut être affecté que par un seul sort de mauvaise fortune à la fois."},
                {id:225,group:"Sorts de Magie commune (vedma)",name:"Résustance à la corruption",diff:7,"castduration":"1",ingredient:"salive (+1)",desc:"vous proférez une invocation à l'attention des esprits pour qu'ils vous protègent contre les Puissances de la Ruine. Une cible, sur laquelle vous devez cracher, bénéficie d'un bonus de +10 à tout test visant à résister au Chaos, ce qui inclut mutations et pouvoirs découlant de la magie du Chaos."},
                {id:226,group:"Sorts de Magie commune (vedma)",name:"Sillage spectral",diff:4,"castduration":"3/2",ingredient:"une pincée de sable (+1)",desc:"vous ne laissez aucune trace visible derrière vous pendant 1 heure, quel que soit le type de terrain sur lequel vous évoluez. Quiconque tente un test de Pistage pour vous retrouver subit un malus de -30%."},
                {id:227,group:"Sorts de Magie commune (vedma)",name:"Sons",diff:4,"castduration":"1/2",ingredient:"une clochette (+1)",desc:"vous créez un bruit illusoire dans un rayon de 24 mètres (12 cases) dont le volume peut aller du chuchotement au rugissement. La nature du son et son volume sont laissés à votre choix, sachant que vous pouvez tout reproduire sauf des paroles intelligibles. La durée de l'effet ne peut dépasser 1 round."},
                {id:228,group:"Sorts dazhinyi",name:"Bénédiction de Dazh",diff:7,"castduration":"1/2",ingredient:"une plume d'oiseau de feu (+1)",desc:"la cible touchée bénéficie des bonnes grâces de Dazh. Pour toute la durée du sort, le feu ne lui inflige que la moitié des dégâts ordinaires après les réductions habituelles (arrondir à l'entier supérieur)."},
                {id:229,group:"Sorts dazhinyi",name:"Bénédiction du feu",diff:4,"castduration":"1/2",ingredient:"une poignée de cendres (+1)",desc:"vos prières font apparaître un feu de camp bienvenu à portée. Celui-ci n'a pas besoin de combustible et n'embrase pas les objets inflammables, mais il n'en dégage pas moins de la chaleur qui réchauffe les êtres vivants (et eux seuls). Le sort prend fin si une créature s'en approche assez près pour être blessée par les flammes."},
                {id:230,group:"Sorts torinyi",name:"Bénédiction de l'orage",diff:7,"castduration":"1/2",ingredient:"le bois d'un arbre frappé par la foudre (+1)",desc:"vos prières modifient les particularités de l'air ambiant, faisant croire aux animaux qu'un orage se lève. Les petits animaux et troupeaux s'éloignent automatiquement de vous à grands pas pour se cacher ou se regrouper. Les autres animaux (et ceux contrôlés par autrui) doivent réussir un test de Force Mentale Facile (+20) sous peine de prendre la fuite."},
                {id:231,group:"Sorts torinyi",name:"Bénédiction de Tor",diff:4,"castduration":"1/2",ingredient:"une amulette torinyi en argent (+1)",desc:"l'arme, qui bénéficie des faveurs de Tor, crépite d'énergie. Elle inflige +1 point de dégâts jusqu'à la fin du sort."},
                {id:232,group:"Sorts ursunyi",name:"Bénédiction de la patte léchée",diff:3,"castduration":"1/2",ingredient:"de la salive d'ours (+1)",desc:"vous grognez une supplique à l'attention d'Ursun pour qu'il atténue la douleur d'une blessure. On considère que la cible a bénéficié de soins médicaux."},
                {id:233,group:"Sorts ursunyi",name:"Bénédiction d'Ursun",diff:4,"castduration":"1/2",ingredient:"un poisson frais (+1)",desc:"vos prières confèrent à la cible un bonus de +10 aux tests d'Orientation et de Survie joués dans l'oblast ou durant l'hiver."},
                {id:234,group:"Magie commune (Warp)",name:"Douleur lancinante",diff:5,"castduration":"1/2",ingredient:"une larme d'un enfant humain (+1)",desc:"vous provoquez un accès de douleur intense chez une cible située dans un rayon de 12 mètres (6 cases). La victime doit réussir un test d'Endurance sous peine de subir un malus de –5% aux tests de Capacité de Combat, Capacité de Tir et Agilité pendant 1d10 rounds."},
                {id:235,group:"Magie commune (Warp)",name:"Faveur",diff:5,"castduration":"1/2",ingredient:"un morceau de chair humaine (+1)",desc:"vous bénéficiez d'un bonus de +5% à votre prochain test. Une autre application du sort consiste, si vous recourez à la règle de la Faveur du Rat Cornu (cf. Chapitre VI : Personnages skavens), à s'emparer de la faveur du Rat Cornu d'un autre homme-rat situé à 16 mètres ou moins (8 cases). Vous ne savez alors pas forcément quel skaven bénéficiait de la faveur. S'il n'y a aucun skaven doté de la faveur à portée, le sort échoue automatiquement."},
                {id:236,group:"Magie commune (Warp)",name:"Flamme spectrale",diff:6,"castduration":"1/2",ingredient:"une pincée de poudre de malepierre (+1)",desc:"vous invoquez une bulle d'un feu vert et luisant, qui se met à flotter devant vous. Un liquide visqueux dégouline de cette petite masse brûlante. Vous pouvez projeter cette balle ardente sur une cible située dans un rayon de 8 mètres (4 cases), auquel cas la flamme spectrale agit comme un projectile magique doté d'une valeur de dégâts de 1. Sans cela, ce modeste sort produit une luminosité équivalente à celle d'une torche pendant une heure, après quoi la boule verte s'évanouit après quelques secondes de crépitation."},
                {id:237,group:"Magie commune (Warp)",name:"Marque du Rat Cornu",diff:3,"castduration":"1/2",ingredient:"une dent pourrie (+1)",desc:"une créature que vous ciblez dans un rayon de 16 mètres (8 cases) doit réussir un test de Force Mentale sous peine d'acquérir une marque inélégante, qui prend par exemple la forme d'une plaie suintante sur le front ou sur le dos de la main. Cette marque reste en place pendant 1d10 heures et inflige un malus de –5% aux tests de Sociabilité jusqu'à la fin des effets. Les Prophètes Gris utilisent ce sort sur leurs messagers."},
                {id:238,group:"Magie commune (Warp)",name:"Serviteur rat",diff:3,"castduration":"1/2",ingredient:"un morceau de fromage moisi (+1)",desc:"vous invoquez un rat brun ordinaire. Pendant les 1d10 prochaines heures, vous pouvez communiquez avec l'animal comme si vous parliez un langage commun et celui-ci vous obéira, même si cela doit provoquer sa propre mort. Les serviteurs rats peuvent attraper de petits objets, ronger des cordes et effectuer toutes les tâches qu'un rat ordinaire est en mesure de faire, sachant que les missions envisageables sont limitées par l'intelligence animale du sujet."},
                {id:239,group:"Magie commune (Warp)",name:"Vulnérabilité à la contagion",diff:4,"castduration":"1/2",ingredient:"une poignée d'excréments (+1)",desc:"une cible située dans un rayon de 16 mètres (8 cases) doit réussir un test d'Endurance sous peine de subir un malus de –20% aux tests visant à résister à la maladie, et ce pendant 24 heures. Les cibles dotées du talent Résistance aux maladies peuvent recourir au bonus qui y est associé pour résister aux effets de ce sort."},
                {id:240,group:"Domaine de la Bête",name:"Ailes du faucon",diff:25,"castduration":"2",ingredient:"un faucon vivant (+3)",desc:"des ailes vous poussent dans le dos, suffisamment puissantes pour vous porter dans les airs. Vous pouvez voler pendant un nombre de minutes égal à votre valeur de Magie, avec une valeur de Mouvement en vol de 4. Pour plus de renseignements sur les éplacements aériens, veuillez consulter le Chapitre 6: Combat, dégâts et mouvements. Il va sans dire que le commun des mortels, voyant un tel être évoluer dans les airs, vous prendra pour un démon du Chaos et réagira en conséquence."},
                {id:241,group:"Domaine de la Bête",name:"Apaisement de la bête",diff:5,"castduration":"1/2",ingredient:"un morceau de sucre (+1)",desc:"votre voix apaisante et hypnotique calme un animal situé dans un rayon de 48 mètres (24 cases), à moins qu'il ne réussisse un test de Force Mentale. Vous pouvez vous approcher de la bête et la toucher sans crainte, elle se tiendra tranquille. S'il s'agit d'une monture, vous pouvez la chevaucher avec un bonus de +10% aux tests d'Équitation qui vous seront demandés. L'animal reste bien disposé à votre égard pendant un nombre de rounds égal à votre valeur de Magie, à moins que vous ne l'agressiez, auquel cas, le charme est immédiatement rompu."},
                {id:242,group:"Domaine de la Bête",name:"Asservissement de la bête",diff:7,"castduration":"1",ingredient:"une bride (+1)",desc:"vous brisez l'esprit sauvage d'un animal (qui peut être domestiqué) situé dans les 12 mètres (6 cases). Les animaux pouvant être affectés comprennent les chevaux, les chiens et certains oiseaux de proie. Cela ne comprend pas les animaux ordinairement suavages comme les loups, les ours, les serpents etc. L'animal visé a droit à un test de Force Mentale pour ignorer les effets du sort. En cas d'échec, il restera à tout jamais docile à l'égard des humains, des elfes et des halflings, bien qu'il soit toujours susceptible d'être effrayé (à juste titre) par des créatures comme les peaux-vertes, les skavens et les êtres souillés par le Chaos."},
                {id:243,group:"Domaine de la Bête",name:"Cuir du sanglier",diff:14,"castduration":"1/2",ingredient:"une lanière de cuir de sanglier tanné (+2)",desc:"votre peau devient aussi dure que celle d'un sanglier sauvage. Pendant la durée de ce sort, vous réduisez la valeur critique des coups critiques dont vous êtes victime de -1. Toutefois, à cause de la rigidité du cuir, vous subissez également un malus de -10% en Agilité. La transformation dure un nombre de minutes égale à votre valeur de Magie."},
                {id:244,group:"Domaine de la Bête",name:"Déchaînement de la bête",diff:19,"castduration":"2",ingredient:"le coeur d'un loup (+2)",desc:"vous libérez la bestialité primaire qui dort en chacun de vos alliés. Tous vos compagnons dans un rayon de 12 mètres (6 cases) font preuve de frénésie, comme par le biais du talent du même nom. Aucun jet de dé n'est nécessaire, la frénésie prend effet dès que le sort est lancé. Ce sort n'agit pas sur les animaux, qui sont déjà des bêtes !"},
                {id:245,group:"Domaine de la Bête",name:"Festin des corneilles",diff:17,"castduration":"1",ingredient:"une corneille en cage (+2)",desc:"vous invoquez un vol de corneilles surnaturelles, qui prend forme dans un rayon de 48 mètres (24 cases) et fond sur vos ennemis. Il s'agit de créatures aethyriques vengeresses, aux becs métalliques et aux plumes sanguinolentes. Vous pouvez les invoquer n'importe où, car elles sont capables de traverser n'importe quelle forme ou matière non consciente, comme les arbres, la roche, le métal, etc. Ces «corneilles» apparaissent toujours en nombre (représenté par le grand gabarit). Les ennemis affectés subissent 3 points de Blessures infligés par les oiseaux en furie, qui se dispersent aussi vite qu'ils sont arrivés. Il n'est pas nécessaire de déterminer la localisation des blessures: toutes sont infligées à la tête."},
                {id:246,group:"Domaine de la Bête",name:"Griffes de rage",diff:8,"castduration":"1/2",ingredient:"une griffe de chat (+1)",desc:"vos ongles se transforment en griffes acérées tandis que vous adoptez un aspect bestial. Vous recevez un bonus de +1 en Attaques, ainsi qu'un bonus de +10% en Capacité de Combat. Par ailleurs, vos griffes sont considérées comme des armes à une main avec l'attribut rapide. Griffes de rage persiste pendant un nombre de rounds égal à votre valeur de Magie. Vous ne pouvez manier aucune arme tant que le sort est actif."},
                {id:247,group:"Domaine de la Bête",name:"L'envol du corbeau",diff:7,"castduration":"1",ingredient:"une plume de corbeau (+1)",desc:"vous vous métamorphosez, ainsi que tout votre équipement, en corbeau pour une durée maximale de 1 heure. Vous conservez vos facultés d'esprit, votre Intelligence et votre Force Mentale, mais votre profil devient pour le reste celui d'un corbeau (cf. Chapitre 11: Le bestiaire). Cet aspect vous interdit de parler ou de lancer des sorts. Vous pouvez à tout moment mettre un terme à celui-ci et reprendre votre forme normale. Le sort prend fin si vous subissez un coup critique."},
                {id:248,group:"Domaine de la Bête",name:"L'ours enragé",diff:21,"castduration":"3 actions complètes",ingredient:"une patte d'ours (+3)",desc:"ce sort agit exactement comme le sort l'envol du corbeau, si ce n'est que la forme adoptée est celle d'un ours. Pour trouver le profil de cet animal, veuillez consulter le Chapitre 11: Le bestiaire."},
                {id:249,group:"Domaine de la Bête",name:"La voix du maître",diff:13,"castduration":"1/2",ingredient:"un fouet miniature fait de poils tressés d'animaux (+2)",desc:"vous forcez un animal situé dans un rayon de 24 mètres (12 cases) à obéir à vos ordres, à moins qu'il ne réussisse un test de Force Mentale. À son prochain tour de jeu, c'est vous qui décidez des actions de l'animal, lequel exécute ce que vous lui demandez."},
                {id:250,group:"Domaine de la Bête",name:"Langage animal",diff:11,"castduration":"1/2",ingredient:"une langue de l'animal dont vous allez adopter la forme (+2)",desc:"si vous lancez ce sort juste avant d'adopter une forme animale, vous pourrez alors parler une fois métamorphosé. Vous pouvez également lancer ce sort sur un animal situé dans un rayon de 24 mètres (12 cases) pour lui conférer le don de la parole pour un nombre de minutes égal à votre valeur de Magie."},
                {id:251,group:"Domaine de la Bête",name:"Le loup affamé",diff:15,"castduration":"2",ingredient:"une patte de loup (+2)",desc:"ce sort agit exactement comme le sort l'envol du corbeau, si ce n'est que la forme adoptée est celle d'un loup. Pour trouver le profil de cet animal, veuillez consulter le Chapitre 11: Le bestiaire."},
                {id:252,group:"Domaine de la Bête",name:"Long sommeil de l'hiver",diff:16,"castduration":"2",ingredient:"une dent d'ours (+2)",desc:"vous touchez un personnage, une créature ou un animal consentant, qui plonge immédiatement dans un sommeil semblable à l'hibernation d'un ours. Cet état persiste durant de nombreux mois, jusqu'au prochain solstice ou équinoxe qui suit celui qui vient (c'est à dire pendant le reste de la saison actuelle et la totalité de la saison suivante). Durant cette période de sommeil, le personnage n'a pas besoin de manger ni de boire. En raison de la nature magique de l'hibernation, tous les effets des maladies, poisons ou afflictions similaires que subit le sujet sont interrompus. Les dégâts et symptômes éventuels ne s'accumulent plus, bien que tous les malus et autres maux déjà en effet continuent de s'appliquer tant que le sujet hiberne. Un malus aux tests de Force Mentale découlant d'un poison continue ainsi à affecter un personnage en hibernation, mais un poison aux effets progressifs ne fait pas empirer son état de santé. Toutefois, la guérison naturelle se fait normalement. Le sujet de ce sort ne peut pas être réveillé par des moyens naturels : c'est le lanceux de sort qui peut provoquer un réveil prématuré d'une seule pensée. Vous pouvez aussi lancer ce sort sur vous-même. dans ce cas, vous pouvez si vous le désirez désigner un autre individu, qui doit être présent au moment où vous lancez le sort, et qui pourra vous réveiller avant l'expiration du sort au prix d'une action gratuite. Il s'agit d'un sort de contact."},
                {id:253,group:"Domaine de la Bête",name:"Obstination du bœuf",diff:11,"castduration":"1/2",ingredient:"un sabot de bœuf (+2)",desc:"vous poussez un cri à l'attention de tous vos alliés situés dans un rayon de 48 mètres (24 cases). Ceux qui fuient à cause des effets de la Terreur ou qui sont paralysés par la Peur se trouvent libérés de ces effets et n'ont pas besoin de rejouer de jets de dés dans les circonstances actuelles. Cependant, si de nouvelles sources de Peur ou de Terreur entrent en jeu, il faut y résister selon les règles normales."},
                {id:254,group:"Domaine de la Bête",name:"Puissant destrier",diff:18,"castduration":"2",ingredient:"un crin de destrier (+2)",desc:"ce sort agit exactement comme le sort l'envol du corbeau, si ce n'est que la forme adoptée est celle d'un destrier. Le profil de cet animal figure à la page 231 de WJDR et à la page 118 du Bestiaire du Vieux Monde."},
                {id:255,group:"Domaine de la Bête",name:"Retour de cruauté",diff:6,"castduration":"1/2",ingredient:"une pincée de guano de chauve-souris (+2)",desc:"vous lancez ce sort en touchant un animal, qu'il soit sauvage ou domestique. Toute créature intelligente qui blesse cet animal ou se montre cruelle de quelque autre façon que ce soit envers lui avant la prochaine pleine lune subit un malus de +10% aux tests de Sociabilité. L'effet se prolonge jusqu'à la pleine lune suivante."},
                {id:256,group:"Domaine de la Bête",name:"Ruine du cuir",diff:15,"castduration":"1",ingredient:"une fiole de corne de taureau en poudre (+2)",desc:"vous touchez un personnage, une créature un un animal, et tous les objets en cuir qu'il porte ou transporte (ceintures, bourses, sangles, fourreaux et même armure) se flétrissent et sont à jamais réduits en poussière. Il s'agit d'un sort de contact."},
                {id:257,group:"Domaine de la Bête",name:"Soulagement de la bête",diff:9,"castduration":"1",ingredient:"un peu de baume (+1)",desc:"vous touchez un animal blessé, guérissant un nombre de points de Blessures égale à votre valeur de Magie. Seuls les animaux naturels peuvent être guéris par ce sort. Les créatures magiques (y compris les familiers, même s'ils s'agit d'animaux \"ordinaires\") et les monstres ne sont pas affectés. Il s'agit d'un sort de contact."},
                {id:258,group:"Domaine de la Bête",name:"Soumission des pleutres",diff:18,"castduration":"1",ingredient:"un poil d'un chien peureux (+2)",desc:"d'une voix tonitruante, vous réprimandez vos adversaires en les comparant à de vils animaux qui feraient mieux de trembler de peur devant leur maître. Ce sort répand la panique chez 2d10 cibles situées dans un rayon de 48 mètres (24 cases), en commençant par celles qui sont les plus proches de vous. Chaque victime doit effectuer un test de Peur par round jusqu'à ce qu'elle réussisse et se débarrasse des effets de la Peur, ou jusqu'à ce que vous quittiez les lieux. Vous pouvez également choisir de concentrer les effets de ce sort sur une cible unique, qui devra réussir un test de Terreur Assez difficile (-10%)."},
                {id:259,group:"Domaine de la Bête",name:"Transformation répugnante",diff:21,"castduration":"2",ingredient:"la peau d'un crapaud bleu (+3)",desc:"votre puissante magie réduit votre cible à sa forme la plus vile, révélant sa véritable personnalité. À moins que la victime ne réussisse un test de Force Mentale Assez difficile (-10%), elle subit une terrible transformation : des poils poussent sur tout son corps, elle perd ses facultés de langage et se comporte de manière aussi étrange qu'inexplicable. Quand vient son tour d'agir, elle doit lancer 1d10 pour savoir ce qu'elle fait durant le round. 1 Le sujet découvre quelque chose de fascinant dans une de ses narines et passe un round à l'explorer avec les doigts. 2 Le sujet défèque bryuamment, pleurant sous l'effort. 3 Le sujet se met à crier sans raison et court dans une direction aléatoire, voire droit dans un obstacle. 4 Le sujet pousse des ricanements déments et attaque l'être vivant le plus proche.  5 Le sujet pousse un beuglement et tente d'étreindre l'objet le plus proche.6 Le sujet se roule en boule et se met à rire comme un dément. 7 Le sujet danse la gigue en agitant son arme (ou ses mains) au-dessus de sa tête. 8 Le sujet agit normalement durant ce round. 9 Le sujet reste immobile et muet. 10 Le sujet se met à braire comme un âne, forçant tous les alliés situés dans un rayon de 8 mètres (4 cases) à effectuer un test de Peur. Les effets du sort sont permanents à moins que vous ne relanciez avec succès le sort sur cette cible, ce qui le révoque, ou qu'on ne lance dissipation sur la victime en obtenant deux degrés de réussite au test de focalisation associé. Il s'agit d'un sort de contact."},
                {id:260,group:"Domaine des Cieux",name:"Ailes célestes",diff:18,"castduration":"1",ingredient:"une plume de colombe (+2)",desc:"vous êtes porté dans les airs par des vents sous votre contrôle. Vous pouvez ainsi voler pendant un nombre de minutes égal à votre valeur de Magie, avec une valeur de Mouvement en vol de 6. Pour plus de renseignements sur les déplacements aériens, veuillez consulter le Chapitre 6: Combat, dégâts et mouvements. Vous ne pouvez lancer ce sort sur quelqu'un d'autre."},
                {id:261,group:"Domaine des Cieux",name:"Boussole divinatoire",diff:21,"castduration":"1",ingredient:"une lentille ébréchée (+3)",desc:"vous suivez les signes qui apparaissent dans le ciel pour localiser un objet qui a été perdu ou qu'on a caché. Vous pouvez tenter de trouver un objet de type général (\"une source d'eau potable\", par exemple, ou \"Mon royaume pour un cheval !\"), ou quelque chose de plus spécifique (\"ma bourse\", ou \"l'épée volée de mon compagnon Karl\"). En lançant ce sort, vous pressentez fortement dans quelle direction vous pourrez trouver l'objet spécifié, mais vous n'avez aucune idée de la distance. Quand vous cherchez un objet de type général, vous savez dans quelle direction on peut trouver le plus proche exemplaire de ce type d'objet. Si vous voulez chercher un objet spécifique, il doit vous être familier, soit que vous l'ayez examiné vous-même, soit qu'on vous l'ait décrit acec un grand luxe de détails. Il faut généralement lancer plusieurs boussoles divinatoires pour effectuer une triangulation et découvrir précisément la localisation de l'objet recherché. La direction indiquée par boussole divinatoire ne tient aucun compte des obstacles comme les plans d'eau, les murs de château, etc."},
                {id:262,group:"Domaine des Cieux",name:"Destin fatal",diff:31,"castduration":"1h",ingredient:"la corde d'un pendu (+3)",desc:"vous recourez à la plus puissante des magies pour altérer le cours même du Destin. Avant de pouvoir lancer ce sort, vous devez vous munir d'une mèche de cheveux ou d'une goutte de sang de votre victime. Vous pouvez alors tenter de la condamner à mort. Pour que le sort puisse agir, vous devez vous trouver à moins de 1,5 kilomètre de votre cible. Si vous réussissez à lancer destin fatal, votre cible devra réussir un test Très difficile de Force Mentale (–30%), sans quoi elle perdra 1 point de Destin (les points de Fortune ne peuvent pas servir à relancer ce test). Un personnage dépourvu de points de Destin voit le prochain coup critique dont il est victime agir comme si sa valeur critique était de +10. Cette invocation étant particulièrement effroyable, tous les sorciers présents dans un rayon de 7,5 kilomètres prennent conscience de la perturbation dans l'Aethyr que provoque le sort. Les doyens astromanciens enseignent à leurs disciples que seuls les ennemis les plus abominables méritent l'usage de ce sort."},
                {id:263,group:"Domaine des Cieux",name:"Éclair",diff:10,"castduration":"1/2",ingredient:"un diapason (+1)",desc:"vous faites jaillir un éclair qui va s'abattre sur un adversaire situé dans un rayon maximum de 36 mètres (18 cases). Il s'agit d'un projectile magique d'une valeur de dégâts de 5."},
                {id:264,group:"Domaine des Cieux",name:"Éclaircie",diff:12,"castduration":"1",ingredient:"une bouteille contenant le souffle d'un aigle (+2)",desc:"vous écartez un nuage du ciel ou, dans le cas où le ciel est complètement obscurci par les nuages, vous éclaircissez une zone d'environ 100 mètres de diamètre dans la couverture nuageuse. Les nuages continuent à se déplacer et à se former naturellement après que le sort a été lancé : la période de temps pendant laquelle vous disposerez d'une portion de ciel clair dépend du temps qu'il fait. Quand il est lancé pendant une pluie, ce sort interrompt également les précipitations, bien qu'il soit d'empêcher les gouttes de tomber sur un point donné du sol, car les vents les poussent et les emportent d'une manière qu'il est assez difficile de discerner et de prévoire."},
                {id:265,group:"Domaine des Cieux",name:"Forme astrale",diff:18,"castduration":"2",ingredient:"une pincée de raifort (+2)",desc:"vous relaxez votre esprit afin qu'il s'évade de votre corps. Une fois sous forme astrale, vous êtes invisible mais vous pouvez voir et entendre normalement. Si vous pouvez allez où bon vous semble, vous êtes toujours limité par les lois du monde des mortels, et comme vous êtes désincarné, vous ne pouvez pas manipuler les objets solides. Vous pouvez, en faisant un effort de volonté, traverser des ouvertures par lesquelles vous pourrier normalement passer, comme entrer par une fenêtre ouverte ou vous glisser derrière un garde lorsqu'il ouvre une porte. Vous pouvez rester sous cette forme pendant un nombre d'heures égal à votre valeur de Magie, mais vous devez revenir dans votre corps avant que le sort s'achève. Si on vous en empêche d'une façon ou d'une autre, votre conscience revient dans votre corps, mais vous devez réussir un test d Force Mentale Difficile (-20%) pour éviter de gagner 1 point de Folie. Vous ne pouvez pas lancer ce sort sur autrui."},
                {id:266,group:"Domaine des Cieux",name:"Langage des oiseaux",diff:10,"castduration":"1",ingredient:"une langue d'oiseau (+2)",desc:"vous pouvez parler et comprendre le langage des oiseaux pendant un nombre de minutes égal à votre valeur de Magie. Cependant, cela ne force pas les oiseaux à vous parler ni à répondre à vos questions. Des oiseaux rusés peuvent même mentir ou demander des faveurs en échange de leur savoir. L'opinion qu'un oiseau aura de vous sera basée sur votre apparence et votre comportement. Toutefois, par la vertu de ce sort, vous gagnez une certaine expérience concernant les coutumes et le comportement des oiseaux, ce qui vous permet par exemple de comprendre pourquoi une volée d'oiseaux agit d'une manière curieuse ou pourquoi un nid a été abandonné."},
                {id:267,group:"Domaine des Cieux",name:"Lentille céleste",diff:8,"castduration":"1/2",ingredient:"une pincée de sable pur (+1)",desc:"vous créez un disque qui flotte dans les airs devant vous et grossit tout ce qui se trouve à distance de l'autre côté. Cela vous confère un bonus de +20% aux tentative de perception quand le seul handicap est la distance à laquelle se trouve le sujet de votre observation, ou un bonus de +10% quand il y a d'autres obstacles comme du nuage ou du brouillard. Les astromanciens utilisent souvent ce sort pour observer avec plus de clarté et de précision les étoiles et les autres éléments des cieux, mais on peut aussi s'en servir pour voir le paysage, les bâtiments et même les individus qui se trouvent en des lieux éloignés."},
                {id:268,group:"Domaine des Cieux",name:"Lueur stellaire",diff:22,"castduration":"3/2",ingredient:"une carte du ciel (+3)",desc:"vous invoquez la lumière des étoiles. Toute la zone dans un rayon de 48 mètres (24 cases) autour de vous est illuminée par une lumière douce qui révèle tout ce qui s'y cache. L'obscurité, qu'elle soit magique ou normale, se retrouve bannie, l'invisible devient visible, les personnages dissimulés ou déguisés sont exposés au grand jour et les zones secrètes (portes, pièces, etc.) sont révélées. Lueur stellaire reste actif pendant un nombre de minutes égal à votre valeur de Magie."},
                {id:269,group:"Domaine des Cieux",name:"Malédiction",diff:16,"castduration":"1/2",ingredient:"un miroir brisé (+2)",desc:"vous maudissez un adversaire situé dans un rayon de 24 mètres (12 cases). Pendant les 24 prochaines heures, la victime subit un malus de –10% à tous ses tests et toutes les attaques qu'elle subit se résolvent avec un bonus de +1 aux dégâts. Un même personnage ne peut être affecté par deux sorts de malédiction en même temps."},
                {id:270,group:"Domaine des Cieux",name:"Message astral",diff:24,"castduration":"2",ingredient:"une fiole d'encre faite à partir de sang d'aigle (+3)",desc:"vous manipulez le vent d'Azyr pour écrire un message subtil dans les étoiles. Le message n'est pas détaillé et ne peut servir à transmettre des idées complexes que si vous et le destinataire présumé du message avez discuté des signes que vous envisagiez d'envoyer à l'avance (\"un pour la tête, deux pour la mer\" par exemple). Afin de reconnaître et d'interpréter les signes que vous avez inscrits dans les astres, ceux qui les cherchent doivent réussir un test de Connaissances académiques (astronomie). En fait, quiconque observe le ciel peut effectuer un tel test pour réaliser qu'un message astral a été inscrit dans le ciel. Toutefois, sans avoir une idée des informations que vous envisagiez de transmettre, le sens des signes est difficile à déterminer. Ceci dit, il existe une sorte de \"langage des signes dans les astres\" connu des sorciers Célestes et des autres individus qui étudient les cieux. En plaçant un message astral à l'intérieur ou à proximité de certaines constellations ou régions du ciel à un moment donné, il est possible de transmettre l'idée de danger, d'opportunité ou de concepts similaires, et de les associer à certaines régions du monde, à certains dieux ou à certaines races. Il serait par exemple possible de communiquer les idées suivantes : \"La race des hommes est menacée aujourd'hui\", ou \"Le destin sourira aux disciples de Sigmar quand le soleil se lèvera.\" Les seigneurs sorciers du Collège Céleste désapprouvent ceux qui inscrivent des signes dans les astres sans nécessité, et ils conçoivent des punitions des plus désagréables pour ceux qu'ils soupçonnent d'avoir utilisé cette puissante magie à la légère ou sans raison valable."},
                {id:271,group:"Domaine des Cieux",name:"Nettoyage impeccable",diff:4,"castduration":"1/2",ingredient:"un chiffon propre (+1)",desc:"tout élément d'équipement lié à la perception (téléscope, mirour, fenêtre, etc.) est nettoyé de façon impeccable. Les jeunes sorciers Célestes utilisent souvent ce sort pour nettoyer et polir l'équipement astronomique de leurs aînés (ils le font en douce car tenter de se soustraire aux corvées grâce à la magie est un motif de punition). Bien des apprentis utilisent nettoyage impeccable et font ensuite quelques taches discrètes afin de dissimuler leur ouvrage magique, qui surpasse en tout point ce que la plupart des gens sont capables d'accomplir avec un chiffon et une brosse."},
                {id:272,group:"Domaine des Cieux",name:"Premier signe d'Amul",diff:6,"castduration":"1/2",ingredient:"un morceau de verre (+1)",desc:"vous pouvez interpréter certains signes présents dans l'air et autres indices permettant d'anticiper le futur immédiat. À votre prochain tour de jeu, vous pourrez relancer un jet de dés de votre choix, pouvant être de n'importe quel type (test de compétence, jet de dégâts, jet d'incantation, etc.)."},
                {id:273,group:"Domaine des Cieux",name:"Prémonition",diff:16,"castduration":"1/2",ingredient:"une patte de lapin (+2)",desc:"vous gagnez un point de Fortune supplémentaire, lequel peut être utilisé à n'importe quel moment durant les 24 heures à venir, mais uniquement pour relancer un test de caractéristique ou de compétence. Quand vous êtes sous l'effet d'un sort de prémonition, vous ne pouvez pas être à nouveau sujet à ce sort tant que vous n'avez pas utilisé le point de Fortune ou que la durée du sort n'est pas écoulée."},
                {id:274,group:"Domaine des Cieux",name:"Présage",diff:4,"castduration":"1min",ingredient:"le foie d'un petit animal (+1)",desc:"vous obtenez un aperçu de l'avenir en lisant les étoiles. Par le biais du sort présage, vous pouvez tenter de découvrir si les astres vous sont favorables dans le cadre d'une action future donnée. Le MJ effectue en secret un test d'Intelligence à votre place. En cas de réussite, le résultat du présage (qu'il soit favorable ou défavorable) reflète la vérité. En cas d'échec, le résultat du présage est faux, mais vous le pensez vrai (ce qui explique pourquoi le MJ s'occupe du test). Dans tous les cas, le MJ doit également jeter 2d10 en secret, représentant le nombre d'heures pendant lequel le présage reste valable. Au-delà de cette période, les résultats font intervenir trop de paramètres pour être estimés. C'est au MJ de déterminer, en fonction de ce qu'il sait, la réponse la plus cohérente à la question posée par le sort."},
                {id:275,group:"Domaine des Cieux",name:"Regain de fortune",diff:13,"castduration":"1",ingredient:"une patte de lapin (+2)",desc:"les mouvements des cieux révèlent les périodes favorisées par la fortune. La cible de ce sort regagne immédiatement la totalité de ses points de Fortune au lieu d'avoir à attendre le jour suivant. Cependant, ce personnage ne regagnera de nouveau ses points de Fortune le lendemain matin suivant : il les a déjà récupérés. Le surlendemain, il regagnera ses points de Fortune normalement. Ce sort ne peut pas être relancé sur la même cible tant qu'elle n'a pas récupéré ses points de Fortune normalement, au début de la journée. Il s'agit d'un sort de contact."},
                {id:276,group:"Domaine des Cieux",name:"Second signe d'Amul",diff:12,"castduration":"1",ingredient:"un morceau de verre teinté (+2)",desc:"ce sort est semblable à premier signe d'Amul, si ce n'est que vous avez droit à deux jets relancés dans l'heure qui suit l'incantation. Vous ne pouvez relancer ce sort avant d'avoir utilisé vos deux relances ou d'avoir atteint la fin de l'heure."},
                {id:277,group:"Domaine des Cieux",name:"Tempête de foudre",diff:25,"castduration":"1",ingredient:"une girouette (+3)",desc:"vous invoquez un orage d'éclairs qui se manifeste dans un rayon de 48 mètres (24 cases). Il s'agit d'une tempête du Chaos qui peut être appelée n'importe où, au fond des égouts ou en pleine nature. Utilisez le grand gabarit pour représenter la tempête de foudre. Chaque victime subit une attaque d'une valeur de dégâts de 5."},
                {id:278,group:"Domaine des Cieux",name:"Tornade",diff:14,"castduration":"1/2",ingredient:"une vessie animale (+2)",desc:"vous invoquez les vents déchaînés du ciel, qui s'abattent à un maximum de 48 mètres (24 cases) et renversent vos adversaires. Utilisez le grand gabarit. Les victimes se retrouvent à terre et doivent réussir un test d'Endurance, sous peine de rester assommées pendant 1 round. Tant qu'ils restent dans la zone d'effet, les personnages ne peuvent effectuer aucun tir (ni en être la cible) et doivent réussir un test de Force pour pouvoir se déplacer. Les attaques au corps à corps restent possibles, mais avec un malus de –20% à la CC. Tornade persiste pendant un nombre de rounds égal à votre valeur de Magie."},
                {id:279,group:"Domaine des Cieux",name:"Troisième signe d'Amul",diff:14,"castduration":"2",ingredient:"une goutte de votre sang (+2)",desc:"vous lisez les signes et les présages divins concernant votre avenir. Si vous subissez un coup critique durant les prochaines 24 heures, on relance automatiquement les dés du résultat de ce coup critique. Ensuite, vous appliquez celui des deux résultats que vous préférez. Vous ne pouvez pas relancer ce sort tant que vous n'avez pas utilisé la possibilité de relancer les dés ou que sa durée n'a pas expiré."},
                {id:280,group:"Domaine du Feu",name:"Bouclier d'Aqshy",diff:12,"castduration":"1",ingredient:"une amulette en fer (+1)",desc:"vous vous enveloppez des courants du vent rouge, qui vous protègent contre les attaques de feu. Vous recevez ainsi un bonus de +20% à votre valeur d'Endurance pendant 10 minutes, applicable uniquement contre les dégâts de feu, comme le souffle d'un dragon, les boules de feu, etc. Vous ne pouvez lancer ce sort sur une autre personne."},
                {id:281,group:"Domaine du Feu",name:"Boule de feu",diff:12,"castduration":"1/2",ingredient:"une bille de soufre (+2)",desc:"vous générez de l'Aethyr un nombre de boules de feu égal à votre valeur de Magie. Vous pouvez les lancer sur un ou plusieurs de vos adversaires dans un rayon de 48 mètres (24 cases). Les boules de feu sont des projectiles magiques ayant une valeur de dégâts de 3."},
                {id:282,group:"Domaine du Feu",name:"Cautérisation",diff:4,"castduration":"1/2",ingredient:"un morceau de charbon (+1)",desc:"vous pouvez appliquer vos mains sur une plaie ouverte et la refermer par cautérisation. Si ce sort ne rend pas de points de Blessures au sujet, il équivaut à des soins médicaux, ce qui peut sauver un blessé critique d'une mort certaine. Avec l'accord du MJ, ce sort peut être employé pour d'autres tâches similaires, comme le marquage au fer rouge, mais il ne peut fonctionner que si vos mains sont nues."},
                {id:283,group:"Domaine du Feu",name:"Cœur ardent",diff:16,"castduration":"2 actions complète",ingredient:"une fiole contenant une mixture de sang et d'huile (+2)",desc:"vous libérez l'ardeur enfouie dans le coeur de vos alliés. Tous vos compagnons dans un rayon de 30 mètres (15 cases) reçoivent un bonus de +20% à leurs tests de Peur et de Terreur pendant les 10 prochaines minutes. Le bénéfice de ce sort est perdu s'ils s'écartent de plus de 30 mètres (15 cases)."},
                {id:284,group:"Domaine du Feu",name:"Colérique",diff:6,"castduration":"1/2",ingredient:"un dé à coudre de bile (+1)",desc:"la cible que vous choisissez dans un rayon de 12 mètres (6 cases) doit réussir un test de Force Mentale pour éviter de devenir furieuse envers une autre cible que vous avez désignée. Si la victime manque le test de 20% ou plus, elle attaque la cible désignée. À chaque round, la cible peut tenter un nouveau test de Force Mentale pour se libérer des effets de ce sort."},
                {id:285,group:"Domaine du Feu",name:"Conflagration fatale",diff:31,"castduration":"3/2",ingredient:"une dent de dragon (+3)",desc:"Voici le sort le plus destructeur de l'arsenal des sorciers Flamboyants. En invoquant conflagration fatale, vous créez un enfer de flammes qui engloutit une zone de votre choix dans un rayon de 48 mètres (24 cases). Utilisez pour cela le grand gabarit. Les victimes subissent un nombre d'attaques égal à votre valeur de Magie et d'une valeur de dégâts de 4. Toute personne qui reste dans la zone après son prochain tour de jeu doit réussir un test de Force Mentale par round passé dans les flammes, sous peine de subir à nouveau les dégâts. Le sort reste actif jusqu'à ce qu'il ne reste plus rien de vivant dans la zone. Le sort constitue une invocation si puissante et violente que tous les sorciers dans un rayon de 7,5 kilomètres prennent conscience de la perturbation de l'Aethyr provoquée par son incantation. Les sorciers de bataille de l'Ordre Flamboyant poursuivent souvent ceux qui recourent à ce sort inconsidérément, pour leur rappeler où se situent les limites, d'une manière plutôt mordante."},
                {id:286,group:"Domaine du Feu",name:"Couronne de feu",diff:8,"castduration":"1",ingredient:"une couronne d'or (+1)",desc:"ce sort crée une majestueuse couronne de flammes ondoyantes au-dessus de votre tête, pour un nombre de rounds équivalent à votre valeur de Magie. Pendant la durée du sort, vous recevez +20% à tous vos tests de Commandement et d'Intimidation. Par ailleurs, vos ennemis doivent réussir un test de Force Mentale avant de pouvoir vous attaquer au corps à corps. S'ils le ratent, il leur faut entreprendre une autre action. Le diadème de feu éclaire comme une torche et peut servir à embraser des matières inflammables, mais ceci demande des gestes tellement inélégants que peu de sorciers Flamboyants y recourent sans bonne raison. Un sorcier Flamboyant ne peut en aucun cas se blesser par le biais de ce sort."},
                {id:287,group:"Domaine du Feu",name:"Cuisson éclair",diff:4,"castduration":"1/2",ingredient:"une fourchette en métal (+1)",desc:"vous pouvez cuir instantanément une portion de nourriture à votre goût ou faire bouillir immédiatement à gros bouillon jusqu'à un litre d'eau (ou de liquide similaire). Il s'agit d'un sort de contact."},
                {id:288,group:"Domaine du Feu",name:"Égide d'Aqshy",diff:24,"castduration":"2",ingredient:"un bouclier miniature en or (+3)",desc:"vous et tous les alliés qui vous tiennent les mains (ainsi que tous ceux qui leur tiennent les mains, etc.) êtes totalement immunisés contre les dégâts causés par le feu. Si la chaîne des mains est interrompue, quiconque n'est plus relié à vous-même de manière directe ou indirecte perd immédiatement le bénéfice de cette immunité. Ceux qui sont protégés par l'égide d'Aqshy sont immunisés contre les feux naturels, ainsi que tous les effets de feu magique générés par des sorts dont la difficulté est inférieure à celle de celui-ci, et contre tous les effets de feu créés par des créatures dont la Force Mentale est inférieure à la vôtre. Ce sort dure un nombre de minutes égal à votre valeur de Magie. Vous ne pouvez lancer ce sort que sur vous-même, c'est à dire que vous seul pouvez être le point de départ de la chaîne d'individus protégés."},
                {id:289,group:"Domaine du Feu",name:"Embrasement de colère",diff:16,"castduration":"1",ingredient:"une mèche de cheveux roux (+2)",desc:"la victime de votre choix est consumée par la haine. La cible doit réussir un test de Force Mentale Assez difficile (-10%) pour résister aux effets de ce sort. En cas d'échec, elle gagne un bonus de +10% en Capacité de Combat et en Endurance. Toutefois, à chaque round, elle perd également 1 point de Blessures en raison des des feux de la rage qui la consumment. La victime attaque la créature la plus proche, qu'il s'agisse d'un allié ou d'un ennemi. Elle peut se libérer de ce sort en réussissant un test de Force Mentale Assez difficile (-10%), au prix d'une action gratuite qu'elle peut entreprendre à la fin de chaque tour. Il s'agit d'un sort de contact."},
                {id:290,group:"Domaine du Feu",name:"Épée ardente de Rhuin",diff:14,"castduration":"1/2",ingredient:"une torche (+2)",desc:"une épée de flammes se matérialise entre vos mains. Elle équivaut à une arme magique avec l'attribut percutante et une valeur de dégâts de 4. Vous recevez également pendant toute la durée du sort un bonus de +1 en Attaques, applicable uniquement quand vous maniez l'épée ardente de Rhuin. Le sort reste actif pour un nombre de rounds égal à votre valeur de Magie. Vous pouvez prolonger cette durée en réussissant un test de Force Mentale à chaque round suivant."},
                {id:291,group:"Domaine du Feu",name:"Explosion flamboyante",diff:22,"castduration":"1",ingredient:"une dague en acier trois fois trempé (+3)",desc:"vous provoquez 1d10 explosions de flammes sur un ou plusieurs de vos adversaires dans un rayon de 48 mètres (24 cases). Chaque explosion correspond à un projectile magique d'une valeur de dégâts de 4. Dans tous les cas, vous ne pouvez créer moins d'explosions que votre valeur de Magie."},
                {id:292,group:"Domaine du Feu",name:"Flamme inextinguible",diff:11,"castduration":"1/2",ingredient:"un soufflet (+2)",desc:"choisisssez un feu situé dans les 12 mètres (6 cases) et dont la taille ne dépasse pas celle d'un feu de camp. Il devient impossible à éteindre par le vent ou par l'eau, qu'ils soient magiques ou naturels. Cet effet dure un jour si vous avez 1 en Magie, une semaine si vous avez 2, un mois si vous avez 3 et un an si vous avez 4. En plus d'être inextinguible, le feu ne consomme aucun combustible tant que dure le sort. Si les combustibles qui alimentaient le feu sont dispersés, les flammes subsistent sur les petits morceaux : un feu de camp inextinguible qu'on aurait dispersé à coups de pied, par exemple, continue de brûler les morceaux de bois qui le composaient. Une fois que le sort expire, le feu continue de brûler normalement jusqu'à ce que les combustibles soient consummés ou qu'il soit éteint par un agent extérieur."},
                {id:293,group:"Domaine du Feu",name:"Flammes d'U'Zhul",diff:6,"castduration":"1/2",ingredient:"une allumette (+1)",desc:"vous pouvez lancer une flèche de feu sur un adversaire situé dans un rayon maximum de 36 mètres (18 cases). Il s'agit d'un projectile magique ayant une valeur de dégâts de 4."},
                {id:294,group:"Domaine du Feu",name:"Goût du feu",diff:9,"castduration":"1",ingredient:"un grain de poivre (+1)",desc:"vous conférez un goût à une portion de nourriture ou de boisson. La nourriture devient fortement épicée et les boissons de tout type obtiennent le goût brûlant et les effets d'un alcool fort. Une \"portion\" de nourriture représente un plat de nourriture que l'on vous sert, un récipient contenant un plat unique (un faitout entier, par exemple), ou un récipient de boisson dont la taille est inférieure ou égale à un fût d'eau ou un tonnelet de bière. Les effets des alcools sont décrits à la page 115 de WJDR. Les breuvages qui contiennent déjà de l'alcool deviennent l'équivalent d'alcools forts. La nourriture épicée cause chez ceux qui n'y sont pas habitués (le lanceur du sort est toujours considéré comme habitué à ce genre de nourriture) des douleurs intestinales pendant plusieurs heures, sauf si le convive réussit un test d'Endurance."},
                {id:295,group:"Domaine du Feu",name:"Rideau de feu",diff:14,"castduration":"1",ingredient:"un morceau de tapisserie roussi par le feu (+2)",desc:"vous créez un rideau de flammes haut de 4 mètres (2 cases) et long de 12 mètres (6 cases). Vous pouvez en modérer le contour à volonté. Bien qu'il soit comme suspendu, tel un rideau affecté par la gravité normale, la \"tringle\" imaginaire qui le supporte peut être tordue à n'importe quel angle, suivre n'importe quelle courbe ou être suspendue à n'importe quelle hauteur de votre choix. Toute créature adjacente au rideau ou le touchant subit une valeur de dégâts 3, ce qui est également valable si on le traverse. De plus, le rideau lui-même et la fumée qu'il dégage infligent un malus de -20% en Capacité de Tir à tous les projectiles qui sont tirés au travers. Un malus similaire de -20% s'applique à tous les tests liés à la vue et à la perception à travers le rideau. Le rideau peut être agité par la brise ou un vent violent, tout comme le serait un rideau d'étoffe lourde. Cela peut l'amener, selon le bon vouloir du MJ, à toucher les créatures proches (et à infliger les dégâts indiqués plus haut) ou à mettre le feu aux substances combustibles. Ce sort un nombre de minutes égal à votre valeur de Magie."},
                {id:296,group:"Domaine du Feu",name:"Ruine et destruction",diff:18,"castduration":"1",ingredient:"un morceau de charbon chauffé à blanc (+2)",desc:"vous suscitez la destruction instantannée par le feu d'un objet non vivant. Si vous avez une valeur de Magie de 1, vous pouvez affecter des objets représentant au maximum un encombrement de 10 (des objets qui tiennent dans la paume de votre main). Si elle est de 2, vous pouvez affecter des objets représentant un encombrement de 50 (des objets que l'on peut facilement porter avec soi) ; si elle est de 3, des objets représentant un encombrement de 200 (des objets que l'on peut soulever relativement facilement) ; et si elle est de 4, des objets représentant un encombrement de 1000 (des objets qui peuvent être traînés par un cheval). Une fois le sort lancé, les restes exacts de l'objet dépendent de sa nature et c'est au MJ d'en décider au cas par cas. Une feuille de parier est réduite en cendres. Une robuste chaise de bois se transforme en un tas de bouts de bois calcinés. Une épée sera noircie et les bandes de cuir de sa poignée détruites, mais la lame restera intacte. La règle générale, c'est que tout objet qui serait détruit par un incendie prolongé sera détruit par ruine et destruction. Une fois le sort terminé, les restes de l'objet sont froids au toucher. Il s'agit d'un sort de contact."},
                {id:297,group:"Domaine du Feu",name:"Sang bouillant",diff:21,"castduration":"1",ingredient:"la rate d'un ogre (+3)",desc:"vous infligez à une cible qui a manqué un test d'Endurance Assez difficile (-10%) une souffrance atroce en faisant bouillir son sang. À chaque round, pendant un nombre de rounds égal à votre valeur de Magie, la victime subit un coup d'une valeur de dégâts de 3, qui tient compte de son Endurance mais pas de son armure. De plus, tant qu'elle est sous l'effet de ce sort, la victime subit un malus de -20% aux tests de Perception en raison des hallucinations et de la douleur. Les cibles qui sont tuées par sang bouillonnant explosent dans une gerbe de sang brûlant, infligeant un coup d'une valeur de dégâts de 1 à toutes les créatures situées dans un rayon de 2 mètres (1 case) de la victime. Il s'agit d'un sort de contact."},
                {id:298,group:"Domaine du Feu",name:"Souffle de feu",diff:25,"castduration":"1",ingredient:"une écaille de dragon (+3)",desc:"vous crachez un torrent de flammes, semblable au souffle des dragons de légende. Utilisez le gabarit de flammes. Les victimes du sort subissent une attaque d'une valeur de dégâts de 8. Un test de Force Mentale réussi de leur part réduit l'attaque à une valeur de dégâts de 4. Il va sans dire que le commun des mortels, vous voyant cracher le feu de la sorte, ne manquera pas de vous prendre pour quelque démon du Chaos et réagira en conséquence."},
                {id:299,group:"Domaine du Feu",name:"Vengeance ardente",diff:26,"castduration":"1min",ingredient:"trois gouttes du sang de la cible (+3)",desc:"vous suscitez chez la cible de ce sort un brûlant désir de vengeance à l'égard d'un autre personnage. Vous devez nommer la cible et l'objet de la vendetta pendant l'incantation de ce sort. Si la victime du sort rate un test de Force Mentale Assez difficile (-10%), elle n'a plus qu'une obsession : se venger du personnage nommé. La victime est incapable de dire pourquoi : tout ce qu'elle sait, c'est que son ennemi est un traître et ne mérite que la mort. Le sort dure un an et un jour, ou jusqu'à ce que le vengeance ait été accomplie. Chaque mois, la cible peut effectuer un autre test de Force Mentale pour tenter de se libérer du sort, mais ces tests ultérieurs sont Très difficiles (-30%). Le brasier de la vengeance ardente est difficile à éteindre."},
                {id:300,group:"Domaine de la Lumière",name:"Arme rayonnante",diff:9,"castduration":"1/2",ingredient:"un porte-bonheur en argent (+1)",desc:"vous enchantez temporairement une arme de mêlée que vous touchez à l'aide du pouvoir radiant de Hysh. Pendant un nombre de minutes égal à votre valeur de Magie, l'arme est considérée comme magique et bénéficie d'un bonus aux dégâts de +2 contre les démons. Le porteur d'une arme rayonnante échoue automatiquement aux tests de Dissimulation. Il s'agit d'un sort de contact."},
                {id:301,group:"Domaine de la Lumière",name:"Bannissement",diff:13,"castduration":"1",ingredient:"une branche de chêne (+2)",desc:"vous emprisonnez un démon, situé dans un rayon de 24 mètres (12 cases), dans les tentacules de Hysh, profitant de la pureté de la lumière pour le renvoyer dans les Royaumes du Chaos. Si le sort est lancé avec succès, le bannissement se résout par le biais d'un test de Force Mentale opposé. Si vous le remportez, le démon disparaît ; si vous perdez, le démon reste. En cas d'égalité, vous restez tous deux bloqués en plein combat mental. Aucun des deux adversaires ne peut alors entreprendre la moindre action (pas même esquiver) tant que la lutte continue. Effectuez des tests de Force Mentale opposés à chacun de vos tours de jeu jusqu'à ce que l'un des deux l'emporte. Bannissement peut également servir à exorciser une créature possédée."},
                {id:302,group:"Domaine de la Lumière",name:"Bienveillance de Hysh",diff:27,"castduration":"2",ingredient:"une mèche de cheveux de la cible, coupée alors qu'elle était en pleine santé (+3)",desc:"vous enveloppez un personnage du pouvoir guérisseur de Hysh et tous les dégâts et maladies qui l'affectent sont guéris. Cela comprend toutes les Blessures subies , les maladies dont il souffre actuellement, les poisonsqu'il a en ce moment dans le corps, et autres effets semblables. Il s'agit d'un sort de contact que vous pouvez également lancer sur vous-même."},
                {id:303,group:"Domaine de la Lumière",name:"Clairvoyance",diff:7,"castduration":"1/2",ingredient:"une perle de verre transparente (+1)",desc:"vous touchez un personnage et réduisez un malus qui affecte son Intelligence, sa Force Mentale ou sa Sociabilité d'un maximum de 10% (un malus de -20% passe à -10%, un malus de -10% ou moins est réduit à zéro, etc.). La réduction du malus est effective pendant un nombre d'heures égal à votre valeur de Magie, mais le fait de lancer ce sort plusieurs fois de suite ne permet pas de cumuler les effets positifs affectant une même caractéristique d'un même personnage. Cependant, vous pouvez le lancer plusieurs fois pour réduire des malus affectant des caractéristiques différentes. Il s'agit d'un sort de contact que vous pouvez lancer sur vous-même."},
                {id:304,group:"Domaine de la Lumière",name:"Colonne de gloire",diff:28,"castduration":"1",ingredient:"un diamant d'une valeur d'au moins 100 co (+3)",desc:"vous focalisez l'énergie de Hysh qui se matérialise en une colonne meurtrière de lumière ardente, quelque part dans un rayon de 48 mètres (24 cases). Utilisez le grand gabarit. Les créatures affectées reçoivent une attaque d'une valeur de dégâts de 4 et doivent réussir un test d'Agilité sous peine de subir également les effets du sort lueur éblouissante. Colonne de gloire étant une invocation surpuissante, tous les sorciers présents dans un rayon de 7,5 kilomètres prennent conscience de la perturbation dans l'Aethyr provoquée par ce sort ; y recourir pour autre chose que la lutte directe contre les démons est très mal perçu par les doyens hiérophantes de l'Ordre de la Lumière."},
                {id:305,group:"Domaine de la Lumière",name:"Édifice illuminé",diff:11,"castduration":"1",ingredient:"une bougie de cire intacte (+2)",desc:"vous illuminez l'intérieur d'un bâtiment comme s'il était en plein jour. Avec une valeur de Magie de 1 vous pouvez affecter un bâtiment de la taille d'une masure ; avec une valeur de 2 un bâtiment ou une maison comportant plusieurs pièces, mais de taille modérée ; avec une valeur de 3 un grand manoir ; et avec une valuer de 4 n'importe quel bâtiment d'un seul tenant, quelle que soit sa taille. La lumière brille dans les pièces, les greniers, les placards et dans tout autre espace défini par un plafond et des murs faits par la main de l'homme. En plus d'illuminer l'intérieur de l'édifice, la lumière brille à travers les portes, les fenêtres, et même les interstices séparant planches et bardeaux. Il s'agit d'un sort de contact : vous devez toucher un élément structurel solide du bâtiment (mur, poutre, etc.) pour qu'il soit affecté."},
                {id:306,group:"Domaine de la Lumière",name:"Exorcisme",diff:26,"castduration":"3/2",ingredient:"un rameau d'un chêne frappé par la foudre (+3)",desc:"vous lacérez les vents de l'Aethyr, vous permettant ainsi de bannir un groupe de démons situé dans un rayon de 48 mètres (24 cases). Utilisez le grand gabarit. Les démons affectés doivent réussir un test de Force Mentale, sous peine d'être bannis et renvoyés dans les Royaumes du Chaos."},
                {id:307,group:"Domaine de la Lumière",name:"Guérison",diff:16,"castduration":"1",ingredient:"un cataplasme (+2)",desc:"vous utilisez le pouvoir de Hysh pour aider un ou plusieurs personnages souffrant de maladie ou empoisonnés. Le sort affecte un nombre maximal de personnages égal à votre valeur de Magie, et tous doivent être situés dans un rayon de 8 mètres (4 cases) de vous. Si ce sort est lancé avec succès, toutes les maladies affectant les cibles voient leur durée réduite de moitié (en arrondissant à l'entier supérieur). Sinon, le sort peut débarrasser chaque cible d'un poison, annulant tous ses effets. Vous devez décider si guérison traitera les maladies ou les empoisonnements quand vous lancez le sort."},
                {id:308,group:"Domaine de la Lumière",name:"Inspiration lumineuse",diff:16,"castduration":"1min",ingredient:"une page tirée d'un livre (+2)",desc:"vous ouvrez votre esprit à Hysh et laissez sa sagesse vous apporter la lumière sur un problème intellectuel des plus épineux. Une fois le sort terminé, vous pouvez effectuer un unique test de Connaissances avec un bonus de +30%."},
                {id:309,group:"Domaine de la Lumière",name:"Lueur éblouillsante",diff:5,"castduration":"1/2",ingredient:"un petit miroir (+1)",desc:"vous créez un jaillissement lumineux, dans un rayon de 36 mètres (18 cases), qui éblouit les personnes situées dans la zone. Utilisez le petit gabarit. Pendant 1d10 rounds, les créatures affectées subissent un malus de –10% à leurs tests de Capacité de Combat, de Capacité de Tir et d'Agilité, ainsi que pour tous les tests de Perception liés à la vue."},
                {id:310,group:"Domaine de la Lumière",name:"Lueur purificatrice",diff:5,"castduration":"1/2",ingredient:"un morceau de savon (+1)",desc:"une faible lueur passe sur la surface de n'importe quel objet ou personnage, et ce dernier se retrouve d'une impeccable propreté. La poussière diaparaît, les ternissures s'estompent, les odeurs rances sont éliminées et la barbe de plusieurs jours est nettement coupée. Quant à la nourriture et aux boissons gâtées, on peut les purifier (et même les rendre savoureuses si elles l'étaient à l'origine) grâce à ce sort. Il s'agit d'un sort de contact."},
                {id:311,group:"Domaine de la Lumière",name:"Lumière aveuglante",diff:24,"castduration":"1",ingredient:"un disque de mithril poli (+3)",desc:"vous créez une explosion de lumière chatoyante, apparaissant dans un rayon de 48 mètres (24 cases), aveuglant toutes les créatures comprises dans la zone. Utilisez le grand gabarit. Toutes les personnes affectées doivent effectuer un test d'Agilité. En cas d'échec, chaque victime est aveuglée, ce qui réduit ses valeurs d'Agilité, de Mouvement et de Capacité de Combat de moitié (arrondies à l'inférieur), tandis que sa Capacité de Tir tombe à 0. De plus, elle rate automatiquement tous ses tests de Perception liés à la vue. Les personnes qui réussissent le test initial ne subissent que l'équivalent du sort lueur éblouissante. Dans tous les cas, les effets du sort persistent pendant 1d10 rounds."},
                {id:312,group:"Domaine de la Lumière",name:"Lumière immunisante",diff:12,"castduration":"2",ingredient:"une bougie de cire bénie par un prêtre de Shallya (+2)",desc:"en lançant ce sort, vous allumez un feu de n'importe quelle taille, depuis la flamme d'une bougie jusqu'à un feu de camp. Tous ceux qui se trouvent dans la zone éclairée par cette flamme (sa portée maximale : cf. page 117 de WJDR) réussissent automatiquement tous les tests d'Endurance requis pour résister aux maladies tant qu'elle brûle. On peut accroître la taille du feu (en ajoutant du combustible, par exemple) et même le diviser en plusieurs parties (en allumant par exemple une autre bougie à l'aide de la première). Dans ce dernier cas, les feux \"engendrés\" ont exactement les mêmes effets que les \"parents\", et ces effets s'appliquent à ceux qui sont illuminés par n'importe lequel de ces feux jusqu'à ce qu'ils s'éloignent."},
                {id:313,group:"Domaine de la Lumière",name:"Manteau de lumière",diff:8,"castduration":"1/2",ingredient:"une bougie (+1)",desc:"vous êtes enveloppé d'un champ de lumière qui vous protège des attaques à distance. Tous les projectiles non magiques voient leur valeur de dégâts réduite à 0 (en d'autres termes, les dégâts sont seulement de 1d10). Manteau de lumière reste actif pendant un nombre de minutes égal à votre valeur de Magie, durant lesquelles vous ne pouvez effectuer aucun test de Dissimulation à cause de la lumière que vous dégagez."},
                {id:314,group:"Domaine de la Lumière",name:"Pouvoir de la vérité",diff:18,"castduration":"3/2",ingredient:"une feuille de vélin vierge (+2)",desc:"un personnage que vous touchez devient plus convaincant, mais uniquement s'il parle honnêtement. S'il se conforme à cette restriction, le personnage gagne un bonus de +30% aux tests de Charisme et peut affecter le double du nombre normal d'individus (on effectue le calcul une fois que tous les effets d'Éloquence et d'Orateur né ont été pris en compte). Les effets de ce sort n'ont rien d'ostentatoire (la cible n'est pas environnée d'une aura lumineuse ni accompagnée par une musique céleste), et il n'y a donc aucun moyen facile de juger de l'honnêteté du bénéficiaire. Il s'git d'un sort de contact que vous pouvez également lancer sur vous-même."},
                {id:315,group:"Domaine de la Lumière",name:"Rayon de soumission",diff:21,"castduration":"2",ingredient:"un miroir parfait (+3)",desc:"un trait de lumière étincelante jaillitde votre main. Si vous utilisez le miroir, la lumière émane de celui-ci et il se brise quand le sort s'achève, Utilisez le gabarit de cône. Toutes les créatures des Royaumes du Chaos (c'est-à-dire les démons) prises dans la zone d'action de ce sort doivent réussir un test de Force Mentale accompagné d'un bonus de -10% multiplié par votre valeur de Magie. ceux qui échouent ne peuvent pas entreprendre d'action de déplacement tant que vous maintenez le rayon en place. Vous pouvez projeter le cône de lumière pendant un nombre de rounds égal à votre valeur de Magie. Vous pouvez allonger la durée de ce sort d'un round supplémentaire par point de Blessures que vous sacrifiez."},
                {id:316,group:"Domaine de la Lumière",name:"Regard radieux",diff:7,"castduration":"1",ingredient:"une loupe (+1)",desc:"votre regard focalise l'énergie radieuse sur une cible située dans un rayon de 16 mètres (8 cases). Il s'agit d'un projectile magique d'une valeur de dégâts de 6. Il arrive qu'un simple regard puisse tuer…"},
                {id:317,group:"Domaine de la Lumière",name:"Sentinelle rayonnante",diff:14,"castduration":"1",ingredient:"une rondache (+2)",desc:"vous créez une boule de lumière brillante de la taille d'une tête d'homme, qui flotte autour de votre corps, se déplaçant lentement ou avec vivacité, selon la situation. La boule dévie les coups qui vous prennent pour cible, vous protégeant ainsi contre les attaques. Une fois par round, la sentinelle radieuse peut parer une attaque au corps à corps qui vous prend pour cible, en utilisant votre Force Mentale en guise de Capacité de Combat. Cette parade n'est pas comptée comme votre parade pour ce round. La boule se dissipe après un nombre de minutes égal à votre valeur de Magie."},
                {id:318,group:"Domaine de la Lumière",name:"Soins de Hysh",diff:10,"castduration":"1",ingredient:"une perle en verre transparent (+2)",desc:"votre contact soigne un personnage blessé d'un nombre de points de Blessures égal à votre valeur de Magie. Il s'agit d'un sort de contact que vous pouvez lancer sur vous-même."},
                {id:319,group:"Domaine de la Lumière",name:"Yeux de la vérité",diff:20,"castduration":"1",ingredient:"une sphère de verre (+2)",desc:"vos yeux brillent de l'éclat de la vérité. Pendant un nombre de rounds égal à votre valeur de Magie, vous pouvez percer les illusions, l'obscurité magique ou normale, l'invisibilité et toutes les formes de déguisement dans un rayon de 48 mètres (24 cases). Toutes les créatures dissimulées vous sont aussi révélées."},
                {id:320,group:"Domaine du Métal",name:"Armure de plomb",diff:14,"castduration":"1",ingredient:"un casque miniature en plomb (+2)",desc:"sous votre influence, les armures d'un groupe d'ennemis, situé dans un rayon de 48 mètres (24 cases), se mettent à peser aussi lourd que du plomb. Utilisez le grand gabarit. Les créatures affectées subissent un malus de –10% en Capacité de Combat, Capacité de Tir et Agilité, ainsi qu'un malus de –1 à leur valeur de Mouvement. Armure de plomb reste actif pendant 1 minute (6 rounds)."},
                {id:321,group:"Domaine du Métal",name:"Défaut",diff:14,"castduration":"1",ingredient:"un casque miniature sculpté dans le plomb (+2)",desc:"sous votre influence, les armures d'un groupe d'ennemis situés dans les 48 mètres (24 cases) pèsent aussi lourd que si elles étaient en plomb. Utilisez le grand gabarit. Tous les individus affectés subissent un malus de -10% en Capacité de Combat, Capacité de Tir et Agilité, ainsi qu'un malus de -1 en Mouvement. Armure de plomb dure 1 minute (6 rounds)."},
                {id:322,group:"Domaine du Métal",name:"Dévoiler l'inconnu",diff:22,"castduration":"1min",ingredient:"une drachme d'extrait de sulfure d'arsenic (+3)",desc:"ce sort vous permet de percer tous les secrets d'un objet, d'apprendre sa composition ainsi que toutes les propriétés spéciales ordinaires qu'il peut avoir. Par exemple, un sorcier Doré utilisant dévoiler l'inconnu pourrait apprendre les propriétés médicinales de la crapaudine (cf. page 74 de l'Arsenal du Vieux Monde). En plus des effets normaux de ce sort, vous pouvez effectuer un test spécial de Focalisation Assez difficile (-10%) pour découvrir les propriétés particulières d'un objet magique. Vous bénéficiez d'un bonus de +10% multiplié par votre valeur de Magie. Pour chaque degré de réussite, vous apprenez un des traits spéciaux de l'objet magique. Dans le cas d'objets maudits, souillés ou gâtésd'une façon ou d'une autre, vous découvrez leur propriété dangereuse en dernier."},
                {id:323,group:"Domaine du Métal",name:"Enchantement d'objet",diff:21,"castduration":"1min",ingredient:"une plume de griffon (+3)",desc:"Vous enchantez temporairement un objet, ce qui confère un bonus de +5% à l'une des caractéristiques du porteur. La fonction magique de l'objet doit rester en adéquation avec sa forme : vous pouvez ainsi enchanter une épée pour conférer un bonus en Capacité de Combat ou un serre-tête pour un bonus en Sociabilité. L'objet est considéré comme magique. L'enchantement reste actif pendant 1 heure, sachant qu'un même objet ne peut être enchanté qu'une seule fois. Il s'agit d'un sort de contact."},
                {id:324,group:"Domaine du Métal",name:"Façonnage du métal",diff:18,"castduration":"1min",ingredient:"un talisman représentant un marteau et une enclume (+2)",desc:"vous pouvez transformer un objet métallique en un autre. Cela ne change pas le type du métal, uniquement sa forme : vous pouvez, par exemple, transformer un bouclier de métal en urne. Ce sort ne fonctionne pas sur les objets magiques. La qualité de fabrication du nouvel objet, s'il est besoin de la déterminer, dépend d'un test de Focalisation. Façonner un objet de qualité exceptionnelle correspond à un test Très difficile (–30%), tandis qu'un objet de bonne qualité s'obtient par un test Difficile (–20%). Un test de difficulté Moyenne produit un objet de qualité moyenne, alors qu'un test de Focalisation raté, quelle qu'en soit la difficulté, ne donne qu'un objet de qualité médiocre. Il s'agit d'un sort de contact."},
                {id:325,group:"Domaine du Métal",name:"Flèches d'argent d'Arha",diff:13,"castduration":"1/2",ingredient:"une pointe de flèche en argent (+2)",desc:"vous créez un nombre de flèches d'argent égal à votre valeur de Magie, que vous pouvez lancer sur l'un ou plusieurs de vos adversaires situés dans un rayon de 48 mètres (24 cases). Les flèches d'argent d'Arha sont des projectiles magiques d'une valeur de dégâts de 3, qui disparaissent après avoir infligé leurs dégâts."},
                {id:326,group:"Domaine du Métal",name:"Garde d'acier",diff:5,"castduration":"1/2",ingredient:"une bille d'acier (+1)",desc:"vous invoquez des sphères miroitantes d'acier qui gravitent autour de votre corps et vous protègent contre les attaques pendant 1 minute (6 rounds) avant de disparaître. Toutes les attaques dirigées contre vous subissent un malus de –10% en Capacité de Combat ou en Capacité de Tir, selon le cas."},
                {id:327,group:"Domaine du Métal",name:"Inscription",diff:7,"castduration":"1",ingredient:"un ciseau (+1)",desc:"en passant votre main sur n'importe quelle surface métallique, vous faites apparaître une inscription ineffaçable sur l'objet. L'inscription peut être de n'importe quelle longueur (du moment qu'elle tient sur l'objet), mais chaque douzaine de mots en plus de la première augmente le temps d'une action complète supplémentaire. L'inscription apparaît avec votre écriture, et ceux qui la connaissent bien pourront vous identifier comme en étant l'auteur."},
                {id:328,group:"Domaine du Métal",name:"Loi de l'or",diff:26,"castduration":"1",ingredient:"un petit fourreau doré très ouvragé d'une valeur minimale de 75 co (+3)",desc:"vous enveloppez de l'étreinte de Chamon un objet magique situé dans un rayon de 24 mètres (12 cases), ce qui neutralise ses pouvoirs. L'objet perd alors toute fonction magique pendant 1d10 rounds."},
                {id:329,group:"Domaine du Métal",name:"Loi de la forme",diff:8,"castduration":"1",ingredient:"une tige de fer (+1)",desc:"vous transmutez un objet solide et inanimé, le rendant dur comme l'acier. Il devient lourd et bien que son apparence ne change pas, on croirait du métal au contact. Généralement, cet effet provoque une augmentation de la valeur d'Encombrement de l'objet, et accroît la difficulté des tests de Force pour défoncer les portes et autres obstacles (comme les fenêtres en verre), renforce les liens de cordes, empêche les torches de prendre feu, etc. Vous devez toucher l'objet pour l'affecter. Loi de la forme dure un nombre de minutes égal à votre valeur de Magie."},
                {id:330,group:"Domaine du Métal",name:"Loi de la logique",diff:7,"castduration":"1d10 actions complètes",ingredient:"un morceau de papier vierge (+1)",desc:"vous recourez à la magie de la logique pour optimiser un test de compétence ou de caractéristique. Ce sort doit être lancé avant que le test ne soit effectué, sachant que loi de la logique peut vous assister vous ou l'un de vos alliés situé dans un rayon de 12 mètres (6 cases). Le temps d'incantation aléatoire (1d10 actions complètes) couvre à la fois l'évaluation du problème et l'incantation à proprement parler. S'il est lancé avec succès, loi de la logique octroie un bonus de +20% au test correspondant de compétence ou de caractéristique. Le bonus doit servir dans les 5 minutes qui suivent la fin de l'incantation."},
                {id:331,group:"Domaine du Métal",name:"Loi du temps",diff:15,"castduration":"1",ingredient:"un os fossilisé (+2)",desc:"vous rendez un objet et inanimé fragile et facilement cassable. L'effet est indécelable au poids et au contact de l'objet. En général, la difficulté visant à détruire l'objet s'en trouve réduite (généralement de 1d10/2 crans), comme quand il s'agit de défoncer une porte ou une fenêtre, de rompre des liens, de briser des barreaux, etc. Loi du temps dure un nombre de minutes égal à 1 plus votre valeur de Magie."},
                {id:332,group:"Domaine du Métal",name:"Malédiction de la rouille",diff:9,"castduration":"1/2",ingredient:"un clou rouillé (+1)",desc:"un objet métallique non magique dans un rayon de 12 mètres (6 cases) rouille sous votre influence, ce qui le rend inutilisable. Vous pouvez ainsi affecter un objet dont l'encombrement ne dépasse pas 75. Veuillez consulter le Chapitre 5: L'équipement pour l'encombrement des objets courants."},
                {id:333,group:"Domaine du Métal",name:"Métal révélateur",diff:11,"castduration":"2",ingredient:"une lentille (+1)",desc:"vous touchez un objet en métal et vous découvrez son passé, observant les circonstances de sa création et à l'instant où il fut forgé comme si vous y étiez. Par la suite, vous pouvez de vous rappeler un fait particulier concernant ce que vous avez vu en réussissant un test d'Intelligence."},
                {id:334,group:"Domaine du Métal",name:"Or du fou",diff:17,"castduration":"1",ingredient:"une fleur pétrifiée (+2)",desc:"vous altérez momentanément la qualité d'un objet inanimé pour le faire paraître plus précieux qu'il ne l'est réellement. Les sous de cuivre deviennent des couronnes d'or, une épée rouillée devient un sabre de qualité exceptionnelle et un dentier de bois brille de l'éclat de l'argent. La valeur de l'objet est multipliée par 10. Or du fou dure un nombre d'heures égal à votre valeur de Magie. Vous devez toucher l'objet pour l'affecter."},
                {id:335,group:"Domaine du Métal",name:"Rigidité de corps et d'esprit",diff:12,"castduration":"1",ingredient:"un petit disque d'acier (+2)",desc:"votre corps et votre esprit prennent les propriétés du métal, ce qui les rend forts, résistants et immuables. Vous gagnez l'équivalent de 1 point d'Armure sur toutes les localisations (cumulable avec toute autre armure pour un maximum de 5 PA) et un bonus de +10% en Force Mentale. De plus, vous découvrez que vous êtes bien moins susceptible de changer d'avis pendant la durée du sort ; cet effet n'est pas représenté par des statistiques et doit être interprété selon le bon vouloir du MJ. Ces effets durent un nombre de minutes égal à votre valeur de Magie."},
                {id:336,group:"Domaine du Métal",name:"Rune secrète",diff:14,"castduration":"1",ingredient:"une fiole d'encre mêlée de paillettes d'or (+3)",desc:"ce sort peut être lancé de deux façons : pour enregistrer un message secret ou pour lire un message consigné de la sorte. La première méthode fonctionne comme le sort inscription, mais au lieu d'être visible pour tous, le message est invisible même quand on examine attentivement l'objet. Afin de voir le message inscrit à l'aide de rune secrète, le sort doit être lancé de la deuxième manière, rendant le message visible. Les sorciés Dorés utilisent fréquemment ce message pour communiquer entre eux. D'ordinaire, ils relancent rune secrète sur un objet dont ils ont déchiffré le message, afin de tenir celui-ci à l'abri des yeux des curieux."},
                {id:337,group:"Domaine du Métal",name:"Soufflet de forge",diff:4,"castduration":"1/2",ingredient:"un soufflet d'air chaud (+1)",desc:"vous amenez un feu déjà allumé dans une forge, un foyer ou tout autre réceptacle où la chaleur et le feu sont utilisés à des fins spécifiques par des humains, à brûler à son intensité maximale, et ce sans consumer de combustible supplémentaire pendant 1d10x10 minutes."},
                {id:338,group:"Domaine du Métal",name:"Transmutation de la folie",diff:23,"castduration":"10 minutes",ingredient:"une page de livre écrit par un dément (+3)",desc:"vous tentez de transformer un esprit malade en esprit sain, ce qui reste une tâche périlleuse. L'incantation du sort s'accompagne d'un test de Focalisation. S'il est réussi, la cible perd 1d10 points de Folie. En revanche, si le test est raté, la cible gagne 1d10 points de Folie. Il s'agit d'un sort de contact que vous ne pouvez lancer sur vousmême. Transmutation de la folie n'agit pas sur les animaux."},
                {id:339,group:"Domaine du Métal",name:"Vision du destin",diff:16,"castduration":"1",ingredient:"une fiole en verre vide (+2)",desc:"vous recourez à la magie pour guider les actions de vos alliés situés dans un rayon de 12 mètres (6 cases). Jusqu'au début de votre prochain tour de jeu, chaque personne affectée a le droit de relancer un unique test ou jet de dégâts. Le second résultat est définitif."},
                {id:340,group:"Domaine de la Mort",name:"Absorption de la vie",diff:16,"castduration":"1/2",ingredient:"une fiole de sang (+2)",desc:"vous aspirez l'essence vitale d'un ennemi situé dans un rayon de 12 mètres (6 cases), et vous l'utilisez pour vous soigner. La cible perd 1d10 points de Blessures, quels que soient son bonus d'Endurance et son armure, à moins qu'elle ne réussisse un test de Force Mentale. Vous récupérez autant de points de Blessures que vous en avez ôtés à la victime. Vous ne pouvez dépasser votre maximum normal de points de Blessures, mais cela ne doit pas empêcher la cible de perdre les siens. Absorption de vie reste sans effet sur les démons et les morts-vivants."},
                {id:341,group:"Domaine de la Mort",name:"Âme emprisonnée",diff:29,"castduration":"2",ingredient:"la cage thoracique d'un geôlier mort (+3)",desc:"vous emprisonnez l'âme de votre victime, en la scellant dans un réceptacle durable de votre choix, comme une bouteille, une fiole ou une bourse. Tant que l'âme est captive, le corps de la victime, véritable légume, est réduit aux fonctions vitales essentielles (respirer, avaler, excréter) sans initiative ni conscience. Bien qu'elle soit en vie d'un point de vue technique, cette coquille vide ne peut ni se déplacer ni même se lever de sa propre volonté, et doit être nourrie par autrui pour éviter de pourir de faim ou de déshydratation. Les dégâts, les maladies, les poisons et autres sourcesde pertes de points de Blessures l'affectent normalement. Elle guérit naturellement et peut être soignée comme d'ordinaire par magie ou par l'utilisation de la compétence Soins. Vous pouvez rendre l'âme emprisonnée à son corps à tout moment en ouvrant le réceptacle scellé en présence de son corps. Tout prête de Morr et tout autre sorcier d'Améthyste qui connaît ce sort peut en faire autant. Dans tous les cas, l'individu qui a recouvré son corps gagne aussitôt 1-5 (1d10/2) points de Folie en raison de cette expérience traumatisante. Si la bouteille est ouverte loin du corps ou par quelqu'un qui ne connaît pas les rituels appropriés, l'âme se perd dans le vaste monde, condamnée à errer et à devenir un fantôme. Reportez-vous au Bestiaire du Vieux Monde, page 92, pour plus de détails au sujet des fantômes. Si l'âme est perdue, on peut maintenir le corps en vie, mais cela n'a guère d'intérêt. Il s'agit d'un sort de contact. En raison du déchirement de la trame de la vie et de la mort qu'implique la nature de cette conjuration, tous les sorciers situés dans un rayon de 7,5 kilomètres sont conscients de la perturbation qu'il provoquedans l'Aethyr. Les seigneurs de l'Ordre d'Améthyste voient d'un mauvaie œil ceux qui usent de d'une magie aussi puissante sans raison valable."},
                {id:342,group:"Domaine de la Mort",name:"Dernières volontés",diff:18,"castduration":"1",ingredient:"un morceau de vélin (+2)",desc:"vous pouvez poser une question à l'âme libérée d'un personnage qui vient de perdre la vie dans un rayon de 12 mètres (6 cases). Le sort doit être lancé dans la minute qui suit la mort du personnage (6 rounds), sans quoi, son âme aura déjà atteint le royaume de Morr. L'âme n'est pas obligée de répondre la vérité ou même quoi que ce soit. Dernières volontés ne peut être lancé sur une créature sans âme, comme un démon ou un mort-vivant."},
                {id:343,group:"Domaine de la Mort",name:"Douleurs abrégées",diff:7,"castduration":"1/2",ingredient:"deux sous de cuivre (+1)",desc:"par un simple contact de vos doigts, vous mettez un terme à l'existence d'une personne consentante aux portes de la mort. Douleurs abrégées tue ainsi quiconque n'ayant plus que 0 point de Blessures et ayant déjà reçu un coup critique. Il s'agit d'un sort de contact. Ce sort fonctionne sur les monstres, les animaux et même les PJ. Les âmes ainsi libérées sont immunisées contre les sorts tels que dernières volontés mais restent des cibles pour la résurrection nécromantique."},
                {id:344,group:"Domaine de la Mort",name:"Étreinte glaciale du trépas",diff:16,"castduration":"1",ingredient:"une tige rose portant des épines(+2)",desc:"vous utilisez les tentacules glaciaux de Shyish pour lier vos ennemis présents dans une zone d'effet située dans un rayon de 48 mètres (24 cases). Utilisez le grand gabarit. Tous ceux qui sont affectés doivent réussir un test de Force Mentale pour éviter d'être assomés. Ils peuvent rejouer un test au début de leur tour pour tenter de briser l'étreinte. Ils restent assommés jusqu'à ce qu'ils réussissent ce test."},
                {id:345,group:"Domaine de la Mort",name:"Fatalisme",diff:14,"castduration":"3/2",ingredient:"un clou de cercueil (+2)",desc:"grâce à ce sort, vos alliés oublient temporairement leur peur de la mort. Pendant 1 minute (6 rounds), vous bénéficiez, ainsi que tous vos alliés situés dans un rayon de 12 mètres (6 cases), de l'équivalent du talent Sans peur."},
                {id:346,group:"Domaine de la Mort",name:"Faux du moissonneur d'âmes",diff:8,"castduration":"1/2",ingredient:"une faux métallique miniature (+1)",desc:"une faux d'énergie améthyste se matérialise entre vos mains. Elle est considérée comme une arme magique dotée de l'attribut rapide et d'une valeur de dégâts de 5. Vous recevez également un bonus de +10% en Capacité de Combat quand vous la maniez. Ce sort reste actif pendant un nombre de rounds égal à votre valeur de Magie. Vous pouvez prolonger cette durée en réussissant un test de Force Mentale à chaque round suivant."},
                {id:347,group:"Domaine de la Mort",name:"Fin de la vie",diff:31,"castduration":"1",ingredient:"le globe oculaire d'un meurtrier décapité (+3)",desc:"vous extirpez de force l'âme d'une cible située dans un rayon de 12 mètres (6 cases). La victime meurt immédiatement et ses restes se flétrissent d'horrible manière, ne laissant qu'une coquille desséchée, à moins qu'elle ne réussisse un test de Force Mentale opposé contre vous, auquel cas le sort échoue. En raison du déchirement de la tramme de la vie et de la mort qu'implique la nature même de cette conjuration, tous les sorciers situés dans un rayon de 7,5 kilomètres sont conscients de la perturbation qu'il provoque dans l'Aethyr. Les seigneurs de l'Ordre d'Améthyste ne voient pas d'un très bon œil ceux qui usent d'une magie aussi puissante à la légère."},
                {id:348,group:"Domaine de la Mort",name:"Fin des souffrances",diff:5,"castduration":"1",ingredient:"un sablier (+1)",desc:"vous prononcez des paroles de consolation pour un individulourdement affecté par le récent trépas d'un parent. La douleur du sujet s'apaise à mesure qu'il accepte cette fatalité. Tout effet de Peur ou de Terreur, tout malus de caractéristique et tout effet de Folie infligé par le décèsest éliminé ou annulé."},
                {id:349,group:"Domaine de la Mort",name:"Libération de la mort",diff:14,"castduration":"1",ingredient:"un crâne humain (+2)",desc:"vous infoquez le vent de Magie pourpre pour qu'il tourbillonne autour d'une créature ciblée possédant le talent Éthéré et située dans un rayon de 12 mètres (6 cases). La cible doit réussir un test de Force Mentale pour éviter de prendre brutalement conscience de son état. En cas d'échec, elle subit un malus de -10% aux tests de Capacité de Combat et ne peut effectuer qu'une demi-action à son prochain tour. Au round quivant, le fantôme doit tenter un autre test de Force Mentale pour se libérer des effets de libération de la mort. Les fantômes qui échouent trois fois d'affilée à ces tests sont libérés du monde des mortels."},
                {id:350,group:"Domaine de la Mort",name:"Malédiction du pilleur de tombes",diff:10,"castduration":"1min",ingredient:"de la terre issue d'une tombe profanée (+2)",desc:"vous lancez ce sort en présence d'un cadavre, devant une sépulture ou un cimetière. Quiconque profane le cadavre ou le site à n'importe quel moment dans l'année qui suit subit les effets de la malédiction : un malus de -10% aux tests de Force Mentale, d'Intelligence et de Sociabilité, et ce pendant une semaine. Le coupable gagne également 1 point de Folie."},
                {id:351,group:"Domaine de la Mort",name:"Membre flétri",diff:11,"castduration":"1",ingredient:"un clou de fer travaillé à froid (+2)",desc:"vous endormez un des membres (bras ou jambe) d'une cible située dans un rayon de 24 mètres (12 cases). Vous pouvez choisir le membre affecté, et celui-ci devient totalement inutile pour un nobre de minutes égal à votre valeur de Magie. Tant que l'effet persiste, la cible subit les mêmes inconvénients que ceux associés à l'amputation d'une jambe ou d'un bras (cf. page 134 de WJDR). La victime recouvre l'usage du membre endormi à la fin du sort."},
                {id:352,group:"Domaine de la Mort",name:"Messager de la mort",diff:6,"castduration":"1/2",ingredient:"un couteau aiguisé (+1)",desc:"vous vous imprégnez de Shysh, dégageant ainsi une aura menaçante. Vous gagnez un bonus de +10% aux tests d'Intimidation pendant 1 minute (6 rounds)."},
                {id:353,group:"Domaine de la Mort",name:"Poids des années",diff:23,"castduration":"1",ingredient:"un peu de lierre coupé sur la tombe d'un prêtre (+3)",desc:"un personnage situé dans un rayon de 12 mètres (6 cases) se met à vieillir à vue d'oeil. La cible doit réussir un test de Force Mentale, sous peine de perdre de façon permanente 1d10% de sa valeur de Force et d'Endurance. Si ce sort affecte les animaux, il reste sans effet sur les démons et les morts-vivants. De même, il n'agit pas sur les objets ou les matières naturelles comme la nourriture, les plantes, le cuir, etc."},
                {id:354,group:"Domaine de la Mort",name:"Protection contre les abominations",diff:12,"castduration":"1",ingredient:"un morceau de pierre ou de bois pris sur la clôture d'un cimetière (+2)",desc:"à partir du moment où vous avez lancé ce sort, et tant que vous restez immobile par la suite, les morts-vivants sont incapables de vous approcher à moins de votre valeur de Magie x 4 mètres (votre valeur de Magie x 2 cases). Les momies, les vampires, les revenants et les spectres peuvent effectuer un test de Force Mentale opposé contre vous afin d'ignorer les effets de cette protection. Selon le bon vouloir du MJ, d'autres morts-vivants puissants dotés d'une volonté de fer peuvent y avoir droit aussi."},
                {id:355,group:"Domaine de la Mort",name:"Réponse des défunts",diff:18,"castduration":"1",ingredient:"un morceau d'un des vêtements que le défunt portait de son vivant (+2)",desc:"vous pouvez poser une question et obtenir une réponse de la part d'un défunt particulier, tant qu'il est possible de répondre à cette question par un nombre de coups frappés différent de zéro (\"Combien de voleurs sont venus dans votre maisonla nuit où vous avez été battu à mort ?\"), ou s'il est possible de répondre par oui ou par non (\"Vous serait-il agréable que nous emmenions votre corps lors de notre pèlerinage à Altdorf ?\"). Dans le cas de questions dont la réponse est oui ou non, l'esprit du défunt frappe une fois pour \"oui\" et deux fois pour \"non\". Quelle que soit la question, l'esprit n'est absolument pas forcé de répondre, n'en sait pas plus que de son vivant et peut mentir s'il le désire. L'acte de répondre en lui-même n'est ni agréable ni particulièrement odieux au défunt, bien qu'il puisse être émotionnellement pénible en raison des vivants qui sont présents ou de la nature de la question. Ce sort doit être lancé en présence du cadavre du défunt ou de l'un de ses descendants vivants. La rumeur prétend que les morts répondent en frappant aux portes du royaume de Morr."},
                {id:356,group:"Domaine de la Mort",name:"Seuil de la mort",diff:20,"castduration":"1",ingredient:"une fiole de liquide d'embaumement (+2)",desc:"votre influence sur la mort est telle que vous pouvez brièvement repousser l'inévitable. Seuil de la mort persiste pendant un nombre de rounds égal à votre valeur de Magie, et vous affecte ainsi que tous vos alliés situés dans un rayon de 24 mètres (12 cases). Quand une personne affectée par le sort est tuée, elle peut alors effectuer une dernière demi-action à son tour de jeu normal, avant de réellement mourir. Dès que l'action est résolue, la mort vient réclamer son dû."},
                {id:357,group:"Domaine de la Mort",name:"Usure du temps",diff:11,"castduration":"1/2",ingredient:"un petit sablier (+2)",desc:"par votre influence, un objet non magique dont l'encombrement ne dépasse pas 75 se délabre. Les objets de qualité médiocre ou de qualité moyenne sont réduits en poussière. Les objets de bonne qualité deviennent de qualité médiocre et ceux d'excellente qualité deviennent de qualité moyenne. Reportez-vous au Chapitre 5 : L'équipement pour plus de renseignements sur l'encombrement des objets courants et leur qualité. Il s'agit d'un sort de contact."},
                {id:358,group:"Domaine de la Mort",name:"Vent de mort",diff:27,"castduration":"1",ingredient:"une améthyste d'une valeur minimale de 50 co (+3)",desc:"vous appelez un vent mortel de Shyish qui s'abat quelque part dans un rayon de 48 mètres (24 cases). Utilisez le grand gabarit. Ceux qui sont affectés par le sort perdent 1d10 points de Blessures, quels que soient leur bonus d'Endurance et leur armure. En raison de la nature cataclysmique de cette invocation, tous les sorciers dans un rayon de 7,5 kilomètres prennent conscience de la perturbation de l'Aethyr causée par le sort. Les seigneurs de l'Ordre d'Améthyste ont mille façons aussi cruelles qu'insolites de punir ceux qui recourent à ce sort trop souvent ou sans bonne raison."},
                {id:359,group:"Domaine de la Mort",name:"Vison de l'au-delà",diff:5,"castduration":"1",ingredient:"une poignée de terre prise sur une tombe (+1)",desc:"pendant 1 heure, vous voyez des esprits et des âmes, normalement invisibles à l'oeil nu. Quand un être vivant trépasse, vous pouvez voir son âme quitter son corps."},
                {id:360,group:"Domaine des Ombres",name:"Action secrète",diff:12,"castduration":"1/2",ingredient:"un schéma représentant votre action illusoire (+2)",desc:"Ce sort vous permet de réaliser une action tout en donnant l'impression de faire complètement autre chose. Votre apparence reste la même, mais votre activité apparente est toute différente: ainsi, vous pouvez faire croire à tous que vous feuilletez un livre, alors que vous êtes en réalité en train de mettre votre poing dans la figure de quelqu'un. Si votre activité (une attaque, un sort, un larcin, etc.) affecte quelqu'un d'autre, la victime a droit à un test d'Intelligence pour percer l'illusion. Action secrète reste actif pendant 1d10 rounds. Si l'incantation est réussie, le sort dissimule également l'action qui consiste à le lancer."},
                {id:361,group:"Domaine des Ombres",name:"Changeforme",diff:7,"castduration":"3/2",ingredient:"une mèche de cheveux d'un membre de la race imitée (+1)",desc:"vous pouvez prendre l'apparence (ce qui inclut les vêtements, l'armure et le reste) d'un autre humanoïde vivant dont la taille n'excède pas trois mètres (humain, elfe, orque, etc.) pour un nombre de rounds égal à dix fois votre valeur de Magie. Le sort ne déguise aucunement votre voix, uniquement votre aspect physique. Vous pouvez ainsi adopter l'apparence d'un orque, mais si vous ne pratiquez pas la langue gobeline, vous seriez bien inspiré de ne pas ouvrir la bouche en présence de peaux-vertes. Si vous vous comportez de manière suspecte, les observateurs auront droit à un test d'Intelligence pour percer l'illusion. Si vous cherchez à ressembler à un individu spécifique, il vous faudra réussir un test de Focalisation pour parfaire le déguisement. Sans cela, vous aurez l'apparence d'un membre sans particularité de la race correspondante."},
                {id:362,group:"Domaine des Ombres",name:"Charme changeant",diff:7,"castduration":"1/2",ingredient:"un peu de maquillage de bonne qualité (+1)",desc:"vous altérez de manière subtile le pouvoir de séduction de votre cible, en bien ou en mal, ce qui influe sur ses interactions sociales. L'effet consiste à lui conférer un bonus de +10% ou un malus de -10% (au choix) en Sociabilité pour un nombre d'heures égal à votre valeur de Magie. Une cible non consentante peut effectuer un test de Force Mentale opposé pour éviter les effets de ce sort. Il s'agit d'un sort de contact, que vous pouvez également lancer sur vous-même."},
                {id:363,group:"Domaine des Ombres",name:"Confusion universelle",diff:27,"castduration":"1/2",ingredient:"les yeux d'une chimère (+3)",desc:"Ce sort est une version plus redoutable du sort désorientation, pouvant affecter plusieurs cibles. Utilisez le grand gabarit. Toute personne comprise dans la zone d'effet doit réussir un test de Force Mentale, sous peine de subir les effets du sort désorientation."},
                {id:364,group:"Domaine des Ombres",name:"Désorientation",diff:8,"castduration":"1/2",ingredient:"une rasade de bière (+1)",desc:"vous pouvez lancer ce sort sur une créature située dans un rayon de 24 mètres (12 cases). La cible doit alors réussir un test de Force Mentale, sous peine de se retrouver désorientée pour un nombre de rounds égal à votre valeur de Magie. La personne ainsi désorientée doit effectuer un jet de pourcentage et consulter la table suivante pour déterminer ce qu'elle fait jusqu'à la fin du sort. 1d100 Action: 01–20 Indécision. Vous ne pouvez effectuer qu'une demi-action par round. 21–40 Course folle. Vous courez dans une direction aléatoire déterminée par le MJ. 41–60 Assaut ! Vous devez effectuer une attaque brutale sur le personnage le plus proche, qu'il soit ami ou ennemi. S'il est hors de portée, vous devez vous en rapprocher au plus vite et l'affronter au corps à corps (en effectuant une charge si possible). 61–80 Passivité. Vous ne pouvez entreprendre la moindre action ou esquive. 81–00 Position fœtale. Vous êtes considéré comme sans défense."},
                {id:365,group:"Domaine des Ombres",name:"Destrier d'ombre",diff:11,"castduration":"1",ingredient:"un fragment de sabot d'un cheval qui a beaucoup voyagé (+2)",desc:"vous invoquez un cheval à la robe sombre et floue qui vous portera, vous et un minimum d'équipement (pas plus que ce que vous pouvez porter sans malus), sans le moindre bruit et à vive allure, jusqu'à ce que vous l'arrêtiez ou jusqu'aux premières lueurs de l'aube. Le cheval a le même profile qu'un cheval de selle ordinaire (cf. page 230 de WJDR), mais il dispose également des compétences Dissimulation (qu'il utilise avec un bonus de +30%) et Orientation. De plus, le destrier d'ombre voyage au maximum de sa vitesse sans se fatiguer, vous transportant une fois et demi plus vite qu'un cheval de selle normal. Quand ce sort s'achève, le cheval disparaît dans un coin sombre ou dans une ombre. Vous pouvez aussi désigner un autre individu que le cheval transportera à votre place."},
                {id:366,group:"Domaine des Ombres",name:"Illusion ultime",diff:24,"castduration":"3/2",ingredient:"un prisme en cristal (+3)",desc:"Vous créez une illusion simulant la réalité à la quasiperfection, comprenant effets visuels, sonores et olfactifs, dans un rayon de 48 mètres (24 cases). Utilisez le grand gabarit. Vous pouvez donner pratiquement n'importe quelle apparence à la zone d'effet. Illusion ultime persiste pendant un nombre de rounds égal à votre valeur de Magie, mais vous pouvez en prolonger la durée en réussissant un test de Force Mentale à chaque round suivant. Le maintien de l'illusion se fait au prix d'une demi-action. De plus, si vous lancez le moindre autre sort, l'illusion disparaît instantanément. Les observateurs ont droit à un test d'Intelligence pour percer l'illusion s'ils ont quelque raison de suspecter une ruse. Les effets précis de l'illusion sont laissés au bon sens du MJ."},
                {id:367,group:"Domaine des Ombres",name:"Insignifiant",diff:9,"castduration":"1/2",ingredient:"une pincée de rien en particulier (+1)",desc:"vous devenez très facile à ignorer. Bien que les gens vous voient tout à fait nettement, ils ont tendance à ne pas vous remarquer et ne se souviennent de rien vous concernant une fois que vous êtes parti. Les individus doivent réussir un test de Force Mentale opposé afin de s'approcher de vous et de vous parler à moins que vous ne vous exprimiez en premier, même s'ils vous avaient remarqué auparavant. (Ils n'ont pas besoin de rejeter les dés en plein milieu d'une conversation, mais si, par exemple, un boutiquier réussit son jet de dés destiné à vous remarquer quand vous entez dans sa boutique mais se trouve occupé à ce moment, il devra réussir un autre jet de dés pour s'approcher de vous et vous parler plus tard au cours de votre visite.) Même ceux qui vous remarquent et vous abordent ou vous parlent doivent réussir un autre test de Force Mentale (qui n'est pas opposé) pour se souvenir de détails précis à votre sujet une fois que vous êtes parti. La nature de ce sort est telle qu'il ne trouble ni n'alarme ceux qui tentent de vous remarquer ou de se souvenir de vous : ils mettent ses effets sur le compte de la distraction, d'un trou de mémoire ou de tout autre phénomène similaire."},
                {id:368,group:"Domaine des Ombres",name:"Linceul de ténèbres",diff:15,"castduration":"1/2",ingredient:"les yeux d'un triton (+2)",desc:"vous créez une zone de ténèbres tourbillonnantes et impénétrables, dans un rayon de 48 mètres (24 cases), pour un nombre de rounds égal à votre valeur de Magie. Utilisez le grand gabarit. Les personnes prises dans la zone d'effet ne peuvent voir, même si elles bénéficient du talent Vision nocturne. De plus, la confusion engendrée par ces ténèbres limite à une demi-action par round les activités de ceux qui ne réussissent pas un test de Force Mentale au début de leur tour de jeu."},
                {id:369,group:"Domaine des Ombres",name:"Manteau d'ombre",diff:5,"castduration":"1/2",ingredient:"un morceau de charbon (+1)",desc:"vous vous enveloppez de ténèbres, ce qui vous rend presque indétectable. Vous bénéficiez d'un bonus de +20% aux tests de Dissimulation pendant un nombre de minutes égal à votre valeur de Magie."},
                {id:370,group:"Domaine des Ombres",name:"Ombre de la mort",diff:15,"castduration":"1",ingredient:"un lambeau d'étoffe issue de la robe d'un revenant (+2)",desc:"vous utilisez le pouvoir de l'illusion pour prendre une apparence effrayante et meurtrière. Vous suscitez la Peur pendant 1 minute (6 rounds)."},
                {id:371,group:"Domaine des Ombres",name:"Ombres ardentes",diff:14,"castduration":"1",ingredient:"une dose de poisonde lotus noir récolté dans l'ombre (+2)",desc:"vous rendez les ombres qui vous entourent brûlantes comme de l'acide. Tous les ennemis situés dans un rayon de 18 mètres (9 cases) et qui sont touchés par une ombre projetée par toute source de lumière d'intensité supérieure ou égale à celle d'une torche au moment où vous lancez le sort subissent un coups d'une valeur de dégâts de 3. L'absence de lumière en elle-même n'est pas considérée comme une ombre lors de l'utilisation de ce sort : les cibles doivent être touchées par une ombre distincte projetée par une lumière qui tombre sur un objet. Le simple fait d'être en intérieur ne compte pas : la structure d'un bâtiment ne \"projette pas d'ombre\" à l'intérieur d'elle-même. Comme toujours, c'est le MJ qui a le dernier mot en la matière."},
                {id:372,group:"Domaine des Ombres",name:"Parodie de la mort",diff:18,"castduration":"1",ingredient:"le suaire d'un cadavre enterré depuis au moins un an (+2)",desc:"sous votre influence, un individu apparaît et se comporte comme s'il était mort. Cette personne continue à ressentir son environnement par l'ouïe, l'odorat et la vue (si ses yeux sont ouverts), mais elle ne peut bouger d'aucune façon jusqu'à ce que le sort s'achève. Toutefois, elle continue à avoir besoin d'air et des autres éléments indispensables à la vie. Cet état persiste jusqu'à ce que vous décidiez d'y mettre fin d'une pensée ou jusqu'à ce qu'un nombre de jours égal à votre valenr de Magie se soit écoulé. Une cible non consentante peut résister à ce sort en réussissant un test de Force Mentale. Il s'agit d'un sort de contact, que vous pouvez également lancer sur vous-même."},
                {id:373,group:"Domaine des Ombres",name:"Poignards d'ombre",diff:22,"castduration":"1/2",ingredient:"un poignard en fer forgé à froid (+3)",desc:"vous invoquez un nombre de poignards d'ombre égal à votre valeur de Magie, que vous pouvez lancer sur un ou plusieurs de vos adversaires situés dans un rayon de 48 mètres (24 cases). Les poignards d'ombre sont des projectiles magiques d'une valeur de dégâts de 3. De plus, leur nature immatérielle ignore toute armure non magique censée réduire les dégâts."},
                {id:374,group:"Domaine des Ombres",name:"Strangulation",diff:13,"castduration":"1",ingredient:"un garrot qui a été utilisé pour étrangler un homme (+2)",desc:"vous envoyez des cordes d'ombre d'un noir d'encre étrangler une cible située dans un rayon de 12 mètres (6 cases), l'empêchant totalement de respirer et la forçant à effectuer un test d'Endurance pour résister aux effets du sort. Vous pouvez maintenir ce sort au prix d'une demi-action à chaque round, mais vous ne pouvez plus lancer d'autres sorts pendant ce temps. Si vous maintenez le sort, le tst d'Endurance est affecté d'un malus de -10% par round jusqu'à ce qu'il soit raté, auquel cas la victime commence à subir des dégâts. Le premier round d'échec provoque un coup d'une valeur de dégâts de 1 ignorant l'armure, et à chaque round consécutif, cette valeur de dégâts augmente de 1. La victime n'a plus droit aux tests d'Endurance pour résister aux dégâts une fois qu'elle en a manqué un : les dégâts continuent de s'accumuler jusqu'à ce que vous arrêtiez de vous-même de vous concentrer sur le sort, ou qu'on vous y force. Les règles de concentration (cf. Contraintes incantatoires, page 144 de WJDR) s'appliquent."},
                {id:375,group:"Domaine des Ombres",name:"Substance de l'ombre",diff:22,"castduration":"1",ingredient:"un morceau du plus fin velours, en forme de disque parfait (+3)",desc:"choisissez un personnage ou un objet doté d'une valeur d'Encombrement inférieure ou égale à 200, et qui se trouve entièrement dans l'ombre. La cible de substance de l'ombre devient invisible et silencieuse. Elle devient également partiellement intangible. Cela signifie qu'on ne peut plus l'affecter physiquement : on ne peut pas attaquer un personnage sous l'effet de ce sort, ni pousser, ramasser ou même trébucher sur un objet affecté ,etc. Toutefois, la cible, elle, peut affecter physiquement le monde comme si elle était tangible. Un personnage sous l'effet du sort peut se déplacer et effectuer des attaques, un morceau de corde peut servir à suspendre un objet, un sorcier peut lancer des sorts, etc. Les effets de ce sort se prolongent indéfiniment tant que la cible demeure entièrmeent dans l'ombre, mais se terminent dès que l'ombre qui la dissimule et interrompue, ne fût-ce qu'un instant. L'absence de lumière en elle-même n'est pas considérée comme une ombre lors de l'utilisation de ce sort : les cibles doivent être touchées par une ombre distincte projetée par une lumière qui tombe sur un objet. Le simple fait d'être en intérieur ne compte pas : la structure d'un bâtiment ne \"projette pas d'ombre\" à l'intérieur d'elle-même. Comme toujours, c'est le MJ qui a le dernier mot. Il s'agit d'un sort de contaxt, que vous pouvez lancer sur vous-même."},
                {id:376,group:"Domaine des Ombres",name:"Vide amnésique",diff:8,"castduration":"1/2",ingredient:"des bouts d'ongles de la personne à oublier (+1)",desc:"sous votre influence, un personnage situé dans un rayon de 48 mètres (24 cases) oublie totalement votre existence. Si la cible rate un test de Force Mentale opposé, les souvenirs et connaissances de votre existence sont effacés de son esprit. Elle peut cependant vous remarquer normalement, et se souviendra de tout ce qu'elle percevra de vous à partir de cet instant."},
                {id:377,group:"Domaine des Ombres",name:"Visage d'épouvante",diff:21,"castduration":"1/2",ingredient:"un lambeau de la toge d'un revenant (+3)",desc:"vous adoptez l'apparence d'une créature de pur cauchemar. Vous provoquez ainsi la Terreur (cf. Chapitre 9: Le meneur de jeu pour plus de détails) pendant 1 minute (6 rounds)."},
                {id:378,group:"Domaine des Ombres",name:"Vision subjective",diff:6,"castduration":"1/2",ingredient:"un globe oculaire de monstre (+1) ou n'importe quel objet de qualité exceptionnelle (+1), selon l'option choisie durant l'incantation du sort",desc:"sous votre influence, un objet de taille modérée (dont l'encombrement ne dépasse pas 75) apparaît sans valeur ou précieux, au choix. Les objets sans valeur semblent rouillés, brisés ou pourris selon leur nature, tandis que les objets précieux semblent avoir été faits avec soin, richement décorés et fabriqués avec une grande ingéniosité. Les défauts et qualités apparents de l'objet n'affectent pas son comportementréel : une épée normale enchantée de manière à paraître sans valeur coupe toujours aussi bien, et une flèche tordue enchantée de manière à ressembler à un chef-d'œuvre d'artisanat ne vole pas mieux. Les tests destinés à évaluer l'objet dont la nature est dissimulée par le sort subissent un malus de -20%. Cet effet se prolonge un nombre d'heures égal à votre valeur de Magie."},
                {id:379,group:"Domaine des Ombres",name:"Voile d'invisibilité",diff:17,"castduration":"1",ingredient:"un voile de tissu très léger (+2)",desc:"vous vous enveloppez de magie et disparaissez de vue pour 1d10 rounds. Tant que vous restez invisible, aucun tir ne peut vous prendre pour cible, ni même un projectile magique. Toutes vos attaques au corps à corps bénéficient d'un bonus de +20% en Capacité de Combat. Toute personne située dans un rayon de 4 mètres (2 cases) peut tenter un test de Perception Difficile (–20%) pour vous détecter par le biais de ses autres sens : si le test est réussi, elle peut vous attaquer, mais avec un malus de –30% en Capacité de Combat ou en Capacité de Tir, selon le cas. Vous ne pouvez lancer ce sort que sur vous."},
                {id:380,group:"Domaine de la Vie",name:"Abondance",diff:8,"castduration":"1min",ingredient:"une poignée de nourriture pour animaux (+1)",desc:"à l'instar des animaux qui s'engraissent pour passer l'hiver, vous permettez au personnage que vous touchez de se nourrir en stockant l'énergie de Ghyran. Le bénéficiaire du sort n'aura pas besoin de manger pendant 1 semaine, mais il devra toujours étancher sa soif. Abondance est un sort de contact que vous pouvez lancer sur vous-même."},
                {id:381,group:"Domaine de la Vie",name:"Aisance arboricole",diff:8,"castduration":"1/2",ingredient:"un peu de sève (+1)",desc:"vous conférez à un personnage ou à une créature la capacité de grimper et de surmonter les obstacles naturels, ce quilui donne un bonus de +20% à tous ses tests d'Escalade et de manœuvres de combat effectués sur des sufaces naturelles. Le bonus s'applique la plupart du temps aux tests d'Escalade et d'Agilité. Il s'agit d'un sort de contact que vous pouvez également lancer sur vous-même."},
                {id:382,group:"Domaine de la Vie",name:"Bruissement des arbres",diff:18,"castduration":"1h",ingredient:"une poignée de terre humide (+2)",desc:"tout en restant assis au milieu des branches d'un arbre, vous conversez avec celui-ci, apprenant ainsi ce qu'il a vu et entendu. Les arbres ne mentent pas, mais ils n'ont pas l'esprit très vif, s'expriment lentement et ne sont guère au fait des raisons qui motivent le comportement des humains. Les arbres peuvent ne pas vouloir coopérer avec vous s'ils voient vos compagnons couper du bois, faire un feu de camp ou se livrer à d'autres activités semblables. Ils peuvent également exiger des faveurs avant de répondre à une question ou de fournir une information précieuse. Si l'arbre avec lequel vous vous entendez fait partie d'un bosquet, d'un bois ou d'une forêt, il est susceptibled'avoir des informations concernant ce que les autres arbres savent, car ils se livrent à une conversation permanente concernant ce qui se passe dans les domaines boisés. Après l'heure nécessaire à l'incantation, vous vous entendez pendant une autre heure. Toutefois, en raison de la lenteur avec laquelle s'expriment les arbres, cela équivaut à une minute de conversation humaine."},
                {id:383,group:"Domaine de la Vie",name:"Canicule",diff:12,"castduration":"1/2",ingredient:"une fiole de la sueur d'un honnête homme (+2)",desc:"vos environs immédiats sont irradiés de la chaleur de l'été. Utilisez le grand gabarit. Ceux qui sont pris dans la zone d'effet suent à grosses gouttes et se sentent incroyablement las, comme s'ils venaient de travailler une journée entière sous un soleil de plomb. Ils subissent un malus de –20% à tous leurs tests pendant 1d10 rounds."},
                {id:384,group:"Domaine de la Vie",name:"Chair d'argile",diff:24,"castduration":"1",ingredient:"une petite statuette d'argile à votre effigie (+3)",desc:"votre peau se durcit jusqu'à devenir aussi dense que de l'argile. Vos valeurs de Force et d'Endurance sont doublées, mais vos valeurs d'Agilité et de Mouvement sont réduites de moitié (arrondir à l'entier inférieur). Chair d'argile dure un nombre de minutes égal à votre veleur de Magie."},
                {id:385,group:"Domaine de la Vie",name:"Chutes de feuilles",diff:12,"castduration":"1",ingredient:"une feuille de chêne (+2)",desc:"vous invoquez un tourbillon de fuilles qui vous enveloppe durant un nombre de minutes égal à votre valeur de Magie. Tant que vous êtes dissimulé par les feuilles virevoltantes, tous les tests de Capacité de Tir qui vous prennent pour cible subissent un malus de -20, bien que vous-même ne soyez pas affecté. Vous ne pouvez lancer ce sort que sour vous-même."},
                {id:386,group:"Domaine de la Vie",name:"Croissance vitale",diff:15,"castduration":"2 actions complètes ou plus",ingredient:"une jeune pousse vivante (+2)",desc:"vous canalisez le pouvoir de Ghyran pour donner une vitalité spectaculaire à la croissance d'une plante. Après vous être livré à l'incantation pendant une action complète, vous vous concentrez sur une plante ou une graine vivante située à portée de main. Tant que vous continuez à vous concentrer, la plante pousse à une vitesse étonnante : chaque action complète que vous passez à vous concentrer équivaut à une journée de croissance. Une plante peut pousser de l'équivalent d'une saison en quinze minutes, et en une heure, un arbre grandit d'un an. Toutefois, si vous vous concentrez trop longtemps, les plantes pourront dépasser leur cycle de vie normal et mourir. Les plantes ne peuvent pousser que dans un sol normalement capable de accueillir : un chêne ne poussera pas dans le désert, et il est impossible de faire pousser du blé sur de la roche nue."},
                {id:387,group:"Domaine de la Vie",name:"Éclosion du printemps",diff:18,"castduration":"10 minutes",ingredient:"une poignée d'engrais naturel (+2)",desc:"En concentrant toute la puissance de la magie de la Vie sur une zone ou un être, vous pouvez, au choix, agir sur une parcelle de terre de la taille d'un champ agricole ou sur un être vivant de n'importe quelle race. Si c'est un champ, il regorgera littéralement de vie et la prochaine récolte promettra d'être des plus riches. S'il s'agit d'un être vivant, le processus de reproduction sera assurément déclenché si toutes les autres conditions normales (en particulier l'accouplement) sont satisfaites."},
                {id:388,group:"Domaine de la Vie",name:"Fermentation",diff:4,"castduration":"1/2",ingredient:"une goutte d'eau pure issue d'une source naturelle (+1)",desc:"vous convertissez une quantité de liquide (assez pour étancher la soif d'une douzaine de personnes pendant une journée), aussi saumâtre ou sale soit-elle, en un brevage légèrement fermenté de votre choix (ale, bière, vin, hydromel, etc.). Le liquide inutilisé revient à sa forme originelle dans les 24 heures. Il s'agit d'un sort de contact."},
                {id:389,group:"Domaine de la Vie",name:"Fluide tellurique",diff:9,"castduration":"de 1 à 10 demi-actions",ingredient:"une dague (+1)",desc:"pour vous soigner, vous absorbez l'énergie de la terre sur laquelle vous vous tenez. Il vous faut pour cela vous trouver sur de la terre. Si l'incantation est réussie, fluide terrestre vous soigne d'un nombre de points de Blessures égal au nombre de demi-actions que vous passez à lancer le sort (maximum 10). Vous ne pouvez lancer ce sort sur quelqu'un d'autre."},
                {id:390,group:"Domaine de la Vie",name:"Geyser",diff:22,"castduration":"1",ingredient:"une baguette de sourcier bénie par un prêtre de Taal (+3)",desc:"Vous faites jaillir un geyser, dans un rayon de 24 mètres (12 cases). Ce sort ne fonctionne que sur de la terre naturelle. Utilisez le grand gabarit. Les créatures prises dans l'éruption d'eau reçoivent une attaque d'une valeur de dégâts de 4 et sont projetées de 4 mètres (2 cases) dans la direction de votre choix. Elles sont aussi mises à terre, et il leur faut réussir un test d'Endurance, sans quoi elles se retrouvent assommées pour 1d10 rounds. Une fois le premier jaillissement passé, une mare se forme dans la zone couverte par le gabarit, procurant de l'eau fraîche et potable pour la prochaine heure."},
                {id:391,group:"Domaine de la Vie",name:"Givre hivernal",diff:25,"castduration":"1",ingredient:"une fiole de neige fondue récoltée au sommet d'une montagne (+3)",desc:"Vous recouvrez d'une épaisse couche de givre tout ce qui se trouve dans la zone spécifiée, dans un rayon de 48 mètres (24 cases). Utilisez le grand gabarit. Toute créature affectée reçoit une attaque d'une valeur de dégâts de 4 et doit réussir un test de Force Mentale ou se retrouver sans défense pendant 1 round. Le givre subsiste pendant un nombre de minutes égal à votre valeur de Magie. Les vitesses de déplacement dans la zone sont réduites de moitié."},
                {id:392,group:"Domaine de la Vie",name:"Malédiction des ronces",diff:6,"castduration":"1/2",ingredient:"une épine de ronce (+1)",desc:"vous faites pousser des épines dans le corps d'un personnage situé dans un rayon de 36 mètres (18 cases), ce qui lui cause d'insoutenables douleurs pendant 1d10 rounds. À chacun de ses tours de jeu suivants, la victime devra réussir un test de Force Mentale, sous peine de perdre 1 point de Blessures quels que soient son bonus d'Endurance et son armure, et de se voir infliger un malus de –20% à tous ses tests pendant un round."},
                {id:393,group:"Domaine de la Vie",name:"Murmure de la rivière",diff:15,"castduration":"1min",ingredient:"une bonbonne de vin (+2)",desc:"vous entrez en communion avec l'esprit d'une rivière. Pour pouvoir lancer ce sort, vous devez être immergé dans la rivière en question au moins jusqu'à la taille. Votre magie et une partie de vous-même se diffusent dans l'eau, vous permettant de poser quelques questions à la rivière. Vous pouvez demander à l'onde tout ce qui s'est passé sur ou dans le cours d'eau depuis 24 heures et jusqu'à 1,5 kilomètre en amont ou en aval. Les réponses seront très générales. Vous pouvez par exemple apprendre que deux bateaux ont descendu la rivière et que l'un d'entre eux était particulièrement grand; vous ne découvrirez pas les noms des embarcations ou de leurs passagers. Si des orques ont attaqué l'un des bateaux, vous en serez éventuellement renseigné, sans pour autant apprendre de quelle tribu ceux-ci étaient issus. Murmure de la rivière reste actif pendant un nombre de minutes égal à votre valeur de Magie."},
                {id:394,group:"Domaine de la Vie",name:"Passerelle tellurique",diff:14,"castduration":"1",ingredient:"une clé de fer (+2)",desc:"vous disparaissez dans la terre et réapparaissez dans un rayon de 48 mètres (24 cases). Votre lieu de départ aussi bien que celui d'arrivée doivent avoir un sol de terre naturelle ; cela signifie par exemple que vous ne pouvez lancer ce sort si vous vous trouvez dans un bâtiment ou une rue pavée."},
                {id:395,group:"Domaine de la Vie",name:"Père des ronces",diff:14,"castduration":"1",ingredient:"une épine de ronce qui a déjà écorché quelqu'un (+2)",desc:"vous provoquez une éruption de ronces qui jaillissent de la terre nue dans un rayon de 48 mètres (24 cases). Utilisez le grand gabarit. Quiconque est pris dans les ronces voit sa valeur de Mouvement réduite de moitié tant qu'il reste dans la zone affectée, et quiconque tente de se déplacer subit un coup d'une valeur de dégâts de 4. Les ronces et les épines rentrent dans le sol au bout d'un nombre de minutes égal à votre valeur de Magie."},
                {id:396,group:"Domaine de la Vie",name:"Piste indécelable",diff:11,"castduration":"1",ingredient:"de la mousse qui pousse sans avoir été foulée depuis une décénie (+2)",desc:"vous vous déplacez dans les étendues sauvages comme s'il s'agissait des routes les mieux entretenues de l'Empire, et ce sans laisser la moindre trace de votre passage. \"Les étendues sauvages\" omprennent toutes les étendues généralement inhabitées par les humains, mais en aucun cas les terres cultivées, quelles qu'elles soient. Le sort s'achève quand vous croisez une route faite par l'homme, une piste ou un sentier généralement utilisé par des créatures intelligentes, quand vous entrez dans un bâtiment construit par l'homme, quand vous coupez du bois vivant pour faire un feu ou un abri, ou quand vous avez parcouru plus de 150 kilomètres. Vous pouvez étendreles effets de ce sort à un nombre d'individus (en plus de vous) égal à votre valeur de Magie, et vous pouvez le lancer plusieurs fois pour affecter encore plus de personnages. Il s'agit d'un sort de contact."},
                {id:397,group:"Domaine de la Vie",name:"Piste révélatrice",diff:7,"castduration":"1",ingredient:"une branche tombée d'un arbre (+1)",desc:"vous tendez l'oreille, à l'affût des signes subtils de la terre et des arbres, ce qui vous confère un bonus de +20% à tous les tests destinés à pister ou à obtenir des informations sur ceux qui ont récemment traversé une étendue sauvage. La plupart du temps, le bonus s'applique aux tests de Pistage, bien qu'il puisse en affecter d'autres selon la situation et la façon dont vous la gérez. Vous pouvez continuer à suivre une piste donnée, conservant les bénéfices du sort, jusqu'à ce qu'elle croise une route faite par l'homme ou une zone cultivée ou habitée."},
                {id:398,group:"Domaine de la Vie",name:"Purification de la terre",diff:27,"castduration":"10 minutes",ingredient:"une fiole de l'eau d'un bassin sacré (+3)",desc:"Vous assainissez de toute maladie végétale une parcelle de terre pouvant aller jusqu'à 2 kilomètres carrés. Cela a pour effet de sauver les plantes, les arbres, les cultures et autres végétaux, et immunise la zone contre ces mêmes maladies pour le reste de l'année. Il est également possible de lancer ce sort sur 2d10 personnes malades : la durée de toutes les maladies dont elles sont atteintes est alors réduite de moitié (arrondir à l'entier inférieur)."},
                {id:399,group:"Domaine de la Vie",name:"Transformation en arbre",diff:16,"castduration":"1",ingredient:"un morceau décorce (+2)",desc:"vous permettez à une créature consentante de prendre la forme d'un arbre. Le type d'arbre dépend du caractère de l'individu : un personnage mélancolique endossera la forme d'un saule pleureur, tandis qu'une sorcière maléfique prendra celle d'un chêne noir. La cible conserve sa forme d'arbre pendant un nombre d'heures égal à votre valeur de Magie. Tant qu'elle est sous forme d'arbre, la créature peut voir et entendre normalement. Un personnage sous forme d'arbre est vulnérable à tout ce qui détruirait ordinairement un arbre, comme le feu, les haches, les champignons, etc. Il s'agit d'un sort de contact."},
                {id:400,group:"Le domaine de la Glace",name:"Appel Shoïka",diff:15,"castduration":"1",ingredient:"une poignée de chandelles de glace (+2)",desc:"vous invoquez la Veuve Vénérable, lui rappelant les promesses faites à la reine-khan Shoïka, la première tsarine du Kislev, et provoquez l'apparition de tentacules de glace de 6 mètres de long. Les déplacements sont réduits de moitié dans la zone du grand gabarit. De plus, les cibles doivent réussir un test d'Agilité à chaque round, sans quoi les tentacules les agrippent et leur infligent 1d10+4 points de dégâts (qui ne tiennent pas compte de l'armure). De plus, le personnage est victime d'une prise. Pour se libérer, il doit réussir un test de Force. Les tentacules ont quant à eux une Force égale à votre Intelligence."},
                {id:401,group:"Le domaine de la Glace",name:"Baiser de la pucelle de glace",diff:20,"castduration":"1",ingredient:"une poignée de neige (+2)",desc:"vous crachez un souffle de pur froid, qui gèle vos ennemis et en fait des statues de glace. Les cibles subissent 1d10+5 points de dégâts (qui ne tiennent pas compte de l'armure). Reportez-vous aux règles de Mort subite en cas de coup critique (un décès se traduisant par une statue gelée). Ceux qui y survivent doivent réussir un test de Force Mentale sous peine d'être assommés pendant 1 round."},
                {id:402,group:"Le domaine de la Glace",name:"Blizzard",diff:18,"castduration":"1",ingredient:"un flocon de neige (+2)",desc:"une tornade de neige et de glace s'élève du sol, gelant et aveuglant tout ce qui se dresse en travers de son chemin. Vous pouvez lancer le blizzard en tout point situé dans votre champ de vision. Toutefois, à la discrétion du MJ, vous aurez peut-être besoin de réussir un test de Perception pour distinguer une cible lointaine. Tous ceux qui se trouvent dans un rayon de 24 mètres de la cible subissent 1d10 points de dégâts par round (lancez les dégâts une fois seulement, et appliquez-les aux cibles situées dans la zone) et leur champ de vision est réduit à 6 mètres (3 cases). Le blizzard impose aussi un malus de –20 aux tests de Capacité de Tir et Agilité de tous ceux qui se tiennent dans la zone en plus de réduire leur Mouvement de moitié."},
                {id:403,group:"Le domaine de la Glace",name:"Faucons de Miska",diff:18,"castduration":"1",ingredient:"un faucon de cristal (+2)",desc:"en faisant appel aux pactes noués par les premières reines-khans, vous convoquez les faucons de Miska, des esprits glacés de la peur, de la haine et de la terreur. Ces oiseaux de glace se cristallisent dans l'air et piquent en direction de la cible en hurlant. Les cibles situées dans la zone du grand gabarit et celles qui se trouvent dans un rayon de 10 mètres de celui-ci doivent réussir un test de Peur Assez facile (+10). Les faucons de Miska restent jusqu'à ce que toutes les créatures affectées aient réussi leur test de Peur."},
                {id:404,group:"Le domaine de la Glace",name:"Forme du félon de givre",diff:27,"castduration":"3 actions complètes",ingredient:"une griffe de démon de givre (+3)",desc:"vous invitez les esprits du froid d'antan à vous transformer (ainsi que vos possessions) en démon du givre hurlant. Vous conservez votre Intelligence et votre Force Mentale, mais vos autres caractéristiques sont celles d'un démon de givre (cf. page 131). Vous gagnez également les compétences, talents et traits de ce monstre. Toutefois, vous ne pouvez plus communiquer que par hurlements, êtes incapable de lancer des sorts et ne pouvez manier la moindre arme. Le sort s'achève si vous prenez un coup critique, si vous dormez, ou tout simplement si vous décidez d'y mettre un terme (action complète)."},
                {id:405,group:"Le domaine de la Glace",name:"Givre mortel",diff:25,"castduration":"1",ingredient:"une pierre d'Urszebya (+3)",desc:"vous faites appel au froid mortel du pays. La cible touchée doit réussir un test d'Endurance Assez difficile (–20) sous peine de subir 1d10+8 points de dégâts par point de votre valeur de Magie (ces dégâts ne tiennent pas compte de l'armure). En cas de réussite, la cible ne subit que 1d10+2 points de dégâts par point de Magie. Les coups critiques obtenus à l'aide de ce sort s'appuient sur les règles de Mort subite, un décès signifiant que la cible a gelé."},
                {id:406,group:"Le domaine de la Glace",name:"Lame de givre",diff:8,"castduration":"1/2",ingredient:"une chandelle de glace longue de 1 mètre (+2)",desc:"une lame de glace se forme dans votre main. Considérez qu'il s'agit d'une arme magique dotée de l'attribut précise qui inflige 1d10+2+BF points de dégâts. Toutefois, elle fond instantanément si vous la lâchez. À la fin du sort, vous pouvez maintenir la lame à chaque round en réussissant un test de Force Mentale."},
                {id:407,group:"Le domaine de la Glace",name:"Manteau de cristal",diff:15,"castduration":"1",ingredient:"une hermine (+2)",desc:"vous invoquez une brume glacée tourbillonnante qui vous enveloppe. Les créatures situées dans un rayon de 2 mètres subissent un malus de –10 aux tests de Capacité de Combat, Capacité de Tir et Agilité alors que le froid les engourdit. De plus, celles qui tentent de vous attaquer au corps à corps doivent réussir un test d'Endurance. Celles qui le ratent ne peuvent s'empêcher de reculer, perdant leur action du round."},
                {id:408,group:"Le domaine de la Glace",name:"Marche de la steppe sans fin",diff:15,"castduration":"2",ingredient:"une boule de graisse d'ours gelée (+2)",desc:"vous abaissez votre température corporelle. Vous êtes immunisé contre les effets du gel et les dégâts des attaques de froid."},
                {id:409,group:"Le domaine de la Glace",name:"Mur de glace",diff:12,"castduration":"1",ingredient:"une plaque de glace de 30 cm de côté (+2)",desc:"vous faites apparaître un mur de glace recouvert de neige. Celui-ci peut faire jusqu'à 10 mètres de long sur 6 mètres de haut, à condition de se situer en intégralité dans la portée du sort et de ne pas empiéter sur une zone dégageant de la chaleur (corps vivant, feu, etc., à la discrétion du MJ). Ce mur bouche la vue. Il a un BE 5 et 10 points de Blessures par point de votre valeur de Magie. Enfin, le feu lui inflige des dégâts doublés."},
                {id:410,group:"Le domaine de la Glace",name:"Permafrost",diff:20,"castduration":"2",ingredient:"une motte de toundra gelée (+2)",desc:"vous focalisez les puissants courants de froid du pays. Un givre épais apparaît aussitôt sur les surfaces affectées, réduisant de moitié les déplacements de ceux qui y entrent ou s'y déplacent. Au round où le sort est lancé, les cibles subissent aussi 1d10 points de dégâts (qui ne tiennent pas compte de l'armure) et doivent réussir un test de Force sous peine de perdre leur prochaine demi-action. Au bout d'une minute, toute l'eau de la zone gèle."},
                {id:411,group:"Le domaine de la Glace",name:"Plaque de glace",diff:12,"castduration":"1/2",ingredient:"une plaque de glace de 30 cm de côté (+2)",desc:"vous recouvrez une zone d'une fine plaque de verglas. Les créatures situées sous le grand gabarit doivent réussir un test d'Agilité Assez difficile (–10) à chaque fois qu'elles tentent une action incluant un déplacement sous peine de glisser et de tomber, subissant alors 1d10 points de dégâts et perdant le reste de leur tour. En cas de succès, la cible peut se déplacer normalement, mais à la moitié de sa vitesse habituelle."},
                {id:412,group:"Le domaine de la Glace",name:"Tempête de cristaux",diff:18,"castduration":"1",ingredient:"une poignée de glace (+2)",desc:"vous lancez 1d10 éclats de glace durs comme des diamants en direction de la cible. Chacun est un projectile magique infligeant 1d10+3 points de dégâts."},
                {id:413,group:"Le domaine de la Glace",name:"Tempête de grêle",diff:14,"castduration":"1/2",ingredient:"un grêlon (+2)",desc:"vous focalisez la magie de glace et des blocs de glace se mettent à s'abattre au sol à une vitesse terrifiante. Toutes les créatures situées sous le grand gabarit subissent 1d10+2 points de dégâts par round passé dans la zone. De plus, leur champ de vision est réduit à 4 mètres, elles subissent un malus de –20 aux tests de Capacité de Tir et d'Agilité, et réduisent de moitié leur Mouvement. En réussissant un test de Force Mentale Assez difficile (–10) au moyen d'une action complète, vous pouvez déplacer la tempête de 2 mètres par point de Magie."},
                {id:414,group:"Le domaine de la Glace",name:"Vent mordant",diff:23,"castduration":"1",ingredient:"un croc de dragon blanc (+3)",desc:"vous focalisez de puissants courants de magie pour en faire un coup de vent glacé. Tous ceux qui vous séparent de la cible sont frappés par des éclats de glace infligeant 1d10+4 points de dégâts. De plus, les créatures auxquelles le sort fait perdre au moins 1 point de Blessures doivent réussir un test de Force Mentale sous peine de se retrouver à terre. Vent mordant est un projectile magique."},
                {id:415,group:"Le domaine de la Glace",name:"Voix glaçante",diff:9,"castduration":"1/2",ingredient:"une langue de glace (+1)",desc:"vous prenez la parole avec le détachement glacé des reines-khans d'antan. Vous bénéficiez d'un bonus de +10 aux tests de Commandement, Intimidation, Marchandage et Torture, mais subissez un malus de –10 aux tests de Baratin et de Charisme."},
                {id:416,group:"Le domaine de Vedma",name:"Bannissement des esprits",diff:16,"castduration":"1",ingredient:"les organes internes d'un élan (+2)",desc:"choisissez une créature ayant le trait Éthéré. À moins de remporter un test de Force Mentale opposé contre vous, celle-ci disparaît dans l'Aethyr ou repart là d'où elle est venue."},
                {id:417,group:"Le domaine de Vedma",name:"Chucotements de la souillure",diff:12,"castduration":"1",ingredient:"la main d'un adorateur des Dieux Sombres (+2)",desc:"les esprits vous chuchotent de funestes avertissements lorsque des serviteurs des Dieux Sombres ou des choses souillées par leur mal sont dans les parages. Quand une telle créature, chose ou zone se trouve à portée du sort, vous bénéficiez d'un bonus de +20 aux tests de Sens de la magie applicables."},
                {id:418,group:"Le domaine de Vedma",name:"Convocation d'esprit",diff:12,"castduration":"2",ingredient:"déterminé par le MJ en fonction du type d'esprit convoqué (+2)",desc:"vous convoquez un esprit en un lieu inoccupé situé dans la portée du sort. Parmi les exemples possibles de profils, on trouve celui des dryades (page 91 du Bestiaire du Vieux Monde), des reflets (page 135), des esprits (page 91 du Bestiaire du Vieux Monde), des farfadets (page 125 du Compagnon) et des naïades (page 123 du Compagnon). Vous devez réussir un test de Force Mentale pour contrôler l'esprit. En cas d'échec, le MJ en prend le contrôle, sachant que la créature ne sera peutêtre pas très contente…"},
                {id:419,group:"Le domaine de Vedma",name:"Forme de la Veuve Vénérable",diff:26,"castduration":"3 actions complètes",ingredient:"deux poignées de terre kislevite imprégnées de votre propre sang (+3)",desc:"vous invitez en vous les plus puissants esprits de la Veuve Vénérable. Vous vous transformez alors (ainsi que vos possessions) en une monstruosité aux cheveux gris de près de 2,50 m de haut, le tout assorti d'yeux luisants, de dents en métal rouillé et de longues griffes en fer. Vous bénéficiez d'un bonus de +20 aux tests de Capacité de Combat, Force et Endurance, mais aussi de +1 en Attaques. Vous gagnez également les traits Armes naturelles, Effrayant, Sans peur et Sens aiguisés. Le sort prend fin lorsque vous réussissez un coup critique, allez dormir ou y mettez volontairement fin au moyen d'une action complète."},
                {id:420,group:"Le domaine de Vedma",name:"Fortune contée",diff:14,"castduration":"1h",ingredient:"un objet directement lié à la question posée (+2)",desc:"vos yeux virent au bleu alors que vous entrez en transe (vous êtes sans défense) et communiez avec les esprits. Un personnage peut alors poser une question (et une seule) au sujet d'un événement à venir. Les esprits offrent une réponse sibylline (le MJ pourra en profiter pour glisser des indices sur l'aventure ou la suivante). Une fois le sort achevé, la cible peut profiter de la phrase prophétique pour relancer les trois tests suivants ratés en lien avec sa question (à la discrétion du MJ). Une fois ses trois jets relancés, vos yeux reprennent leur couleur normale. Vous ne pouvez profiter que d'une seule fortune contée à la fois. [...]"},
                {id:421,group:"Le domaine de Vedma",name:"Passage révélé",diff:20,"castduration":"3 actions complètes",ingredient:"un objet directement lié à la question posée (+2)",desc:"vos yeux virent au rouge alors que vous entrez en transe et distinguez le passé au travers d'une légère brume cramoisie. Dès lors, vous êtes sans défense. Pour recevoir la vision, vous devez commencer par poser une question aux esprits (Que s'est-il passé ici il y a trois ans ? ou Comment cet homme est mort ?). Toutefois, la vision étant offerte du point de vue des esprits des environs (ce qui peut inclure des morts, des esprits de la nature, des farfadets malicieux, etc.), le résultat est souvent déroutant et vague à la fois. Les détails de la vision sont laissés à l'entière appréciation du MJ, qui est invité à faire preuve d'imagination dans sa description de la transe (qui dure aussi longtemps qu'il le juge nécessaire ou jusqu'à ce que vous mettiez fin au sort). Si vous avez déjà lancé fortune contée au moment où vous jetez ce sort, l'un de vos yeux est rouge et l'autre est bleu."},
                {id:422,group:"Le domaine de Vedma",name:"Patte porte-bonheur",diff:11,"castduration":"1",ingredient:"une patte de chien à trois pattes (+2)",desc:"vous attirez un esprit de la chance jusqu'à l'ingrédient et l'y liez. Celui qui le porte gagne +1 point de Fortune. La patte se désintègre lorsqu'elle est utilisée ou que le sort prend fin. Vous ne pouvez jouir que d'un seul sort de ce type à la fois."},
                {id:423,group:"Le domaine de Vedma",name:"Promette maudite",diff:18,"castduration":"2",ingredient:"un objet personnel de la cible (+2)",desc:"vous exigez de la cible qu'elle réalise une action précise sous peine de subir votre courroux. Toutefois, elle a droit à un test de Force Mentale Assez difficile (–10) pour résister. En cas d'échec, elle est victime d'une malédiction suprême si elle ne se conforme pas à votre souhait (à la discrétion du MJ). Les cibles auxquelles on ordonne de se faire du mal ou d'agir d'une façon qui leur est nuisible ont droit à un bonus de +30 au test."},
                {id:424,group:"Le domaine de Vedma",name:"Purification corporelle",diff:13,"castduration":"2",ingredient:"une pleine poignée d'entrailles de poisson (+2)",desc:"la cible avale les entrailles de poisson alors que vous proférez l'incantation. Les viscères attirent des esprits de guérison qui permettent de chasser les maladies et de résorber les blessures. Si la cible ne vomit pas cet atroce repas (test de Force Mentale nécessaire) et que vous réussissez vous-même un test de Force Mentale, elle est débarrassée d'une maladie (dans les faits, vous la soignez) et regagne un nombre de points de Blessures égal à 1d5 plus votre Magie."},
                {id:425,group:"Le domaine de Vedma",name:"Purification spirituelle",diff:24,"castduration":"2",ingredient:"une tasse d'urine d'ours (+3)",desc:"la cible avale l'urine d'ours, ce qui vous permet de vous en prendre aux esprits des Dieux Sombres qui l'habitent. Jouez un test de Force Mentale Assez difficile (–10). En cas de réussite, si la cible est vivante, consentante et réussit un test d'Endurance Assez difficile (–10), elle perd une mutation de votre choix. Toutefois, les pouvoirs du Chaos sont insidieux, si bien que la mutation revient dès que la cible rate un test d'Endurance d'au moins 30 points."},
                {id:426,group:"Le domaine de Vedma",name:"Rejet spirituel",diff:12,"castduration":"1",ingredient:"un piquant de triton (+2)",desc:"disposez le centre du grand gabarit n'importe où à portée. Un esprit situé sous celui-ci doit réussir un test de Force Mentale opposé contre vous ou sortir de la zone d'effet dès son action suivante. Ensuite, il ne peut y revenir sans réussir un test de Force Mentale. Toutefois, il n'est plus affecté par le sort dès qu'il en réussit un."},
                {id:427,group:"Le domaine de Vedma",name:"Résistance au Chaos",diff:17,"castduration":"2",ingredient:"un gésier de chouette des neiges (+2)",desc:"votre incantation invoque des esprits qui détestent les Dieux Sombres du nord. Résistance au Chaos vous affecte ainsi qu'un nombre de cibles situées à portée égal au double de votre valeur de Magie. Les cibles non consentantes ont droit à un test de Force Mentale Difficile (–20) pour annuler l'effet. Les sujets gagnent le talent Résistance au Chaos. En revanche, les lanceurs de sorts affectés (y compris vous) ne peuvent plus jeter de sorts."},
                {id:428,group:"Domaine du Chaos",name:"Vision d'horreur",diff:7,"castduration":"1/2",ingredient:"un petit masque (+1)",desc:"vous imposez une vision infernale à un personnage situé dans un rayon de 24 mètres (12 cases). La cible se retrouve assommée pendant 1 round à moins de réussir un test de Force Mentale. Une fois qu'elle n'est plus assommée, la cible doit réussir un second test de Force Mentale, sans quoi elle reçoit 1 point de Folie."},
                {id:429,group:"Domaine du Chaos",name:"Faveur du Chaos",diff:9,"castduration":"1",ingredient:"une amulette gravée du symbole d'un dieu du Chaos (+1)",desc:"vous invoquez les faveurs de l'un des dieux du Chaos. Vous recevez, pendant 1 minute (6 rounds), un bonus de +10% en Capacité de Combat, Endurance, Force Mentale ou Sociabilité en fonction du dieu que vous avez invoqué."},
                {id:430,group:"Domaine du Chaos",name:"Invocation de démon mineur",diff:12,"castduration":"2",ingredient:"un coeur d'humanoïde encore sanguinolent (+2)",desc:"vous invoquez un démon mineur (cf. Chapitre 11: Le bestiaire) qui apparaît dans un espace inoccupé situé dans un rayon de 12 mètres (6 cases). Le démon reste tangible pendant 1d10 minutes."},
                {id:431,group:"Domaine du Chaos",name:"Sang bouillonnant",diff:13,"castduration":"1/2",ingredient:"une fiole de sang démoniaque (+2)",desc:"vous crachez du sang brûlant comme de l'acide sur une cible située dans un rayon de 24 mètres (12 cases). La cible subit un nombre d'attaques égal à votre valeur de Magie et d'une valeur de dégâts de 4. Il s'agit d'un projectile magique."},
                {id:432,group:"Domaine du Chaos",name:"Tentation du Chaos",diff:16,"castduration":"1",ingredient:"un symbole sacré profané (+2)",desc:"vous ensorcelez une personne située dans un rayon de 24 mètres (12 cases) et la soumettez à votre volonté. À moins que la cible ne réussisse un test de Force Mentale, c'est vous qui décidez des actions qu'elle entreprend à son prochain tour de jeu. Les morts-vivants sont immunisés contre la tentation du Chaos."},
                {id:433,group:"Domaine du Chaos",name:"Main de la destruction",diff:17,"castduration":"1",ingredient:"une main récupérée sur un pendu (+2)",desc:"vous enveloppez votre main d'un halo de magie noire. Elle est alors considérée comme une arme magique ayant l'attribut perforante et une valeur de dégâts de 7. De plus, vous bénéficiez d'un bonus de +10% en Capacité de Combat quand vous attaquez avec cette main. Le sort reste actif pendant un nombre de rounds égal à votre valeur de Magie. Vous pouvez prolonger cette durée en réussissant un test de Force Mentale à chaque round suivant."},
                {id:434,group:"Domaine du Chaos",name:"Caresse du Chaos",diff:20,"castduration":"1/2",ingredient:"une corne d'homme-bête (+2)",desc:"votre contact canalise l'énergie pure du Chaos dans votre cible et la transforme, à moins qu'elle ne réussisse un test de Force Mentale. En cas d'échec à ce test, la cible doit tirer sur la Table 11-1: mutations du Chaos, page 227. La mutation se manifeste en quelques secondes et s'avère permanente. Si elle est affectée, la cible doit réussir un second test de Force Mentale, sous peine de se retrouver assommée pendant 1 round en raison de la brutalité et de l'ignominie de la mutation. Il s'agit d'un sort de contact. Les morts-vivants sont immunisés contre la caresse du Chaos."},
                {id:435,group:"Domaine du Chaos",name:"Voile de corruption",diff:24,"castduration":"1",ingredient:"la lame d'un champion du Chaos (+3)",desc:"vous créez un infâme nuage de corruption dans un rayon de 36 mètres (18 cases). Utilisez le grand gabarit. Les personnes affectées doivent réussir un test de Force Mentale, pour éviter de perdre 1 point de Blessures, quels que soient leur bonus d'Endurance et leur armure. Les créatures ainsi blessées continuent à perdre 1 point de Blessures par round jusqu'à ce qu'elles réussissent un test de Force Mentale. Celles qui perdent ainsi plus d'1 point de Blessures doivent également réussir un test d'Endurance, sous peine de se retrouver victimes d'une mutation. Si elles ratent ce dernier test, elles doivent tirer sur la Table 11-1: mutations du Chaos, page 227 pour déterminer la mutation qui s'opère."},
                {id:436,group:"Domaine du Chaos",name:"Invocation de démons",diff:25,"castduration":"2",ingredient:"les coeurs encore sanguinolents de six humanoïdes (+3)",desc:"vous invoquez un nombre de démons mineurs (cf. Chapitre 11: Le bestiaire) égal à votre valeur de Magie. Ils apparaissent chacun dans un espace inoccupé situé dans un rayon de 12 mètres (6 cases) et restent tangibles pendant 1d10 minutes."},
                {id:437,group:"Domaine du Chaos",name:"Mot de souffrance",diff:27,"castduration":"1/2",ingredient:"le sang d'un démon (+3)",desc:"vous prononcez le nom secret de l'un des dieux du Chaos, ce qui suffit à infliger d'abominables souffrances à ceux qui vous entourent. Centrez le grand gabarit sur vous-même. Les personnes comprises dans la zone subissent une attaque d'une valeur de dégâts de 8 et doivent réussir un test de Force Mentale sous peine de se retrouver sans défense pendant 1 round. Le sort ne vous affecte pas."},
                {id:438,group:"Domaine de la Nécromancie",name:"Visage de la mort",diff:6,"castduration":"1",ingredient:"un crâne (+1)",desc:"votre visage prend l'aspect d'un crâne à l'air mauvais, symbole reconnu de la mort. Vous provoquez la Peur pendant 1 minute (6 rounds)."},
                {id:439,group:"Domaine de la Nécromancie",name:"Réanimation",diff:8,"castduration":"1 demi-action par cadavre",ingredient:"la poussière issue d'une tombe (+1)",desc:"vous ranimez les morts, créant un nombre de squelettes ou de zombies égal à votre valeur de Magie. Vous devez vous trouver dans un rayon de 12 mètres (6 cases) de cadavres récents (qui deviennent des zombies) ou de vestiges plus anciens (lesquels font des squelettes)."},
                {id:440,group:"Domaine de la Nécromancie",name:"Sève nécromantique",diff:11,"castduration":"3/2",ingredient:"une dent de chauve-souris vampire (+2)",desc:"vous buvez le sang d'un cadavre pour soigner vos propres blessures. Le cadavre doit être frais (sa mort doit remonter à moins d'une heure). Si l'incantation est réussie, sève nécromantique vous rend 1d10 points de Blessures."},
                {id:441,group:"Domaine de la Nécromancie",name:"Main de poussière",diff:13,"castduration":"1/2",ingredient:"une main de meurtrier (+2)",desc:"votre contact anéantit la chair de vos adversaires vivants, leur ôtant 1d10 points de Blessures, quels que soient leur bonus d'Endurance et leur armure. Les morts-vivants sont immunisés contre main de poussière. Il s'agit d'un sort de contact."},
                {id:442,group:"Domaine de la Nécromancie",name:"Appel de Vanhel",diff:15,"castduration":"1",ingredient:"une petite trompe en argent (+2)",desc:"vous stimulez les morts-vivants sous votre contrôle. 1d10 squelettes, revenants ou zombies peuvent immédiatement se déplacer ou porter une attaque standard, bien que ce ne soit pas leur tour de jeu. Ces actions comptent pour des actions gratuites et n'affectent en rien le nombre d'actions que peuvent entreprendre les mortsvivants durant ce round."},
                {id:443,group:"Domaine de la Nécromancie",name:"Contrôle des morts-vivants",diff:17,"castduration":"1/2",ingredient:"un morceau de bois pris sur un cercueil profané (+2)",desc:"vous soumettez un mort-vivant éthéré à votre volonté. Vous pouvez cibler une banshee, un spectre ou un esprit situé(e) dans un rayon de 24 mètres (12 cases). La créature passe sous votre contrôle pendant 24 heures, à moins qu'elle ne réussisse un test de Force Mentale."},
                {id:444,group:"Domaine de la Nécromancie",name:"Chair momifiée",diff:19,"castduration":"1",ingredient:"un lambeau de chair pris sur un revenant (+2)",desc:"votre chair devient aussi résistante que celle d'un cadavre momifié pendant 1 minute (6 rounds). Pendant cette durée, tous les coups critiques que vous subissez voient leur valeur critique réduite de l'équivalent de votre valeur de Magie."},
                {id:445,group:"Domaine de la Nécromancie",name:"Animation des morts",diff:22,"castduration":"2",ingredient:"de la poussière prélevée sur une momie (+3)",desc:"ce sort est semblable à réanimation, si ce n'est que vous créez 2d10 squelettes ou zombies dans un rayon de 24 mètres (12 cases)."},
                {id:446,group:"Domaine de la Nécromancie",name:"Incantation d'éveil",diff:24,"castduration":"2",ingredient:"un diadème de fer refroidi dans du sang humain (+3)",desc:"ce sort est semblable à réanimation, si ce n'est que les morts-vivants créés sont des revenants. Les cadavres employés doivent être ceux de personnages engagés dans une carrière avancée."},
                {id:447,group:"Domaine de la Nécromancie",name:"Bannissement de morts-vivants",diff:26,"castduration":"1",ingredient:"une fiole d'eau bénite (+3)",desc:"vous créez un tourbillon magique apparaissant dans un rayon de 48 mètres (24 cases) et aspirant l'énergie qui anime les mortsvivants. Utilisez le grand gabarit. Les morts-vivants affectés subissent une attaque d'une valeur de dégâts de 5, à moins qu'il ne s'agisse de squelettes ou de zombies, auquel cas ils sont instantanément détruits."},
                {id:448,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Adhérence du grimpeur",diff:12,"castduration":"1/2",ingredient:"un goutte de colle ou de miel (+2)",desc:"vous acquérez la capacité de marcher et ramper sur les murs, les plafonds et les voûtes à une vitesse égale à votre valeur de Mouvement. Les effets de ce sort persistent pendant un nombre de rounds égal à votre valeur de Magie. Les objets que vous portez restent soumis normalement à la gravité et tombent au sol s'ils ne sont plus retenus."},
                {id:449,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Armure de ténèbres",diff:10,"castduration":"1/2",ingredient:"un morceau de cuir noirci (+2)",desc:"vous donnez consistance aux ombres qui enveloppent votre corps. En plus de vous rendre difficilement détectable lorsque la luminosité est faible, cette armure de ténèbres vous protège des attaques. Vous gagnez ainsi 1 point d'Armure sur toutes les zones, ainsi qu'un bonus de +20% aux tests de Dissimulation effectués dans la pénombre. Les effets de ce sort persistent pendant un nombre de minutes égal à votre valeur de Magie. Vous ne pouvez lancer ce sort si vous portez une armure normale. Si vous venez à enfiler une armure pendant les effets du sort, ceux-ci prennent aussitôt fin."},
                {id:450,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Destin crépitant",diff:7,"castduration":"1/2",ingredient:"une bobine de cuivre (+1)",desc:"vous envoyez un arc d'énergie verte et crépitante sur un adversaire situé dans un rayon de 12 mètres (6 cases). Destin crépitant prend la forme d'un projectile magique d'une valeur de dégâts de 2. De plus, quiconque subit des dégâts par le biais de ce sort doit réussir un test d'Endurance Assez facile (+10%) sous peine d'être assommé pendant 1 round."},
                {id:451,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Écorchage",diff:25,"castduration":"1",ingredient:"un morceau de peau humaine, elfe ou naine tannée (+3)",desc:"des volutes vertes d'énergie Warp lacèrent la chair de la cible jusqu'à l'os. Vous choisissez la victime dans un rayon de 10 mètres (5 cases), qui subit chaque round une attaque d'une valeur de dégâts de 5, quels que soient son bonus d'Endurance et son armure, pendant un nombre de rounds égal à votre valeur de Magie."},
                {id:452,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Escampette",diff:14,"castduration":"1/2",ingredient:"un scalp d'elfe (+2)",desc:"vous acquérez une vitesse accrue. Votre valeur de Mouvement augmente de l'équivalent de votre valeur de Magie. Cette vitesse supplémentaire dure pendant une minute (6 rounds), plus 1 round par point de différence entre le résultat de votre jet d'incantation et la difficulté du sort."},
                {id:453,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Évasion",diff:8,"castduration":"1",ingredient:"une patte arrière de rat (+1)",desc:"dans une bourrasque laissant une fumée à l'odeur de souffre, vous vous téléportez (ou un allié situé dans un rayon de 12 mètres [6 cases]) vers un point que vous avez en ligne de mire au moment de l'incantation. Si vous choisissez de téléporter un allié, celui-ci ne peut être d'une taille supérieure à celle d'un humain. Vous devez être en mesure de voir physiquement le lieu vers lequel a lieu la téléportation, qui doit être dégagé sur au moins 2 mètres de rayon (1 case) de tout objet ou obstruction (hormis la surface sur laquelle le sujet va atterrir)."},
                {id:454,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Flot de vermine",diff:14,"castduration":"1",ingredient:"une tome de fromage de bonne qualité (+2)",desc:"vous convoquez une nuée de rats affamés qui se rue sur vos ennemis pour les attaquer. Centrez le grand gabarit sur vous pour représenter les rats. Toutes les créatures prises dans la zone d'effet (excepté vous) subissent une attaque d'une valeur de dégâts de 1 par round passé dans la nuée. Au cours du round qui suit l'incantation, la nuée de rats se déplace de 12 mètres (6 cases) dans la direction de votre choix. Dès qu'elle s'est déplacée, vous en perdez le contrôle, sachant qu'elle continuera à bouger à chaque round dans une direction déterminée aléatoirement. La nuée reste unie et efficace pendant un nombre de rounds égal à votre valeur de Magie."},
                {id:455,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Flottabilité",diff:6,"castduration":"1/2",ingredient:"un morceau de liège (+1)",desc:"vous devenez aussi flottant qu'une feuille de balsa, ce qui vous permet de fouler les surfaces liquides, telles qu'un lac, des égouts ou une nappe d'huile, comme s'il s'agissait de plans solides. Les effets de ce sort persistent pendant un nombre de rounds égal à votre valeur de Magie."},
                {id:456,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Frénésie mortelle",diff:18,"castduration":"1",ingredient:"deux gouttes de sang d'un animal enragé (+2)",desc:"vous provoquez une faim insoutenable chez un allié de votre choix dans un rayon de 18 mètres (9 cases), à tel point qu'il écume abondamment et que ses yeux expriment une folie meurtrière. Cette créature acquiert alors le talent Rage noire (cf. Chapitre VI : Personnages skavens) pendant un nombre de rounds égal à 1d10 plus votre valeur de Magie. Le sujet du sort doit entrer en rage noire dès la fin de l'incantation, sans quoi il perd les avantages du sort."},
                {id:457,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Malefoudre",diff:11,"castduration":"1/2",ingredient:"une fine baguette de cuivre (+2)",desc:"vous produisez un puissant éclair de malefoudre qui jaillit en direction d'un adversaire de votre choix dans un rayon de 48 mètres (24 cases). Il s'agit d'un projectile magique doté d'une valeur de dégâts de 5. Pour chaque «1» obtenu par un dé de votre jet d'incantation, vous subissez une attaque d'une valeur de dégâts de 1, car vous ne contrôlez pas parfaitement l'énergie générée."},
                {id:458,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Malétoiles",diff:26,"castduration":"1/2",ingredient:"un shuriken en argent gravé de runes du Chaos (+3)",desc:"vous invoquez un nombre de malétoiles égal à votre valeur de Magie et les lancez vers un ou plusieurs ennemis de votre choix dans un rayon de 36 mètres (18 cases). Les malétoiles sont des projectiles magiques d'une valeur de dégâts de 2. Dès qu'une malétoile inflige des dégâts, la victime doit réussir un test d'Endurance Difficile (–20%) sous peine de perdre automatiquement 5 points de Blessures supplémentaires."},
                {id:459,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Maletempête",diff:18,"castduration":"1",ingredient:"une effigie en cuivre du Rat Cornu (+2)",desc:"vous invoquez une tempête de malefoudre qui apparaît à l'endroit de votre choix dans un rayon de 48 mètres (24 cases). Cette tempête est constituée d'énergie Warp pure, alimentée par la puissance maléfique du Rat Cornu, et peut intervenir n'importe où, y compris sous terre. Prenez le grand gabarit. Toutes les créatures prises dans la zone d'effet subissent une attaque d'une valeur de dégâts de 5. Pour chaque «1» obtenu par un dé de votre jet d'incantation, vous subissez une attaque d'une valeur de dégâts de 3, car vous perdez en partie le contrôle du Warp."},
                {id:460,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Manteau de contagion",diff:6,"castduration":"1/2",ingredient:"un morceau de chair extrait du dos d'une victime de la peste (+1)",desc:"vous imprégnez une couverture, une cape ou un morceau d'étoffe d'une souche particulièrement virulente de Kruts (cf. WJDR, page 136). Quiconque touche ou porte l'objet pendant au moins une minute doit réussir un test d'Endurance Assez difficile (–10%) sous peine de contracter la maladie."},
                {id:461,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Musc de terreur",diff:20,"castduration":"1/2",ingredient:"un fragment de fer gravé du symbole du Rat Cornu (+3)",desc:"vous invoquez un gros nuage de musc démoniaque qui oblige toutes les créatures enveloppées à se recroqueviller de terreur. Le nuage apparaît à l'endroit de votre choix dans un rayon de 36 mètres (18 cases) et persiste pendant un nombre de rounds égal à votre valeur de Magie. Prenez le grand gabarit. Quiconque se retrouve pris dans le nuage doit réussir un test de Terreur (cf. WJDR, page 198) pour en éviter les effets. Les skavens subissent un malus de –10% à ce test. Une créature affectée qui n'est plus enveloppée par le nuage continue à rester prostrée de terreur pendant 1 minute de plus (6 rounds)."},
                {id:462,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Pelage de l'assassin",diff:16,"castduration":"1/2",ingredient:"une écaille de caméléon (+2)",desc:"vous faites appel à la nature chaotique et fluctuante du Warp pour changer la structure de votre fourrure, de manière à ce qu'elle prenne la couleur de votre environnement. Quand vous êtes parfaitement immobile, vous bénéficiez d'un bonus de +30% aux tests de Dissimulation. Pelage de l'assassin persiste pendant un nombre de rounds égal à votre valeur de Magie."},
                {id:463,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Peste",diff:26,"castduration":"1",ingredient:"plusieurs puces mortes saupoudrées (+3)",desc:"vous infectez de la variole verte une ou plusieurs cibles dans un rayon de 18 mètres (9 cases). Prenez le petit gabarit. Toutes les victimes doivent réussir un test d'Endurance sous peine de subir aussitôt les effets de la maladie, ce qui leur fait perdre 5% dans chacune des caractéristiques de leur profil principal. Quand un nouvel individu se rapproche pour la première fois au corps à corps d'une personne ainsi infectée, il doit également réussir un test d'Endurance pour ne pas contracter la variole verte. Ces victimes secondaires souffrent alors des effets normaux de la maladie, et non de la version accélérée qui accable les premières cibles. De même, ces victimes de deuxième contagion ne peuvent transmettre l'épidémie que selon la méthode normale, et non dès que quelqu'un s'en approche. Quiconque réussit l'un des deux tests d'Endurance mentionnés ci-dessus ne peut plus être affecté par un sort de peste, même s'il est lancé par un autre sorcier, pendant les 24 prochaines heures."},
                {id:464,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Plaies suppurantes",diff:12,"castduration":"1/2",ingredient:"une griffe de gobelin encrassée (+2)",desc:"vous pouvez provoquer l'infection carabinée des plaies d'un ennemi. Plaies suppurantes agit comme un projectile magique ayant une portée de 24 mètres (12 cases). Si le sort atteint une cible ayant subi au moins un coup critique, les plaies de celle-ci s'infectent aussitôt. L'infection prend la forme d'une maladie durant 7 jours. La victime ne récupère alors pas normalement ses points de Blessures et subit un malus de –10% aux valeurs de caractéristique de son profil principal. Les personnages dotés de la compétence Soins peuvent réduire la durée de cette maladie selon la règle normale, mais la difficulté du test de Soins correspondant passe alors à Assez difficile (–10%)."},
                {id:465,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Pluie toxique",diff:24,"castduration":"1",ingredient:"un serpenteau de vipère cavernicole (+3)",desc:"en faisant appel à la puissance du Rat Cornu, vous invoquez un nuage toxique qui flotte à 3,50 mètres du sol environ, apparaissant jusqu'à 36 mètres (18 cases) de vous. Prenez le grand gabarit. Au cours du round qui suit l'incantation du sort, le nuage se met à pleuvoir d'un poison mortel sur toutes les créatures de la zone, qui doivent réussir un test d'Endurance pour éviter de tomber dans un sommeil où les cauchemars s'enchaînent. De plus, toutes les créatures de la zone d'effet doivent réussir un test d'Endurance Assez difficile (–10%) à chaque round, sous peine de perdre 2 points de Blessures, indépendamment de leur bonus d'Endurance ou de leur armure. Un personnage endormi qui réussit trois tests d'Endurance consécutifs réussit à surmonter les effets du sort. En outre, on peut réveiller normalement ces créatures. Le nuage toxique reste efficace pendant un nombre de rounds égal à 6 + votre valeur de Magie."},
                {id:466,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Pustule venimeuse",diff:10,"castduration":"1/2",ingredient:"un scalpel rouillé (+2)",desc:"vous faites apparaître une pustule suppurante et palpitante à l'une de vos extrémités corporelles. Si vous la sectionnez et ponctionnez (ce qui vous fait perdre 1 point de Blessures, quels que soient votre armure et votre bonus d'Endurance), vous pouvez enduire une arme à une main du pus extrait. Quand une telle arme inflige le moindre dégât, elle inflige également à la victime la perte additionnelle d'un nombre de points de Blessures égal à votre valeur de Magie, à moins que la cible ne réussisse un test d'Endurance Difficile (–20%)."},
                {id:467,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Ruine alimentaire",diff:8,"castduration":"1/2",ingredient:"une poignée de céréales avariées (+1)",desc:"d'un geste grandiloquent et en proférant une malédiction, vous faites instantanément pourrir de la nourriture, qui devient parfaitement immangeable. Prenez le grand gabarit. Vous pouvez affecter toute nourriture comprise dans la zone d'effet. Ce sort est particulièrement efficace pour plonger les populations de la surface dans la famine. Toute créature qui ingère malgré tout de la nourriture affectée par le sort contracte aussitôt la courante galopante."},
                {id:468,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Souffle pestilentiel",diff:16,"castduration":"1",ingredient:"un bâton d'encens de malepierre embrasé aux deux extrémités (+2)",desc:"vous exhalez un nuage empoisonné et nauséabond en direction de vos ennemis. Prenez le gabarit de flammes. Quiconque se trouve pris dans le cône doit réussir un test d'Endurance Assez difficile (–10%), sous peine de subir une attaque d'une valeur de dégâts de 4, quels que soient son bonus d'Endurance et son armure. Vous êtes immunisé contre votre propre souffle pestilentiel."},
                {id:469,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Tourbillon noir",diff:20,"castduration":"1",ingredient:"une fiole en verre contenant de la cendre (+3)",desc:"vous invoquez un tourbillon de fumée putride et de cendres cinglantes quelque part dans un rayon de 48 mètres (24 cases). Prenez le petit gabarit. Le tourbillon peut se déplacer jusqu'à 10 mètres (5 cases) par round, dans la direction de votre choix. Les créatures affectées par le nuage subissent une attaque d'une valeur de dégâts de 2 et doivent réussir un test d'Endurance sous peine de subir un malus de –20% aux tests de Capacité de Combat, Capacité de Tir et Agilité, ainsi qu'aux tests de Perception basés sur la vue, pendant 1d10 minutes. La trombe persiste pendant un nombre de rounds égal à votre valeur de Magie."},
                {id:470,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Trépas invisible",diff:22,"castduration":"1h",ingredient:"30 grammes de malepierre, consommés par la ou les cibles (+3)",desc:"le corps de toute créature qui meurt pendant les effets du sort se désagrège en laissant un liquide visqueux, noir et nauséabond. Trépas invisible est souvent lancé sur les assassins du clan Eshin avant qu'ils partent en mission, pour s'assurer qu'aucune dépouille skaven ne soit découverte. Ce sort peut affecter un nombre d'alliés égal au quadruple de votre valeur de Magie, et ses effets durent pendant un nombre d'heures lui aussi égal à votre valeur de Magie."},
                {id:471,group:"Sombre savoir (Peste, Ruse, Warp)",name:"Voile muscidé",diff:18,"castduration":"1",ingredient:"déjections de nurgling (+2)",desc:"en proférant une malédiction et en fouettant l'air de vos bras, vous invoquez un nuage de moucherons et de mouches très agressifs. Centrez le petit gabarit sur vous. La nuée se déplace avec vous et persiste pendant un nombre de rounds égal au double de votre valeur de Magie. Les adversaires qui sont pris dans la nuée subissent un malus de –20% à tous leurs tests. Le voile muscidé limite également la visibilité de tous vos ennemis, qui subissent un malus de –20% aux tests de Capacité de Tir vous prenant pour cible."}
            ],
            items: [
                {name:"Arme à deux mains",enc:200},
                {name:"Arme à une mains",enc:50},
                {name:"Epée",enc:50},
                {name:"Arme improvisée",enc:0},
                {name:"Baton",enc:50},
                {name:"Bouclier",enc:50},
                {name:"Brise-lame",enc:40},
                {name:"Dague",enc:10},
                {name:"Demi-lance",enc:75},
                {name:"Fléau d'arme",enc:95},
                {name:"Fleuret",enc:40},
                {name:"Gantelet",enc:1},
                {name:"Coup de poing",enc:1},
                {name:"Hallebarde",enc:175},
                {name:"Lance",enc:50},
                {name:"Lance de cavalerie",enc:100},
                {name:"Main gauche",enc:15},
                {name:"Morgenstern",enc:60},
                {name:"Rapière",enc:40},
                {name:"Rondache",enc:10},
                {name:"Arbalete",enc:120},
                {name:"Arbalete à répétition",enc:150},
                {name:"Arbalete de poing",enc:25},
                {name:"Arc",enc:80},
                {name:"Arc court",enc:75},
                {name:"Arc elfique",enc:75},
                {name:"Arc long",enc:90},
                {name:"Arquebuse",enc:30},
                {name:"Arquebuse à répétition",enc:30},
                {name:"Bolas",enc:30},
                {name:"Etoile de jet",enc:10},
                {name:"Filet",enc:60},
                {name:"Fouet",enc:40},
                {name:"Fronde",enc:10},
                {name:"Fustible",enc:50},
                {name:"Hache de jet",enc:40},
                {name:"Marteau de jet",enc:40},
                {name:"Javelot",enc:30},
                {name:"Lance",enc:50},
                {name:"Lasso",enc:10},
                {name:"Long fusil d'Hockland",enc:70},
                {name:"Pistolet",enc:25},
                {name:"Pistolet à répétition",enc:25},
                {name:"Tromblon",enc:50},
                {name:"Balles (10)",enc:10},
                {name:"Carreaux (5)",enc:10},
                {name:"Fleches (2)",enc:10},
                {name:"Poudre (1 tir)",enc:1},
                {name:"Armure de cuir complete",enc:80},
                {name:"Calotte de cuir",enc:10},
                {name:"Gilet de cuir",enc:40},
                {name:"Jambière de cuir",enc:20},
                {name:"Veste de cuir",enc:50},
                {name:"Armure de maille complète ",enc:210},
                {name:"Cagoule de maille",enc:30},
                {name:"Chemise de maille",enc:80},
                {name:"Gilet de maille",enc:60},
                {name:"Jambières de maille",enc:40},
                {name:"Manteau de maille",enc:80},
                {name:"Manteau de maille à mahcne ",enc:100},
                {name:"Armure de plaques complète ",enc:395},
                {name:"Brassard d'acier",enc:30},
                {name:"Casque",enc:40},
                {name:"Jambière d'acier",enc:40},
                {name:"Plastron",enc:75},
                {name:"Atours royaux",enc:50},
                {name:"Atours de noble",enc:30},
                {name:"Beaux atours",enc:20},
                {name:"Vêtements confortables",enc:15},
                {name:"Vêtements communs",enc:15},
                {name:"Piètres vêtements",enc:10},
                {name:"Haillons",enc:5},
                {name:"Uniforme",enc:15},
                {name:"Cape courte",enc:5},
                {name:"Cape longue",enc:7},
                {name:"Capuchon",enc:2},
                {name:"Masque",enc:2},
                {name:"Chapeau simple",enc:1},
                {name:"Chapeau a large bords",enc:5},
                {name:"Costume de scène",enc:10},
                {name:"Pardessus",enc:15},
                {name:"Robe",enc:25},
                {name:"Chasuble",enc:25},
                {name:"Bouteille",enc:5},
                {name:"Alcool fort (bouteille)",enc:5},
                {name:"Ale",enc:2},
                {name:"Bière",enc:2},
                {name:"Grand vin",enc:5},
                {name:"Vin de table",enc:5},
                {name:"Tonnelet (2.5L)",enc:30},
                {name:"Ration (1j)",enc:10},
                {name:"Pièce de viande",enc:10},
                {name:"Miche de pain",enc:2},
                {name:"Tourte",enc:2},
                {name:"Fourrage (1j)",enc:50},
                {name:"Baseca",enc:7},
                {name:"Gibecière",enc:5},
                {name:"Bourse",enc:1},
                {name:"Coffre",enc:40},
                {name:"Etui à carte",enc:2},
                {name:"Etui à parchemin",enc:2},
                {name:"Flasque de cuir",enc:5},
                {name:"Flasque de métal",enc:15},
                {name:"Fontes de selle",enc:5},
                {name:"Outre (vide)",enc:1},
                {name:"Outre (pleine)",enc:100},
                {name:"Petit sac",enc:1},
                {name:"Pichet (vide)",enc:10},
                {name:"Pichet (plein)",enc:105},
                {name:"Sac à dos",enc:20},
                {name:"Allumette",enc:0},
                {name:"Bois de chauffe",enc:5},
                {name:"Bougie de cire",enc:5},
                {name:"Bougie de suif",enc:5},
                {name:"Huile pour lampe",enc:5},
                {name:"Lampe",enc:20},
                {name:"Lampe-tempête",enc:30},
                {name:"Lanterne",enc:20},
                {name:"Torche",enc:5},
                {name:"Boîte d'amadou",enc:5},
                {name:"Bouilloire",enc:10},
                {name:"Cadenas",enc:5},
                {name:"Chope en bois",enc:5},
                {name:"Chope en étain",enc:5},
                {name:"Corde (20 metres)",enc:50},
                {name:"Couverts en argent",enc:3},
                {name:"Couverts",enc:2},
                {name:"Couverture",enc:10},
                {name:"Dès",enc:0},
                {name:"Echelle",enc:50},
                {name:"Gamelle",enc:20},
                {name:"Longue vue",enc:5},
                {name:"Mirroir",enc:5},
                {name:"Papier",enc:0},
                {name:"Paquet de cartes",enc:1},
                {name:"Parchemin",enc:0},
                {name:"Parfum",enc:0},
                {name:"Symbole religieux",enc:5},
                {name:"Tente (petite)",enc:20},
                {name:"Tente (grande)",enc:50},
                {name:"Tente (pavillon)",enc:800},
                {name:"Accessoire (calligraphie)",enc:5},
                {name:"Accessoire (déguisement)",enc:10},
                {name:"Boulier",enc:5},
                {name:"Cale en bois",enc:2},
                {name:"Chaine (au metre)",enc:5},
                {name:"Collet",enc:2},
                {name:"Grappin",enc:20},
                {name:"Hamecon et ligne",enc:2},
                {name:"Lingot de métal",enc:20},
                {name:"Livre enluminé",enc:50},
                {name:"Livre imprimé",enc:35},
                {name:"Marteau",enc:65},
                {name:"Masse",enc:65},
                {name:"Pic de guerre",enc:60},
                {name:"Menottes",enc:20},
                {name:"Nécessaire d'ébéniste",enc:5},
                {name:"Outils d'artisan (autre)",enc:50},
                {name:"Outils d'artisan (forgeron)",enc:300},
                {name:"Outils d'artisan (graveur)",enc:20},
                {name:"Outils d'artisan (maître-artisan)",enc:40},
                {name:"Outils d'artisan (médecin)",enc:50},
                {name:"Outils d'artisan (navigateur)",enc:20},
                {name:"Outils de boucher",enc:20},
                {name:"Outils de crochetage",enc:20},
                {name:"Pelle",enc:20},
                {name:"Pioche",enc:20},
                {name:"Perche (au metre)",enc:20},
                {name:"Pied de biche",enc:10},
                {name:"Piège à loup",enc:20},
                {name:"Piolet d'escalade",enc:10},
                {name:"Piolet de mineur",enc:20},
                {name:"Pointe",enc:5},
                {name:"Harnais",enc:20},
                {name:"Selle",enc:50},
                {name:"Bombe",enc:20},
                {name:"Engin incendiaire",enc:20},
                {name:"Jezzail",enc:60},
                {name:"Patte-de-canard",enc:30},
                {name:"Bande d'étoffe",enc:1},
                {name:"Bottes basses",enc:5},
                {name:"Bottes cloutés naines",enc:30},
                {name:"Botte d'équitation",enc:10},
                {name:"Bottes, cuissardes",enc:15},
                {name:"Brais",enc:4},
                {name:"Calotte de tissu",enc:1},
                {name:"Ceinture",enc:1},
                {name:"Chaperon",enc:2},
                {name:"Corset",enc:2},
                {name:"Doublet",enc:2},
                {name:"Gilet/veste",enc:4},
                {name:"Kilt",enc:3},
                {name:"Manteau leger",enc:3},
                {name:"Manteau lourd",enc:10},
                {name:"Pagne",enc:1},
                {name:"Pélerine",enc:10},
                {name:"Sandales",enc:2},
                {name:"Tablier",enc:2},
                {name:"Vêtement religieux",enc:20},
                {name:"Gobelet",enc:2},
                {name:"Malle (petite)",enc:275},
                {name:"Malle (grande)",enc:400},
                {name:"Caisse (petite)",enc:150},
                {name:"Caisse (grande)",enc:300},
                {name:"Marmitte en fer",enc:90},
                {name:"Panier",enc:8},
                {name:"Sacoche",enc:1},
                {name:"Seau en bois",enc:20},
                {name:"Seau en metal",enc:30},
                {name:"Tonneau (100L)",enc:1250},
                {name:"Tonneau (16L)",enc:200},
                {name:"Tonneau (40L)",enc:500},
                {name:"Verre",enc:1},
                {name:"Armoire",enc:800},
                {name:"Bâche",enc:20},
                {name:"Bannière",enc:50},
                {name:"Bibliothèque",enc:650},
                {name:"Brosse",enc:1},
                {name:"Peigne",enc:1},
                {name:"Bureau",enc:1000},
                {name:"Canapé",enc:1200},
                {name:"Chaise",enc:300},
                {name:"Cloche",enc:2},
                {name:"Maquillage",enc:1},
                {name:"Matelas (laines)",enc:400},
                {name:"Matelas (plumes)",enc:350},
                {name:"Nécessaire de rasage",enc:2},
                {name:"Savon",enc:3},
                {name:"Sommier",enc:1600},
                {name:"Tabatière",enc:1},
                {name:"Table",enc:1500},
                {name:"Tabouret",enc:50},
                {name:"Clavecin",enc:1200},
                {name:"Cor de cocher",enc:30},
                {name:"Flûte à bec",enc:5},
                {name:"Harpe (petite)",enc:10},
                {name:"Harpe de poche",enc:1},
                {name:"Luth",enc:30},
                {name:"Mandoline",enc:15},
                {name:"Tambour",enc:50},
                {name:"Tambourin",enc:5},
                {name:"Viole",enc:30},
                {name:"Aiguille à coudre (5)",enc:0},
                {name:"Appeau",enc:0},
                {name:"Assortiment de limes",enc:5},
                {name:"Balance",enc:75},
                {name:"Binette",enc:10},
                {name:"Brouette",enc:70},
                {name:"Carte géographique",enc:5},
                {name:"Charrue",enc:150},
                {name:"Cire à cacheter",enc:1},
                {name:"Clous",enc:0},
                {name:"Colle",enc:1},
                {name:"Enclume",enc:300},
                {name:"Faux",enc:20},
                {name:"Fer à marquer",enc:10},
                {name:"Filet de pêche",enc:30},
                {name:"Fourche",enc:10},
                {name:"Loupe",enc:5},
                {name:"Pierre à aiguiser",enc:1},
                {name:"Pilon et mortier",enc:50},
                {name:"Poinçon",enc:2},
                {name:"Sablier",enc:5},
                {name:"Scie à bois",enc:10},
                {name:"Scie à métaux",enc:5},
                {name:"Soufflet",enc:10},
                {name:"Brasero (grand)",enc:50},
                {name:"Brasero (moyen)",enc:30},
                {name:"Brasero (petit)",enc:15},
                {name:"Candélabre",enc:10},
                {name:"Chandelier",enc:5},
                {name:"Chapelet",enc:1},
                {name:"Encensoir",enc:25},
                {name:"Goupillon",enc:10},
                {name:"Reliquaire",enc:10},
            ]
        }

        function __construct(){

            __resources.items = __resources.items.map((v) => { v.rewrite = __rewrite(v.name); return v; });
            
            // Init
            (() => {
                let saved   = __load();
                let jNode   = null;
                let id      = null;
                let type    = null;
                let value   = null;
                $('article > label').each((i, v) => { 
    
                    jNode   = $(v);
                    id      = jNode.attr('id');
                    type    = jNode.attr('data-input') || null;
                    value   = null;
        
                    if(typeof __inputs[id]=='undefined'){
                        // Initialize value
                        switch(type){
                            case "text"         : value=''      ; break;
                            case "number"       : value=0       ; break;
                            case "check"        : value=false   ; break;
                            case "extend"       : value=false   ; break;
                            case "previousjob"  : value=[]      ; break;
                            case "promote_x1"   : value=[0, 0]  ; break;
                            case "promote_x5"   : value=[0, 0]  ; break;
                            default             : value=null    ; break;
                        }
                        __inputs[id] = { node: jNode, type: type, value: value };
                        if(typeof saved[id]!='undefined'){ 
                            __inputs[id].value = saved[id]; 
                        }
                    }
                });
            })();

            // Load / save / Print
            (() => {
                $("#icon-print").click(() => {
                    window.print();
                });
            })();

            // Load and bind
            (() => {
                let id      = null;
                for(id in __inputs){
   
                    // Bind type prompt
                    switch(__inputs[id].type){
                        case "text"         : __promptText(         __inputs[id].node); break;
                        case "number"       : __promptNumber(       __inputs[id].node); break;
                        case "race"         : __promptRace(         __inputs[id].node); break;
                        case "gender"       : __promptGender(       __inputs[id].node); break;
                        case "job"          : __promptJob(          __inputs[id].node); break;
                        case "previousjob"  : __promptPrevousJob(   __inputs[id].node); break;
                        case "astral"       : __promptAstral(       __inputs[id].node); break;
                        case "promote_x1"   : __promptPromote(      __inputs[id].node, 1); break;
                        case "promote_x5"   : __promptPromote(      __inputs[id].node, 5); break;
                        case "weapon"       : __promptWeapon(       __inputs[id].node); break;
                        case "armor"        : __promptArmor(        __inputs[id].node); break;
                        case "talent"       : __promptTalent(       __inputs[id].node); break;
                        case "skill"        : __promptSkill(        __inputs[id].node); break;
                        case "magic_spell"  : __promptMagicSpell(   __inputs[id].node); break;
                        case "inventory"    : __promptInventory(    __inputs[id].node); break;
                        case "check"        : __promptCheck(        __inputs[id].node); break;
                        case "extend"       : __promptExtend(       __inputs[id].node); break;
                    }
                    __update(id, false);
                }
            })();

            __redraw();
            __save();
            
        }

        // Prompt component
        function __promptText(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html();
                    html = '<input type="text" value="'+jNode.html()+'" />'
                    jNode.html(html);
                    jInput = jNode.find('> input')
                    jInput.keyup((e) => {
                        if(e.keyCode==13){ // enter
                            jNode.removeClass('editing');
                            __inputs[id].value = jInput.val();
                            __update(id, true);
                        }
                        if(e.keyCode==27){ // escape
                            jNode.removeClass('editing');
                            __inputs[id].node.html(__inputs[id].value);
                        }
                    });
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].value = jInput.val();
                        __update(id, true);
                    }); 
                }
            });
        }
        function __promptNumber(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html();
                    html = '<input type="text" value="'+(jNode.html()=='0'?'':jNode.html())+'" />'
                    jNode.html(html);
                    jInput = jNode.find('> input')
                    jInput.keyup((e) => {
                        jInput.val(__integer(jInput.val()));
                        if(e.keyCode==13){ // enter
                            jNode.removeClass('editing');
                            __inputs[id].value = __integer(jInput.val());
                            __update(id, true);
                        }
                        if(e.keyCode==27){ // escape
                            jNode.removeClass('editing');
                            __inputs[id].node.html(__inputs[id].value);
                        }
                    });
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].value = __integer(jInput.val());
                        __update(id, true);
                    });  
                }
            });
        }
        function __promptRace(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html()==''?__resources.races[0].nom:jNode.html();
                    html = '<select>'+__resources.races.map((v) => { return '<option'+(v.nom==__inputs[id].value?' selected="selected"':'')+'>'+v.nom+'</option>' }).join('')+'</select>'
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => {
                        __inputs[id].value = jInput.val();
                        jInput.trigger('blur');

                    })
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    }); 
                }
            });            
        }
        function __promptGender(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html()==''?__resources.gender[0].name:jNode.html();
                    html = '<select>'+__resources.gender.map((v) => { return '<option'+(v==__inputs[id].value?' selected="selected"':'')+'>'+v.name+'</option>' }).join('')+'</select>'
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => {
                        __inputs[id].value = jInput.val();
                    })
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    });
                }
            }); 
        }
        function __promptJob(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            let buffer  = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    buffer = __inputs[id].value || ''


                    __inputs[id].value = jNode.html()==''?__resources.jobs[0].nom:jNode.html();
                    html = '<select>'+__resources.jobs.map((v) => { return '<option'+(v.nom==__inputs[id].value?' selected="selected"':'')+'>'+v.nom+'</option>' }).join('')+'</select>'
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => {
                        __inputs[id].value = jInput.val();
                        jInput.blur();
                    })
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    });
                }
            }); 
        }
        function __promptPrevousJob(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            let buffer  = [];
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    buffer = (__inputs[id].value instanceof Array ? __inputs[id].value : []);
                    // Start edition
                    jNode.addClass('editing');

                    html = '<select><option></option><option>&lt;Tout effacer&gt;</option>'+__resources.jobs.map((v) => { return '<option>'+v.nom+'</option>' }).join('')+'</select>'
                    jNode.html(html);
                    jInput = jNode.find('> select');

                    jInput.change((v) => {
                        let item = jInput.val();
                        if(item=='<Tout effacer>'){
                            buffer = [];
                        } else {
                            if(buffer.indexOf(item)<0){
                                buffer.push(item);
                            }
                        }
                        __inputs[id].value = buffer;
                        jInput.trigger('blur');
                    })
                    jInput.blur(() => {
                        let item = jInput.val();
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value.join(', '));
                        __update(id, true);
                    });
                }
            });           
        }
        function __promptAstral(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html()==''?__resources.astrals[0].name:jNode.html();
                    html = '<select>'+__resources.astrals.map((v) => { return '<option'+(v.name==__inputs[id].value?' selected="selected"':'')+'>'+v.name+'</option>' }).join('')+'</select>'
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => {
                        __inputs[id].value = jInput.val();
                    })
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    });
                }
            });
        }
        function __promptPromote(jNode, scale){
            let id      = jNode.attr('id');
            jNode.attr("data-promote", __inputs[id].value[0]>0?__inputs[id].value[1]/scale:0);
            jNode.click(() => {
                if(__inputs[id].value[0]>0){
                    __inputs[id].value[1]+= scale;
                    if(__inputs[id].value[1]>__inputs[id].value[0]){
                        __inputs[id].value[1]=0;
                    }
                    jNode.attr("data-promote", __inputs[id].value[1]/scale);        
                    __update(id, true);
                }
            });
        }
        function __promptWeapon(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let group   = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html()==''?__resources.weapons[0].name:jNode.html();
                    html = '<select><option></option>';
                    __resources.weapons.forEach((v) => {
                        if(group!=v.cat){
                            group = v.cat;
                            html += '<optgroup label="'+v.cat+'"></optgroup>';
                        }
                        html += '<option'+(v.name==__inputs[id].value?' selected="selected"':'')+'>'+v.name+'</option>';                    
                    });
                    html += "</select>";
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => {
                        __inputs[id].value = jInput.val();
                        jInput.trigger('blur');
                    })
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    });
                }
            });
        }
        function __promptArmor(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            let group   = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html()==''?__resources.armors[0].name:jNode.html();

                    html = '<select><option></option>';
                    __resources.armors.forEach((v) => {
                        if(group!=v.cat){
                            group = v.cat;
                            html += '<optgroup label="'+v.cat+'"></optgroup>';
                        }
                        html += '<option'+(v.name==__inputs[id].value?' selected="selected"':'')+'>'+v.name+'</option>';                    
                    });
                    html += '</select>';
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => {
                        __inputs[id].value = jInput.val();
                        jInput.trigger('blur');
                    })
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    });
                }
            });
        }
        function __promptTalent(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html()==''?__resources.talents[0].name:jNode.html();
                    html = '<select><option></option>'+__resources.talents.map((v) => { return '<option'+(v.name==__inputs[id].value?' selected="selected"':'')+'>'+v.name+'</option>' }).join('')+'</select>'
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => {
                        __inputs[id].value = jInput.val();
                        jInput.trigger('blur');
                    })
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    });
                }
            });
        }
        function __promptSkill(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html()==''?__resources.skills[0].name:jNode.html();
                    html = '<select><option></option>'+__resources.skills.filter((v) => { return v.advanced }).map((v) => { return '<option'+(v.label==__inputs[id].value?' selected="selected"':'')+'>'+v.label+'</option>' }).join('')+'</select>'
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => {
                        __inputs[id].value = jInput.val();
                        jInput.trigger('blur');
                    })
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    });
                }
            });
        }
        function __promptMagicSpell(jNode){
            let id      = jNode.attr('id');
            let jInput  = null;
            let html    = null;
            let group   = null;

            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    group = null;
                    html = '<select><option value=""></option>';
                    __resources.spells.forEach((v)=>{
                        if(group!=v.group){
                            group=v.group;
                            html += '<optgroup label="'+v.group+'"></optgroup>';
                        }
                        html += '<option'+(v.name==__inputs[id].value?' selected="selected"':'')+'>'+v.name+'</option>';
                    });
                    html += '</select>';
                    jNode.html(html);
                    jInput = jNode.find('> select');
                    jInput.change((v) => { 
                        __inputs[id].value = jInput.val(); 
                        jInput.trigger('blur');
                    });
                    jInput.blur(() => {
                        jNode.removeClass('editing');
                        __inputs[id].node.html(__inputs[id].value);
                        __update(id, true);
                    });
                }
            });
        }
        function __promptInventory(jNode){
            let id      = jNode.attr('id');
            let enc_id = id.replace("_name", "_enc");
            let jInput  = null;
            let html    = null;
            jNode.click(() => {
                if(!jNode.hasClass('editing')){
                    // Start edition
                    jNode.addClass('editing');
                    __inputs[id].value = jNode.html();
                    html = '<input type="text" value="'+jNode.html()+'" /><ul class="inventory"></ul>';
                    jNode.html(html);
                    jInput = jNode.find('> input');
                    jUl = jNode.find('> ul'); 
                    jUl.on('update', () => {
                        let words = __rewrite(jInput.val()).split('_').filter((v) => { return v.length>1 });
                        let chunk = null;
                        let quantity = 1;
                        if(words.length<1){ return }
                        chunk = words[words.length-1];
                        if(chunk.charAt(0)=='x'){
                            chunk = parseInt(chunk.substring(1, chunk.length));
                            if(!isNaN(chunk)){
                                quantity = chunk;
                                words = words.slice(0, words.length-1);
                            }
                        }
                        if(words.length<1){ return }
                        let matches = [];
                        __resources.items.forEach((v) => {
                            if(matches.length>=5){ return }
                            v.score = 0;
                            words.forEach((w) => {
                                if(('_'+v.rewrite).indexOf('_'+w)>=0){
                                    v.score++;
                                }
                            });
                            if(v.score>0){
                                matches.push(v);
                            }
                        });
                        matches.sort((a, b) => { return a.score>=b.score; });
                        html = '';
                        matches.forEach((v) => {
                            if(quantity==1){
                                html += '<li data-enc="'+v.enc+'">'+v.name+'</li>';
                            } else {
                                html += '<li data-enc="'+(v.enc*quantity)+'">'+v.name+' x'+quantity+'</li>';
                            }
                        });
                        jUl.html(html);
                    });
                    jUl.mousedown((e) => {
                        if(e.target.nodeName=='LI'){
                            let jTarget = $(e.target);
                            __inputs[enc_id].value = parseInt(jTarget.attr('data-enc'));
                            __update(enc_id, true);
                            __inputs[id].value = jTarget.html();
                            jInput.val(jTarget.html());
                            __update(id, true);
                            jNode.removeClass('editing');
                            
                        }
                    });
                    jInput.keyup((e) => {
                        jUl.trigger('update');
                        if(e.keyCode==13){ // enter (valid)
                            jNode.removeClass('editing');
                            __inputs[id].value = jInput.val();
                            __update(id, true);
                        }
                        if(e.keyCode==27){ // escape (cancel)
                            jNode.removeClass('editing');
                            __inputs[id].node.html(__inputs[id].value);
                        }


                    });
                    jInput.blur(() => {
                        window.setTimeout(() => {
                            if(jInput.val()==''){
                                __inputs[enc_id].value = 0;
                                __update(enc_id, true);
                            }
                            jNode.removeClass('editing');
                            __inputs[id].value = jInput.val();
                            __update(id, true);
                        })
                    }); 
                }
                jUl.trigger('update');
            });
        }
        function __promptCheck(jNode, scale){
            let id      = jNode.attr('id');
            jNode.attr("data-check", __inputs[id].value?"1":"0");
            jNode.click(() => {
                __inputs[id].value = !__inputs[id].value;
                jNode.attr("data-check", jNode.attr("data-check")=="1"?"0":"1");
                __update(id, true);
            });
        }
        function __promptExtend(jNode, scale){
            let id      = jNode.attr('id');
            let jTarget  = $('#'+jNode.attr('data-target'));
            jNode.on('update', () => {
                if(__inputs[id].value){
                    jNode.addClass('active');
                    jTarget.show();
                } else {
                    jNode.removeClass('active');
                    jTarget.hide();
                }
            });
            jNode.click(() => {
                __inputs[id].value = !__inputs[id].value;
                __save();
                jNode.trigger('update');
            });
            jNode.trigger('update');
        }

        // Manage field interactions
        function __update(id, flush){

            let match = null;
            let buffer = null;
            switch(id){
                case "character_race": __updateRace(__inputs["character_race"].value); break;
                case "character_current_job": 
                case "character_previous_job": 
                    let list = (__inputs["character_previous_job"].value || []).concat([__inputs["character_current_job"].value]);
                    __updateJob(list);
                break; 
                case "stat_basic_cc":   case "stat_advance_cc":     __updateStat('cc'); break;
                case "stat_basic_ct":   case "stat_advance_ct":     __updateStat('ct'); break;
                case "stat_basic_f" :   case "stat_advance_f":      __updateStat('f'); break;
                case "stat_basic_e":    case "stat_advance_e":      __updateStat('e'); break;
                case "stat_basic_ag":   case "stat_advance_ag":     __updateStat('ag'); break;
                case "stat_basic_int":  case "stat_advance_int":    __updateStat('int'); break;
                case "stat_basic_fm":   case "stat_advance_fm":     __updateStat('fm'); break;
                case "stat_basic_soc":  case "stat_advance_soc":    __updateStat('soc'); break;
                case "stat_basic_a":    case "stat_advance_a":      __updateStat('a'); break;
                case "stat_basic_b":    case "stat_advance_b":      __updateStat('b'); break;
                case "stat_basic_bf":   case "stat_advance_bf":     __updateStat('bf'); break;
                case "stat_basic_be":   case "stat_advance_be":     __updateStat('be'); break;
                case "stat_basic_m":    case "stat_advance_m":      __updateStat('m'); break;
                case "stat_basic_mag":  case "stat_advance_mag":    __updateStat('mag'); break;
                case "stat_basic_pf":   case "stat_advance_pf":     __updateStat('pf'); break;
                case "stat_basic_pd":   case "stat_advance_pd":     __updateStat('pd'); break;
                case "luck_current":
                case "luck_sum":
                    __inputs["luck_current"].value = Math.min(__inputs["luck_current"].value, __inputs["luck_sum"].value);
                break;                
                case "hp_current":
                case "hp_sum":
                    __inputs["hp_current"].value = Math.min(__inputs["hp_current"].value, __inputs["hp_sum"].value);
                break;

                case "weapon_1_name": __updateWeapon(__inputs["weapon_1_name"].value, 1); break;
                case "weapon_2_name": __updateWeapon(__inputs["weapon_2_name"].value, 2); break;
                case "weapon_3_name": __updateWeapon(__inputs["weapon_3_name"].value, 3); break;
                case "weapon_4_name": __updateWeapon(__inputs["weapon_4_name"].value, 4); break;
                case "weapon_5_name": __updateWeapon(__inputs["weapon_5_name"].value, 5); break;
                case "weapon_6_name": __updateWeapon(__inputs["weapon_6_name"].value, 6); break;
                case "weapon_7_name": __updateWeapon(__inputs["weapon_7_name"].value, 7); break;
                case "armor_1_type" : __updateArmor( __inputs["armor_1_type"].value , 1); break;
                case "armor_2_type" : __updateArmor( __inputs["armor_2_type"].value , 2); break;
                case "armor_3_type" : __updateArmor( __inputs["armor_3_type"].value , 3); break;
                case "armor_4_type" : __updateArmor( __inputs["armor_4_type"].value , 4); break;
                case "armor_5_type" : __updateArmor( __inputs["armor_5_type"].value , 5); break;
                case "armor_6_type" : __updateArmor( __inputs["armor_6_type"].value , 6); break;
 
                case "skill_canotage_0": case "skill_canotage_1": case "skill_canotage_2": case "skill_canotage_bonus":                     __updateSkill('canotage', 1); break;
                case "skill_charisme_0": case "skill_charisme_1": case "skill_charisme_2": case "skill_charisme_bonus":                     __updateSkill('charisme', 2); break;
                case "skill_commandement_0": case "skill_commandement_1": case "skill_commandement_2": case "skill_commandement_bonus":     __updateSkill('commandement', 3); break;
                case "skill_commerage_0": case "skill_commerage_1": case "skill_commerage_2": case "skill_commerage_bonus":                 __updateSkill('commerage', 4); break;
                case "skill_conduite_0": case "skill_conduite_1": case "skill_conduite_2": case "skill_conduite_bonus":                     __updateSkill('conduite', 5); break;
                case "skill_deguisement_0": case "skill_deguisement_1": case "skill_deguisement_2": case "skill_deguisement_bonus":         __updateSkill('deguisement', 6); break;
                case "skill_dsilencieux_0": case "skill_dsilencieux_1": case "skill_dsilencieux_2": case "skill_dsilencieux_bonus":         __updateSkill('dsilencieux', 7); break;
                case "skill_dissimulation_0": case "skill_dissimulation_1": case "skill_dissimulation_2": case "skill_dissimulation_bonus": __updateSkill('dissimulation', 8); break;
                case "skill_equitation_0": case "skill_equitation_1": case "skill_equitation_2": case "skill_equitation_bonus":             __updateSkill('equitation', 9); break;
                case "skill_escalade_0": case "skill_escalade_1": case "skill_escalade_2": case "skill_escalade_bonus":                     __updateSkill('escalade', 10); break;
                case "skill_evaluation_0": case "skill_evaluation_1": case "skill_evaluation_2": case "skill_evaluation_bonus":             __updateSkill('evaluation', 11); break;
                case "skill_fouille_0": case "skill_fouille_1": case "skill_fouille_2": case "skill_fouille_bonus":                         __updateSkill('fouille', 12); break;
                case "skill_intimidation_0": case "skill_intimidation_1": case "skill_intimidation_2": case "skill_intimidation_bonus":     __updateSkill('intimidation', 13); break;
                case "skill_jeu_0": case "skill_jeu_1": case "skill_jeu_2": case "skill_jeu_bonus":                                         __updateSkill('jeu', 14); break;
                case "skill_marchandage_0": case "skill_marchandage_1": case "skill_marchandage_2": case "skill_marchandage_bonus":         __updateSkill('marchandage', 15); break;
                case "skill_natation_0": case "skill_natation_1": case "skill_natation_2": case "skill_natation_bonus":                     __updateSkill('natation', 16); break;
                case "skill_perception_0": case "skill_perception_1": case "skill_perception_2": case "skill_perception_bonus":             __updateSkill('perception', 17); break;
                case "skill_ralcool_0": case "skill_ralcool_1": case "skill_ralcool_2": case "skill_ralcool_bonus":                         __updateSkill('ralcool', 18); break;
                case "skill_sanimaux_0": case "skill_sanimaux_1": case "skill_sanimaux_2": case "skill_sanimaux_bonus":                     __updateSkill('sanimaux', 19); break;
                case "skill_survie_0": case "skill_survie_1": case "skill_survie_2": case "skill_survie_bonus":                             __updateSkill('survie', 20); break;

                case "skill_adv_1_name": case "skill_adv_1_0": case "skill_adv_1_1": case "skill_adv_1_2": case "skill_adv_1_bonus":        __updateSkillAdv( __inputs["skill_adv_1_name"].value , 1); break;
                case "skill_adv_2_name": case "skill_adv_2_0": case "skill_adv_2_1": case "skill_adv_2_2": case "skill_adv_2_bonus":        __updateSkillAdv( __inputs["skill_adv_2_name"].value , 2); break;
                case "skill_adv_3_name": case "skill_adv_3_0": case "skill_adv_3_1": case "skill_adv_3_2": case "skill_adv_3_bonus":        __updateSkillAdv( __inputs["skill_adv_3_name"].value , 3); break;
                case "skill_adv_4_name": case "skill_adv_4_0":  case "skill_adv_4_1":  case "skill_adv_4_2":  case "skill_adv_4_bonus":     __updateSkillAdv( __inputs["skill_adv_4_name"].value , 4); break;
                case "skill_adv_5_name": case "skill_adv_5_0": case "skill_adv_5_1": case "skill_adv_5_2": case "skill_adv_5_bonus":        __updateSkillAdv( __inputs["skill_adv_5_name"].value , 5); break;
                case "skill_adv_6_name": case "skill_adv_6_0": case "skill_adv_6_1": case "skill_adv_6_2": case "skill_adv_6_bonus":        __updateSkillAdv( __inputs["skill_adv_6_name"].value , 6); break;
                case "skill_adv_7_name": case "skill_adv_7_0": case "skill_adv_7_1": case "skill_adv_7_2": case "skill_adv_7_bonus":        __updateSkillAdv( __inputs["skill_adv_7_name"].value , 7); break;                
                case "skill_adv_8_name": case "skill_adv_8_0": case "skill_adv_8_1": case "skill_adv_8_2": case "skill_adv_8_bonus":        __updateSkillAdv( __inputs["skill_adv_8_name"].value , 8); break;
                case "skill_adv_9_name": case "skill_adv_9_0": case "skill_adv_9_1": case "skill_adv_9_2": case "skill_adv_9_bonus":        __updateSkillAdv( __inputs["skill_adv_9_name"].value , 9); break;
                case "skill_adv_10_name": case "skill_adv_10_0": case "skill_adv_10_1": case "skill_adv_10_2": case "skill_adv_10_bonus":   __updateSkillAdv( __inputs["skill_adv_10_name"].value , 10); break;                
                case "skill_adv_11_name": case "skill_adv_11_0": case "skill_adv_11_1": case "skill_adv_11_2": case "skill_adv_11_bonus":   __updateSkillAdv( __inputs["skill_adv_11_name"].value , 11); break;  
                case "skill_adv_12_name": case "skill_adv_12_0": case "skill_adv_12_1": case "skill_adv_12_2": case "skill_adv_12_bonus":   __updateSkillAdv( __inputs["skill_adv_12_name"].value , 12); break;  
                case "skill_adv_13_name": case "skill_adv_13_0": case "skill_adv_13_1": case "skill_adv_13_2": case "skill_adv_13_bonus":   __updateSkillAdv( __inputs["skill_adv_13_name"].value , 13); break;  
                case "skill_adv_14_name": case "skill_adv_14_0": case "skill_adv_14_1": case "skill_adv_14_2": case "skill_adv_14_bonus":   __updateSkillAdv( __inputs["skill_adv_14_name"].value , 14); break;
                case "skill_adv_15_name": case "skill_adv_15_0": case "skill_adv_15_1": case "skill_adv_15_2": case "skill_adv_15_bonus":   __updateSkillAdv( __inputs["skill_adv_15_name"].value , 15); break;
                case "skill_adv_16_name": case "skill_adv_16_0": case "skill_adv_16_1": case "skill_adv_16_2": case "skill_adv_16_bonus":   __updateSkillAdv( __inputs["skill_adv_16_name"].value , 16); break;
                case "skill_adv_17_name": case "skill_adv_17_0": case "skill_adv_17_1": case "skill_adv_17_2": case "skill_adv_17_bonus":   __updateSkillAdv( __inputs["skill_adv_17_name"].value , 17); break;
                case "skill_adv_18_name": case "skill_adv_18_0": case "skill_adv_18_1": case "skill_adv_18_2": case "skill_adv_18_bonus":   __updateSkillAdv( __inputs["skill_adv_18_name"].value , 18); break;
                case "skill_adv_19_name": case "skill_adv_19_0": case "skill_adv_19_1": case "skill_adv_19_2": case "skill_adv_19_bonus":   __updateSkillAdv( __inputs["skill_adv_19_name"].value , 19); break;  
                case "skill_adv_20_name": case "skill_adv_20_0": case "skill_adv_20_1": case "skill_adv_20_2": case "skill_adv_20_bonus":   __updateSkillAdv( __inputs["skill_adv_20_name"].value , 20); break;
                case "skill_adv_21_name": case "skill_adv_21_0": case "skill_adv_21_1": case "skill_adv_21_2": case "skill_adv_21_bonus":   __updateSkillAdv( __inputs["skill_adv_21_name"].value , 21); break;
                case "skill_adv_22_name": case "skill_adv_22_0": case "skill_adv_22_1": case "skill_adv_22_2": case "skill_adv_22_bonus":   __updateSkillAdv( __inputs["skill_adv_22_name"].value , 22); break;
                case "skill_adv_23_name": case "skill_adv_23_0": case "skill_adv_23_1": case "skill_adv_23_2": case "skill_adv_23_bonus":   __updateSkillAdv( __inputs["skill_adv_23_name"].value , 23); break;
                case "skill_adv_24_name": case "skill_adv_24_0": case "skill_adv_24_1": case "skill_adv_24_2": case "skill_adv_24_bonus":   __updateSkillAdv( __inputs["skill_adv_24_name"].value , 24); break;
                case "skill_adv_25_name": case "skill_adv_25_0": case "skill_adv_25_1": case "skill_adv_25_2": case "skill_adv_25_bonus":   __updateSkillAdv( __inputs["skill_adv_25_name"].value , 25); break;
                case "skill_adv_26_name": case "skill_adv_26_0": case "skill_adv_26_1": case "skill_adv_26_2": case "skill_adv_26_bonus":   __updateSkillAdv( __inputs["skill_adv_26_name"].value , 26); break;
                case "skill_adv_27_name": case "skill_adv_27_0": case "skill_adv_27_1": case "skill_adv_27_2": case "skill_adv_27_bonus":   __updateSkillAdv( __inputs["skill_adv_27_name"].value , 27); break;
                case "skill_adv_28_name": case "skill_adv_28_0": case "skill_adv_28_1": case "skill_adv_28_2": case "skill_adv_28_bonus":   __updateSkillAdv( __inputs["skill_adv_28_name"].value , 28); break;
                case "skill_adv_29_name": case "skill_adv_29_0": case "skill_adv_29_1": case "skill_adv_29_2": case "skill_adv_29_bonus":   __updateSkillAdv( __inputs["skill_adv_29_name"].value , 29); break;
                case "skill_adv_30_name": case "skill_adv_30_0": case "skill_adv_30_1": case "skill_adv_30_2": case "skill_adv_30_bonus":   __updateSkillAdv( __inputs["skill_adv_30_name"].value , 30); break;
                case "skill_adv_31_name": case "skill_adv_31_0": case "skill_adv_31_1": case "skill_adv_31_2": case "skill_adv_31_bonus":   __updateSkillAdv( __inputs["skill_adv_31_name"].value , 31); break;                
                case "skill_adv_32_name": case "skill_adv_32_0": case "skill_adv_32_1": case "skill_adv_32_2": case "skill_adv_32_bonus":   __updateSkillAdv( __inputs["skill_adv_32_name"].value , 32); break;  
                case "skill_adv_33_name": case "skill_adv_33_0": case "skill_adv_33_1": case "skill_adv_33_2": case "skill_adv_33_bonus":   __updateSkillAdv( __inputs["skill_adv_33_name"].value , 33); break;  
                case "skill_adv_34_name": case "skill_adv_34_0": case "skill_adv_34_1": case "skill_adv_34_2": case "skill_adv_34_bonus":   __updateSkillAdv( __inputs["skill_adv_34_name"].value , 34); break;  
                case "skill_adv_35_name": case "skill_adv_35_0": case "skill_adv_35_1": case "skill_adv_35_2": case "skill_adv_35_bonus":   __updateSkillAdv( __inputs["skill_adv_35_name"].value , 35); break;
                case "skill_adv_36_name": case "skill_adv_36_0": case "skill_adv_36_1": case "skill_adv_36_2": case "skill_adv_36_bonus":   __updateSkillAdv( __inputs["skill_adv_36_name"].value , 36); break;
                case "skill_adv_37_name": case "skill_adv_37_0": case "skill_adv_37_1": case "skill_adv_37_2": case "skill_adv_37_bonus":   __updateSkillAdv( __inputs["skill_adv_37_name"].value , 37); break;
                case "skill_adv_38_name": case "skill_adv_38_0": case "skill_adv_38_1": case "skill_adv_38_2": case "skill_adv_38_bonus":   __updateSkillAdv( __inputs["skill_adv_38_name"].value , 38); break;
                case "skill_adv_39_name": case "skill_adv_39_0": case "skill_adv_39_1": case "skill_adv_39_2": case "skill_adv_39_bonus":   __updateSkillAdv( __inputs["skill_adv_39_name"].value , 39); break;
                case "skill_adv_40_name": case "skill_adv_40_0": case "skill_adv_40_1": case "skill_adv_40_2": case "skill_adv_40_bonus":   __updateSkillAdv( __inputs["skill_adv_40_name"].value , 40); break;  
                case "skill_adv_41_name": case "skill_adv_41_0": case "skill_adv_41_1": case "skill_adv_41_2": case "skill_adv_41_bonus":   __updateSkillAdv( __inputs["skill_adv_41_name"].value , 41); break;
                case "skill_adv_42_name": case "skill_adv_42_0": case "skill_adv_42_1": case "skill_adv_42_2": case "skill_adv_42_bonus":   __updateSkillAdv( __inputs["skill_adv_42_name"].value , 42); break;
                case "skill_adv_43_name": case "skill_adv_43_0": case "skill_adv_43_1": case "skill_adv_43_2": case "skill_adv_43_bonus":   __updateSkillAdv( __inputs["skill_adv_43_name"].value , 43); break;
                case "skill_adv_44_name": case "skill_adv_44_0": case "skill_adv_44_1": case "skill_adv_44_2": case "skill_adv_44_bonus":   __updateSkillAdv( __inputs["skill_adv_44_name"].value , 44); break;
                case "skill_adv_45_name": case "skill_adv_45_0": case "skill_adv_45_1": case "skill_adv_45_2": case "skill_adv_45_bonus":   __updateSkillAdv( __inputs["skill_adv_45_name"].value , 45); break;
                case "skill_adv_46_name": case "skill_adv_46_0": case "skill_adv_46_1": case "skill_adv_46_2": case "skill_adv_46_bonus":   __updateSkillAdv( __inputs["skill_adv_46_name"].value , 46); break;
                case "skill_adv_47_name": case "skill_adv_47_0": case "skill_adv_47_1": case "skill_adv_47_2": case "skill_adv_47_bonus":   __updateSkillAdv( __inputs["skill_adv_47_name"].value , 47); break;
                case "skill_adv_48_name": case "skill_adv_48_0": case "skill_adv_48_1": case "skill_adv_48_2": case "skill_adv_48_bonus":   __updateSkillAdv( __inputs["skill_adv_48_name"].value , 48); break;
                case "skill_adv_49_name": case "skill_adv_49_0": case "skill_adv_49_1": case "skill_adv_49_2": case "skill_adv_49_bonus":   __updateSkillAdv( __inputs["skill_adv_49_name"].value , 49); break;
                case "skill_adv_50_name": case "skill_adv_50_0": case "skill_adv_50_1": case "skill_adv_50_2": case "skill_adv_50_bonus":   __updateSkillAdv( __inputs["skill_adv_50_name"].value , 50); break;
                case "skill_adv_51_name": case "skill_adv_51_0": case "skill_adv_51_1": case "skill_adv_51_2": case "skill_adv_51_bonus":   __updateSkillAdv( __inputs["skill_adv_51_name"].value , 51); break;
                case "skill_adv_52_name": case "skill_adv_52_0": case "skill_adv_52_1": case "skill_adv_52_2": case "skill_adv_52_bonus":   __updateSkillAdv( __inputs["skill_adv_52_name"].value , 52); break;
                case "skill_adv_53_name": case "skill_adv_53_0": case "skill_adv_53_1": case "skill_adv_53_2": case "skill_adv_53_bonus":   __updateSkillAdv( __inputs["skill_adv_53_name"].value , 53); break;
                case "skill_adv_54_name": case "skill_adv_54_0": case "skill_adv_54_1": case "skill_adv_54_2": case "skill_adv_54_bonus":   __updateSkillAdv( __inputs["skill_adv_54_name"].value , 54); break;
                case "skill_adv_55_name": case "skill_adv_55_0": case "skill_adv_55_1": case "skill_adv_55_2": case "skill_adv_55_bonus":   __updateSkillAdv( __inputs["skill_adv_55_name"].value , 55); break;
                case "skill_adv_56_name": case "skill_adv_56_0": case "skill_adv_56_1": case "skill_adv_56_2": case "skill_adv_56_bonus":   __updateSkillAdv( __inputs["skill_adv_56_name"].value , 56); break;
                case "skill_adv_57_name": case "skill_adv_57_0": case "skill_adv_57_1": case "skill_adv_57_2": case "skill_adv_57_bonus":   __updateSkillAdv( __inputs["skill_adv_57_name"].value , 57); break;
                case "skill_adv_58_name": case "skill_adv_58_0": case "skill_adv_58_1": case "skill_adv_58_2": case "skill_adv_58_bonus":   __updateSkillAdv( __inputs["skill_adv_58_name"].value , 58); break;
                case "skill_adv_59_name": case "skill_adv_59_0": case "skill_adv_59_1": case "skill_adv_59_2": case "skill_adv_59_bonus":   __updateSkillAdv( __inputs["skill_adv_59_name"].value , 59); break;
                case "skill_adv_60_name": case "skill_adv_60_0": case "skill_adv_60_1": case "skill_adv_60_2": case "skill_adv_60_bonus":   __updateSkillAdv( __inputs["skill_adv_60_name"].value , 60); break;
                case "skill_adv_61_name": case "skill_adv_61_0": case "skill_adv_61_1": case "skill_adv_61_2": case "skill_adv_61_bonus":   __updateSkillAdv( __inputs["skill_adv_61_name"].value , 61); break;
                case "skill_adv_62_name": case "skill_adv_62_0": case "skill_adv_62_1": case "skill_adv_62_2": case "skill_adv_62_bonus":   __updateSkillAdv( __inputs["skill_adv_62_name"].value , 62); break;
                case "skill_adv_63_name": case "skill_adv_63_0": case "skill_adv_63_1": case "skill_adv_63_2": case "skill_adv_63_bonus":   __updateSkillAdv( __inputs["skill_adv_63_name"].value , 63); break;
                case "skill_adv_64_name": case "skill_adv_64_0": case "skill_adv_64_1": case "skill_adv_64_2": case "skill_adv_64_bonus":   __updateSkillAdv( __inputs["skill_adv_64_name"].value , 64); break;
                case "skill_adv_65_name": case "skill_adv_65_0": case "skill_adv_65_1": case "skill_adv_65_2": case "skill_adv_65_bonus":   __updateSkillAdv( __inputs["skill_adv_65_name"].value , 65); break;
                case "skill_adv_66_name": case "skill_adv_66_0": case "skill_adv_66_1": case "skill_adv_66_2": case "skill_adv_66_bonus":   __updateSkillAdv( __inputs["skill_adv_66_name"].value , 66); break;
                case "skill_adv_67_name": case "skill_adv_67_0": case "skill_adv_67_1": case "skill_adv_67_2": case "skill_adv_67_bonus":   __updateSkillAdv( __inputs["skill_adv_67_name"].value , 67); break;
                case "skill_adv_68_name": case "skill_adv_68_0": case "skill_adv_68_1": case "skill_adv_68_2": case "skill_adv_68_bonus":   __updateSkillAdv( __inputs["skill_adv_68_name"].value , 68); break;
                case "skill_adv_69_name": case "skill_adv_69_0": case "skill_adv_69_1": case "skill_adv_69_2": case "skill_adv_69_bonus":   __updateSkillAdv( __inputs["skill_adv_69_name"].value , 69); break;
                case "skill_adv_70_name": case "skill_adv_70_0": case "skill_adv_70_1": case "skill_adv_70_2": case "skill_adv_70_bonus":   __updateSkillAdv( __inputs["skill_adv_70_name"].value , 70); break;
                case "skill_adv_71_name": case "skill_adv_71_0": case "skill_adv_71_1": case "skill_adv_71_2": case "skill_adv_71_bonus":   __updateSkillAdv( __inputs["skill_adv_71_name"].value , 71); break;
                case "skill_adv_72_name": case "skill_adv_72_0": case "skill_adv_72_1": case "skill_adv_72_2": case "skill_adv_72_bonus":   __updateSkillAdv( __inputs["skill_adv_72_name"].value , 72); break;
                case "skill_adv_73_name": case "skill_adv_73_0": case "skill_adv_73_1": case "skill_adv_73_2": case "skill_adv_73_bonus":   __updateSkillAdv( __inputs["skill_adv_73_name"].value , 73); break;

                case "talent_1":   __updateTalent( __inputs["talent_1"].value , 1); break; 
                case "talent_2":   __updateTalent( __inputs["talent_2"].value , 2); break; 
                case "talent_3":   __updateTalent( __inputs["talent_3"].value , 3); break; 
                case "talent_4":   __updateTalent( __inputs["talent_4"].value , 4); break; 
                case "talent_5":   __updateTalent( __inputs["talent_5"].value , 5); break; 
                case "talent_6":   __updateTalent( __inputs["talent_6"].value , 6); break; 
                case "talent_7":   __updateTalent( __inputs["talent_7"].value , 7); break; 
                case "talent_8":   __updateTalent( __inputs["talent_8"].value , 8); break; 
                case "talent_9":   __updateTalent( __inputs["talent_9"].value , 9); break; 
                case "talent_10":  __updateTalent( __inputs["talent_10"].value , 10); break; 
                case "talent_11":  __updateTalent( __inputs["talent_11"].value , 11); break; 
                case "talent_12":  __updateTalent( __inputs["talent_12"].value , 12); break; 
                case "talent_13":  __updateTalent( __inputs["talent_13"].value , 13); break; 
                case "talent_14":  __updateTalent( __inputs["talent_14"].value , 14); break; 
                case "talent_15":  __updateTalent( __inputs["talent_15"].value , 15); break; 
                case "talent_16":  __updateTalent( __inputs["talent_16"].value , 16); break; 
                case "talent_17":  __updateTalent( __inputs["talent_17"].value , 17); break; 
                case "talent_18":  __updateTalent( __inputs["talent_18"].value , 18); break; 
                case "talent_19":  __updateTalent( __inputs["talent_19"].value , 19); break; 
                case "talent_20":  __updateTalent( __inputs["talent_20"].value , 20); break; 
                case "talent_21":  __updateTalent( __inputs["talent_21"].value , 21); break; 
                case "talent_22":  __updateTalent( __inputs["talent_22"].value , 22); break; 
                case "talent_23":  __updateTalent( __inputs["talent_23"].value , 23); break; 
                case "talent_24":  __updateTalent( __inputs["talent_24"].value , 24); break; 
                case "talent_25":  __updateTalent( __inputs["talent_25"].value , 25); break; 
                case "talent_26":  __updateTalent( __inputs["talent_26"].value , 26); break; 
                case "talent_27":  __updateTalent( __inputs["talent_27"].value , 27); break; 
                case "talent_28":  __updateTalent( __inputs["talent_28"].value , 28); break; 
                case "talent_29":  __updateTalent( __inputs["talent_29"].value , 29); break; 
                case "talent_30":  __updateTalent( __inputs["talent_30"].value , 30); break; 
                case "talent_31":  __updateTalent( __inputs["talent_31"].value , 31); break; 
                case "talent_32":  __updateTalent( __inputs["talent_32"].value , 32); break; 
                case "talent_33":  __updateTalent( __inputs["talent_33"].value , 33); break; 
                case "talent_34":  __updateTalent( __inputs["talent_34"].value , 34); break; 

                case "inventory_1_enc": __updateInventoryEnc(); break; 
                case "inventory_2_enc": __updateInventoryEnc(); break; 
                case "inventory_3_enc": __updateInventoryEnc(); break; 
                case "inventory_4_enc": __updateInventoryEnc(); break; 
                case "inventory_5_enc": __updateInventoryEnc(); break; 
                case "inventory_6_enc": __updateInventoryEnc(); break; 
                case "inventory_7_enc": __updateInventoryEnc(); break; 
                case "inventory_8_enc": __updateInventoryEnc(); break; 
                case "inventory_9_enc": __updateInventoryEnc(); break; 
                case "inventory_10_enc": __updateInventoryEnc(); break; 
                case "inventory_11_enc": __updateInventoryEnc(); break; 
                case "inventory_12_enc": __updateInventoryEnc(); break; 
                case "inventory_13_enc": __updateInventoryEnc(); break; 
                case "inventory_14_enc": __updateInventoryEnc(); break; 
                case "inventory_15_enc": __updateInventoryEnc(); break; 
                case "inventory_16_enc": __updateInventoryEnc(); break; 
                case "inventory_17_enc": __updateInventoryEnc(); break; 
                case "inventory_18_enc": __updateInventoryEnc(); break; 
                case "inventory_19_enc": __updateInventoryEnc(); break; 
                case "inventory_20_enc": __updateInventoryEnc(); break; 
                case "inventory_21_enc": __updateInventoryEnc(); break; 
                case "inventory_22_enc": __updateInventoryEnc(); break; 
                case "inventory_23_enc": __updateInventoryEnc(); break; 
                case "inventory_24_enc": __updateInventoryEnc(); break; 
                case "inventory_25_enc": __updateInventoryEnc(); break; 
                case "inventory_26_enc": __updateInventoryEnc(); break; 
                case "inventory_27_enc": __updateInventoryEnc(); break; 
                case "inventory_28_enc": __updateInventoryEnc(); break; 
                case "inventory_29_enc": __updateInventoryEnc(); break; 
                case "inventory_30_enc": __updateInventoryEnc(); break; 
                case "inventory_31_enc": __updateInventoryEnc(); break; 
                case "inventory_32_enc": __updateInventoryEnc(); break; 
                case "inventory_33_enc": __updateInventoryEnc(); break; 
                case "inventory_34_enc": __updateInventoryEnc(); break; 
                case "inventory_35_enc": __updateInventoryEnc(); break; 
                case "inventory_36_enc": __updateInventoryEnc(); break; 
                case "inventory_37_enc": __updateInventoryEnc(); break; 
                case "inventory_38_enc": __updateInventoryEnc(); break; 

                case "inventory_1_name": __sortInventory(); break; 
                case "inventory_2_name": __sortInventory(); break; 
                case "inventory_3_name": __sortInventory(); break; 
                case "inventory_4_name": __sortInventory(); break; 
                case "inventory_5_name": __sortInventory(); break; 
                case "inventory_6_name": __sortInventory(); break; 
                case "inventory_7_name": __sortInventory(); break; 
                case "inventory_8_name": __sortInventory(); break; 
                case "inventory_9_name": __sortInventory(); break; 
                case "inventory_10_name": __sortInventory(); break; 
                case "inventory_11_name": __sortInventory(); break; 
                case "inventory_12_name": __sortInventory(); break; 
                case "inventory_13_name": __sortInventory(); break; 
                case "inventory_14_name": __sortInventory(); break; 
                case "inventory_15_name": __sortInventory(); break; 
                case "inventory_16_name": __sortInventory(); break; 
                case "inventory_17_name": __sortInventory(); break; 
                case "inventory_18_name": __sortInventory(); break; 
                case "inventory_19_name": __sortInventory(); break; 
                case "inventory_20_name": __sortInventory(); break; 
                case "inventory_21_name": __sortInventory(); break; 
                case "inventory_22_name": __sortInventory(); break; 
                case "inventory_23_name": __sortInventory(); break; 
                case "inventory_24_name": __sortInventory(); break; 
                case "inventory_25_name": __sortInventory(); break; 
                case "inventory_26_name": __sortInventory(); break; 
                case "inventory_27_name": __sortInventory(); break; 
                case "inventory_28_name": __sortInventory(); break; 
                case "inventory_29_name": __sortInventory(); break; 
                case "inventory_30_name": __sortInventory(); break; 
                case "inventory_31_name": __sortInventory(); break; 
                case "inventory_32_name": __sortInventory(); break; 
                case "inventory_33_name": __sortInventory(); break; 
                case "inventory_34_name": __sortInventory(); break; 
                case "inventory_35_name": __sortInventory(); break; 
                case "inventory_3_6name": __sortInventory(); break; 
                case "inventory_37_name": __sortInventory(); break; 
                case "inventory_38_name": __sortInventory(); break; 

                case "magic_1_name": __updateSpell(__inputs["magic_1_name"].value, 1); break; 
                case "magic_2_name": __updateSpell(__inputs["magic_2_name"].value, 2); break; 
                case "magic_3_name": __updateSpell(__inputs["magic_3_name"].value, 3); break; 
                case "magic_4_name": __updateSpell(__inputs["magic_4_name"].value, 4); break; 
                case "magic_5_name": __updateSpell(__inputs["magic_5_name"].value, 5); break; 
                case "magic_6_name": __updateSpell(__inputs["magic_6_name"].value, 6); break; 
                case "magic_7_name": __updateSpell(__inputs["magic_7_name"].value, 7); break; 
                case "magic_8_name": __updateSpell(__inputs["magic_8_name"].value, 8); break; 
                case "magic_9_name": __updateSpell(__inputs["magic_9_name"].value, 9); break; 
                case "magic_10_name": __updateSpell(__inputs["magic_10_name"].value, 10); break; 
                case "magic_11_name": __updateSpell(__inputs["magic_11_name"].value, 11); break; 
                case "magic_12_name": __updateSpell(__inputs["magic_12_name"].value, 12); break; 
                case "magic_13_name": __updateSpell(__inputs["magic_13_name"].value, 13); break; 
                case "magic_14_name": __updateSpell(__inputs["magic_14_name"].value, 14); break; 
                case "magic_15_name": __updateSpell(__inputs["magic_15_name"].value, 15); break; 
                case "magic_16_name": __updateSpell(__inputs["magic_16_name"].value, 16); break; 
                case "magic_17_name": __updateSpell(__inputs["magic_17_name"].value, 17); break; 
                case "magic_18_name": __updateSpell(__inputs["magic_18_name"].value, 18); break; 
                case "magic_19_name": __updateSpell(__inputs["magic_19_name"].value, 19); break; 
                case "magic_20_name": __updateSpell(__inputs["magic_20_name"].value, 20); break; 
                case "magic_21_name": __updateSpell(__inputs["magic_21_name"].value, 21); break; 
                case "magic_22_name": __updateSpell(__inputs["magic_22_name"].value, 22); break; 
                case "magic_23_name": __updateSpell(__inputs["magic_23_name"].value, 23); break; 
                case "magic_24_name": __updateSpell(__inputs["magic_24_name"].value, 24); break; 
                case "magic_25_name": __updateSpell(__inputs["magic_25_name"].value, 25); break; 
                case "magic_26_name": __updateSpell(__inputs["magic_26_name"].value, 26); break; 
                case "magic_27_name": __updateSpell(__inputs["magic_27_name"].value, 27); break; 
                case "magic_28_name": __updateSpell(__inputs["magic_28_name"].value, 28); break; 
                case "magic_29_name": __updateSpell(__inputs["magic_29_name"].value, 29); break; 
                case "magic_30_name": __updateSpell(__inputs["magic_30_name"].value, 30); break; 
                case "magic_31_name": __updateSpell(__inputs["magic_31_name"].value, 31); break; 
                case "magic_32_name": __updateSpell(__inputs["magic_32_name"].value, 32); break; 
                case "magic_33_name": __updateSpell(__inputs["magic_33_name"].value, 33); break; 
                case "magic_34_name": __updateSpell(__inputs["magic_34_name"].value, 34); break; 
                case "magic_35_name": __updateSpell(__inputs["magic_35_name"].value, 35); break; 
                case "magic_36_name": __updateSpell(__inputs["magic_36_name"].value, 36); break; 
            }

            if(flush){
                __save();
                __redraw();
            }
        }
        function __updateRace(name){
            let match = __resources.races.filter((v) => { return v.nom==name; }).map((v) => { return v.move });
            if(match.length>0){
                __inputs["character_race"].value = name
                __inputs["stat_basic_m"].value = match[0];
                __updateStat("m");
                __updateStat("f");
            }
        }
        function __updateJob(list){
            let mergedStat = {
                 cc: { max: 0, current: __inputs[ "stat_advance_cc"].value[1] },
                 ct: { max: 0, current: __inputs[ "stat_advance_ct"].value[1] },
                  f: { max: 0, current: __inputs[  "stat_advance_f"].value[1] },
                  e: { max: 0, current: __inputs[  "stat_advance_e"].value[1] },
                 ag: { max: 0, current: __inputs[ "stat_advance_ag"].value[1] },
                int: { max: 0, current: __inputs["stat_advance_int"].value[1] },
                 fm: { max: 0, current: __inputs[ "stat_advance_fm"].value[1] },
                soc: { max: 0, current: __inputs["stat_advance_soc"].value[1] },
                  a: { max: 0, current: __inputs[  "stat_advance_a"].value[1] },
                  b: { max: 0, current: __inputs[  "stat_advance_b"].value[1] },
                  m: { max: 0, current: __inputs[  "stat_advance_m"].value[1] },
                mag: { max: 0, current: __inputs["stat_advance_mag"].value[1] }
            }
            let match = null;
            let stat = null;
            list.forEach((name) => {
                match = __resources.jobs.filter((v) => { return v.nom==name; }).map((v) => { return v.stats });
                if(match.length>0){
                    stat = match[0];
                    mergedStat.cc.max  = Math.max(mergedStat.cc.max , stat[0]);
                    mergedStat.ct.max  = Math.max(mergedStat.ct.max , stat[1]);
                    mergedStat.f.max   = Math.max(mergedStat.f.max  , stat[2]);
                    mergedStat.e.max   = Math.max(mergedStat.e.max  , stat[3]);
                    mergedStat.ag.max  = Math.max(mergedStat.ag.max , stat[4]);
                    mergedStat.int.max = Math.max(mergedStat.int.max, stat[5]);
                    mergedStat.fm.max  = Math.max(mergedStat.fm.max , stat[6]);
                    mergedStat.soc.max = Math.max(mergedStat.soc.max, stat[7]);
                    mergedStat.a.max   = Math.max(mergedStat.a.max  , stat[8]);
                    mergedStat.b.max   = Math.max(mergedStat.b.max  , stat[9]);
                    mergedStat.m.max   = Math.max(mergedStat.m.max  , stat[10]);
                    mergedStat.mag.max = Math.max(mergedStat.mag.max, stat[11]);
                }
            });
            mergedStat.cc.current  = Math.min(mergedStat.cc.current, mergedStat.cc.max);
            mergedStat.ct.current  = Math.min(mergedStat.ct.current, mergedStat.ct.max);
            mergedStat.f.current   = Math.min(mergedStat.f.current, mergedStat.f.max);
            mergedStat.e.current   = Math.min(mergedStat.e.current, mergedStat.e.max);
            mergedStat.ag.current  = Math.min(mergedStat.ag.current, mergedStat.ag.max);
            mergedStat.int.current = Math.min(mergedStat.int.current, mergedStat.int.max);
            mergedStat.fm.current  = Math.min(mergedStat.fm.current, mergedStat.fm.max);
            mergedStat.soc.current = Math.min(mergedStat.soc.current, mergedStat.soc.max);
            mergedStat.a.current   = Math.min(mergedStat.a.current, mergedStat.a.max);
            mergedStat.b.current   = Math.min(mergedStat.b.current, mergedStat.b.max);
            mergedStat.m.current   = Math.min(mergedStat.m.current, mergedStat.m.max);
            mergedStat.mag.current = Math.min(mergedStat.mag.current, mergedStat.mag.max);
            __inputs["stat_advance_cc"].value   = [mergedStat.cc.max, mergedStat.cc.current]; __update("stat_advance_cc", false);
            __inputs["stat_advance_ct"].value   = [mergedStat.ct.max, mergedStat.ct.current]; __update("stat_advance_ct", false);
            __inputs["stat_advance_f"].value    = [mergedStat.f.max, mergedStat.f.current]; __update("stat_advance_f", false);
            __inputs["stat_advance_e"].value    = [mergedStat.e.max, mergedStat.e.current]; __update("stat_advance_e", false);
            __inputs["stat_advance_ag"].value   = [mergedStat.ag.max, mergedStat.ag.current]; __update("stat_advance_ag", false);
            __inputs["stat_advance_int"].value  = [mergedStat.int.max, mergedStat.int.current]; __update("stat_advance_int", false);
            __inputs["stat_advance_fm"].value   = [mergedStat.fm.max, mergedStat.fm.current]; __update("stat_advance_fm", false);
            __inputs["stat_advance_soc"].value  = [mergedStat.soc.max, mergedStat.soc.current]; __update("stat_advance_soc", false);
            __inputs["stat_advance_a"].value    = [mergedStat.a.max, mergedStat.a.current]; __update("stat_advance_a", false);
            __inputs["stat_advance_b"].value    = [mergedStat.b.max, mergedStat.b.current]; __update("stat_advance_b", false);
            __inputs["stat_advance_m"].value    = [mergedStat.m.max, mergedStat.m.current]; __update("stat_advance_m", false);
            __inputs["stat_advance_bf"].value   = [0, 0]; __update("stat_advance_bf", false);
            __inputs["stat_advance_be"].value   = [0, 0]; __update("stat_advance_be", false);
            __inputs["stat_advance_m"].value    = [0, 0]; __update("stat_advance_m", false);
            __inputs["stat_advance_mag"].value  = [mergedStat.mag.max, mergedStat.mag.current]; __update("stat_advance_mag", false);
            __inputs["stat_advance_pf"].value   = [0, 0]; __update("stat_advance_pf", false);
            __inputs["stat_advance_pd"].value   = [0, 0]; __update("stat_advance_pd", false);

        }
        function __updateStat(name){
            let bonus = 0;
            let match = null;

            switch(name){
                case "cc": bonus = (__hasTalent("Guerrier né")?5:0); break;
                case "ct": bonus = (__hasTalent("Tireur d'élite")?5:0); break;
                case "f" : bonus = (__hasTalent("Force accrue")?5:0); break;
                case "e" : bonus = (__hasTalent("Résistance accrue")?5:0); break;
                case "ag" : bonus = (__hasTalent("Réflexes éclair")?5:0); break;
                case "int": bonus = (__hasTalent("Intelligent")?5:0); break;
                case "fm": bonus = (__hasTalent("Sang-froid")?5:0); break;
                case "soc": bonus = (__hasTalent("Sociable")?5:0); break;
                case "b": bonus = (__hasTalent("Dur à cuir")?1:0); break;
                case "m": bonus = (__hasTalent("Course à pied")?1:0); break;
            }

            __inputs["stat_current_"+name].value = __inputs["stat_basic_"+name].value + __inputs["stat_advance_"+name].value[1] + bonus;
            __update("stat_current_"+name, false);

            switch(name){
                case "f":
                    __inputs["stat_basic_bf"].value = Math.floor(__inputs["stat_current_f"].value / 10);
                    __update("stat_basic_bf", false);
                    __updateInventoryEnc();
                break;
                case "e":
                    __inputs["stat_basic_be"].value = Math.floor(__inputs["stat_current_e"].value / 10); 
                    __update("stat_basic_be", false);
                break;
                case 'b':
                    __inputs["hp_sum"].value = __inputs["stat_current_b"].value;
                    __update("hp_sum", false);
                break;
                case 'm':
                    __inputs["move_x1"].value = __inputs["stat_current_"+name].value*2;
                    __inputs["move_x2"].value = __inputs["stat_current_"+name].value*4;
                    __inputs["move_x3"].value = __inputs["stat_current_"+name].value*12;
                break;
                case 'pd':
                    __inputs["luck_sum"].value = __inputs["stat_current_pd"].value + (__hasTalent("Chance")?1:0);
                    __update("luck_sum", false);
                break;
            }

            __updateSkill("canotage", 1);
            __updateSkill("charisme", 2);
            __updateSkill("commandement", 3);
            __updateSkill("commerage", 4);
            __updateSkill("conduite", 5);
            __updateSkill("deguisement", 6);
            __updateSkill("dsilencieux", 7);
            __updateSkill("dissimulation", 8);
            __updateSkill("equitation", 9);
            __updateSkill("escalade", 10);
            __updateSkill("evaluation", 11);
            __updateSkill("fouille", 12);
            __updateSkill("intimidation", 13);
            __updateSkill("jeu", 14);
            __updateSkill("marchandage", 15);
            __updateSkill("natation", 16);
            __updateSkill("perception", 17);
            __updateSkill("ralcool", 18);
            __updateSkill("sanimaux", 19);
            __updateSkill("survie", 20);

        }
        function __updateWeapon(name, index){
            match = __resources.weapons.filter((v) => { return v.name==name; });
            if(match.length>0){
                __inputs["weapon_"+index+"_name"].value     = name
                __inputs["weapon_"+index+"_enc"].value      = match[0].enc;
                __inputs["weapon_"+index+"_group"].value    = match[0].group;
                __inputs["weapon_"+index+"_damage"].value   = match[0].damage;
                __inputs["weapon_"+index+"_range"].value    = match[0].range;
                __inputs["weapon_"+index+"_reload"].value   = match[0].reload;
                __inputs["weapon_"+index+"_attr"].value     = match[0].attrs;
            } else {
                __inputs["weapon_"+index+"_name"].value     = ""
                __inputs["weapon_"+index+"_enc"].value      = 0;
                __inputs["weapon_"+index+"_group"].value    = "";
                __inputs["weapon_"+index+"_damage"].value   = "";
                __inputs["weapon_"+index+"_range"].value    = "";
                __inputs["weapon_"+index+"_reload"].value   = "";
                __inputs["weapon_"+index+"_attr"].value     = "";
            }
            __updateInventoryEnc();
        }
        function __updateArmor(name, index){
            let match = __resources.armors.filter((v) => { return v.name==name; });
            if(match.length>0){
                buffer = [];
                if( match[0].covers[0]==1 && 
                    match[0].covers[1]==1 && 
                    match[0].covers[2]==1 && 
                    match[0].covers[3]==1
                ){
                    buffer = ['toutes'];
                } else {
                    match[0].covers.forEach((v, i) => {
                        if(v==1){
                            buffer.push(['tête', 'corps', 'bras', 'jambes'][i]);
                        }
                    })
                }
                __inputs["armor_"+index+"_enc"].name    = name;
                __inputs["armor_"+index+"_enc"].value   = match[0].enc;
                __inputs["armor_"+index+"_label"].value = buffer.join(',');
                __inputs["armor_"+index+"_value"].value = match[0].value;
            } else {
                __inputs["armor_"+index+"_enc"].name    = '';
                __inputs["armor_"+index+"_enc"].value   = 0;
                __inputs["armor_"+index+"_label"].value = '';
                __inputs["armor_"+index+"_value"].value = 0;
            }

            // Global update armor
            (() => {
                let i = 0;
                let match = null;
                let armor = [0, 0, 0, 0];
                for(i=1; i<=6; i++){
                    match = __resources.armors.filter((v) => { return v.name!='' && v.name==__inputs["armor_"+i+"_type"].value; });
                    if(match.length>0){
                        if( match[0].covers[0]==1){ armor[0] += __inputs["armor_"+i+"_value"].value; }
                        if( match[0].covers[1]==1){ armor[1] += __inputs["armor_"+i+"_value"].value; }
                        if( match[0].covers[2]==1){ armor[2] += __inputs["armor_"+i+"_value"].value; }
                        if( match[0].covers[3]==1){ armor[3] += __inputs["armor_"+i+"_value"].value; }
                    }
                }
                __inputs["armor_head"].value = armor[0]; __inputs["armor_head"].node.html(__inputs["armor_head"].value);
                __inputs["armor_body"].value = armor[1]; __inputs["armor_body"].node.html(__inputs["armor_body"].value);
                __inputs["armor_arm_right"].value = armor[2]; __inputs["armor_arm_right"].node.html(__inputs["armor_arm_right"].value);
                __inputs["armor_arm_left"].value = armor[2]; __inputs["armor_arm_left"].node.html(__inputs["armor_arm_left"].value);
                __inputs["armor_leg_right"].value = armor[3]; __inputs["armor_leg_right"].node.html(__inputs["armor_leg_right"].value);
                __inputs["armor_leg_left"].value = armor[3]; __inputs["armor_leg_left"].node.html(__inputs["armor_leg_left"].value);
            })();

            __updateInventoryEnc();

        }
        function __updateSkill(name, skillId){
            if(typeof __inputs["skill_"+name+"_total"] == 'undefined'){ return }
            let match = __resources.skills.filter((v) => { return v.id==skillId; });
            let segments = [];
            if(match.length>0){
                // Update bonus
                __inputs["skill_"+name+"_bonus"].value = 0;
                switch(name){
                    case "evaluation":      __inputs["skill_"+name+"_bonus"].value += __hasTalent("Dur en affaires") ? 10 : 0; break;
                    case "marchandage":     __inputs["skill_"+name+"_bonus"].value += __hasTalent("Dur en affaires") ? 10 : 0; break;
                    case "intimidation":    __inputs["skill_"+name+"_bonus"].value += __hasTalent("Menaçant") ? 10 : 0; break;
                    case "perception":      __inputs["skill_"+name+"_bonus"].value += __hasTalent("Sens aiguisés") ? 20 : 0; break;
                }
                // Apply
                segments[0] = typeof __inputs["stat_current_"+match[0].cat] != 'undefined' ? __inputs["stat_current_"+match[0].cat].value : 0;
                segments[1] = typeof __inputs["skill_"+name+"_0"] != 'undefined' ? __inputs["skill_"+name+"_0"].value : false;
                segments[2] = typeof __inputs["skill_"+name+"_1"] != 'undefined' ? __inputs["skill_"+name+"_1"].value : false;
                segments[3] = typeof __inputs["skill_"+name+"_2"] != 'undefined' ? __inputs["skill_"+name+"_2"].value : false;
                segments[4] = typeof __inputs["skill_"+name+"_bonus"] != 'undefined' ? __inputs["skill_"+name+"_bonus"].value || 0 : 0;
                __inputs["skill_"+name+"_total"].value = Math.floor(
                    (segments[0]*((segments[1])?1:0.5)) +
                    (segments[2]?10:0) +
                    (segments[3]?10:0) +
                    segments[4]
                );
            } else {
                __inputs["skill_"+name+"_total"].value = 0
            }

        }
        function __updateSkillAdv(name, index){
            if(typeof __inputs["skill_adv_"+index+"_name"] == 'undefined'){ return }
            let match = __resources.skills.filter((v) => { return v.label==name; });
            let segments = [];
            if(match.length>0){
                // Update bonus
                __inputs["skill_adv_"+index+"_bonus"].value = 0;
                switch(name){
                    case 'Lire/écrire':
                        __inputs["skill_adv_"+index+"_bonus"].value += (__hasTalent("Linguistique") ? 10 : 0);
                    break; 
                    case 'Langue (bretonnien)':
                    case 'Langue (classique)':
                    case 'Langue (eltharin)':
                    case 'Langue (estalien)':
                    case 'Langue (gobelinoïde)':
                    case 'Langue (grumbarth)':
                    case 'Langue (halfling)':
                    case 'Langue (khazalid)':
                    case 'Langue (kislevien)':
                    case 'Langue (langage sombre)':
                    case 'Langue (norse)':
                    case 'Langue (reikspiel)':
                    case 'Langue (tiléen)':
                        __inputs["skill_adv_"+index+"_bonus"].value += (__hasTalent("Linguistique") ? 10 : 0) + (__hasTalent("Grand voyageur") ? 10 : 0);
                    break;
                    case 'Con. générales (bretonne)':
                    case 'Con. générales (elfes)':
                    case 'Con. générales (empire)':
                    case 'Con. générales (estalie)':
                    case 'Con. générales (halfeling)':
                    case 'Con. générales (kislev)':
                    case 'Con. générales (nains)':
                    case 'Con. générales (norsca)':
                    case 'Con. générales (ogres)':
                    case 'Con. générales (pays perdu)':
                    case 'Con. générales (frontalières)':
                    case 'Con. générales (tilée)':
                        __inputs["skill_adv_"+index+"_bonus"].value += __hasTalent("Grand voyageur") ? 10 : 0;
                    break;
                    case "Orientation":
                        __inputs["skill_adv_"+index+"_bonus"].value += __hasTalent("Sens de l'orientation") ? 10 : 0;
                    break;
                    case "Focalisation":
                    case "Sens de la magie":
                        __inputs["skill_adv_"+index+"_bonus"].value += __hasTalent("Harmonie aethyrique") ? 10 : 0;
                    break;
                    case "Torture":
                        __inputs["skill_adv_"+index+"_bonus"].value += __hasTalent("Menaçant") ? 10 : 0;
                    break;
                    case "Métier (artiste)":
                        __inputs["skill_adv_"+index+"_bonus"].value += __hasTalent("Talent artistique") ? 20 : 0;
                    break;
                }
                // Apply
                __inputs["skill_adv_"+index+"_name"].value = name;
                __inputs["skill_adv_"+index+"_cat"].value = match[0].cat;
                segments[0] = typeof __inputs["stat_current_"+match[0].cat] != 'undefined' ? __inputs["stat_current_"+match[0].cat].value : 0;
                segments[1] = typeof __inputs["skill_adv_"+index+"_0"] != 'undefined' ? __inputs["skill_adv_"+index+"_0"].value : false;
                segments[2] = typeof __inputs["skill_adv_"+index+"_1"] != 'undefined' ? __inputs["skill_adv_"+index+"_1"].value : false;
                segments[3] = typeof __inputs["skill_adv_"+index+"_2"] != 'undefined' ? __inputs["skill_adv_"+index+"_2"].value : false;
                segments[4] = typeof __inputs["skill_adv_"+index+"_bonus"] != 'undefined' ? __inputs["skill_adv_"+index+"_bonus"].value || 0 : 0;
                __inputs["skill_adv_"+index+"_total"].value = Math.floor(
                    (segments[0]*((segments[1])?1:0.5)) +
                    (segments[2]?10:0) +
                    (segments[3]?10:0) +
                    segments[4]
                );
            } else {
                __inputs["skill_adv_"+index+"_name"].value = '';
                __inputs["skill_adv_"+index+"_cat"].value = '';
                __inputs["skill_adv_"+index+"_0"].value = false;
                __inputs["skill_adv_"+index+"_1"].value = false;
                __inputs["skill_adv_"+index+"_2"].value = false;
                __inputs["skill_adv_"+index+"_bonus"].value = 0;
                __inputs["skill_adv_"+index+"_total"].value = 0;
            }
            __sortSkillAdv();
        }
        function __sortSkillAdv(){
            let i = 0;
            let list = [];
            for(i=1; i<=73; i++){
                list.push({
                    "name"  : __inputs["skill_adv_"+i+"_name"].value, 
                    "cat"   : __inputs["skill_adv_"+i+"_cat"].value, 
                    "l0"    : __inputs["skill_adv_"+i+"_0"].value,
                    "l1"    : __inputs["skill_adv_"+i+"_1"].value,
                    "l2"    : __inputs["skill_adv_"+i+"_2"].value,
                    "bonus" : __inputs["skill_adv_"+i+"_bonus"].value,
                    "total" : __inputs["skill_adv_"+i+"_total"].value,
                })
            }
            list.sort((a, b) => {
                if(a.name==''){
                    if(b.name==''){
                        return 0;
                    } else {
                        return 1
                    }
                } else {
                    if(b.name==''){
                        return -1;
                    } else {
                        if(a.name<b.name){
                            return -1
                        } else {
                            return 1
                        }
                    }
                }
            });
            list.forEach((v, i) => {
                __inputs["skill_adv_"+(i+1)+"_name"].value = v.name;
                __inputs["skill_adv_"+(i+1)+"_cat"].value = v.cat; 
                __inputs["skill_adv_"+(i+1)+"_0"].value = v.l0;
                __inputs["skill_adv_"+(i+1)+"_1"].value = v.l1;
                __inputs["skill_adv_"+(i+1)+"_2"].value = v.l2;
                __inputs["skill_adv_"+(i+1)+"_bonus"].value = v.bonus;
                __inputs["skill_adv_"+(i+1)+"_total"].value = v.total;
            })
        }
        function __hasTalent(name){
            let i = 0;
            let found = false;
            while(i<34 && !found){
                if(typeof __inputs["talent_"+i] != 'undefined' && __inputs["talent_"+i].value==name){
                    found=true;
                }
                i++;
            }
            return found;
        }
        function __updateTalent(name, index){
            let match = __resources.talents.filter((v) => { return v.name==name; });
            let i = 0;
            if(match.length>0){
                __inputs["talent_"+index].value = name
                __inputs["talent_"+index+"_desc"].value = match[0].desc;

                __updateStat('cc'); // "Guerrier né"
                __updateStat('ct'); // "Tireur d'élite"
                __updateStat('f'); // "Force accrue"
                __updateStat('b'); // "Dur à cuir"
                __updateStat('e'); // "Résistance accrue"
                __updateStat('ag'); // "Réflexes éclair"
                __updateStat('int'); // "Intelligent"
                __updateStat('fm'); // "Sang-froid"
                __updateStat('soc'); // "Sociable"
                __updateStat('m'); // "Course à pied"
                __updateStat('pd'); // "Chance"
                __updateSkill('evaluation', 11); // "Dur en affaires"
                __updateSkill('marchandage', 15); // "Dur en affaires"
                __updateSkill('intimidation', 13); // "Menaçant"
                __updateSkill('perception', 17); // "Sens aiguisés"

                // "Grand voyageur", "Linguistique", "Menaçant", "Sens de l'orientation", "Harmonie aethyrique"
                for(i=1; i<=74; i++){
                    if(typeof __inputs["skill_adv_"+i+"_name"] != 'undefined'){
                        __updateSkillAdv(__inputs["skill_adv_"+i+"_name"].value, i);
                    }
                }
            } else {
                __inputs["talent_"+index].value = '';
                __inputs["talent_"+index+"_desc"].value = '';
            }
            __sortTalents();
        }
        function __sortTalents(){
            let i = 0;
            let list = [];
            for(i=1; i<=34; i++){
                list.push({"name": __inputs["talent_"+i].value, "desc": __inputs["talent_"+i+"_desc"].value})
            }
            list.sort((a, b) => {
                if(a.name==''){
                    if(b.name==''){
                        return 0;
                    } else {
                        return 1
                    }
                } else {
                    if(b.name==''){
                        return -1;
                    } else {
                        if(a.name<b.name){
                            return -1
                        } else {
                            return 1
                        }
                    }
                }
            });
            list.forEach((v, i) => {
                __inputs["talent_"+(i+1)].value = v.name;
                __inputs["talent_"+(i+1)+"_desc"].value = v.desc;
            })
        }
        function __updateSpell(name, index){
            let match = __resources.spells.filter((v) => { return v.name==name; });
            if(match.length>0){
                __inputs["magic_"+index+"_name"].value          = name;
                __inputs["magic_"+index+"_require"].value       = match[0].ingredient;
                __inputs["magic_"+index+"_desc"].value          = match[0].desc;
                __inputs["magic_"+index+"_diff"].value          = match[0].diff;
                __inputs["magic_"+index+"_castduration"].value  = match[0].castduration;
            } else {
                __inputs["magic_"+index+"_name"].value          = '';
                __inputs["magic_"+index+"_require"].value       = '';
                __inputs["magic_"+index+"_desc"].value          = '';
                __inputs["magic_"+index+"_diff"].value          = 0;
                __inputs["magic_"+index+"_castduration"].value  = '';

            }
        }
        function __updateInventoryEnc(){
            let match   = __resources.races.filter((v) => { return v.nom==__inputs["character_race"].value; }).map((v) => { return v.enc });
            let total   = match.length>0 ? __inputs["stat_current_f"].value * match[0] : 0;
            let current =   __inputs["weapon_1_enc"].value + 
                            __inputs["weapon_2_enc"].value + 
                            __inputs["weapon_3_enc"].value + 
                            __inputs["weapon_4_enc"].value + 
                            __inputs["weapon_5_enc"].value + 
                            __inputs["weapon_6_enc"].value + 
                            __inputs["weapon_7_enc"].value + 
                            __inputs["armor_1_enc"].value + 
                            __inputs["armor_2_enc"].value + 
                            __inputs["armor_3_enc"].value + 
                            __inputs["armor_4_enc"].value + 
                            __inputs["armor_5_enc"].value + 
                            __inputs["armor_6_enc"].value +
                            __inputs["inventory_1_enc"].value +
                            __inputs["inventory_2_enc"].value +
                            __inputs["inventory_3_enc"].value +
                            __inputs["inventory_4_enc"].value +
                            __inputs["inventory_5_enc"].value +
                            __inputs["inventory_6_enc"].value +
                            __inputs["inventory_7_enc"].value +
                            __inputs["inventory_8_enc"].value +
                            __inputs["inventory_9_enc"].value +
                            __inputs["inventory_10_enc"].value +
                            __inputs["inventory_11_enc"].value +
                            __inputs["inventory_12_enc"].value +
                            __inputs["inventory_13_enc"].value +
                            __inputs["inventory_14_enc"].value +
                            __inputs["inventory_15_enc"].value +
                            __inputs["inventory_16_enc"].value +
                            __inputs["inventory_17_enc"].value +
                            __inputs["inventory_18_enc"].value +
                            __inputs["inventory_19_enc"].value +
                            __inputs["inventory_20_enc"].value +
                            __inputs["inventory_21_enc"].value +
                            __inputs["inventory_22_enc"].value +
                            __inputs["inventory_23_enc"].value +
                            __inputs["inventory_24_enc"].value +
                            __inputs["inventory_25_enc"].value +
                            __inputs["inventory_26_enc"].value +
                            __inputs["inventory_27_enc"].value +
                            __inputs["inventory_28_enc"].value +
                            __inputs["inventory_29_enc"].value +
                            __inputs["inventory_30_enc"].value +
                            __inputs["inventory_31_enc"].value +
                            __inputs["inventory_32_enc"].value +
                            __inputs["inventory_33_enc"].value +
                            __inputs["inventory_34_enc"].value +
                            __inputs["inventory_35_enc"].value +
                            __inputs["inventory_36_enc"].value +
                            __inputs["inventory_37_enc"].value +
                            __inputs["inventory_38_enc"].value;

            __inputs["inventory_enc"].value = current + ' / ' + total;
        }
        function __sortInventory(){
            let i = 0;
            let list = [];
            for(i=1; i<=38; i++){
                list.push({
                    "name"      : __inputs["inventory_"+i+"_name"].value, 
                    "enc"       : __inputs["inventory_"+i+"_enc"].value, 
                    "location"  : __inputs["inventory_"+i+"_loc"].value
                })
            }
            list.sort((a, b) => {
                if(a.name==''){
                    if(b.name==''){
                        return 0;
                    } else {
                        return 1
                    }
                } else {
                    if(b.name==''){
                        return -1;
                    } else {
                        if(a.name<b.name){
                            return -1
                        } else {
                            return 1
                        }
                    }
                }
            });
            list.forEach((v, i) => {
                __inputs["inventory_"+(i+1)+"_name"].value = v.name;
                __inputs["inventory_"+(i+1)+"_enc"].value = v.enc; 
                __inputs["inventory_"+(i+1)+"_loc"].value = v.location; 
            });
        }
        function __redraw(){
            // Redraw
            for(id in __inputs){
                switch(__inputs[id].type){
                    case "previousjob":
                        __inputs[id].node.html(__inputs[id].value instanceof Array ? __inputs[id].value.join(', '): '');
                    break;
                    case "promote_x1": 
                        __inputs[id].node.attr("data-promote", __inputs[id].value[0]>0?__inputs[id].value[1]:0);
                        if(__inputs[id].value[0]==0){
                            __inputs[id].node.html('-');
                        } else {
                            __inputs[id].node.html('+'+__inputs[id].value[0]);
                        }
                    break;
                    case "promote_x5": 
                        __inputs[id].node.attr("data-promote", __inputs[id].value[0]>0?__inputs[id].value[1]/5:0);
                        if(__inputs[id].value[0]==0){
                            __inputs[id].node.html('-');
                        } else {
                            __inputs[id].node.html('+'+__inputs[id].value[0]);
                        }
                    break;
                    case "check":
                        __inputs[id].node.attr("data-check", __inputs[id].value?"1":"0");
                    break;
                    case "extend": break;
                    default:
                        __inputs[id].node.html(__inputs[id].value);
                    break;
                }
            }
        }

        // Save load
        function __load(){
            // Read data from url
            let data    = {};
            let chunk    = null;
            let package  = (() => {
                let url = document.location.href;
                let pos = url.indexOf('#');
                return pos>=0 ? url.substring(pos+1, url.length) : null;
            })();
            // Make unpack
            if(package!=null){
                try{
                    package = JSON.parse(window.atob(package));
                    data['character_name'] = package[0];
                    match = __resources.races.filter((v) => { return v.id==package[1]; });
                    if(match.length>0){ data['character_race'] = match[0].nom; }
                    if(package[2].length>0){
                        chunk = package[2].map((v) => {
                            let match = __resources.jobs.filter((w) => { return w.id==v; });
                            if(match.length>0){
                                return match[0].nom;
                            }
                            return null;
                        }).filter((w) => { return w != null; });
                        if(chunk.length>0){
                            data['character_current_job'] = chunk.pop();
                            if(chunk.length>0){
                                data['character_previous_job'] = chunk;
                            }
                        }
                    }
                    data['details_age'] = package[3];
                    data['details_eye_color'] = package[4];
                    data['details_hair_color'] = package[5];
                    match = __resources.astrals.filter((v) => { return v.id==package[6]; });
                    if(match.length>0){ data['details_astral_sign'] = match[0].name; }
                    data['details_born_location'] = package[7];
                    data['details_distinctive_sign'] = package[8];
                    match = __resources.gender.filter((v) => { return v.id==package[9]; });
                    if(match.length>0){ data['details_gender'] = match[0].name; }
                    data['details_tall'] = package[10];
                    data['details_weight'] = package[11];
                    data['details_siblings'] = package[12];
                    data['player_name'] = package[13];
                    data['player_mj'] = package[14];
                    data['player_campaign'] = package[15];
                    data['player_campaign_year'] = package[16];


                    data['stat_basic_cc']   = package[17][0];
                    data['stat_basic_ct']   = package[17][1];
                    data['stat_basic_f']    = package[17][2];
                    data['stat_basic_e']    = package[17][3];
                    data['stat_basic_ag']   = package[17][4];
                    data['stat_basic_int']  = package[17][5];
                    data['stat_basic_fm']   = package[17][6];
                    data['stat_basic_soc']  = package[17][7];
                    data['stat_basic_a']    = package[17][8];
                    data['stat_basic_b']    = package[17][9];
                    data['stat_basic_mag']  = package[17][10];
                    data['stat_basic_pf']   = package[17][11];
                    data['stat_basic_pd']   = package[17][12];

                    data['stat_advance_cc']     = [0, package[18][0]];
                    data['stat_advance_ct']     = [0, package[18][1]];
                    data['stat_advance_f']      = [0, package[18][2]];
                    data['stat_advance_e']      = [0, package[18][3]];
                    data['stat_advance_ag']     = [0, package[18][4]];
                    data['stat_advance_int']    = [0, package[18][5]];
                    data['stat_advance_fm']     = [0, package[18][6]];
                    data['stat_advance_soc']    = [0, package[18][7]];
                    data['stat_advance_a']      = [0, package[18][8]];
                    data['stat_advance_b']      = [0, package[18][9]];
                    data['stat_advance_mag']    = [0, package[18][10]];

                    data['luck_current'] = package[19];
                    data['hp_current'] = package[20];
                    package[21].map((v) => {
                        match = __resources.weapons.filter((w) => { return w.id==v; });
                        if(match.length>0){
                            return match[0].name;
                        }
                        return null;
                    }).filter((v) => { return v!=null; }).forEach((v, i) => {
                        data['weapon_'+(i+1)+'_name'] = v;
                    });
                    package[22].map((v) => {
                        match = __resources.armors.filter((w) => { return w.id==v; });
                        if(match.length>0){
                            return match[0].name;
                        }
                        return null;
                    }).filter((v) => { return v!=null; }).forEach((v, i) => {
                        data['armor_'+(i+1)+'_type'] = v;
                    });
                    ['canotage', 'charisme', 'commandement', 'commerage', 'conduite', 'deguisement', 'dissimulation', 'equitation', 'escalade', 'evaluation', 'fouille', 'intimidation', 'jeu', 'marchandage', 'natation', 'perception', 'ralcool', 'sanimaux', 'survie'].forEach((v, i) => {
                        data['skill_'+v+'_0']        = ((package[23][i] & 1) == 1);
                        data['skill_'+v+'_1']        = ((package[23][i] & 2) == 2);
                        data['skill_'+v+'_2']        = ((package[23][i] & 4) == 4);
                    });
                    package[24].forEach((v, i) => {
                        match = __resources.talents.filter((w) => { return w.id==v; });
                        if(match.length>0){
                            data['talent_'+(i+1)] = match[0].name;
                        }
                    });
                    package[25].forEach((v, i) => {
                        let id = (v>>3);
                        match = __resources.skills.filter((w) => { return w.id==id && w.advanced; });
                        if(match.length>0){
                            data['skill_adv_'+(i+1)+'_name'] = match[0].label;
                            data['skill_adv_'+(i+1)+'_0'] = ((v & 1)==1);
                            data['skill_adv_'+(i+1)+'_1'] = ((v & 2)==2);
                            data['skill_adv_'+(i+1)+'_2'] = ((v & 4)==4);
                        }
                    });
                    package[26].forEach((v, i) => {
                        data['inventory_'+(i+1)+'_name'] = v[0];
                        data['inventory_'+(i+1)+'_enc'] = v[1];
                        data['inventory_'+(i+1)+'_loc'] = v[2];
                    });
                    data['money_co'] = package[27][0] || 0;
                    data['money_pa'] = package[27][1] || 0;
                    data['money_sc'] = package[27][2] || 0;
                    data['xp_current'] = package[28][0] || 0;
                    data['xp_total'] = package[28][1] || 0;
                    data['madness_1'] = package[29][0] || '';
                    data['madness_2'] = package[29][1] || '';
                    data['skill_extends'] = package[30]===true;
                    package[31].forEach((v, i) => {
                        let match = __resources.spells.filter((w) => { return w.id==v; });
                        if(match.length>0){
                            data['magic_'+(i+1)+'_name'] = match[0].name;
                        }
                    });
                    data['spell_extends'] = package[32]===true;
                } catch(e){
                    console.error('Error during loading');
                    console.log(e);
                    data = {};
                }
            }
            return data;
        }
        function __save(){

            // Make pack
            let package = [
                __inputs['character_name'].value,
                __getRaceId(__inputs['character_race'].value),
                __inputs['character_previous_job'].value.map((v) => { return __getJobId(v); }).concat([__getJobId(__inputs['character_current_job'].value)]),
                __inputs['details_age'].value,
                __inputs['details_eye_color'].value,
                __inputs['details_hair_color'].value,
                __getAstralId(__inputs['details_astral_sign'].value),
                __inputs['details_born_location'].value,
                __inputs['details_distinctive_sign'].value,
                __getGenderId(__inputs['details_gender'].value),
                __inputs['details_tall'].value,
                __inputs['details_weight'].value,
                __inputs['details_siblings'].value,
                __inputs['player_name'].value,
                __inputs['player_mj'].value,
                __inputs['player_campaign'].value,
                __inputs['player_campaign_year'].value,
                [
                    __inputs['stat_basic_cc'].value,
                    __inputs['stat_basic_ct'].value,
                    __inputs['stat_basic_f'].value,
                    __inputs['stat_basic_e'].value,
                    __inputs['stat_basic_ag'].value,
                    __inputs['stat_basic_int'].value,
                    __inputs['stat_basic_fm'].value,
                    __inputs['stat_basic_soc'].value,
                    __inputs['stat_basic_a'].value,
                    __inputs['stat_basic_b'].value,
                    __inputs['stat_basic_mag'].value,
                    __inputs['stat_basic_pf'].value,
                    __inputs['stat_basic_pd'].value
                ],
                [
                    __inputs['stat_advance_cc'].value[1] || 0,
                    __inputs['stat_advance_ct'].value[1] || 0,
                    __inputs['stat_advance_f'].value[1] || 0,
                    __inputs['stat_advance_e'].value[1] || 0,
                    __inputs['stat_advance_ag'].value[1] || 0,
                    __inputs['stat_advance_int'].value[1] || 0,
                    __inputs['stat_advance_fm'].value[1] || 0,
                    __inputs['stat_advance_soc'].value[1] || 0,
                    __inputs['stat_advance_a'].value[1] || 0,
                    __inputs['stat_advance_b'].value[1] || 0,
                    __inputs['stat_advance_mag'].value[1] || 0
                ],
                __inputs['luck_current'].value,
                __inputs['hp_current'].value,
                (() => {
                    let buffer = [];
                    let id = null;
                    for(let i=1; i<=7; i++){
                        id = __getWeaponId(__inputs['weapon_'+i+'_name'].value);
                        if(id>0){
                            buffer.push(id);
                        }
                    }
                    return buffer;
                })(),
                (() => {
                    let buffer = [];
                    let id = null;
                    for(let i=1; i<=6; i++){
                        id = __getArmorId(__inputs['armor_'+i+'_type'].value);
                        if(id>0){
                            buffer.push(id);
                        }
                    }
                    return buffer;
                })(),
                [
                    (__inputs['skill_canotage_0'].value     ? 1 : 0) + (__inputs['skill_canotage_1'].value ? 2 : 0) + (__inputs['skill_canotage_2'].value ? 4 : 0),
                    (__inputs['skill_charisme_0'].value     ? 1 : 0) + (__inputs['skill_charisme_1'].value ? 2 : 0) + (__inputs['skill_charisme_2'].value ? 4 : 0),
                    (__inputs['skill_commandement_0'].value ? 1 : 0) + (__inputs['skill_commandement_1'].value ? 2 : 0) + (__inputs['skill_commandement_2'].value ? 4 : 0),
                    (__inputs['skill_commerage_0'].value    ? 1 : 0) + (__inputs['skill_commerage_1'].value ? 2 : 0) + (__inputs['skill_commerage_2'].value ? 4 : 0),
                    (__inputs['skill_conduite_0'].value     ? 1 : 0) + (__inputs['skill_conduite_1'].value ? 2 : 0) + (__inputs['skill_conduite_2'].value ? 4 : 0),
                    (__inputs['skill_deguisement_0'].value  ? 1 : 0) + (__inputs['skill_deguisement_1'].value ? 2 : 0) + (__inputs['skill_deguisement_2'].value ? 4 : 0),
                    (__inputs['skill_dissimulation_0'].value ? 1 : 0) + (__inputs['skill_dissimulation_1'].value ? 2 : 0) + (__inputs['skill_dissimulation_2'].value ? 4 : 0),
                    (__inputs['skill_equitation_0'].value   ? 1 : 0) + (__inputs['skill_equitation_1'].value ? 2 : 0) + (__inputs['skill_equitation_2'].value ? 4 : 0),
                    (__inputs['skill_escalade_0'].value     ? 1 : 0) + (__inputs['skill_escalade_1'].value ? 2 : 0) + (__inputs['skill_escalade_2'].value ? 4 : 0),
                    (__inputs['skill_evaluation_0'].value   ? 1 : 0) + (__inputs['skill_evaluation_1'].value ? 2 : 0) + (__inputs['skill_evaluation_2'].value ? 4 : 0),
                    (__inputs['skill_fouille_0'].value      ? 1 : 0) + (__inputs['skill_fouille_1'].value ? 2 : 0) + (__inputs['skill_fouille_2'].value ? 4 : 0),
                    (__inputs['skill_intimidation_0'].value ? 1 : 0) + (__inputs['skill_intimidation_1'].value ? 2 : 0) + (__inputs['skill_intimidation_2'].value ? 4 : 0),
                    (__inputs['skill_jeu_0'].value          ? 1 : 0) + (__inputs['skill_jeu_1'].value ? 2 : 0) + (__inputs['skill_jeu_2'].value ? 4 : 0),
                    (__inputs['skill_marchandage_0'].value  ? 1 : 0) + (__inputs['skill_marchandage_1'].value ? 2 : 0) + (__inputs['skill_marchandage_2'].value ? 4 : 0),
                    (__inputs['skill_natation_0'].value     ? 1 : 0) + (__inputs['skill_natation_1'].value ? 2 : 0) + (__inputs['skill_natation_2'].value ? 4 : 0),
                    (__inputs['skill_perception_0'].value   ? 1 : 0) + (__inputs['skill_perception_1'].value ? 2 : 0) + (__inputs['skill_perception_2'].value ? 4 : 0),
                    (__inputs['skill_ralcool_0'].value      ? 1 : 0) + (__inputs['skill_ralcool_1'].value ? 2 : 0) + (__inputs['skill_ralcool_2'].value ? 4 : 0),
                    (__inputs['skill_sanimaux_0'].value     ? 1 : 0) + (__inputs['skill_sanimaux_1'].value ? 2 : 0) + (__inputs['skill_sanimaux_2'].value ? 4 : 0),
                    (__inputs['skill_survie_0'].value       ? 1 : 0) + (__inputs['skill_survie_1'].value ? 2 : 0) + (__inputs['skill_survie_2'].value ? 4 : 0)
                ],
                (() => {
                    let buffer = [];
                    let id = null;
                    for(let i=1; i<=34; i++){
                        id = __getTalentId(__inputs['talent_'+i].value);
                        if(id>0){
                            buffer.push(id);
                        }
                    }
                    return buffer;
                })(),
                (() => {
                    let buffer = [];
                    let id = null;
                    let pack = 0;
                    for(let i=1; i<=73; i++){
                        id = __getSkillAdvId(__inputs['skill_adv_'+i+'_name'].value);
                        if(id>0){
                            pack = (__inputs['skill_adv_'+i+'_0'].value ? 1 : 0) + 
                                   (__inputs['skill_adv_'+i+'_1'].value ? 2 : 0) + 
                                   (__inputs['skill_adv_'+i+'_2'].value ? 4 : 0) + 
                                   (id<<3);
                            buffer.push(pack);
                        }
                    }
                    return buffer;
                })(),
                (() => {
                    let buffer = [];
                    for(let i=1; i<=38; i++){
                        if(__inputs['inventory_'+i+'_name'].value!=null && __inputs['inventory_'+i+'_name'].value!=''){
                            buffer.push([
                                __inputs['inventory_'+i+'_name'].value,
                                __inputs['inventory_'+i+'_enc'].value,
                                __inputs['inventory_'+i+'_loc'].value
                            ]);
                        }
                    }
                    return buffer;
                })(),
                [
                    __inputs['money_co'].value,
                    __inputs['money_pa'].value,
                    __inputs['money_sc'].value,
                ],
                [
                    __inputs['xp_current'].value,
                    __inputs['xp_total'].value,
                ],
                [
                    __inputs['madness_1'].value,
                    __inputs['madness_2'].value,
                ],
                __inputs['skill_extends'].value,
                (() => {
                    let buffer = [];
                    let id = null;
                    for(let i=1; i<=36; i++){
                        if(__inputs['magic_'+i+'_name'].value!=null && __inputs['magic_'+i+'_name'].value!=''){
                            buffer.push(__getSpellId(__inputs['magic_'+i+'_name'].value));
                        } else {
                            buffer.push(0);
                        }
                    }
                    return buffer;
                })(),
                __inputs['spell_extends'].value,
            ];
            document.location.href = (() => {
                let url = document.location.href;
                let pos = url.indexOf('#');
                if(pos>=0){
                    url = url.substring(0, pos);
                }
                return url;
            })() + '#' + window.btoa(JSON.stringify(package));

        }
        function __getRaceId(raceName){
            let match = __resources.races.filter((v) => { return v.nom==raceName });
            if(match.length>0){
                return match[0].id;
            }
            return 0;
        }
        function __getJobId(jobName){
            if(jobName==null){ return 0; }
            let match = __resources.jobs.filter((v) => { return v.nom==jobName });
            if(match.length>0){
                return match[0].id
            }
            return 0;
        }
        function __getAstralId(astralName){
            let match = __resources.astrals.filter((v) => { return v.name==astralName });
            if(match.length>0){
                return match[0].id
            }
            return 0;
        } 
        function __getGenderId(genderName){
            let match = __resources.gender.filter((v) => { return v.name==genderName });
            if(match.length>0){
                return match[0].id
            }
            return 0;
        }
        function __getWeaponId(weaponName){
            let match = __resources.weapons.filter((v) => { return v.name==weaponName });
            if(match.length>0){
                return match[0].id
            }
            return 0;
        }
        function __getArmorId(armorName){
            let match = __resources.armors.filter((v) => { return v.name==armorName });
            if(match.length>0){
                return match[0].id
            }
            return 0;
        }
        function __getTalentId(talentName){
            let match = __resources.talents.filter((v) => { return v.name==talentName });
            if(match.length>0){
                return match[0].id
            }
            return 0;
        }
        function __getSkillAdvId(skillName){
            if(skillName==''){ return 0; }
            let match = __resources.skills.filter((v) => { return v.label==skillName && v.advanced });
            if(match.length>0){
                return match[0].id
            }
            return 0;
        }
        function __getSpellId(spellName){
            if(spellName==''){ return 0; }
            let match = __resources.spells.filter((v) => { return v.name==spellName });
            if(match.length>0){
                return match[0].id
            }
            return 0;
        }

        // formatter
        function __integer(value){
            let l = value.length;
            let filtered = '';
            for(i=0; i<l; i++){
                if("01234567989".indexOf(value[i])>=0){
                    filtered += value[i];
                }
            }
            if(filtered==''){ return 0 };
            return parseInt(filtered);
        }
        function __rewrite(value){
            return  value.toLowerCase()
                .replace(/[ààä]/g, 'a')
                .replace(/[ç]/g, 'c')
                .replace(/[éèêë]/g, 'e')
                .replace(/[ìï]/g, 'e')
                .replace(/[öòô]/g, 'o')
                .replace(/[ùûü]/g, 'u')
                .replace(/[^a-z0-9]+/g, '_');
        }

        __construct();
    }

    $(document).ready(() => { document.body.controller = new Controller(); });

})()