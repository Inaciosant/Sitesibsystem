import React, { useEffect } from 'react';
import './styles/nav.css';

const Nav = () => {
    useEffect(() => {
        const navbar = document.getElementById('navbar');
        window.onscroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-dark');
                navbar.classList.remove('navbar-transparent');
            } else {
                navbar.classList.remove('bg-dark');
                navbar.classList.add('navbar-transparent');
            }
        };
    }, []);

    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-transparent fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Sobre Nós</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Empreendimento</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-primary" href="#">Fale Conosco</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
