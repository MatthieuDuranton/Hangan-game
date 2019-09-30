var facile = ['abat', 'agir', 'aide', 'banc', 'beau', 'camp', 'chat', 'chez'];
var amateur = ['absent', 'baobab', 'baquet', 'borgne', 'canard', 'cantal', 'cheveu', 'danger'];
var pro = ['abducteur', 'accelerer', 'accostage', 'bacterien', 'bagarreur', 'cabillaud', 'buraliste', 'deblayage'];
var motaDeviner = [];
var lettre = "";
var reponse = false;
var j = 0;

//document.getElementById("facile").addEventListener('click', () => {
    //proposer un mot au hasard//
    var motMystere = facile[Math.floor(Math.random()*facile.length)];
    console.log(motMystere);
    //afficher le mot à deviner en remplaçant les lettres par des questionMarks//
    var questionMarks = motMystere.replace(/[a-z]/gi, '?'); 
    //afficher les questionMarks sur page avec variable word
    document.getElementById("word").innerHTML = questionMarks;

/*document.getElementById("amateur").addEventListener('click', () => {
    var motMystere = amateur[Math.floor(Math.random()*amateur.length)];
    console.log(motMystere);
    var questionMarks = motMystere.replace(/[a-z]/gi, '?');
    document.getElementById("word").innerHTML = questionMarks;

document.getElementById("difficile").addEventListener('click', () => {
    var motMystere = pro[Math.floor(Math.random()*pro.length)];
    console.log(motMystere);
    var questionMarks = motMystere.replace(/[a-z]/gi, '?');
    document.getElementById("word").innerHTML = questionMarks;*/


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
    console.log(reponse);

    if (reponse === false){
        j = j+1;
        console.log(j)
        if (j<=1 && reponse === false){
            var elem = document.getElementById("emily");
            elem.setAttribute('src',"./img/Emily.png")
        }else if (j>1 && j<5 && reponse === false){
            function avance(){
                var pos = 0;
                var id = setInterval(frame, 10);
                function frame(){
                    if (pos == 20){
                        clearInterval(id);
                    }else{
                        pos++;
                        elem.style.left = pos + 'px';
                    }
                }
            avance();
            }
        }else if (j>4 && reponse === false){
            alert("C'est perdu ! Emily a mangé votre chocolat...");

        }
    }else{
        alert("bravo");
    }
    reponse = false;//réinitialiser reponse à false sinon elle resterait true
}


