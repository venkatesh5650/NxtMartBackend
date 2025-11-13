import styled from "styled-components";

export const SignUpContainer = styled.div`
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

export const SignUpCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 16px;
  width: 380px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 88%;
    padding: 12px;
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: 60px;
  margin: 0 auto;
  display: block;
`;

export const SignUpTitle = styled.h2`
  color: darkgreen;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

export const AllInputContainer = styled.div`
  width: 100%;
  text-align: left; /* ✅ labels remain left aligned */
  display: flex;
  flex-direction: column;
  align-items: center; /* ✅ inputs + buttons centered */
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 85%; /* ✅ Center width */
  margin: 8px auto; /* ✅ Center block */
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0 8px;
`;

export const SignUpInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 15px;
  outline: none;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  width: 85%; /* ✅ Label aligns above its input */
  margin-top: 6px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 85%; /* ✅ Align with inputs */
  margin: 6px auto 14px;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #3b82f6;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%; /* ✅ Matches input alignment */
  margin-top: 15px;
`;

export const SignUpButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 45%;

  &:hover {
    background-color: black;
  }
`;

export const LoginButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 45%;

  &:hover {
    background-color: green;
  }
`;
