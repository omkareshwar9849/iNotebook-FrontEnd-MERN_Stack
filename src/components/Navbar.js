import React from 'react'
import logo from '../logo.png';
import { Link , useLocation, useNavigate } from "react-router-dom";

const Navbar = (prpos) => {
    let navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate("/login");
    }
    let location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" height="40px" /></Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} aria-current="page" to="/">Home</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ''}`} to="/about">About</Link> 
                            </li>
                        
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role='button'>Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role='button'>SignUp</Link>
                        </form>:
                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
