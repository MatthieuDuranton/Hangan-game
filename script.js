let motaDeviner = ['coucou', 'anticonstitutionnellement', 'monde', 'carrelage'];
let lettre = "a"

//proposer un mot au hasard//
let motMystere = motaDeviner[Math.floor(Math.random()*motaDeviner.length)];
    console.log(motMystere);
    console.log(motMystere[0]);

//afficher le mot à deviner en remplaçant les lettres par des underscores//
let underscores = motMystere.replace(/[a-z]/gi, ' _ ');
    console.log(underscores);
    console.log(underscores[1]);
document.getElementById("word").innerHTML = underscores;//afficher les underscores sur page avec variable word

//récupérer la lettre du bouton appuyé//    
function GFG_click(letter) { 
    console.log(letter);
    lettre = String(letter);
    console.log(lettre);
    for (i=0; i<=motMystere.length; i++){//remplacer underscore si on a la lettre
        if (lettre === motMystere[i]){
            underscores[i+1] = lettre;
        }
    }
}



