import React, {useContext, useState} from "react";
import Input from "../UI/Input";
import {InputWrap, InputPhoneNumber, Label, Container, Form, Title} from "./style";
import { Context } from "../../Context/Context";
import {toast} from "react-toastify";
import {ButtonWrapper, CancelButton, SaveButton} from "./style";

const CashPopUp = ({firstTitle, edit, setPopUp}) => {
    const {dispatch} = useContext(Context)
    const handleSubmit = (event) => {
        event.preventDefault()
        let obj = {
            id: edit.id,
            cashNumber: event.target[0].value,
        }
        if (obj.cashNumber === "") {
            toast.error("Did not completed")
        } else {
            dispatch({
                type: "EDIT_CASH",
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
                    <Input
                        type={"text"}
                        placeholder={firstTitle}
                        name={"name"}
                        defaultValue={edit?.cashNumber}
                    />
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
export default CashPopUp;