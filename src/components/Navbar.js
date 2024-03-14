import { Link } from "react-router-dom"

export default function Navbar() {
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>ABOUT</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}