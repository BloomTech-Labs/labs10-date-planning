import React, { useState } from "react";
import styled from "styled-components";
import posed from "react-pose";

const Container = styled.div`
  font-family: "Baumans";
  font-size: 220px;
  display: flex;
  cursor: pointer;
`;

const Up = styled.div`
  color: #81d6e3;
`;

const Four = styled.div`
  color: #ff101f;
`;
const Fours = styled.div`
  display: flex;
`;
const MirroredFour = posed.div({
  unhovered: { transform: "rotateY(0deg)", delay: 5000 },
  hovered: {
    transform: "rotateY(180deg)",
    transition: {
      type: "tween",
      duration: 1000
    }
  }
});

const SecondFour = styled(MirroredFour)`
color: #FF101F
position: absolute;
transform-origin: 67%;
`;

const UpFor = () => {
  const [hovering, setHovering] = useState(false);

  console.log("hovering", hovering);
  return (
    <Container
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <Up>Up</Up>
      <Fours>
        <Four>4</Four>
        <SecondFour pose={hovering ? "hovered" : "unhovered"}>4</SecondFour>
      </Fours>
    </Container>
  );
};


export default UpFor;
