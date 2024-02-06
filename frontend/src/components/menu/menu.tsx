import React, { useState } from "react";
import * as S from "./style.ts";
import { ReactComponent as PRLogo } from "../../assets/img/icons/logo.svg";
import { ReactComponent as Dashboard } from "../../assets/img/icons/dashboard.svg";
import { ReactComponent as Projects } from "../../assets/img/icons/projects.svg";
import { ReactComponent as Chat } from "../../assets/img/icons/chat.svg";
import { ReactComponent as Request } from "../../assets/img/icons/request.svg";
import { ReactComponent as Logout } from "../../assets/img/icons/logout.svg";
import { ReactComponent as CDashboard } from "../../assets/img/icons/Cdashboard.svg";
import { ReactComponent as CProjects } from "../../assets/img/icons/Cproject.svg";
import { ReactComponent as CChat } from "../../assets/img/icons/Cchat.svg";
import { ReactComponent as CRequest } from "../../assets/img/icons/Crequest.svg";
import { useNavigate, Link } from "react-router-dom";

function Menu() {
  const [activeIcon, setActiveIcon] = useState("dashboard");
  const navigate = useNavigate();

  const handleClick = (iconType: string) => {
    setActiveIcon(iconType);
    switch (iconType) {
      case "dashboard":
        navigate("/home");
        break;
      case "project":
        navigate("/projects");
        break;
      case "chat":
        navigate("/chat");
        break;
      case "requests":
        navigate("/requests");
        break;
      case "my_project":
        navigate("/myProject");
        break;
    }
  };

  return (
    <S.Container>
      <S.UpperMenu>
        <S.LogoWrapper>
          <PRLogo />
        </S.LogoWrapper>
        <S.MenuListContainer>
          <S.MenuContainer isActive={activeIcon === "dashboard"} onClick={() => handleClick("dashboard")}>
            {activeIcon === "dashboard" ? <CDashboard /> : <Dashboard />}
            <S.MenuName isActive={activeIcon === "dashboard"}>dashbaord</S.MenuName>
            {activeIcon === "dashboard" && <S.SelectIcon />}
          </S.MenuContainer>
          <S.MenuContainer isActive={activeIcon === "project"} onClick={() => handleClick("project")}>
            {activeIcon === "project" ? <CProjects /> : <Projects />}
            <S.MenuName isActive={activeIcon === "project"}>projects</S.MenuName>
            {activeIcon === "project" && <S.SelectIcon />}
          </S.MenuContainer>
          <S.MenuContainer isActive={activeIcon === "chat"} onClick={() => handleClick("chat")}>
            {activeIcon === "chat" ? <CChat /> : <Chat />}
            <S.MenuName isActive={activeIcon === "chat"}>chatting</S.MenuName>
            {activeIcon === "chat" && <S.SelectIcon />}
          </S.MenuContainer>
          <S.MenuContainer isActive={activeIcon === "requests"} onClick={() => handleClick("requests")}>
            {activeIcon === "requests" ? <CRequest /> : <Request />}
            <S.MenuName isActive={activeIcon === "requests"}>requests</S.MenuName>
            {activeIcon === "requests" && <S.SelectIcon />}
          </S.MenuContainer>
          <S.MenuContainer isActive={activeIcon === "my_project"} onClick={() => handleClick("my_project")}>
            {activeIcon === "my_project" ? <CProjects /> : <Projects />}
            <S.MenuName isActive={activeIcon === "my_project"}>my project</S.MenuName>
            {activeIcon === "my_project" && <S.SelectIcon />}
          </S.MenuContainer>
        </S.MenuListContainer>
      </S.UpperMenu>
      <S.LowerMenu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.MenuContainer isActive={false}>
            <Logout width="18" height="18" />
            <S.MenuName isActive={false}>log out</S.MenuName>
          </S.MenuContainer>
        </Link>
      </S.LowerMenu>
    </S.Container>
  );
}

export default Menu;
