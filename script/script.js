function afficherResultat(resultat, nombreTotalDeMotsProposes){
    let scoreElement = document.getElementById("scoreNumber")
    scoreElement.innerText = `${resultat} / ${nombreTotalDeMotsProposes}`

}

function getValueFromUser(){
    let value
    validateButton.addEventListener("click", () => {
        value = answerUser.value
        scoreEvolution(value,listMot[compteur],listMot)
        answerUser.value = ""
        console.log(value)
        compteur++
        console.log(compteur)
        afficherProposition(listMot[compteur])
    })
}

function afficherProposition(mot){
    let switchWord = document.querySelector("#printWords p")
    if(compteur >= listMot.length){
        switchWord.innerText = "Jeu fini"
        validateButton.disabled = true
    }
    else{
        switchWord.innerText = mot
    }
}

function initGame(){
    let switchWord = document.querySelector("#printWords p")
    afficherResultat(score,listMot.length)
    switchWord.innerText = listMot[compteur]
}

function scoreEvolution(userWord, computerWord, listGame){
    if(userWord === computerWord){
        score++
        afficherResultat(score, listGame.length)
    }
        return true
}

function lancerJeu() {
    initGame()
    getValueFromUser()
}
