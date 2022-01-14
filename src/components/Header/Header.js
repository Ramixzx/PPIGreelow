import './Header.css'
import logo from '../../Assets/images/imagenClub.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (  
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid container">
                        <img src={logo} alt="Logo del club de amigos" className="header-image mx-3"/>             
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page">Inicio</Link>
                                </li>
                                <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">Nuestras canchas</span>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link to={'/Futbol'} className="dropdown-item">Futbol</Link></li>
                                        <li><Link to={'/Tenis'} className="dropdown-item">Tenis</Link></li>
                                        <li><Link to={'/Voley'} className="dropdown-item">Voley</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <i className="bi bi-person-circle mx-2"></i>
                                <a>Mi cuenta</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
 
export default Header;