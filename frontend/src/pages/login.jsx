import React, { useState } from "react";
import styled from "styled-components";
import PR_Logo from "../assets/img/PR_Logo.png";
import NotSeeImg from "../assets/img/hide_password.png";
import SeeImg from "../assets/img/see_password.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3e8ee;
  width: 45%;
  height: 100vh;
`;

const Logo = styled.div`
  background-image: url(${PR_Logo});
  background-size: 225px;
  width: 225px;
  height: 225px;
  margin-right: 20px;
`;

const WelcomeText = styled.p`
  color: #000000;
  font-family: "SUIT-Variable";
  font-weight: 600;
`;

const RightContainer = styled.div`
  width: 55%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginText = styled.p`
  font-weight: 900;
  font-size: 75px;
  margin: 9px 0px;
`;

const LoginInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 10px;
  margin: 13px 0px;
  padding-left: 17px;
  border: 0px white;
  box-shadow: 0px 0px 10px lightgray;

  &::placeholder {
    color: #909090;
    font-family: "SUIT-Variable";
  }
`;

const LoginBtn = styled.div`
  width: 320px;
  height: 40px;
  border-radius: 10px;
  margin: 9px 0px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 900;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const PWStatusImg = styled.div`
  bottom: 29px;
  left: 285px;
  width: 20px;
  height: 18px;
  position: absolute;
  background-size: 20px;
  background-image: URL(${(props) => (props.show ? SeeImg : NotSeeImg)});
`;

const ToSignupPageContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 3px;
`;

const ToSignupPage = styled.a`
  margin-left: 5px;
  font-weight: 700;
`;

function LoginPage() {
  let [showPassword, setShowPassword] = useState(false);

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <Logo />
          <WelcomeText>언제, 어디서나 팀원을 모집해보세요.</WelcomeText>
        </LeftContainer>
        <RightContainer>
          <LoginForm>
            <LoginText>Login</LoginText>
            <LoginInput placeholder="Email or ID" />
            <PasswordContainer>
              <LoginInput placeholder="password" type={showPassword ? "text" : "password"} />
              <PWStatusImg show={showPassword} onClick={changeShowPassword} />
            </PasswordContainer>
            <LoginBtn as="Button">Login</LoginBtn>
            <ToSignupPageContainer>
              계정이 없으신가요?
              <Link to="/signup">
                <ToSignupPage>회원가입 하러가기</ToSignupPage>
              </Link>
            </ToSignupPageContainer>
          </LoginForm>
        </RightContainer>
      </Container>
    </>
  );
}

export default LoginPage;
