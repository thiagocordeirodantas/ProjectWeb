import { livros } from "./DadosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo/Titulo";

const UltimosLancamentosContainer = styled.section `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos (){
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt="livros lancamentos" />
                ))}
            </NovosLivrosContainer>
           
        </UltimosLancamentosContainer>
    )

}
export default UltimosLancamentos;