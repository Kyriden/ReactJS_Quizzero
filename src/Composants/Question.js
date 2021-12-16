import React from "react";
import '../assets/css/styleQuestions.css'


class Questions extends React.Component{

    render(){
        return(
            <div>
                <h1 id="questions">{this.props.question}</h1>   
            </div>
        )
    }
}

export default Questions