import styled from "styled-components";
import NumberFormat from "react-number-format";
export const Container = styled.div`

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