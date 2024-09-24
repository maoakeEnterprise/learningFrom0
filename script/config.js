//Les variables globals 
const listMot = ["Test1" , "Salut" , "Babadook" ]
const listPhrase = ["Je suis la" , "Moi avoir ca" , "Tu es le Boss"]

let stockTabGame

let answerUser = document.getElementById("reponse")
let validateButton = document.getElementById("envoyer")
let shareButton = document.getElementById("partager")
let compteur = 0
let score = 0

let baliseRadio = document.querySelectorAll('input[name="typeJeu"]')
