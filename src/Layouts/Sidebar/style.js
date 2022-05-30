import styled from "styled-components"
export const SidebarWrap = styled.div`
 height: 80vh;
 width: 100%;
 margin: auto;
 //background-color: #fdc43b;
 border-bottom-right-radius: 30px;
 padding-top: 50px;
`;
export const Wrapper = styled.div`
 display: flex;
 justify-content: left;
 align-items: center;
 width: 90%;
 margin:13px auto;
 padding: 10px 0;
 border-radius: 8px;
 
 
 &:hover{
background-color: #72A6BF99;
 }
`;
export const Icon = styled.div`
height: 21px;
width: 21px;
margin-left: 10%;

svg{
height: 100%;
width: 100%;
}
`;
export const LinkName = styled.div`
 color: #fff;
 font-size: 19px;
 font-weight: 500;
font-family: 'Montserrat', sans-serif; 
 margin-left: 15%;
`;
