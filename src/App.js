import React, {createContext, lazy, Suspense,  useReducer} from "react";
import {Route, Routes} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from "./Layouts/Sidebar/app";
import Navbar from "./Layouts/Navigationbar/app";
import {Layout} from "antd";
import {ToastContainer} from "react-toastify";
// Routes
import Users from "./Pages/Users/app"
// const Users = lazy(() => import("./Pages/Users/app"))
const Cash = lazy(() => import("./Pages/Cash/app"))
const Profit = lazy(() => import("./Pages/Income/app"))
export const MyContext = createContext();

function reducer(state, action) {
    // this reducer take state and with action's type then return state
    switch (action.type) {
        case 'DELETE_USER': {
            const {user} = state;
            let array = user.map((e, index) => {
                if (e.key === action.payload) {
                    user.splice(index, 1);
                }
                return e;
            });
            return {...state, user: array};
        }

        case 'ADD_USER': {
            const user = state.user
            user.push(action.payload);
            return {...state, user }
        }

        case 'EDIT_USER': {
            console.log(action.payload);
            break;
        }

        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {
        income: [],
        user: [
            {
                key: 1,
                name: "John Doe",
                phoneNumber: "+998 (99) 234 23 54",
                address: "Uzbekistan,Tashkent",
            },
        ],
        cash:[
            {
                key:1,
                name:"Cash - 1"
            }
        ]
    });
    return (
            <MyContext.Provider value={{state, dispatch}}>
                <ToastContainer autoClose={700}/>
                <Layout style={{minHeight: '100vh',}} className="site-layout">
                    <Sidebar/>
                    <Navbar/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path={`/`} element={<Users/>}/>
                            <Route path={`/cash`} element={<Cash/>}/>
                            <Route path={`/incomes`} element={<Profit/>}/>
                        </Routes>
                    </Suspense>
                </Layout>
            </MyContext.Provider>
    );
}

export default App;
