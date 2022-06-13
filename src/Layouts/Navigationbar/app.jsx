import React, {useContext, useState} from "react";
import {AdminWrap, BellIcon, Logo, Navigationbar, NavWrap,Input,Button} from "./style";
import {ReactComponent as LogoSvg} from "../../Assets/navbar/CRM-система.svg";
import {ReactComponent as BellSvg} from "../../Assets/navbar/bell-860.svg";
import AdminImg from "../../Assets/navbar/user.557587208eb9e232f2ca (1).png"
import { Context } from "../../Context/State";
import SearchTable from "../../Components/SearchTable";
import { ReactComponent as ExitSvg } from "../../Assets/main/exit.svg";

const Navbar = () => {
    const {state, dispatch} = useContext(Context)
    const [word,setWord] = useState("")
    const [show,setShow] = useState(false)

    const filterData = state.user.filter((data) => data.name.toLowerCase().trim().includes(word.toLowerCase().trim()))

    dispatch({
        type:"ON_SEARCH",
        payload:word
    })

    return (
        <Navigationbar>
            <Logo>
                <span>Inkass</span>
                <LogoSvg/>
            </Logo>
            <Input className={"search-menu"}
                    placeholder="search"
                    onChange={(e) => {setWord(e.target.value); setShow(true)} }/>
            <BellIcon>
                <BellSvg/>
            </BellIcon>
            <AdminWrap>
                <img src={AdminImg} alt={"admin"}/>
            </AdminWrap>
            {show?(
                  <NavWrap>
                  <Button onClick={() => setShow(false)}>
                    <ExitSvg/>
                  </Button>
                  <SearchTable filterData={filterData}/>
                  </NavWrap>
            ):""}
          

        </Navigationbar>
    )
}
export default Navbar