import React, {useState, useContext} from 'react';
import {Drawer} from 'antd';
import { Context } from '../../Context/Context';
import {toast} from "react-toastify";
import Input from "../UI/Input";
import {
    ButtonWrapper,
    CancelButton,
    InputWrap,
    Label,
    SaveButton,
    AddButton
} from "./style";

const DrawerCash = ({title, firstTitle}) => {
    const [cash, setCash] = useState({id:"", cashNumber: "",})
    const [visible,setVisible] = useState(false)
    const {state, dispatch} = useContext(Context)
    
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cash.cashNumber === "") {
            toast.error("Something went wrong !")
        }
        else { 
            dispatch({
                type: "ADD_CASH",
                payload:{...cash, id: state.cash[state.cash.length - 1].id +1},
            })
            setVisible(false);
            toast.success("Completed Successfully!")
        }
    };

    return (
        <>
            <AddButton onClick={showDrawer}>
                {title}
            </AddButton>
            <Drawer title={title} placement="right" onClose={onClose} visible={visible}>
                    <InputWrap>
                        <Label>{firstTitle}</Label>
                        <Input
                            type={"text"}
                            placeholder={firstTitle}
                            onChange={e => setCash({...cash, cashNumber: e.target.value})}
                            name={"name"}/>
                    </InputWrap>
                    <ButtonWrapper>
                        <CancelButton type='button' onClick={onClose}>
                            Cancel
                        </CancelButton>
                        <SaveButton onClick={handleSubmit}>
                            Save
                        </SaveButton>
                    </ButtonWrapper>
            </Drawer>
        </>
    );
};

export default DrawerCash;