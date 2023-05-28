import '../style/Opcoes.css';

function OpcoesHeader(){

    const OpcoesDeTexto = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE']

    return (
        <ul className='opcoes'>
            {OpcoesDeTexto.map((texto) => (
                 <li className='opcao'><p>{texto}</p></li>
            ))}
      </ul>
    )
}

export default OpcoesHeader;