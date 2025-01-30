import React from 'react';
import  './styles/Mapa.css';

const Mapa = () => {
    return (
        <div className='bg-mapa'>
        <section className="mapa-section container position-relative mt-5 ">
        <h2 className="text-center text-light mb-4">Faça sua simulação</h2>
        {/* <p className='text-white text-center'>Valores sujeitos a alterações</p> */}
    
        {/* Card Informativo */}
        <div className="status-card position-absolute top-0 start-0 m-3 p-3  border rounded shadow">
        <button className="btn btn-sm btn-outline-secondary position-absolute border-none top-0 end-0 m-1" 
        onClick={() => document.querySelector('.status-card').classList.toggle('d-none')}>
        X
    </button>
            <h5 className="mb-2">Faça sua simulação</h5>
            <ul className="list-unstyled m-0">
                <li className="d-flex align-items-center">
                    <span className="status-indicator bg-danger me-2"></span> Vendido
                </li>
                <li className="d-flex align-items-center">
                    <span className="status-indicator bg-warning me-2"></span> Reservado
                </li>
                <li className="d-flex align-items-center">
                    <span className="status-indicator bg-success me-2"></span> Disponível
                </li>
            </ul>
        </div>
    
        {/* Mapa */}
        <div className="mapa-container">
            <img src="./MAPA JARDIM CERRADO(WEBP).webp" alt="Mapa do empreendimento" className="img-fluid" />
        </div>
    </section>
    </div>
    
    );
};

export default Mapa;
