import styled from "styled-components"
export const SidebarWrap = styled.div`
 height: calc(100vh - 80px);
 width: 260px;
 margin: auto;
 background-color: #2f2f2e;
 border-bottom-right-radius: 20px;
 position: fixed;
 left: 0;
 bottom: 0;
 padding-top: 50px;
 z-index: 99;
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
 font-size: 18px;
font-family: 'Poppins', sans-serif;
 margin-left: 15%;
`;
