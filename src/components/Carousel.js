import React, { useState } from 'react'
import { StyledImg } from '../styles/Styles.js'

export default function Carousel(props) {
	const [currentId, setCurrentId] = useState(0)

	return (
		<>
			<StyledImg id='0' src={require('../imgs/1.jpg')} />
			<StyledImg id='1' src={require('../imgs/2.jpg')} />
		</>
	)
}
