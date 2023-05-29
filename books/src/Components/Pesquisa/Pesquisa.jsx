import styled from "styled-components";
import Input from "../Input/Input";
import { useState } from "react";
import { livros } from "./DadosPesquisa";

const PesquisaContainer = styled.section `
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa (){

    const [LivrosPesquisados, setLivrosPesquisado] = useState([])


   

    return (
        <PesquisaContainer>
            <Titulo>Ja sabe por onde comecar?</Titulo>
            <Subtitulo>Encontre o seu livro na nossa estante.</Subtitulo>
            <Input placeholder="Escreva sua proxima leitura"  onBlur={evento => {
                const textoDigitado = evento.target.value;
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisado(resultadoPesquisa)
            } }/>


        </PesquisaContainer>
       
    )
}


export default Pesquisa;