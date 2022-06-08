import React from "react";
import {Link} from "react-router-dom"
import {Icon, LinkName, SidebarWrap, Wrapper} from "./style"
import {SidebarItems} from "../../Constants/sidebarItems"

const Sidebar  = () => {
    return(
        <SidebarWrap>
            {SidebarItems.map((item)=> (
                <Link to={item.link} key={item.id}  >
                    <Wrapper>
                        <Icon>{item.icon}</Icon>
                        <LinkName>{item.name}</LinkName>
                    </Wrapper>
                </Link>
            ))}
        </SidebarWrap>
    )
}
export default Sidebar;