import React, {useContext, useState} from 'react';
import {Form, Modal} from 'antd';
import {MyContext} from "../../App";
import DrawerMain from "../Drawer/app";
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow} from "./style";
import PopUp from "../PopUp";

const SearchTable = ({filterData}) => {
    const {dispatch} = useContext(MyContext)
    const [edit, setEdit] = useState(null);
    const [popUp, setPopUp] = useState({cancel: false})
    const {confirm} = Modal;

    const deleteUser = (id) => {
        confirm({
            title: 'Are you sure delete this Data?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch({
                    type: "DELETE_USER",
                    payload: id
                })
            },
        })
    }

    const EditFormData = ({item}) => {
        setEdit(item);
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
                        {filterData?.map((item,Index) => (
                            <TRow key={item.id}>
                                <TD>{Index + 1}</TD>
                                <TD>{item.mname}</TD>
                                <TD>{item.phoneNumber}</TD>
                                <TD>{item.address}</TD>
                                <TD>
                                    <button onClick={() => {
                                        setPopUp({cancel: true});
                                        EditFormData(item)
                                    }}>
                                        Edit
                                    </button>
                                </TD>
                                <TD>
                                    <button onClick={() => deleteUser(item.id)}>Delete</button>
                                </TD>
                            </TRow>
                        ))}
                    </TBody>
                </Table>
            </TableWrapper>

        </Container>
    );
};

export default SearchTable;


