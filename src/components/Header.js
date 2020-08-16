import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  position: fixed;
  top: 0;
  left:0;
  right:0;
`;
const Initials = styled.h1`
  text-align: left;
  color: lightcoral;
  margin-left:10px;
`;

const Title = styled.h1`
  text-align: center;
`;
const Menu = styled.h1`
  color: lightskyblue;
  margin-right: 10px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Initials>JR</Initials>
      <Title>Jim Ryan | Portfolio</Title>
      <Menu>&#9776;</Menu>
    </Wrapper>
  );
};

export default Header;
