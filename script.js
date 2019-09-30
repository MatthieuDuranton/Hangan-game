var facile = ['ABAT', 'AGIR', 'AIDE', 'BANC', 'BEAU', 'CAMP', 'CHAT', 'CHEZ'];
var amateur = ['ABSENT', 'BAOBAB', 'BAQUET', 'BORGNE', 'CANARD', 'CANTAL', 'CHEVEU', 'DANGER'];
var pro = ['ABDUCTEUR', 'ACCELERER', 'ACCOSTAGE', 'BACTERIEN', 'BAGARREUR', 'CABILLAUD', 'BURALISTE', 'DEBLAYAGE'];
var motaDeviner = [];
var lettre = "";
var reponse = false;

document.getElementById("facile").addEventListener('click', () => {
    motaDeviner = facile;
})
document.getElementById("amateur").addEventListener('click', () => {
    motaDeviner = amateur;
})
document.getElementById("difficile").addEventListener('click', () => {
    motaDeviner = pro;
})
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
            reponse = true;// indiquer que la suggestion était bonne
        }
    }
    document.getElementById("word").innerHTML = questionMarks;//modifier les questionMarks selon la réponse

    for (j=0; j<=5; j++) {
        if (j=1 && reponse === false){
            
        }else if (j>1 && j<5 && reponse === false){
            
        }else if (j=5 && reponse === false){

        }
    }
    console.log(reponse);
    reponse = false;//réinitialiser reponse à false sinon elle resterait true
}


