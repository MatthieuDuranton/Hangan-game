var motaDeviner = ['coucou', 'anticonstitutionnellement', 'monde', 'carrelage'];
var lettre = "a"



//proposer un mot au hasard//
var motMystere = motaDeviner[Math.floor(Math.random()*motaDeviner.length)];
    console.log(motMystere);

//afficher le mot à deviner en remplaçant les lettres par des questionMarks//
var questionMarks = motMystere.replace(/[a-z]/gi, '?');
    
document.getElementById("word").innerHTML = questionMarks;//afficher les questionMarks sur page avec variable word

//récupérer la lettre du bouton appuyé et actions à effectuer//    

function GFG_click(letter) {//récupérer l'ID du bouton 
    lettre = String(letter);//transformer l'ID en string
    for (i=0; i<motMystere.length; i++){//remplacer le questionMarks si on a une lettre qui correspond
        if (lettre === motMystere[i]){
            questionMarks = questionMarks.substring(0, i) + lettre + questionMarks.substring(i+1);//je dois casser mon string en 2. Je ne peux pas le modifier directement en JS
        }
    }
    document.getElementById("word").innerHTML = questionMarks
}


