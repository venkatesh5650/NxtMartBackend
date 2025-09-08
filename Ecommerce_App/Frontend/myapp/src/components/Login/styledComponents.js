import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
  background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1756465869/Background_po1fpj.png");
`;

export const LoginCard = styled.div`
  padding:1px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   border-radius: 4px;
   padding-top:15px;
   padding-bottom:15px;
   width: 450px;
   height: 450px;
  `;
export const Logo = styled.img`

  width: 119px;
  height: 65px
  angle: 0 deg;
  opacity: 1;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
  color: darkgreen;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  font-family: "Arial", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin:0;
  margin-top:10px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  height: 300px;
  padding: 30px;
  border-radius: 8px;
  margin-left: auto;
    margin-right: auto;
 
`;



export const AllInputContainer = styled.div`
  text-align: left;
  margin:0;
`;

export const InputContainer = styled.div`
 display: flex;
 flex-direction: row;
justify-content: space-around;
align-items: center;
height: 50px;
width:100%;
margin-top:10px;
margin-bottom:10px;
border: 1px solid #ccc;
border-radius: 7px;
`;

export const LoginInput = styled.input`
    height: 24px;
    width: 70%;
    padding: 10px;
    color:black;
    border:none;
    outline:none;
    border-radius: 7px;
    font-size: 18px;
    
    `;

export const Label = styled.label`
    font-size: 16px;
    font-weight: 400;
    align-self: flex-start;
    
    
 `;


export const LoginButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
   width: 100%;
  &:hover {
    background-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
