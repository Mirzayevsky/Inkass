import React from "react";
import {Container, Title} from "./style";
import UserTable from "../../Components/Table";
const Users = () => {
    return(
        <Container>
            <Title>Users</Title>
            <UserTable/>
        </Container>
    )
}
export default Users;