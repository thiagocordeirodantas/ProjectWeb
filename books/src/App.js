import './style/App.css';

import Logo from './Components/Logo';
import OpcoesHeader from './Components/Opcoes';
import IconesHeader from './Components/Icones';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
         
      </header>
    </div>
  );
}

export default App