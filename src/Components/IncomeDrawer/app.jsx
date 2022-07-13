import React, {useState, useContext} from 'react';
import {Drawer, DatePicker,Space  } from 'antd';
import { Context } from '../../Context/Context';
import {toast} from "react-toastify";
import Input from "../UI/Input";
import {
    ButtonWrapper,
    CancelButton,
    InputWrap,
    Label,
    SaveButton,
    AddButton,Select
} from "./style";
import {InputPhoneNumber} from "../Drawer/style";

const IncomeDrawer = ({title, firstTitle, secondTitle, thirdTitle,fourthTitle,fifthTitle}) => {
    const [data, setData] = useState({id:"",username: "", phoneNumber:"", amount: "", cashNumber:"",date:""})
    const [visible,setVisible] = useState(false)
    const {state, dispatch} = useContext(Context)

    const onChange = (date, dateString) => {
        console.log(dateString);
        setData({...data, date: dateString})
    };


    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name === "" || data.phoneNumber === "" || data.amount === "" || data.phoneNumber === "") {
            toast.error("Something went wrong !")
        }
        else {
            dispatch({
                type: "ADD_INCOME",
                payload:{...data, id: state.user[state.user.length -1].id +1},
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
                    <InputWrap>
                        <Label>{firstTitle}</Label>
                        <Select  onChange={e => setData({...data, username: e.target.value})}>
                            {state.user.map((item)=>(
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </Select>
                        {secondTitle ? <Label>{secondTitle}</Label> : ""}
                        {secondTitle ?
                            <InputPhoneNumber
                                placeholder={secondTitle}
                                format="+998 (##) ###-##-##"
                                mask="_"
                                name={"phoneNumber"}
                                onChange={e => setData({...data, phoneNumber: e.target.value})}
                            />
                            : ""}
                        {thirdTitle ? <Label>{thirdTitle}</Label> : ""}
                        {thirdTitle ? <Input
                            type={"number"}
                            placeholder={thirdTitle}
                            name={"address"}
                            onChange={e => setData({...data, amount: e.target.value})}
                        /> : ""}
                        {fourthTitle ? <Label>{fourthTitle}</Label> : ""}
                        {fourthTitle ?
                            <Select onChange={e => setData({...data, cashNumber: e.target.value})}>
                                {state.cash.map((item)=>(
                                    <option key={item.id} value={item.cashNumber}>{item.cashNumber}</option>
                                ))}
                            </Select>
                            : ""}
                        {fourthTitle ? <Label>Date</Label> : ""}

                        {fifthTitle ?
                                <DatePicker onChange={onChange}/>
                            :""
                        }
                    </InputWrap>
                    <ButtonWrapper>
                        <CancelButton onClick={onClose}>
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

export default IncomeDrawer;