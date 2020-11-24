import styled from 'styled-components'
import { FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

// lightgreen: #A3BCB6
//  darkgreen: 39603d
//  darkgrey: #3c403d
//  dirty white: #daded4

//toggle sidebar
 

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #DADED4;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) =>(isOpen ? '0' : '-100%' )};
    

`
export const CloseIcon = styled(FaTimes)`
    color: #3C403D;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none;
`

export const SidebarWrapper = styled.div`
    color: #fff;

`
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr; //1 column
    grid-template-rows: repeat(6,80px); //80 px space between about,disocver etc in sidebar
    text-align: center;

    @media screen and (max-width: 768px){
        grid-template-rows: repeat(6, 60px);
    }

`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #3C403D;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;

    &:hover{
        color: #48784d;
        transition: 0.2 ease-in-out;

    }
`
export const SideBtnWrap = styled.div`  
    display: flex;
    justify-content: center;

`
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #39603D;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color :#3C403D;
    }
`