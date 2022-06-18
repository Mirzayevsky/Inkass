import React from "react";
import {Container, Title} from "./style";
import IncomeDrawer from "../../Components/IncomeDrawer/app";
import IncomeTable from "../../Components/IncomesTable";

const Profit = () => {
    return(
        <Container>
            <Title>Incomes</Title>
            <IncomeTable/>
        </Container>
    )
}
export default Profit