import React, { useState, useEffect } from "react";
import { ProgressBar } from 'react-bootstrap';
import './styles/status.css'
import axios from "axios";
const StatusObra = () => {
    const [etapas, setEtapas] = useState([]);

    useEffect(() => {
        // Requisição GET para a API que retorna as etapas da obra
        axios.get("https://jardimdocerrado.ibsystem.com.br/app_status_obra.php?idempreendimento=2")
    .then((response) => {
      console.log('Dados da API:', response.data); // Verifique o formato dos dados
      const dados = response.data;

      // Verifique se a resposta é um array antes de usar o map
      if (Array.isArray(dados)) {
        const etapasData = dados.map((item) => ({
          nome: item.desc_obra, // ou a propriedade adequada do JSON
          progresso: item.status_obra, // ou a propriedade de progresso no JSON
        }));
        setEtapas(etapasData);
      } else {
        console.error("A resposta da API não é um array:", dados);
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar dados da API:", error);
    });
}, []);

  return (
    <div className="status-obra-container">
    <h2 className="text-center">Status da Obra</h2>
    {etapas.map((etapa, index) => (
      <div key={index} className="etapa-card">
        <h4 className="etapa-nome">{etapa.nome}</h4>
        <ProgressBar
          now={etapa.progresso}
          label={`${etapa.progresso}%`}
          className="custom-progress"
        />
      </div>
    ))}
  </div>
  );
};

export default StatusObra;






