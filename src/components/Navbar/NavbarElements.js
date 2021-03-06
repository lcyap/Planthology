import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

//export becasue it's in a different file name than index.js
export const Nav = styled.nav`
    background: ${({scrollNav})=> (scrollNav ? '#39603d' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

 //LinkR is react scrol and react router
export const NavLogo = styled(LinkR)`
    color: #daded4;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
   
    text-decoration: none;
    font-family: 'Yeseva One', cursive;
` ;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #daded4;

    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }

`

export const NavItem = styled.li`
    height: 80px;

`

export const NavLinks = styled(LinkS)`
    color: #daded4;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    
    &.active{
        border-bottom: 3px solid #A3BCB6; 
    }
`

export const NavBtn = styled.nav`
    display : flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #9dc88d;
    white-space: nowrap;
    padding: 10px 22px; // top/bottom, r/l
    color: #39603d;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #A3BCB6;
        color: #39603D;
    }
`

