import React from "react";
import "../assets/css/styleScore.css"

class Score extends React.Component{
    render(){
        return(
            <div id="afficheScore">
            <h1>score : <span id="scoreValeur">{this.props.scoreUser}</span></h1>
        </div>
        ) 
    }
}

export default Score