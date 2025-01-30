import React from 'react';
import './styles/loc.css'
const Localizacao = () => {
    return (
      <section className="localizacao-section py-5">
        <div className="container">
          <h2 className="text-center mb-4"><i className="bi bi-geo-alt-fill"></i> Localização</h2>
        
          <div className="row align-items-center">
            {/* Mapa do Google */}
            <div className="col-md-6">
              <div className="mapa-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093933!2d144.9537353155047!3d-37.81627944202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfc9b1d11%3A0xb1a0f3d57e9b1b!2sExemplo%20de%20Localiza%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1706567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
  
            {/* Detalhes do Empreendimento */}
            <div className="col-md-6">
              <div className="detalhes-container">
                <h4>Jardim do Cerrado</h4>
                <p>
                  Localizado em uma região privilegiada, o <b>Jardim do Cerrado</b> oferece lotes com infraestrutura completa, 
                  áreas verdes e fácil acesso às principais vias da cidade.
                </p>
                <p>
                  ✅ Infraestrutura completa <br />
                  ✅ Próximo a comércios e escolas <br />
                  ✅ Áreas de lazer e qualidade de vida <br />
                </p>
                <a href="https://maps.google.com" target="_blank" className="btn btn-success">
                  📍 Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Localizacao;
  