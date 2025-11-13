import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1756465869/Background_po1fpj.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1762679187/Background_4_zyy2ep.png");
  }
`;

export const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  padding: 25px 20px;
  width: 400px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.18);

  @media (max-width: 600px) {
    width: 92%;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  display: block;
  margin: 0 auto 10px;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  color: darkgreen;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AllInputContainer = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 12px 0;
  border-radius: 7px;
  padding: 0 10px;
  border: 1px solid #cbd5e1;
  background: #fff;

  &:focus-within {
    border-color: #16a34a;
    box-shadow: 0 0 4px rgba(22, 163, 74, 0.4);
  }
`;

export const LoginInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding-left: 8px;
  font-size: 16px;

  @media (min-width: 600px) {
    margin-left: 20px;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`;

export const PasswordRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: -5px 0 15px;

  label {
    cursor: pointer;
    font-size: 14px;
    color: #334155;
  }

  input {
    width: 18px;
    height: 18px;
    accent-color: #16a34a;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    label {
      font-size: 13px;
    }
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LoginButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: green;
  color: white;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: black;
    transform: scale(1.04);
  }
`;

export const DemoLoginButton = styled.button`
  width: 100%;
  background-color: #e6e6e6;
  color: #333;
  padding: 10px;
  border-radius: 6px;
  border: none;
  margin: 12px 0;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #d1d1d1;
  }
`;

export const SignupButton = styled(LoginButton)`
  background-color: black;

  &:hover {
    background-color: green;
  }
`;

export const ErrorMsg = styled.p`
  color: #dc2626;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;
