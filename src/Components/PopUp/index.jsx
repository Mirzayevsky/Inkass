import React, {useContext, useState} from "react";
import Input from "../UI/Input";
import {InputWrap, InputPhoneNumber, Label, Container, Form, Title} from "./style";
import { Context } from "../../Context/Context";
import {toast} from "react-toastify";
import {ButtonWrapper, CancelButton, SaveButton} from "./style";

const PopUp = ({firstTitle, secondTitle, thirdTitle, edit, setPopUp}) => {
    const {dispatch} = useContext(Context)
    const handleSubmit = (event) => {
        event.preventDefault()
        let obj = {
            id: edit.id,
            name: event.target[0].value,
            phoneNumber: event.target[1].value,
            address: event.target[2].value,
        }
        if (obj.name === "" || obj.phoneNumber === 0 || obj.address === "") {
            toast.error("Did not completed")
        } else {
            dispatch({
                type: "EDIT_USER",
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
                        defaultValue={edit?.name}
                    />
                    {secondTitle ? <Label>{secondTitle}</Label> : ""}

                    {secondTitle ?
                        <InputPhoneNumber
                            placeholder={secondTitle}
                            format="+998 (##) ###-##-##"
                            mask="_"
                            name={"phoneNumber"}
                            defaultValue={edit?.phoneNumber}
                        /> : ""}

                    {thirdTitle ? <Label>{thirdTitle}</Label> : ""}

                    {thirdTitle ? <Input
                        type={"text"}
                        placeholder={thirdTitle}
                        name={"address"}
                        defaultValue={edit?.address}
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
export default PopUp;