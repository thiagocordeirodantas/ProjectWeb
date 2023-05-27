import '../src/style/App.css';
import logo from '../src/img/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <div className="logo">
              <img alt="Logo da Pagina" src={logo}></img>
              <p><strong>Lawa</strong>Books</p >
            </div>
      </header> 
    </div>
  );
}

export default App;
