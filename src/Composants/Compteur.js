import React from 'react';
import CompteARebours from './Comptearebours';

class Compteur extends React.Component{
    render() {
        const leTimer={seconds: 60}
        return(
            <div className="Timer">
                <CompteARebours Temps={leTimer}  />
            </div>
        )
    }
}

export default Compteur
