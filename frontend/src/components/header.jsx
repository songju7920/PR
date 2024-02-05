import React from "react";
import styled from "styled-components";
import searchImg from "../assets/img/search.png";
import chattingIcon from "../assets/img/chattingIcon.png";
import alarmBellIcon from "../assets/img/alramBell.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fffcfc;
  height: 8vh;
  width: 85%;
`;

const SearchImg = styled.div`
  width: 25px;
  height: 25px;
  background-size: 25px;
  background-image: URL(${searchImg});
`;

const SearchBar = styled.input`
  margin-left: 10px;
  width: 450px;
  height: 30px;
  border: none;
  background-color: #fffcfc;
  outline: none;

  &::placeholder {
    color: #7d7979;
    font-weight: 100;
    font-size: 15px;
  }
`;

const MakeProjectBtn = styled.div`
  margin-left: auto;
  margin-right: 35px;
  width: 150px;
  height: 37px;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to bottom right, #7784fe, #45b1f0);
  color: white;
  font-size: 15px;
  font-weight: 700;
  box-shadow: none;
`;

const HeaderImages = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  background-size: 25px;
  background-image: URL(${(props) => props.img});
`;

const Bar = styled.div`
  margin: 0px 10px;
  width: 3px;
  height: 43px;
  background-color: #7d7979;
`;

const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  background-size: 35px;
  border-radius: 50px;
  background-image: URL("https://velog.velcdn.com/images/heelieben/post/675309bf-a0a3-4443-8ced-8a55ce40ce08/image.png");
`;

const Username = styled.p`
  margin-left: 25px;
  font-size: 15px;
  font-weight: 100;
  color: #7d7979;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  margin-left: 15px;
`;

function Header() {
  return (
    <Container>
      <SearchContainer>
        <SearchImg />
        <SearchBar placeholder="search projects" />
      </SearchContainer>
      <MakeProjectBtn as={"button"}>make project</MakeProjectBtn>
      <HeaderImages img={chattingIcon} />
      <HeaderImages img={alarmBellIcon} />
      <Bar />
      <ProfileContainer>
        <ProfileImg />
        <Username>Song Ju</Username>
      </ProfileContainer>
    </Container>
  );
}

export default Header;
