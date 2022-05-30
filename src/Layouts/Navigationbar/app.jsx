import React from "react";
import {AdminWrap, BellIcon, Logo, Navigationbar} from "./style";
import {ReactComponent as LogoSvg} from "../../Assets/navbar/CRM-система.svg";
import {ReactComponent as BellSvg} from "../../Assets/navbar/bell-860.svg";
import AdminImg from "../../Assets/navbar/user.557587208eb9e232f2ca (1).png"

import {Input} from 'antd';

const {Search} = Input;

const Navbar = () => {
    const onSearch = (value) => console.log(value);

    return (
        <Navigationbar>
            <Logo>
                <span>Tire Sales </span>
                <LogoSvg/>
            </Logo>
            <Search className={"search-menu"}
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
            />
            <BellIcon>
                <BellSvg/>
            </BellIcon>
            <AdminWrap>
                <img src={AdminImg} alt={"admin"}/>
            </AdminWrap>


        </Navigationbar>
    )
}
export default Navbar