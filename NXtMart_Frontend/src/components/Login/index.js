import { useState, useEffect } from "react";
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
  PasswordRow,
  DemoLoginButton, 
} from "./styledComponents";

const Login = () => {
  //  Changed to demo credentials (safe + professional)
  const [username, setUsername] = useState("demo_user");
  const [password, setPassword] = useState("Demo@9988");

  const [showPassword, setShowPassword] = useState(false);
  const [failureMsg, setFailureMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token) navigate("/");
  }, [navigate]);

  const redirectHome = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken);
    navigate("/");
  };

  const RedirectToSignup = () => {
    navigate("/signup");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };

    const url = "https://nxtmartbackend-5.onrender.com/auth/login";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok === true) {
        localStorage.setItem("username", username);
        redirectHome(data.jwt_token);
      } else {
        setFailureMsg(data.error);
      }
    } catch (error) {
      console.log("Something Went Wrong:", error);
    }
  };

  // Auto-login using demo credentials
  const handleDemoLogin = () => {
    setUsername("demo_user");
    setPassword("Demo@9988");
  };

  return (
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
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
              />
            </InputContainer>

            <Label htmlFor="password">Password</Label>
            <InputContainer>
              <TbLockPassword size={20} color="gray" />
              <LoginInput
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />
            </InputContainer>

            <PasswordRow>
              <input
                type="checkbox"
                id="showPwd"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="showPwd">Show Password</label>
            </PasswordRow>

            {/* ✅ Demo Login Button */}
            <DemoLoginButton type="button" onClick={handleDemoLogin}>
              Use Demo Credentials
            </DemoLoginButton>

            <ButtonRow>
              <LoginButton type="submit">Login</LoginButton>
              <SignupButton type="button" onClick={RedirectToSignup}>
                SignUp
              </SignupButton>
            </ButtonRow>

            {failureMsg && <ErrorMsg>{failureMsg}</ErrorMsg>}
          </AllInputContainer>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
