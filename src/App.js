import React, { lazy, Suspense,} from "react";
import {Route, Routes} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from "./Layouts/Sidebar/app";
import Navbar from "./Layouts/Navigationbar/app";
import {Layout} from "antd";
import {ToastContainer} from "react-toastify";
import MainState from "./Context/State";

// Routes
const Users = lazy(() => import("./Pages/Users/app"))
const Cash = lazy(() => import("./Pages/Cash/app"))
const Profit = lazy(() => import("./Pages/Income/app"))

function App() {
    return (
               <MainState>
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
               </MainState>
    );
}

export default App;
