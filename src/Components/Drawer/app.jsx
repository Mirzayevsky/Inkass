import React, {useState, useContext} from 'react';
import {Drawer} from 'antd';
import {MyContext} from "../../App";
import {toast} from "react-toastify";
import Input from "../UI/Input";
import {
    ButtonWrapper,
    CancelButton,
    InputPhoneNumber,
    InputWrap,
    Label,
    SaveButton,
    AddButton
} from "./style";


const DrawerMain = ({title, firstTitle, secondTitle, thirdTitle}) => {
    const [user, setUser] = useState({key:2, name: "", phoneNumber:"", address: ""})
    const [visible,setVisible] = useState(false)
    const {state, dispatch} = useContext(MyContext)
    const [count, setCount] = useState(4)

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name === "" || user.phoneNumber === "" || user.address === "") {
            toast.error("Something went wrong !")
        }
        else {
            setCount(count + 1)
            // setUser({...user, key:count})
            dispatch({
                type: "ADD_USER",
                payload: user,
            })
            setVisible(false);
            toast.success("Completed Successfully !")
        }

    };

    return (
        <>
            <AddButton onClick={showDrawer}>
                {title}
            </AddButton>
            <Drawer title={title} placement="right" onClose={onClose} visible={visible}>
                <form onSubmit={handleSubmit}>
                    <InputWrap>
                        <Label>{firstTitle}</Label>
                        <Input
                            type={"text"}
                            placeholder={firstTitle}
                            onChange={e => setUser({...user, name: e.target.value})}
                            name={"name"}
                        />
                        {secondTitle ? <Label>{secondTitle}</Label> : ""}
                        {secondTitle ?
                            <InputPhoneNumber
                                placeholder={secondTitle}
                                format="+998 (##) ###-##-##"
                                mask="_"
                                name={"phoneNumber"}
                                onChange={e => setUser({...user, phoneNumber: e.target.value})}
                            /> : ""}
                        {thirdTitle ? <Label>{thirdTitle}</Label> : ""}
                        {thirdTitle ? <Input
                            type={"text"}
                            placeholder={thirdTitle}
                            name={"address"}
                            onChange={e => setUser({...user, address: e.target.value})}
                        /> : ""}
                    </InputWrap>
                    <ButtonWrapper>
                        <CancelButton onClick={onClose}>
                            Cancel
                        </CancelButton>
                        <SaveButton>
                            Save
                        </SaveButton>
                    </ButtonWrapper>
                </form>
            </Drawer>
        </>
    );
};

export default DrawerMain;