import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fffcfc;
  height: 8vh;
  width: 85%;
`;

export const SearchBar = styled.input`
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

export const MakeProjectBtn = styled.div`
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

export const HeaderIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  background-size: 25px;
`;

export const Bar = styled.div`
  margin: 0px 10px;
  width: 3px;
  height: 43px;
  background-color: #7d7979;
`;

export const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  background-size: 35px;
  border-radius: 50px;
  background-image: URL("https://velog.velcdn.com/images/heelieben/post/675309bf-a0a3-4443-8ced-8a55ce40ce08/image.png");
`;

export const Username = styled.p`
  margin-left: 25px;
  font-size: 15px;
  font-weight: 100;
  color: #7d7979;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  margin-left: 15px;
`;
