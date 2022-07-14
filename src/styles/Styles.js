import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        
        padding: 0;
        margin: 0;

        font-family: 'Cormorant SC', serif;
    }
`

export const StyledImg = styled.img`
	width: 100%;
	height: 100vh;
	object-fit: cover;
`
