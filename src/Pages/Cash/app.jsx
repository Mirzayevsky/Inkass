import React,{useContext} from "react";
import {Container} from "./style"
import {Context } from "../../Context/Context";
import DrawerCash from "../../Components/CashDrawer/app";
const Cash = () => {
    const  {state,dispatch} = useContext(Context)
    return(
        <Container>
            <h1>Cash</h1>
            <DrawerCash
             title={'Add a cash'}
             firstTitle={'Cash name'} />
        </Container>
    )
}
export default Cash

