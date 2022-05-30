import React, {useContext} from "react";
import {MyContext} from "./App";

const User = () => {
    const {text, count, func} = useContext(MyContext)
    const changeName = () => {
        func({
            type: 'NAME',
            payload: "Space21"
        })
    }
    return (
        <div>
            <h1>user page{text}</h1>
            <h1>{count}</h1>
            <button onClick={changeName}>change name</button>
        </div>
    )
}
export default User;