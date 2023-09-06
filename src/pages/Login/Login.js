import React from "react";
import * as L from "../../styles/Login/Login.style";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <L.LoginLayout>
      <L.Wrapper>
        <L.LoginContainer>
          <L.Title>
            <L.SignMove onClick={() => navigate("/signup")}>
              Sign up →
            </L.SignMove>
            <L.LogoName>GymPTI</L.LogoName>
            <L.WelcomeMessage>
              나만의 AI PT쌤을 만나러 가볼까요?
            </L.WelcomeMessage>
          </L.Title>
          <L.LoginIdBox>
            <L.IdLabel>ID</L.IdLabel>
            <L.IdInput></L.IdInput>
          </L.LoginIdBox>
          <L.LoginPwBox>
            <L.PwLabel>PW</L.PwLabel>
            <L.PwInput></L.PwInput>
          </L.LoginPwBox>
          <L.LoginBtn>LOGIN</L.LoginBtn>
        </L.LoginContainer>
      </L.Wrapper>
    </L.LoginLayout>
  );
}

export default Login;
