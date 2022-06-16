import React,{useContext} from "react";
import {Container} from "./style"
import {Context } from "../../Context/Context";
import DrawerCash from "../../Components/CashDrawer/app";
import CashTable from "../../Components/CashTable";
const Cash = () => {
    const  {state,dispatch} = useContext(Context)
    console.log(state.cash);
    return(
        <Container>
            <h1>Cash</h1>
            <CashTable/>
        </Container>
    )
}
export default Cash

