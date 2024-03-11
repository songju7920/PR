import React from "react";
import * as S from "./style.ts";
import { ReactComponent as ChattingIcon } from "../../assets/img/icons/chattingIcon.svg";
import { ReactComponent as AlarmBellIcon } from "../../assets/img/icons/alarmbell.svg";
import { ReactComponent as SearchIcon } from "../../assets/img/icons/searchIcon.svg";

function Header() {
  return (
    <S.Container>
      <S.SearchContainer>
        <SearchIcon />
        <S.SearchBar placeholder="search projects" />
      </S.SearchContainer>
      <S.MakeProjectBtn as={"button"}>make project</S.MakeProjectBtn>
      <S.HeaderIconWrapper>
        <ChattingIcon />
      </S.HeaderIconWrapper>
      <S.HeaderIconWrapper>
        <AlarmBellIcon />
      </S.HeaderIconWrapper>
      <S.Bar />
      <S.ProfileContainer>
        <S.ProfileImg />
        <S.Username>Song Ju</S.Username>
      </S.ProfileContainer>
    </S.Container>
  );
}

export default Header;
