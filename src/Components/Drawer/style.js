import styled from "styled-components";
import NumberFormat from "react-number-format";
export const AddButton = styled.div`
margin-bottom: 30px;
height: 38px;
width: 110px;
background-color: black;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
border-radius: 3px;
cursor: pointer;

`;

export const InputWrap = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
margin: auto;
.input{
  width: 280px;
  height: 40px;
  outline: none;
  border: 3px solid rgb(114, 166, 191);
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 15px;
}
`;
export const Label = styled.div`
 font-size: 14px;
 font-weight: 500;
 font-family: 'Poppins', sans-serif;
 margin-bottom: 7px;

`;

export const InputPhoneNumber = styled(NumberFormat)`
  width: 280px;
  height: 40px;
  outline: none;
  border: 3px solid rgb(114, 166, 191);
  border-radius: 5px;
  padding: 3px 10px;
  margin-bottom: 10px;
`;
export const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-weight: 500;
font-family: 'Poppins', sans-serif;
width: 80%;
margin: auto;
position: absolute;
bottom: 10%;
right: 10%;

`;
export const CancelButton = styled.button`
height: 38px;
width: 100px;
border-radius: 5px;
background-color: #f20f20;
margin: 0 5px;
&:hover{
transition: .5s ease;
background-color: rgba(242,15,32,0.8);
cursor: pointer;
}
`;
export const SaveButton = styled.button`
height: 38px;
width: 100px;
border-radius: 5px;
background-color: #13bb13;
margin-left: 20px;

&:hover{
transition: .5s ease;
background-color: rgba(19,187,19,0.76);
cursor: pointer;
}

`;