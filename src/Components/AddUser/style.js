import styled from "styled-components"
import NumberFormat from "react-number-format";
export const Container = styled.div`
height: 100vh;
width: 100%;
backdrop-filter: blur(10px);
background-color: #2b2b2b;
position: fixed;
top: 0;
left: 0;
z-index: 999;
display: flex;
align-items: center;
justify-content: center;
`;
export const Wrapper = styled.div`
height: 50%;
width: 50%;
background-color: white;
border-radius: 10px;
padding: 20px;
`;
export const Title = styled.div`
color: #2b2b2b;
font-size: 21px;
font-weight: 500;
font-family: 'Poppins', sans-serif;
text-align: center;
margin-bottom: 20px;
`;
export const InputWrap = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
margin: auto;

`;
export const Label = styled.div`
 font-size: 18px;
 font-weight: 500;
 font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
`;
export const Input = styled.input`
  width: 280px;
  height: 40px;
  outline: none;
  border: 3px solid rgb(114, 166, 191);
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 20px;
`;
export const InputPhoneNumber = styled(NumberFormat)`
  width: 280px;
  height: 40px;
  outline: none;
  border: 3px solid rgb(114, 166, 191);
  border-radius: 5px;
  padding: 3px;
`;
export const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-weight: 500;
font-family: 'Poppins', sans-serif;
width: 80%;
margin: 20px auto;



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
margin: 0 5px;
&:hover{
transition: .5s ease;
background-color: rgba(19,187,19,0.76);
cursor: pointer;
}

`;