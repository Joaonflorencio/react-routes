//Home.jsx
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <h1>Bienvenido a mi portafolio profesional!</h1>
        <div className="div-projects">
            <Link to="/projects">Mis proyectos</Link>
        </div>
        <div className="div-resume">
            <Link to="/resume">Mi resumen</Link>
        </div>
        </>

    )
}

export default Home;