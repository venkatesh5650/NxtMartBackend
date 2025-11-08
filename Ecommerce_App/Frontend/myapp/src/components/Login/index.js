import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import {
  LoginContainer,
  Logo,
  LoginCard,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  ButtonRow,
  SignupButton,
  AllInputContainer,
  Label,
  InputContainer,
  ErrorMsg,
} from "./styledComponents";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failureMsg, setFailureMsg] = useState("");

  const navigate = useNavigate();

  const redirectHome = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken);
    navigate("/"); // ✅ replaces history.replace
  };

  const RedirectToSignup = () => {
    navigate("/signup");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    // Handle login logic here
    const userDetails = {
      username,
      password,
    };
    const url = "http://localhost:5000/auth/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      if (response.ok === true) {
        redirectHome(data.jwt_token);
      } else {
        setFailureMsg(data.error);
      }
    } catch (error) {
      console.log("Something Went Wrong Try Again:", error);
    }
  };

  return (
    <div>
      <LoginContainer>
        <LoginCard>
          <Logo
            src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png"
            alt="Logo"
          />
          <LoginTitle>Login</LoginTitle>
          <LoginForm onSubmit={handleLogin}>
            <AllInputContainer>
              <Label htmlFor="username">Username</Label>
              <InputContainer>
                <CgProfile size={20} color="gray" />
                <LoginInput
                  type="text"
                  placeholder="Enter Your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                />
              </InputContainer>

              <Label htmlFor="username">Password</Label>
              <br />
              <InputContainer>
                <TbLockPassword size={20} color="gray" />
                <LoginInput
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputContainer>
              <ButtonRow>
                <LoginButton type="Submit">Login</LoginButton>
                <SignupButton type="button" onClick={RedirectToSignup}>
                  SignUp
                </SignupButton>
              </ButtonRow>

              {failureMsg && <ErrorMsg>{failureMsg}</ErrorMsg>}
            </AllInputContainer>
          </LoginForm>
        </LoginCard>
      </LoginContainer>
    </div>
  );
};

export default Login;
