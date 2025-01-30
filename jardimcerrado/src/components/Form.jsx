import React, { useEffect , useState } from 'react';
import Inputmask from 'inputmask';
import './styles/Form.css';

const Form = () => {
    useEffect(() => {
        const celularInput = document.getElementById('celular');
        Inputmask("(99) 99999-9999").mask(celularInput);
    }, []);
    const [formData, setFormData] = useState({
        primeiroNome: '',
        email: '',
        celular: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submissão do formulário
        try {
            const response = await fetch('https://jardimdocerrado.ibsystem.com.br/recebe_dados_site.php', {
                method: 'POST',
                body: new URLSearchParams(formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const result = await response.text();
            console.log(result); // Aqui você pode tratar a resposta do servidor, se necessário
            alert('Mensagem enviada com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
           
        }
    };
    return (
        <section className="form-section py-5">
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="form-card p-4 shadow-sm w-100">
                <div className="p-4">
                    <h2 className="text-center mb-4 text-white">Fale conosco!</h2>
                    <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-md-12">
      <div className="form-group text-white">
        <label htmlFor="primeiroNome">Nome:</label>
        <input 
          type="text" 
          id="primeiroNome" 
          name="primeiroNome" 
          className="form-control"
          value={formData.primeiroNome}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>

    <div className="col-md-12">
      <div className="form-group text-white">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="form-control"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>

    <div className="col-md-12">
      <div className="form-group text-white">
        <label htmlFor="celular">Telefone:</label>
        <input 
          type="text" 
          id="celular" 
          name="celular" 
          className="form-control"
          value={formData.celular}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  </div>

  <button type="submit" className="mt-4 w-100 btnform">Enviar</button>
</form>

                </div>
            </div>
            
        </div>
    </section>


    );
};

export default Form;