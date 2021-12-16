import React from 'react'
import Score from "./Score"
import Compteur from './Compteur';
import ElementQuestion from './ElementQuestion';

class Gameboard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            score:0}
    }

    //modifie le score et l'affiche
    modifieScore=()=>{
        const ancienScore=this.state.score
        const nouveauScore=ancienScore+1
        this.setState({ score: nouveauScore})
    }

    rechargeLaPartie=()=>{
        this.setState({ score: 0})
    }

    render(){
        return (
            <div id="afficheJeu">
                <Score scoreUser={this.state.score}/>
                <Compteur scoreUser={this.state.score}/>
                <ElementQuestion valeur={this.modifieScore} scoreUser={this.state.score} perd={this.rechargeLaPartie} />
            </div>
        )
    }
}

export default Gameboard


