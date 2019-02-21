import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { render } from 'react-dom';

const UpFor = () => {

    const [hovering, setHovering] = useState(false);

    const HoverContainer = posed.div({
        hoverable: true
    })

    const Container = styled(HoverContainer)`
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
    const MirroredFour = posed.div({
    idle: {transform: 'rotateY(0deg)'},
    hovered: {transform: 'rotateY(180deg)',
            transition: 'transform 150ms ease'}
    })
    
    const SecondFour = styled(MirroredFour)`
    color: #FF101F
    position: absolute;
    transform-origin: 67%;
    `

    
    return (
        <Container pose={hovering ? "hovered" : "idle"}
        onMouseEnter={() => {setHovering({ hovering: true }), console.log(hovering)}}
        onMouseLeave={() => {setHovering({ hovering: false }), console.log(hovering)}}>
            <Up>Up</Up><Fours><Four>4</Four><SecondFour>4</SecondFour></Fours>
        </Container>)
}

export default UpFor
