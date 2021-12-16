import React from "react"
import '../assets/css/styleBoutons.css'

class BoutonReponse extends React.Component{
//recupère la reponse cliquée par l'utilisateur et la réponse contenue dans l'objet question et passe le tout au composant parent "ElementQuestion"
    boutonClique=()=>{
        let tableau= [this.props.reponse, this.props.bonneReponse]
        this.props.passeLesReponses(tableau)
    }

    render(){
        return(
            <button id="boutons" className="slide" onClick={this.boutonClique}>{this.props.reponse}</button>
        )
    }
}

export default BoutonReponse