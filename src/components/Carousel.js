import React, { useState, createRef } from 'react'
import {
	StyledImg,
	LeftArrowStyle,
	RightArrowStyle,
	ActiveStyle,
	InactiveStyle,
} from '../styles/Styles.js'
import { ReactComponent as Arrow } from '../images/arrow.svg'
import ImgsData from './ImgsData.json'

export default function Carousel(props) {
	const [active, setActive] = useState(0)
	const length = ImgsData.images.length

	if (length <= 0) {
		return <div>brak danych</div>
	}

	const slideLeft = () => {
		if (active === 0) {
			setActive(length - 1)
		} else {
			setActive(active - 1)
		}
		console.log(active)
	}

	const slideRight = () => {
		if (active === length - 1) {
			setActive(0)
		} else {
			setActive(active + 1)
		}
		console.log(active)
	}

	return (
		<>
			<Arrow style={LeftArrowStyle} onClick={slideLeft}></Arrow>
			<Arrow style={RightArrowStyle} onClick={slideRight}></Arrow>

			{ImgsData &&
				ImgsData.images.map((img) => {
					return (
						<StyledImg
							src={`${img.src}`}
							alt={img.alt}
							key={img.id}
							style={active === img.id ? ActiveStyle : InactiveStyle}
						/>
					)
				})}
		</>
	)
}
