let motaDeviner = ['coucou', 'anticonstitutionnellement', 'monde', 'carrelage'];
let difficulte = document.getElementById("mode");
let messageAccueil = document.getElementById("accueil");
let messageGagne = document.getElementById("win");
let messagePerdu = document.getElementById("lose");
let valeurBouton = document.getElementsByTagName("button");


//proposer un mot au hasard//
let rand = motaDeviner[Math.floor(Math.random()*motaDeviner.length)];
    console.log(rand);

//afficher le mot à deviner en remplaçant les lettres par des underscores//
    let mot = rand.replace(/[a-z]/gi, ' _ ');
    console.log(mot);
    document.getElementById("word").innerHTML = mot;
//
let button = document.getElementsByTagName("button");
console.log(button);


    button.addEventListener("click", () => {

        let valeur = button.getAttribute("value")
        console.log(valeur);
    });

