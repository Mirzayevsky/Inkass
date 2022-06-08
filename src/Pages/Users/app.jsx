import React, { useEffect } from "react";
import {Container, Title} from "./style";
import UserTable from "../../Components/UserTable";

const Users = () => {

    return(
        <Container>
            <Title>Users</Title>
            <UserTable/>
        </Container>
    )
}
export default Users;