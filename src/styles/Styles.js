import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        
        padding: 0;
        margin: 0;

        font-family: 'Cormorant SC', serif;

		user-select: none;
		
		overflow-x: hidden;
    }
`

export const StyledImg = styled.img`
	width: 100%;
	height: 100vh;
	position: absolute;
	object-fit: cover;
	transition: all 500ms ease-in;
`

export const LeftArrowStyle = {
	height: 50,
	width: 50,
	position: 'absolute',
	top: '45vh',
	left: '1rem',
	cursor: 'pointer',
	zIndex: 999,
}

export const RightArrowStyle = {
	height: 50,
	width: 50,
	position: 'absolute',
	top: '45vh',
	right: '1rem',
	transform: 'rotate(0.5turn)',
	cursor: 'pointer',
	zIndex: 999,
}

export const ActiveStyle = {}

export const InactiveStyle = {
	opacity: 0,
	zIndex: 0,
}
