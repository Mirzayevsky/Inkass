import React, {useContext, useState} from 'react';
import {Form, Modal} from 'antd';
import {MyContext} from "../../App";
import DrawerMain from "../Drawer/app";
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow} from "./style";
import PopUp from "../PopUp";

const UserTable = () => {
    const {state, dispatch} = useContext(MyContext)
    const [edit, setEdit] = useState(null);
    const [popUp, setPopUp] = useState({cancel: false})
    const {confirm} = Modal;

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

    const EditFormData = (Item) => {
        setEdit(Item);

    }

    return (
        <Container>
            {popUp.cancel ? (
                <PopUp
                    firstTitle={'Name'}
                    secondTitle={'PhoneNumber'}
                    thirdTitle={'Address'}
                    setPopUp={setPopUp}
                    edit={edit}
                />
            ) : ""
            }
            <DrawerMain
                title={"Add a user"}
                firstTitle={'Username'}
                secondTitle={'Phone Number'}
                thirdTitle={'User address'}
            />
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
                        {state.user.map((Item,Index) => (
                            <TRow key={Item.key}>
                                <TD>{Index + 1}</TD>
                                <TD>{Item.name}</TD>
                                <TD>{Item.phoneNumber}</TD>
                                <TD>{Item.address}</TD>
                                <TD>
                                    <button onClick={() => {
                                        setPopUp({cancel: true});
                                        EditFormData(Item)
                                    }}>
                                        Edit
                                    </button>
                                </TD>
                                <TD>
                                    <button onClick={() => DeleteUser(Item.key)}>Delete</button>
                                </TD>
                            </TRow>
                        ))}
                    </TBody>
                </Table>
            </TableWrapper>

        </Container>
    );
};

export default UserTable;


