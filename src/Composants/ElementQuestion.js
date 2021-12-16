import React from 'react'
import Questions from './Question'
import BoutonReponse from './BoutonReponse'
import { round } from './Controleur'


class ElementQuestion extends React.Component{
    constructor(props){
        super(props)
         this.state={
             reponseChoisie: "", bonneReponse:"", perdu:false
         }  
    }

    //recupere les reéponses du composant enfant "BoutonReponse"
    passeLesReponses = (p) => {
        const reponseUser=p[0]
        const bonneReponse=p[1]
        this.calculPoint(reponseUser, bonneReponse)
        this.setState({
            reponseChoisie: reponseUser,
            bonneReponse: bonneReponse
        });
    }

    //analyse les reponses du joueur et donne un point ou met un terme à la partie
    calculPoint (reponseUser, bonneReponse){
            if (reponseUser===bonneReponse){
                this.props.valeur(true)
            }else{
                if(this.state.perdu===false){
                    //fin de partie
                    this.setState({ perdu: true})
                    const scorejoueur= this.props.scoreUser

              if(scorejoueur>15){
                alert("Impressionant. Ton score est "+ scorejoueur)
              }
              if(scorejoueur>10 && scorejoueur<=15){
                alert("Pas mal. Ton score est "+ scorejoueur)
              }
              if(scorejoueur>7 && scorejoueur<=10){
                alert("Tu es sur la bonne piste. Ton score est "+ scorejoueur)
              }
              if(scorejoueur>4 && scorejoueur<=7){
                alert("Tu peux mieux faire. Ton score est "+ scorejoueur)
              }
              if(scorejoueur>=1 && scorejoueur<=4){
                alert("Encore un effort. Ton score est "+ scorejoueur)
              }
              else{
                  alert("Ce n'est pas grave. ça reste entre nous ;)")
              }
              window.location.reload();
            }    
        } 
    }

    render(){
       const maQuestion=round()
       //Melange du tableau de reponses
       let tabReponses= [maQuestion.reponseA,maQuestion.reponseB ,maQuestion.reponseC,maQuestion.reponseD]
       const tabReponsesMelange = tabReponses.sort(() => 0.5 - Math.random());

        return(
            <div>
                <Questions question={maQuestion.maQuestion} />
                <BoutonReponse passeLesReponses ={this.passeLesReponses}  bonneReponse={maQuestion.maReponse} reponse={tabReponsesMelange[0]}  />
                <BoutonReponse passeLesReponses ={this.passeLesReponses}  bonneReponse={maQuestion.maReponse} reponse={tabReponsesMelange[1]}  />
                <BoutonReponse passeLesReponses ={this.passeLesReponses}  bonneReponse={maQuestion.maReponse} reponse={tabReponsesMelange[2]}  />
                <BoutonReponse passeLesReponses ={this.passeLesReponses}  bonneReponse={maQuestion.maReponse} reponse={tabReponsesMelange[3]}  />
            </div>
        )
    }
}

export default ElementQuestion