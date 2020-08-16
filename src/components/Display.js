import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 100px;
  border: 1px solid blue;
`;

const Display = () => {
  return (
    <Wrapper>
      <div>Sup</div>
      <h1>My name is Jim</h1>
      <h2>I am a Web devloper</h2>
    </Wrapper>
  );
};

export default Display;
