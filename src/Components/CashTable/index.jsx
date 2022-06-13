import React, {useContext} from 'react';
import {Form, Table, Modal} from 'antd';
import { Context } from '../../Context/State';
import {Container} from "./style";

const CashTable = () => {
    const [form] = Form.useForm();
    const {state, dispatch} = useContext(Context)
    const {confirm} = Modal;

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '50%',
            editable: true,
        },

        {
            title: 'operation',
            dataIndex: 'operation',
            width: '50%',

            render: (_, item) => {
                return (
                    <>
                        <button>edit</button>
                        <button onClick={() => DeleteUser(item.key)}>Delete</button>
                    </>
                )
            }
        },
    ];

    const DeleteUser = (key) => {
        confirm({
            title: 'Are you sure delete this task?',
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
    return (
      <Container>
          <Form form={form} component={false}>
              <Table
                  dataSource={state.cash}
                  columns={columns}
              />
          </Form>
      </Container>
    );
};

export default CashTable;


