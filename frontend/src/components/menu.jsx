import React from "react";
import styled from "styled-components";
import PRLogo from "../assets/img/PR_Logo.png";
import dashboardImg from "../assets/img/dashboardImg.png";
import projectImg from "../assets/img/projectImg.png";
import chatingImg from "../assets/img/chatingImg.png";
import requestImg from "../assets/img/requestImg.png";
import logoutImg from "../assets/img/logout.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;

const UpperMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 92vh;
  background-color: #e3e8ee;
`;

const LowerMenu = styled.div`
  padding-left: 25px;
  height: 8vh;
  background-color: #f8f7f5;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  margin: 20px 20px 25px 0px;
  width: 120px;
  height: 120px;
  background-size: 120px;
  background-image: URL(${PRLogo});
`;

const MenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuContainer = styled.div`
  margin-right: 40px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuImg = styled.div`
  width: 18px;
  height: 18px;
  background-size: 18px;
  background-image: URL(${(props) => props.img});
  margin-right: 15px;
`;

const MenuName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #817e7e;
`;

function Menu() {
  return (
    <Container>
      <UpperMenu>
        <Logo />
        <MenuListContainer>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <MenuContainer>
              <MenuImg img={dashboardImg} />
              <MenuName>dashbaord</MenuName>
            </MenuContainer>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <MenuContainer>
              <MenuImg img={projectImg} />
              <MenuName>projects</MenuName>
            </MenuContainer>
          </Link>
          <Link to="/chat" style={{ textDecoration: "none" }}>
            <MenuContainer>
              <MenuImg img={chatingImg} />
              <MenuName>chatting</MenuName>
            </MenuContainer>
          </Link>
          <Link to="/requests" style={{ textDecoration: "none" }}>
            <MenuContainer>
              <MenuImg img={requestImg} />
              <MenuName>request</MenuName>
            </MenuContainer>
          </Link>
          <Link to="/user/projects" style={{ textDecoration: "none" }}>
            <MenuContainer>
              <MenuImg img={projectImg} />
              <MenuName>my projects</MenuName>
            </MenuContainer>
          </Link>
        </MenuListContainer>
      </UpperMenu>
      <LowerMenu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <MenuContainer>
            <MenuImg img={logoutImg} />
            <MenuName>log out</MenuName>
          </MenuContainer>
        </Link>
      </LowerMenu>
    </Container>
  );
}

export default Menu;
