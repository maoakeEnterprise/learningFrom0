function afficherResultat(resultat, nombreTotalDeMotsProposes){
    let scoreElement = document.getElementById("scoreNumber")
    scoreElement.innerText = `${resultat} / ${nombreTotalDeMotsProposes}`

}

function getValueFromUser(){
    let value
    validateButton.addEventListener("click", () => {
        value = answerUser.value
        scoreEvolution(value,stockTabGame[compteur],stockTabGame)
        answerUser.value = ""
        console.log(value)
        compteur++
        console.log(compteur)
        afficherProposition(stockTabGame[compteur])
    })
}

function afficherProposition(mot){
    let switchWord = document.querySelector("#printWords p")
    if(compteur >= stockTabGame.length){
        switchWord.innerText = "Jeu fini"
        validateButton.disabled = true
    }
    else{
        switchWord.innerText = mot
    }
}

function initGame(){
    verifTypeGame()
    afficherResultat(score,stockTabGame.length)
    afficherProposition(stockTabGame[compteur])
}

function scoreEvolution(userWord, computerWord, listGame){
    if(userWord === computerWord){
        score++
        afficherResultat(score, listGame.length)
    }
        return true
}

function verifTypeGame(){
    let valueRadio = ""
    for(let i = 0; i < baliseRadio.length; i ++){
        if(baliseRadio[i].checked){
            valueRadio = baliseRadio[i].value
            break
        }
    }
    if(valueRadio == "Mots") stockTabGame = listMot
    else stockTabGame = listPhrase
}

function changeTypeGame(){
    for(radio in baliseRadio) {
        baliseRadio[radio].onclick = function() {
            initGame()
        }
    }
}

function afficherEmail(){
    
    shareButton.addEventListener("click", () => {
        divPopUp.removeAttribute("hidden")
    })
}

function partagerScore(){
    sendButton.addEventListener("submit", (event) => {
        event.preventDefault()
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        
        let baliseMail = document.getElementById("email")
        let mail = baliseMail.value

        console.log(mail+" "+nom)
        divPopUp.hidden = "true"
    })
}

function lancerJeu() {
    afficherEmail()
    partagerScore()
    initGame()
    getValueFromUser()
    changeTypeGame()
}
