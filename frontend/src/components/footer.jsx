import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: auto;
  width: 85%;
  height: 8vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #fffcfc;
`;

const Word = styled.p`
  font-size: 15px;
  margin-right: 25px;
  color: #817e7e;
`;

function Footer() {
  return (
    <Container>
      <Word>developer & contributers</Word>
    </Container>
  );
}

export default Footer;
