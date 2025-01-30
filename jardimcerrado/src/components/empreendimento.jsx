import React from 'react';
import './styles/emprrendimento.css';

const Empreendimento = () => {
    return (
        <section className="jardim-section text-center py-5">
            <div className="container">
                <div className="logo-container">
                    <img src="./logo1.png" alt="Jardim do Cerrado" className="logo" />
                </div>
                <h2 className="text-white mt-3">Jardim do Cerrado</h2>
                <p className="text-white mx-auto mt-2">
                    Somos um empreendimento localizado em uma região privilegiada, oferecendo lotes com infraestrutura completa para você construir o seu futuro.
                </p>
                <p className="text-white mx-auto">
                    Venha conhecer e garantir o seu espaço no melhor loteamento da região!
                </p>
                <a href="#localizacao" className="btn btn-light mt-3 "> <i className="bi bi-geo-alt-fill"></i> Ver Localização</a>
            </div>
        </section>
    );
};

export default Empreendimento;