import "./Navbar.css"
import logo from "../assets/logo.png"

const Navbar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg custom-bg">
                <div className="container-fluid gap-5">
                    <a className="navbar-brand ms-5" href="#">
                        <img src={logo} alt="" height="60px" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-2">
                            <li className="nav-item nav-hover">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">INICIO</a>
                            </li>
                            <li className="nav-item nav-hover">
                                <a className="nav-link fw-bold" href="#">SERVICIOS</a>
                            </li>
                            <li className="nav-item nav-hover">
                                <a className="nav-link fw-bold" href="#">NOSOTROS</a>
                            </li>
                            <li className="nav-item nav-hover">
                                <a className="nav-link fw-bold" href="#">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar