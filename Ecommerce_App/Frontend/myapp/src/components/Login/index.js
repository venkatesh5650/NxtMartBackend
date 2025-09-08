import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import {
  LoginContainer,
  Logo,
  LoginCard,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  AllInputContainer,
  Label,
  InputContainer,
} from "./styledComponents";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const redirectHome = (jwtToken) => {
    localStorage.setItem("jwt_token", jwtToken);
    navigate("/", { replace: true }); // ✅ replaces history.replace
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
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = response.json();
      return redirectHome(data.jwt_token);
    } else {
      console.log("Login Failed");
    }

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
                <LoginButton type="submit">Login</LoginButton>
              </AllInputContainer>
            </LoginForm>
          </LoginCard>
        </LoginContainer>
      </div>
    );
  };
};

export default Login;
