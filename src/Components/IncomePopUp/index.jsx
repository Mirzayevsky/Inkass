import React, {useContext, useState} from "react";
import Input from "../UI/Input";
import {InputWrap, InputPhoneNumber, Label, Container, Form, Title, Select} from "./style";
import { Context } from "../../Context/Context";
import {toast} from "react-toastify";
import {ButtonWrapper, CancelButton, SaveButton} from "./style";

const IncomePopUp = ({firstTitle, secondTitle, thirdTitle,fourthTitle,fifthTitle, edit, setPopUp}) => {
    const {state,dispatch} = useContext(Context)

    const handleSubmit = (event) => {
        event.preventDefault()
        let obj = {
            id: edit.id,
            username: event.target[0].value,
            phoneNumber: event.target[1].value,
            cashNumber: event.target[2].value,
            amount: event.target[3].value,
            date: event.target[4].value,
        }
        if (obj.username === "" || obj.phoneNumber === 0 || obj.cashNumber === "" || obj.amount === "") {
            toast.error("Did not completed")
        } else {
            dispatch({
                type: "EDIT_INCOME",
                payload: obj
            })
            setPopUp({popUp: false})
            toast.success(" Completed successfully")
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} >
                <Title>Do you want to Edit ?</Title>
                <InputWrap>
                    <Label>{firstTitle}</Label>
                    <Select  defaultValue={edit?.username}>
                        {state.user.map((item)=>(
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))}
                    </Select>
                    {secondTitle ?
                        <Label>{secondTitle}</Label> : ""}
                    {secondTitle ?
                        <InputPhoneNumber
                            placeholder={secondTitle}
                            format="+998 (##) ###-##-##"
                            mask="_"
                            name={"phoneNumber"}
                            defaultValue={edit?.phoneNumber}
                        /> : ""}

                    {fourthTitle ? <Label>{fourthTitle}</Label> : ""}

                    {thirdTitle ?
                        <Select defaultValue={edit?.cashNumber}>
                            {state.cash.map((item)=>(
                                <option key={item.id} value={item.cashNumber}>{item.cashNumber}</option>
                            ))}
                        </Select>
                    : ""}
                    {fourthTitle ? <Label>{thirdTitle}</Label> : ""}

                    {fourthTitle ? <Input
                        type={"text"}
                        placeholder={thirdTitle}
                        name={"address"}
                        defaultValue={edit?.amount}
                    /> : ""}
                    {fifthTitle ? <Label>{fifthTitle}</Label> : ""}

                    {fifthTitle ? <Input
                        type={"text"}
                        placeholder={thirdTitle}
                        name={"address"}
                        defaultValue={edit?.date}
                    /> : ""}
                </InputWrap>
                <ButtonWrapper>
                    <CancelButton type="button" onClick={() => setPopUp({cancel: false})}>
                        Cancel
                    </CancelButton>
                    <SaveButton>
                        Save
                    </SaveButton>
                </ButtonWrapper>
            </Form>
        </Container>
    )
}
export default IncomePopUp;