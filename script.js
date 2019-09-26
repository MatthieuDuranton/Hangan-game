let motaDeviner = ['coucou', 'anticonstitutionnellement', 'monde', 'carrelage'];
let difficulte = document.getElementById("mode");
let messageAccueil = document.getElementById("accueil");
let messageGagne = document.getElementById("win");
let messagePerdu = document.getElementById("lose");
let valeurBouton = document.getElementsByTagName("button")

//proposer un mot au hasard//
let rand = motaDeviner[Math.floor(Math.random()*motaDeviner.length)];
    console.log(rand);

//afficher le mot à deviner en remplaçant les lettres par des underscores//
    let mot = rand.replace(/[a-z]/gi, ' _ ');
    console.log(mot);
    document.getElementById("word").innerHTML = mot;

//remplacer underscores par lettre proposée si true//    
    function GFG_click(clicked) { 
        console.log(clicked); 
    }          
