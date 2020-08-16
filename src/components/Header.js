import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
`;
const Initials = styled.h1`
  text-align: left;
  color: green;
`;

const Title = styled.h1`
  text-align: center;
`;
const Menu = styled.h1`
  color: red;
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
