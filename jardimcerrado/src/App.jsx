import Header from './components/header'
import Nav from './components/Nav'
import Mapa from './components/Mapa'
import About from './components/about'
import Empreendimento from './components/empreendimento.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";
import StatusObra from './components/Statusobra.jsx'
import Localizacao from './components/Localização.jsx'
import Form from './components/Form.jsx'

function App() {


  return (
    <>
    <Nav />
    <Header/>
    <Empreendimento/>
    <About />
    <StatusObra/>
    <Mapa />
    <Localizacao/>
    <Form/>

    
      
    </>
  )
}

export default App
