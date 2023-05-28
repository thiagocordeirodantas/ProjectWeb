import './style/App.css';
import Logo from './Components/Logo';
import perfil from './img/perfil.svg';
import sacola from './img/sacola.svg';

const OpcoesDeTexto = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE']
const icones = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
            {OpcoesDeTexto.map((texto) => (
              <li className='opcao'><p>{texto}</p></li>
            ))}
          </ul>

          <ul className='icones'>
              {icones.map((icone) => (
               <li className='icone'><img src={icone}></img></li>
              )) }
          </ul>
      </header>
    </div>
  );
}

export default App