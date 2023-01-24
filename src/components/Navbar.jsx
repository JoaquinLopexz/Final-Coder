import "./Navbar.css";
import CardWidGet from "./CardWidGet";
import { Link } from "react-router-dom"

export default function Navbar () {  
    return (
        <div className="navbar-container">   
            <h2>Nova Music</h2> <img className="logo-marca" src="https://diarium.usal.es/soniadelai/files/2012/11/musica-electronica.jpg" alt="erro-image" />
            <Link to="/">
                <button className="navbar-button">Inicio</button>   
            </Link>
            <Link to="/equipos">
                <button className="navbar-button">Nuestros Equipos</button>
            </Link>
            <Link to="/categoria/Principiante">
                <button className="navbar-button">Principiantes</button>
            </Link>
            <Link to="/categoria/Intermedio">
                <button className="navbar-button">Intermedio</button>
            </Link>
            <Link to="/categoria/Profesional">
                <button className="navbar-button">Profesional</button>
            </Link>
         
            <CardWidGet />
        </div>
    )
}