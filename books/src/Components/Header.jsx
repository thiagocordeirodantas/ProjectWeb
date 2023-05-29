import Logo from "./Logo";
import styled from "styled-components";
import IconesHeader from "./Icones";
import OpcoesHeader from "./Opcoes";


const HeaderContainer = styled.header `
        background-color: #FFF;
        display: flex;
        padding: 2rem;
        justify-content: center;
    `



function Header(){
    return (
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
      </HeaderContainer>
    )
}



export default Header;