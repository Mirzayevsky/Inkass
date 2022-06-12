import styled from "styled-components"

export const Navigationbar = styled.div`
height: 80px;
width: 100vw;
position: fixed;
left: 0;
margin-left: auto;
background-color: rgb(249, 249, 249);
box-shadow: 3px 3px 6px 3px #afadad;
z-index: 91;
 .search-menu{
  width: 260px;
  margin-top: 25px;
  position: absolute;
  right: 200px;
 }

`;
export const Logo = styled.div`
position: absolute;
top: 20px;
margin-left: 30px;
color: #535050;
font-size: 28px;
font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
font-weight: 600;

span{
position: relative;
text-shadow: 1px 1px 2px  #2b2b2b;
}

`;
export const BellIcon = styled.div`
height: 34px;
width:fit-content;
position: absolute;
right: 80px;
top: 25px;
svg{
height: 100%;
width: 100%;
}
`;
export const AdminWrap = styled.div`
height: 38px;
width: 38px;
border-radius: 50%;
position: absolute;
right: 20px;
top: 22px;
img{
height: 100%;
width: 100%;
}

`;
export const NavWrap = styled.div`
width: calc(100vw - 260px);
height: calc(100vh - 80px);
position: fixed;
right: 0;
bottom: 0;
z-index: 9;
background: #f0f2f5;
`;
export const Input = styled.input`
height: 34px;
width: 260px;
border-radius: 5px;
border: 2px solid lightgray;
outline: none;
padding-left: 13px;
`;