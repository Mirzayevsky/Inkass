import React, {useContext, useEffect, useState} from 'react';
import {Form, Table, Modal} from 'antd';
import {MyContext} from "../../App";
import DrawerMain from "../Drawer/app";
import PopUp from "../PopUp";

const UserTable = () => {
    const [form] = Form.useForm();
    const {state, dispatch} = useContext(MyContext)
    const {confirm} = Modal;
    const [edit, setEdit] = useState(null);
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'phoneNumber',
            dataIndex: 'phoneNumber',
            width: '20%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, item) => {
                return (
                    <>
                        <button onClick={() => EditForm(item)}>Edit</button>
                        <button onClick={() => DeleteUser(item.key)}>Delete</button>
                    </>
                )
            }
        },
    ];

    const DeleteUser = (key) => {
        confirm({
            title: 'Are you sure delete this Data?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch({
                    type: "DELETE_USER",
                    payload: key
                })
            },
        })
    }

    const EditForm =  (item) => {
        setEdit(item);
            // dispatch({
            //     type: "EDIT_USER",
            //     payload: item
            // })
    }

   
    return (
        <>
        <h1> {state.user.length} </h1>
            {/*{ edit ? <PopUp/> : ""}*/}
            {/* <button onClick={handleAdd}>add</button> */}
            {/* {state.user?.map((Item)=>(
                <div key={Item.key}>
                    {Item.name}
                    {Item.phoneNumber}
                </div>
            ))} */}

           <DrawerMain
                title={"Add a user"}
                firstTitle={'Username'}
                secondTitle={'Phone Number'}
                thirdTitle={'User address'}
            />
            {/* <Form form={form} component={false}> */}

              <Table
                dataSource={state.user}
                columns={columns}
                bordered
            />
           {/* </Form> */}
        </>
    );
};

export default UserTable;


