import React from 'react';
import './styles/header.css'; 


const Header = () => {
    return (
        <header className="container-fluid py-5 custom-header">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                                        <div className="col-md-4 text-center text-md-start">
                                            <div className="image-container">
                                                <img src="Sublogo-100.jpg" alt="Logo do Empreendimento" className="img-fluid rounded-image"  />
                                            </div>
                                        </div>
                                        {/* Texto à direita */}
                    <div className="col-md-8 text-center text-md-start">
                        <h2 className="fw-bold text-primary-custom1">Conheça Nosso Empreendimento</h2>
                        <p className="text-white">
                            Um espaço projetado para o seu conforto e bem-estar. 
                            Localizado em uma área privilegiada, nosso empreendimento oferece infraestrutura moderna e completa.
                        </p>
                        <a href="#" className="btn custom-btn">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
