import React, {useContext, useState} from 'react';
import {Form, Modal} from 'antd';
import { Context } from '../../Context/Context';
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow,Button,EditButton} from "./style";
import PopUp from "../PopUp";
import { ReactComponent as DeleteSvg } from '../../Assets/main/delete.svg';
import EditImg from "../../Assets/main/edit.png"
import DrawerCash from '../CashDrawer/app';
import CashPopUp from '../CashPopUp';

const CashTable = () => {
    const {state, dispatch} = useContext(Context)
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
                    type: "DELETE_CASH",
                    payload: id
                })
            },
        })
    }

    const EditFormData = (item) => {
        setEdit(item);
    }

    return (
        <Container>
            {popUp.cancel ? (
               <CashPopUp
               firstTitle={'Cash name'}
               setPopUp={setPopUp}
               edit={edit}
               />
            ) : ""
            }
           <DrawerCash
           title={'Cash'}
           firstTitle={'Cashnumber'}
           />
            <TableWrapper>
                <Table>
                    <THead>
                        <TRow>
                            <TH>#</TH>
                            <TH>Name</TH>
                            <TH>Edit</TH>
                            <TH>Delete</TH>
                        </TRow>
                    </THead>
                    <TBody>
                        {state.cash.map((item,Index) => (
                            <TRow key={item.id}>
                                <TD>{Index + 1}</TD>
                                <TD>{item.cashNumber}</TD>
                                <TD>
                                    <EditButton onClick={() => {
                                        setPopUp({cancel: true});
                                        EditFormData(item)
                                    }}>
                                        <img src={EditImg} alt={"edit"}/>
                                    </EditButton>
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

export default CashTable;


