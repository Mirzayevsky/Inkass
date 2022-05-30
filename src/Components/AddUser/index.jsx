import React from "react";
import {
    ButtonWrapper,
    CancelButton,
    Container,
    Input,
    InputPhoneNumber,
    InputWrap,
    Label, SaveButton,
    Title,
    Wrapper
} from "./style";

const AddUser = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Add User</Title>
                <InputWrap>
                     <Label>Username</Label>
                    <Input type={"text"} placeholder={"Name"} />

                    <Label>Phone Number</Label>
                    <InputPhoneNumber
                        placeholder={"Phone Number"}
                        format="+998 (##) ###-##-##"
                        mask="_"
                    />
                </InputWrap>
                <ButtonWrapper>
                    <CancelButton>Cancel</CancelButton>
                    <SaveButton>Save</SaveButton>
                </ButtonWrapper>
            </Wrapper>
        </Container>
    )
}
export default AddUser;