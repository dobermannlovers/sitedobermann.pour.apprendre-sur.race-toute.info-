var prenom = prompt("Comment tu t'appelles ?");
var titre = document.getElementById('titre');

console.log(titre);
titre.innerText = "Bonjour, " + prenom;

if(prenom == "Adeline"){
alert("Comme moi !");
titre.style.color = "#F7ECE1";
}else{
titre.style.color = "darksalmon";
}