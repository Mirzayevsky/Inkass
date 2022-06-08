import React from "react";
import {Container} from "./style"
import DrawerMain from "../../Components/Drawer/app";
import CashTable from "../../Components/CashTable";
const Cash = () => {
    return(
        <Container>
            <h1>Cash</h1>
            <DrawerMain
                title={'Add a cash'}
                firstTitle={'Cash name'}
            />
            <CashTable/>
        </Container>
    )
}
export default Cash

