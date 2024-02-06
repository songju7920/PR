import React from "react";
import * as S from "./style.ts";
import { ReactComponent as PRLogo } from "../../assets/img/icons/logo.svg";
import { ReactComponent as Dashboard } from "../../assets/img/icons/dashboard.svg";
import { ReactComponent as Projects } from "../../assets/img/icons/projects.svg";
import { ReactComponent as Chat } from "../../assets/img/icons/chat.svg";
import { ReactComponent as Request } from "../../assets/img/icons/request.svg";
import { ReactComponent as Logout } from "../../assets/img/icons/logout.svg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <S.Container>
      <S.UpperMenu>
        <S.LogoWrapper>
          <PRLogo />
        </S.LogoWrapper>
        <S.MenuListContainer>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <S.MenuContainer>
              <Dashboard width="18" height="18" />
              <S.MenuName>dashbaord</S.MenuName>
            </S.MenuContainer>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <S.MenuContainer>
              <Projects width="18" height="18" />
              <S.MenuName>projects</S.MenuName>
            </S.MenuContainer>
          </Link>
          <Link to="/chat" style={{ textDecoration: "none" }}>
            <S.MenuContainer>
              <Chat width="18" height="18" />
              <S.MenuName>chatting</S.MenuName>
            </S.MenuContainer>
          </Link>
          <Link to="/requests" style={{ textDecoration: "none" }}>
            <S.MenuContainer>
              <Request width="18" height="18" />
              <S.MenuName>requests</S.MenuName>
            </S.MenuContainer>
          </Link>
          <Link to="/myproject" style={{ textDecoration: "none" }}>
            <S.MenuContainer>
              <Projects width="18" height="18" />
              <S.MenuName>dashbaord</S.MenuName>
            </S.MenuContainer>
          </Link>
        </S.MenuListContainer>
      </S.UpperMenu>
      <S.LowerMenu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.MenuContainer>
            <Logout width="18" height="18" />
            <S.MenuName>log out</S.MenuName>
          </S.MenuContainer>
        </Link>
      </S.LowerMenu>
    </S.Container>
  );
}

export default Menu;
