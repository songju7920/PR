import React, { useState } from "react";
import styled from "styled-components";
import PRLogo from "../assets/img/PR_Logo.png";
import NotSeeImg from "../assets/img/hide_password.png";
import SeeImg from "../assets/img/see_password.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e3e8ee;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 110px;
  height: 110px;
  background-size: 110px;
  background-image: url(${PRLogo});
`;

const MsgUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeMsg = styled.p`
  font-family: "SUIT-Variable";
  font-size: 35px;
  font-weight: 600;
`;

const SubTitleMsg = styled.p`
  font-family: "SUIT-Variable";
  font-size: 20px;
  font-weight: 600;
  margin: -10px 0px 0px 20px;
`;

const RightContainer = styled.div`
  width: 55%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignupForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  padding-left: 20px;
  border: 0px white;
  border-radius: 15px;
  margin: 10px 0px;
  width: 400px;
  height: 40px;
  box-shadow: 0px 0px 10px #c9c7d8;

  &::placeholder {
    color: #909090;
    font-family: "SUIT-Variable";
    font-size: 15px;
    font-weight: 700px;
  }
`;

const SubmitBtn = styled.div`
  margin: 10px 0px;
  width: 425px;
  height: 45px;
  background-color: ${(props) => (props.isDisabled ? "gray" : "black")};
  color: white;
  font-family: "SUIT-Variable";
  border-radius: 15px;
  font-size: 20px;
  font-weight: 800;
`;

const ToLogin = styled.a`
  font-family: "SUIT-Variable";
  font-size: 12px;
  font-weight: 700;
`;

const PasswordSeeBtn = styled.div`
  width: 20px;
  height: 20px;
  background-size: 20px;
  background-image: URL(${(props) => (props.showPassword ? SeeImg : NotSeeImg)});
  position: absolute;
  bottom: 21px;
  right: 18px;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

function SignUp() {
  const [userData, setUserData] = useState({
    userId: "",
    email: "",
    major: "",
    skills: "",
    password: "",
    chackPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { userId, email, major, skills, password, chackPassword } = userData;

  const isPasswordMatch = password === chackPassword;
  const isAllChacked = userId !== "" && email !== "" && major !== "" && skills !== "" && password !== "" && chackPassword !== "";

  return (
    <>
      <Container>
        <LeftContainer>
          <MsgUpperContainer>
            <Logo />
            <WelcomeMsg>에 오신걸 환영해요!</WelcomeMsg>
          </MsgUpperContainer>
          <SubTitleMsg>PR을 이용하기전에, 당신에 대해 알려주세요!</SubTitleMsg>
        </LeftContainer>
        <RightContainer>
          <SignupForm onChange={inputChangeHandler}>
            <Input placeholder="userID" value={userId} name="userId" />
            <Input placeholder="email" value={email} name="email" type="email" />
            <Input placeholder="major" value={major} name="major" />
            <Input placeholder="skill" value={skills} name="skills" />
            <PasswordContainer>
              <Input placeholder="password" value={password} name="password" type={showPassword ? "text" : "password"} />
              <PasswordSeeBtn showPassword={showPassword} onClick={changeShowPassword} />
            </PasswordContainer>
            <PasswordContainer>
              <Input placeholder="password chack" value={chackPassword} name="chackPassword" type={showPassword ? "text" : "password"} />
              <PasswordSeeBtn showPassword={showPassword} onClick={changeShowPassword} />
            </PasswordContainer>
            <SubmitBtn as={"button"} disabled={!(isPasswordMatch && isAllChacked)} isDisabled={!(isPasswordMatch && isAllChacked)}>
              Sign In
            </SubmitBtn>
            <Link to="/">
              <ToLogin>로그인 화면으로 돌아가기</ToLogin>
            </Link>
          </SignupForm>
        </RightContainer>
      </Container>
    </>
  );
}

export default SignUp;
