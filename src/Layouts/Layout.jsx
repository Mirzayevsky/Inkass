import React, {useState} from "react";
import {Layout} from 'antd';
import Sidebar from "./Sidebar/app";
import Navbar from "./Navigationbar/app";
import RoutesComponent from "../Routes/routes";

const {Sider} = Layout;

const Main = () => {
    const [state, setState] = useState({collapsed: false})
    const onCollapse = (collapsed) => {
        setState({collapsed,});
    };
    const {collapsed} = state;
    const siderStyle ={
        height: '80vh',
        marginTop:"6%",
        borderTopRightRadius:"15px",
        zIndex:"1"
    }
    return (
        <Layout style={{minHeight: '100vh',}}>
            <Sider  style={siderStyle}
                collapsible
                   collapsed={collapsed}
                   onCollapse={onCollapse}>
                <Sidebar/>
            </Sider>
            <Layout  className="site-layout">
                <Navbar/>
                <RoutesComponent/>
            </Layout>
        </Layout>
    );
}

export default Main;