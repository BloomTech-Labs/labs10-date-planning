import React from 'react';
import styled from 'styled-components';
import pose from 'react-pose';
import { render } from 'react-dom';

const UpFor = () => {
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

    const SecondFour = styled.div`
    color: #FF101F
    position: absolute;
    transform-origin: 67%;
    transform: rotateY(0deg);
    `

    

    return (
        <Container>
            <Up>Up</Up><Fours>
                <Four>4</Four>
                    <SecondFour pose={this.state.hovering ? }
                    >4</SecondFour>
            </Fours>
        </Container>)
}

export default UpFor
