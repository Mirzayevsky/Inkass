import React, {useContext, useEffect, useState} from 'react';
import {Form, Modal} from 'antd';
import {MyContext} from "../../App";
import DrawerMain from "../Drawer/app";
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow} from "./style";
import PopUp from "../PopUp";

const UserTable = () => {
    const [form] = Form.useForm();
    const {state, dispatch} = useContext(MyContext)
    const {confirm} = Modal;
    const [edit, setEdit] = useState(null);

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'phoneNumber',
            dataIndex: 'phoneNumber',
            width: '20%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, item) => {
                return (
                    <>

                    </>
                )
            }
        },
    ];

    const DeleteUser = (key) => {
        confirm({
            title: 'Are you sure delete this Data?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch({
                    type: "DELETE_USER",
                    payload: key
                })
            },
        })
    }

    const EditForm = (item) => {
        setEdit(item);
        // dispatch({
        //     type: "EDIT_USER",
        //     payload: item
        // })
    }

    return (
        <Container>
            {edit ?
                <PopUp
                    firstTitle={'Name'}
                    secondTitle={'PhoneNumber'}
                    thirdTitle={'Address'}
                />
            : ""}
            <DrawerMain
                title={"Add a user"}
                firstTitle={'Username'}
                secondTitle={'Phone Number'}
                thirdTitle={'User address'}
            />
            {/* <Form form={form} component={false}> */}
            <TableWrapper>
                <Table>
                    <THead bg="#72a6bf">
                        <TRow>
                            <TH>#</TH>
                            <TH>Name</TH>
                            <TH>PhoneNumber</TH>
                            <TH>Address</TH>
                            <TH>Edit</TH>
                            <TH>Delete</TH>
                        </TRow>
                    </THead>
                    <TBody>
                        {state.user.map((Item) => (
                            <TRow key={Item.key}>
                                <TD>{Item.key + 1}</TD>
                                <TD>{Item.name}</TD>
                                <TD>{Item.phoneNumber}</TD>
                                <TD>{Item.address}</TD>
                                <TD>
                                    <button onClick={() => EditForm(Item)}>Edit</button>
                                </TD>
                                <TD>
                                    <button onClick={() => DeleteUser(Item.key)}>Delete</button>
                                </TD>
                            </TRow>
                        ))}
                    </TBody>
                </Table>
            </TableWrapper>

            {/* </Form> */}
        </Container>
    );
};

export default UserTable;


