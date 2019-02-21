import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { render } from 'react-dom';

const UpFor = () => {

    const [hovering, setHovering] = useState(false);

    const Container = styled.div`
    font-family: 'Baumans';
    font-size: 220px;
    display: flex;
    cursor: pointer;
    `

    const Up = styled.div`
    color: #81D6E3;`

    const Four = styled.div`
    color: #FF101F
    `
    const Fours = styled.div`
    display: flex;
    `
    const MirroredFour = posed.div`
    idle: {transform: rotateY(0deg)}
    hovered: {transform: rotateY(180deg)}
    `
    
    const SecondFour = styled(MirroredFour)`
    color: #FF101F
    position: absolute;
    transform-origin: 67%;
    `

    
    return (
        <Container>
            <Up>Up</Up><Fours><Four>4</Four><SecondFour posed={hovering ? "hovered" : "idle"}
          onMouseEnter={() => setHovering({ hovering: true })}
          onMouseLeave={() => setHovering({ hovering: false })}>4</SecondFour></Fours>
        </Container>)
}

export default UpFor
