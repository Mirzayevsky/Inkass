import React,{useContext} from "react";
import {Container, Title} from "./style"
import {Context } from "../../Context/Context";
import DrawerCash from "../../Components/CashDrawer/app";
import CashTable from "../../Components/CashTable";
const Cash = () => {
    return(
        <Container>
            <Title>Cash</Title>
            <CashTable/>
        </Container>
    )
}
export default Cash

