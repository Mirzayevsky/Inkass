import React, {createContext, useReducer} from "react";
import User from "./users";
import './App.css';
import 'antd/dist/antd.css';
import Main from "./Layouts/Layout"

export const MyContext = createContext();

function reducer(state, action) {
    // this reducer take state and with action's type then return state
    switch (action.type) {
        case 'COUNT_PLUS': {
            return {...state, count: state.count + action.payload};
            //    in this object we separating state and added value of action's payload to the prevent state's count

        }
        case 'COUNT_MINUS': {
            return {...state, count: state.count - action.payload};
        }
        case "NAME": {
            return {...state, text: action.payload}
        }
        default:
            return state;
    }
    // return {...state,count:state.count + action}
}

const initializeState = {
    // this main state picker this used in userReducer hooks to giving state
    count: 1,
    text: "ibs school"
}


function App() {

    const [state, dispatch] = useReducer(reducer, initializeState);
    // this hook similar to useState hooks but have difference
    // so  this hooks take more state if we use useState hooks  this only take one state


    const change = () => {
        //  giving with type to reducer
        dispatch({
            type: "COUNT_PLUS",
            payload: 1,
        })
    }
    const minusCount = () => {
        //  giving with type to reducer
        dispatch({
            type: "COUNT_MINUS",
            payload: 1,
        })
    }

    const store = {
        text: state.text,
        count: state.count,
        func: dispatch
    }

    return (
        <>
            <MyContext.Provider value={store}>

                {/*  We call MyContext.Provider for sending state and action to the other Components*/}
                {/*<User/>*/}
                {/*<button onClick={change}>Plus</button>*/}
                {/*/!* when clicked this button dispatch function will give type and payload to state   *!/*/}
                {/*<button onClick={minusCount}>Minus</button>*/}
                <Main/>
            </MyContext.Provider>
        </>
    );
}

export default App;
