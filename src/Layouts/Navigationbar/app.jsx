import React, {useContext, useState} from "react";
import {AdminWrap, BellIcon, Logo, Navigationbar, NavWrap} from "./style";
import {ReactComponent as LogoSvg} from "../../Assets/navbar/CRM-система.svg";
import {ReactComponent as BellSvg} from "../../Assets/navbar/bell-860.svg";
import AdminImg from "../../Assets/navbar/user.557587208eb9e232f2ca (1).png"
import {MyContext} from "../../App";
import SearchTable from "../../Components/SearchTable";

const Navbar = () => {
    const {state, dispatch} = useContext(MyContext)
    const [word,setWord] = useState("")
    const [show,setShow] = useState(false)
    const filterData = state.user.filter((data) => data.name.toLowerCase().includes(word.toLowerCase()))
   
    return (
        <Navigationbar>
            <Logo>
                <span>Inkass</span>
                <LogoSvg/>
            </Logo>
            <input className={"search-menu"}
                    placeholder=" search "
                    onChange={(e) => {setWord(e.target.value); setShow(true)} }/>
            <BellIcon>
                <BellSvg/>
            </BellIcon>
            <AdminWrap>
                <img src={AdminImg} alt={"admin"}/>
            </AdminWrap>
            {show?(
                  <NavWrap>
                  <button onClick={() => setShow(false)}>x</button>
                  <SearchTable filterData={filterData}/>
                  </NavWrap>
            ):""}
          

        </Navigationbar>
    )
}
export default Navbar