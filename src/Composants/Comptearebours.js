import React from 'react'
import "../assets/css/styleTimer.css"

const CompteARebours = ({Temps}) => {
    const {seconds = 60 } = Temps;
    const [[secs], setTime] = React.useState([seconds]);
    //lance le compteur et le decremente: Arrivé à zero, il lance la fonction reset()
    const tick = () => {
        if (secs === 0) {
            reset();
        } else {
            setTime([secs - 1]);
        }
    };

    //recharge la page a la fin du compte a rebours et previens le joueur de la fin de sa partie
    const reset = () => {
        alert ("temps ecoulé. Fin de partie")
        window.location.reload();
    };
 
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div id="countdown">
            <p>{`${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CompteARebours;
