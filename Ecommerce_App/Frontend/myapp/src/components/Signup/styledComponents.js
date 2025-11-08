import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
  background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1756465869/Background_po1fpj.png");
`;

export const SignUpCard = styled.div`
  padding: 1px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 400px;
  height: 600px;

`;
export const Logo = styled.img`

  width: 70px;
  height: 40px;
  angle: 0 deg;
  opacity: 1;
`;

export const SignUpTitle = styled.h2`

  color: darkgreen;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  font-family: "Arial", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0;
  margin-top: 10px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  height: 300px;
  padding: 30px;
  border-radius: 8px;
  margin-top:0;
  margin-left: auto;
  margin-right: auto;
`;

export const AllInputContainer = styled.div`
  text-align: left;
  margin: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
`;

export const SignUpInput = styled.input`
  height: 20px;
  width: 70%;
  padding: 10px;
  color: black;
  border: none;
  outline: none;
  border-radius: 7px;
  font-size: 15px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  align-self: flex-start;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0 18px;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #3b82f6;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 40%;
  margin-left:10px;
  margin-right:10px;
  &:hover {
    background-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;


export const LoginButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 40%;
  margin-left:10px;
  margin-right:10px;
  &:hover {
    background-color: green;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;