import "../assets/css/styleFooter.css"

const BasDePage =() =>{
    const dateJour= new Date ();
    const developpeurs= "Mickael & Matteo"

    return (
        <footer>
            <p id="developperName">
                Developped by <br/>
                <span>{developpeurs}</span>
            </p>
            <p id='dateCreation'>Editée en {dateJour.getFullYear()}</p>
        </footer>
    )
}

export default BasDePage