import logo from '../img/logo.svg';
import '../style/Logo.css';

function Logo(){
    return (
        <div className='logo'>
            <img src={logo} alt="Logo da Pagina" className='logo-img'/>
            <p><strong>Lawa</strong>Books</p>
        </div>
    )
}

export default Logo;