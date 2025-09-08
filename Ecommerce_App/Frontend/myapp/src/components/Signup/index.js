import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom"; // ✅ import

import {
  SignUpContainer,
  Logo,
  SignUpCard,
  SignUpTitle,
  SignUpForm,
  SignUpInput,
  SignUpButton,
  AllInputContainer,
  Label,
  InputContainer,
  Row,
  Checkbox,
  LoginButton,
} from "./styledComponents";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleSignUp = async (event) => {
    event.preventDefault();
    // Handle login logic here
    const userDetails = {
      name,
      username,
      password,
      email,
    };
    const url = "http://localhost:5000/auth/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      navigate("/", { replace: true }); // ✅ replaces history.replace
      alert("User Registered Successfully");
    } else {
      alert(data.error_msg);
    }
  };

  return (
    <div>
      <SignUpContainer>
        <SignUpCard>
          <Logo
            src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png"
            alt="Logo"
          />
          <SignUpTitle>Signup</SignUpTitle>
          <SignUpForm onSubmit={handleSignUp}>
            <AllInputContainer>
              <Label htmlFor="username">Name</Label>
              <InputContainer>
                <CiUser size={20} color="gray" />
                <SignUpInput
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="username"
                />
              </InputContainer>
              <Label htmlFor="username">Username</Label>
              <InputContainer>
                <CgProfile size={20} color="gray" />
                <SignUpInput
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
                <SignUpInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputContainer>
              <Row>
                <Checkbox
                  id="showPwd"
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                <label
                  htmlFor="showPwd"
                  style={{ cursor: "pointer", color: "#334155", fontSize: 14 }}
                >
                  Show password
                </label>
              </Row>

              <Label htmlFor="username">Email</Label>
              <InputContainer>
                <CgProfile size={20} color="gray" />
                <SignUpInput
                  type="text"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="username"
                />
              </InputContainer>
              <SignUpButton type="submit">SignUp</SignUpButton>
              <LoginButton type="submit">Login</LoginButton>
            </AllInputContainer>
          </SignUpForm>
        </SignUpCard>
      </SignUpContainer>
    </div>
  );
};

export default SignUp;
