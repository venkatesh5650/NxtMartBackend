import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import {
  SignUpContainer,
  Logo,
  SignUpCard,
  SignUpTitle,
  SignUpForm,
  SignUpInput,
  AllInputContainer,
  Label,
  InputContainer,
  Row,
  Checkbox,
  ButtonRow,
  SignUpButton,
  LoginButton,
} from "./styledComponents";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const RedirectToLogin = () => {
    navigate("/login");
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const userDetails = { name, username, password, email };
    const url = "https://nxtmartbackend-5.onrender.com/auth/register";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });

    
    const data = await response.json();
    if (response.ok) {
      alert("User Registered Successfully");
      navigate("/login", { replace: true });
    } else {
      alert(data.error);
    }
  };

  return (
    <SignUpContainer>
      <SignUpCard>
        <Logo src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png" />
        <SignUpTitle>Signup</SignUpTitle>

        <SignUpForm onSubmit={handleSignUp}>
          <AllInputContainer>
            <Label>Name</Label>
            <InputContainer>
              <CiUser size={20} color="gray" />
              <SignUpInput value={name} onChange={(e) => setName(e.target.value)} />
            </InputContainer>

            <Label>Username</Label>
            <InputContainer>
              <CgProfile size={20} color="gray" />
              <SignUpInput value={username} onChange={(e) => setUsername(e.target.value)} />
            </InputContainer>

            <Label>Password</Label>
            <InputContainer>
              <TbLockPassword size={20} color="gray" />
              <SignUpInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>

            <Row>
              <Checkbox type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
              <label style={{ cursor: "pointer", fontSize: 14 }}>Show password</label>
            </Row>

            <Label>Email</Label>
            <InputContainer>
              <CgProfile size={20} color="gray" />
              <SignUpInput value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputContainer>

            <ButtonRow>
              <SignUpButton type="submit">SignUp</SignUpButton>
              <LoginButton type="button" onClick={RedirectToLogin}>Login</LoginButton>
            </ButtonRow>
          </AllInputContainer>
        </SignUpForm>
      </SignUpCard>
    </SignUpContainer>
  );
};

export default SignUp;
