import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container-fluid">
            <NavLink to={'/'} className="navbar-brand">
                BOA
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to={'/'} className="nav-link">
                        Inicio
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/users'} className={"nav-link"}>
                        Usuarios
                    </NavLink>
                </li>
            </ul>
            <span className="navbar-text">
                Aplicación de usuarios
            </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar