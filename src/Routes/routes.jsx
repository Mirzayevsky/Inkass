import React, {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
const Users  = lazy(() => import("../Pages/Users/app"))
const Cash  = lazy( () => import("../Pages/Cash/app"))
const Profit  = lazy( () => import("../Pages/Cash/app"))

const RoutesComponent = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={`/`} element={<Users/>}/>
                <Route path={`/cash`} element={<Cash/>}/>
                <Route path={`/incomes`} element={<Profit/>}/>
            </Routes>
       </Suspense>
)
}
export default RoutesComponent