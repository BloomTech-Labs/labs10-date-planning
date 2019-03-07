import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Container = styled.div`
	font-family: "Baumans";
	line-height: ${props => (props.main ? '500px' : '50px')};
	font-size: ${props => (props.main ? '400px' : '53px')};
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

const Fours = styled.div`
	display: flex;
	font-size: 53px;
	position: relative;
	right: 5px;
`;

const Four = posed.div({
	unhovered: { color: '#ad7e81', delay: 1000 },
	hovered: {
		color: '#dc434c',
		transition: {
			type: 'tween',
			duration: 1000,
		},
	},
});

const MirroredFour = posed.div({
	unhovered: { transform: 'rotateY(0deg)', color: '#ad7e81', delay: 1000 },
	hovered: {
		transform: 'rotateY(180deg)',
		color: '#dc434c',
		transition: {
			type: 'tween',
			duration: 1000,
		},
	},
});

const FirstFour = styled(Four)`
  color: #ad7e81;
  font-family: "Baumans";
  font-size: ${props => (props.main ? '400px' : '53px')};
  cursor: pointer;
`;

const SecondFour = styled(MirroredFour)`
  color: #ad7e81;
  /* color: #dc434c; */
  position: absolute;
  transform-origin: 70%;
`;

const UpFor = ({ main, justFour, handleClick }) => {
	const [ hovering, setHovering ] = useState(false);

	return (
		<Container
			main={main}
			onClick={handleClick}
			onMouseEnter={() => {
				setHovering(true);
			}}
			onMouseLeave={() => {
				setHovering(false);
			}}
		>
			{!justFour ? <Up main={main}>Up</Up> : null}
			<Fours>
				<FirstFour pose={hovering ? 'hovered' : 'unhovered'}>4</FirstFour>
				<SecondFour pose={hovering ? 'hovered' : 'unhovered'}>4</SecondFour>
			</Fours>
		</Container>
	);
};

export default UpFor;
