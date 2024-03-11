import React from "react";
import * as S from "./style.ts";
import Menu from "../../components/menu/menu.tsx";
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";
import { ReactComponent as Tel } from "../../assets/img/icons/telIcon.svg";
import { ReactComponent as Mail } from "../../assets/img/icons/mail.svg";

function Home() {
  return (
    <>
      <Menu />
      <Header />
      <S.Container>
        <S.DashboardContainer>
          <S.Title>DashBoard</S.Title>
          <S.ProfileContainer>
            <S.ProfileImg />
            <S.Username>dev_songju</S.Username>
            <S.Major>back_end developer</S.Major>
          </S.ProfileContainer>
          <S.GithubContainer>
            <S.SubTitle>github info</S.SubTitle>
            <S.NoGitConnectionMsg>No Github Connection</S.NoGitConnectionMsg>
            <S.ConnectionBtn as={"button"}>connect now!</S.ConnectionBtn>
          </S.GithubContainer>
          <S.ConnectContainer>
            <S.SubTitle>connect</S.SubTitle>
            <S.BoxContainer>
              <S.Box>
                <Tel />
                <S.BoxText>010-7339-9355</S.BoxText>
              </S.Box>
              <S.Box>
                <Mail />
                <S.BoxText>dhthdwn7920@gmail.com</S.BoxText>
              </S.Box>
            </S.BoxContainer>
          </S.ConnectContainer>
          <S.ProjectContainer>
            <S.SubTitle>project</S.SubTitle>
            <S.BoxContainer>
              <S.Box></S.Box>
              <S.Box></S.Box>
              <S.Box></S.Box>
            </S.BoxContainer>
          </S.ProjectContainer>
          <S.SkillsContainer>
            <S.SubTitle>skills</S.SubTitle>
            <S.BoxContainer>
              <S.Box></S.Box>
              <S.Box></S.Box>
              <S.Box></S.Box>
            </S.BoxContainer>
          </S.SkillsContainer>
        </S.DashboardContainer>
        <Footer />
      </S.Container>
    </>
  );
}

export default Home;
