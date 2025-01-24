import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram,FaWhatsapp,FaFacebook   } from "react-icons/fa";
import '../styles/Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Logo aqui</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav nav1">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>

                <ul className='navbar-nav ms-auto d-flex flex-row justify-flex-end'>
                    <li className="nav-item"><a className="nav-link" href="#"><FaInstagram size={30} /></a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FaWhatsapp size={30} /></a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FaFacebook size={30}/></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;