import React from "react";
import * as S from "./style.ts";
import Menu from "../../components/menu/menu.tsx";
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";

function Chatting() {
  return (
    <>
      <Menu />
      <Header />
      <S.Container>
        <S.ChattingContainer></S.ChattingContainer>
        <Footer />
      </S.Container>
    </>
  );
}

export default Chatting;
