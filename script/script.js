function afficherResultat(resultat, nombreTotalDeMotsProposes){
    console.log("Voici votre score actuellement: "+ score +"avec ce nombre de mots : " + nombreTotalDeMotsProposes)
}

function choisirPhrasesOuMots() {
    let choixDuJoueur = true
    let reponseJoueur
    while(choixDuJoueur){
        reponseJoueur = prompt("Type de jeu Phrases ou Mots (Phrases/Mots) : ")
        if(reponseJoueur === "Phrases" || reponseJoueur === "Mots"){
            choixDuJoueur = false
            if(reponseJoueur === "Phrases"){
                return listPhrase
            }
            else if(reponseJoueur === "Mots"){
                return listMot
            }
        }
    }
}

function lancerBoucleDeJeu(tableauDuJeu) {

    let score = 0
    let reponseJoueur
    
    for (let i = 0; i < tableauDuJeu.length; i++) {
        const element = tableauDuJeu[i];
        reponseJoueur = prompt("Entrer le mot " + tableauDuJeu[i])
        if(reponseJoueur === tableauDuJeu[i]){
            score++
        }
    }
    return score
}

function lancerJeu() {
    let tableauChoisis = choisirPhrasesOuMots()
    let score = lancerBoucleDeJeu(tableauChoisis)
    afficherResultat(score, tableauChoisis)
}
