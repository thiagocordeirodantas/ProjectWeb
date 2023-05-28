import Logo from "./Logo";
import '../style/Header.css';

import IconesHeader from "./Icones";
import OpcoesHeader from "./Opcoes";


function Header(){
    return (
        <header className='App-header'>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
      </header>
    )
}



export default Header;