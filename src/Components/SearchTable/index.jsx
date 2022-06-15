import React, {useContext, useState} from 'react';
import {Form, Modal} from 'antd';
import { Context } from '../../Context/Context';
import DrawerMain from "../Drawer/app";
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow,Button} from "./style";
import PopUp from "../PopUp";
import { ReactComponent as DeleteSvg } from '../../Assets/main/delete.svg';
import EditImg from "../../Assets/main/edit.png"



const SearchTable = ({filterData}) => {
    const {dispatch} = useContext(Context)
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
                                <TD>{item.name}</TD>
                                <TD>{item.phoneNumber}</TD>
                                <TD>{item.address}</TD>
                                <TD>
                                    <Button onClick={() => {
                                        setPopUp({cancel: true});
                                        EditFormData(item)
                                    }}>
                                        <img src={EditImg} alt={"edit"}/>
                                    </Button>
                                </TD>
                                <TD>
                                    <Button onClick={() => deleteUser(item.id)}>
                                        <DeleteSvg/>
                                    </Button>
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


