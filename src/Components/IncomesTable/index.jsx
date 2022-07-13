import React, {useContext, useState} from 'react';
import {Form, Modal} from 'antd';
import { Context } from '../../Context/Context';
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow,Button,EditButton} from "./style";
import PopUp from "../PopUp";
import { ReactComponent as DeleteSvg } from '../../Assets/main/delete.svg';
import EditImg from "../../Assets/main/edit.png"
import IncomeDrawer from "../IncomeDrawer/app";
import IncomePopUp from "../IncomePopUp";

const IncomeTable = () => {
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
                    type: "DELETE_INCOME",
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
                <IncomePopUp
                    firstTitle={'Name'}
                    secondTitle={'PhoneNumber'}
                    thirdTitle={'Amount'}
                    fourthTitle={'Cash Number'}
                    fifthTitle={'Date'}
                    setPopUp={setPopUp}
                    edit={edit}
                />
            ) : ""
            }
            <IncomeDrawer
                title={'Add income'}
                firstTitle={'User'}
                secondTitle={'PhoneNumber'}
                thirdTitle={'Amount'}
                fourthTitle={'Cash number'}
                fifthTitle={'Date'}
            />
            <TableWrapper>
                <Table>
                    <THead>
                        <TRow>
                            <TH>#</TH>
                            <TH>Username</TH>
                            <TH>PhoneNumber</TH>
                            <TH>Amount</TH>
                            <TH>Cash number</TH>
                            <TH>Date</TH>
                            <TH>Edit</TH>
                            <TH>Delete</TH>
                        </TRow>
                    </THead>
                    <TBody>
                        {state.income.map((item,Index) => (
                            <TRow key={item.id}>
                                <TD>{Index + 1}</TD>
                                <TD>{item.username}</TD>
                                <TD>{item.phoneNumber}</TD>
                                <TD>{item.amount}</TD>
                                <TD>{item.cashNumber}</TD>
                                <TD>{item.date}</TD>
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

export default IncomeTable;


