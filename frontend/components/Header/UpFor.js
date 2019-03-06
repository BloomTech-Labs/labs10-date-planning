import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Container = styled.div`
	font-family: "Baumans";
	line-height: ${props => (props.main ? '500px' : '50px')};
	/* height: ${props => props.main && '300px'}; */
	font-size: ${props => (props.main ? '400px' : '50px')};
	display: flex;
	cursor: pointer;
`;

const Up = styled.div`
	color: ${props => (props.main ? '#81d6e3' : 'white')};
	/*color: #81d6e3; */
	font-family: "Baumans";
	font-size: ${props => (props.main ? '400px' : '50px')};

	cursor: pointer;
`;

const Four = styled.div`
	color: #ff101f;
	font-family: "Baumans";
	font-size: ${props => (props.main ? '400px' : '50px')};

	cursor: pointer;
`;
const Fours = styled.div`display: flex;`;
const MirroredFour = posed.div({
	unhovered: { transform: 'rotateY(0deg)', delay: 5000 },
	hovered: {
		transform: 'rotateY(180deg)',
		transition: {
			type: 'tween',
			duration: 1000,
		},
	},
});

const SecondFour = styled(MirroredFour)`
color: #FF101F;
position: absolute;
transform-origin: 70%;
`;

const UpFor = ({ main, justFour }) => {
	const [ hovering, setHovering ] = useState(false);

	console.log('hovering', hovering);
	return (
		<Container
			main={main}
			onMouseEnter={() => {
				setHovering(true);
			}}
			onMouseLeave={() => {
				setHovering(false);
			}}
		>
			{!justFour ? <Up main={main}>Up</Up> : null} 
			<Fours>
				<Four main={main}>4</Four>
				<SecondFour pose={hovering ? 'hovered' : 'unhovered'}>4</SecondFour>
			</Fours>
		</Container>
	);
};

export default UpFor;
