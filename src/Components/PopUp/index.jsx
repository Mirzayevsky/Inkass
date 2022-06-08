import React, {useContext, useState} from "react";
import Input from "../UI/Input";
import {InputWrap, InputPhoneNumber, Label, Container, Form, Title} from "./style";
import {MyContext} from "../../App";
import {toast} from "react-toastify";
import {ButtonWrapper, CancelButton, SaveButton} from "./style";

const PopUp = ({firstTitle, secondTitle, thirdTitle, edit, setPopUp}) => {
    const [user, setUser] = useState({key: "", name: "", phoneNumber: "", address: ""})
    const [visible, setVisible] = useState(false)
    const {state, dispatch} = useContext(MyContext)

    const handleSubmit = (e) => {
        e.preventDefault()
            let obj = {
                name: e.target[0].value,
                phoneNumber: e.target[1].value,
                address: e.target[2].value,
            }
            dispatch({
                type: "EDIT_USER",
                payload: {...obj, key:edit.key,user}
            })

            setVisible(false);
            toast.success(" Completed Successfully")
    };


    return (
        <Container>
            <Form >
                <Title>Do you want to Edit ?</Title>
                <InputWrap>
                    <Label>{firstTitle}</Label>
                    <Input
                        type={"text"}
                        placeholder={firstTitle}
                        onChange={e => setUser({...user, name: e.target.value})}
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
                            onChange={e => setUser({...user, phoneNumber: e.target.value})}
                        /> : ""}

                    {thirdTitle ? <Label>{thirdTitle}</Label> : ""}

                    {thirdTitle ? <Input
                        type={"text"}
                        placeholder={thirdTitle}
                        name={"address"}
                        defaultValue={edit?.address}
                        onChange={e => setUser({...user, address: e.target.value})}
                    /> : ""}
                </InputWrap>
                <ButtonWrapper>
                    <CancelButton onClick={() => setPopUp({cancel: false})}>
                        Cancel
                    </CancelButton>
                    <SaveButton onClick={handleSubmit} >
                        Save
                    </SaveButton>
                </ButtonWrapper>
            </Form>
        </Container>
    )
}
export default PopUp;