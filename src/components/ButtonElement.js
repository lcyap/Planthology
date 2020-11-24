import styled from 'styled-components'
import {Link} from 'react-scroll'

// lightgreen: #A3BCB6
//  darkgreen: 39603d
//  darkgrey: #3c403d
//  dirty white: #daded4
//olive green: #4d774e

export const Button = styled(Link)`
    border-radius: 50px;
    background:${({dark}) => (dark ? '#9dc88d': '#39603d')};
    white-space:nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#39603d': '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#daded4': '#4d774e')};
        color: ${({dark}) => (dark ? '#39603d': '#fff')};
    };
    
    `