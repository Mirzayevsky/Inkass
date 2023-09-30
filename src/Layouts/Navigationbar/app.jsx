import React, {useContext, useState} from "react";
import {AdminWrap, BellIcon, Logo, Navigationbar, NavWrap, Input, Button, SearchBtn} from "./style";
import {ReactComponent as LogoSvg} from "../../Assets/navbar/CRM-система.svg";
import {ReactComponent as BellSvg} from "../../Assets/navbar/bell-860.svg";
import AdminImg from "../../Assets/navbar/user.557587208eb9e232f2ca (1).png"
import { Context } from "../../Context/Context";
import SearchTable from "../../Components/SearchTable";
import { ReactComponent as ExitSvg } from "../../Assets/main/exit.svg";

const Navbar = () => {
    const {state, dispatch} = useContext(Context)
    const [word,setWord] = useState("")
    const [show,setShow] = useState(false)
    // const [found,setFound] = useState([])
    const found = state.user.filter((data) => data.name.toLowerCase().trim().includes(word.toLowerCase().trim()))
    //
    // const searchData = (word) => {
    //     const filterData = state.user.filter((data) => data.name.toLowerCase().trim().includes(word.toLowerCase().trim()))
    //     setFound(filterData)
    //     // dispatch({
    //     //     type:"ON_SEARCH",
    //     //     payload:word
    //     // })
    // }

    return (
        <Navigationbar>
            <Logo>
                
                <LogoSvg/>
            </Logo>
            <Input className={"search-menu"}
                    placeholder="search"
                    onChange={(e) => {setWord(e.target.value);setShow(word ? true : "")} }/>
            {/*<SearchBtn onClick={() => {searchData(word);;}}>search</SearchBtn>*/}
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
                  <SearchTable found={found}/>
                  </NavWrap>
            ):""}
        </Navigationbar>
    )
}
export default Navbar
