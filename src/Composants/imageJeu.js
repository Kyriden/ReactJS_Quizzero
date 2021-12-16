import React from 'react';
import img from '../assets/img/logoCouleur.png'

class ImageJeu extends React.Component{

    render(){
        return(
          <h1>
            <img src={img} alt='Quizzero'></img>
        </h1>  
        )
    }
}

export default ImageJeu