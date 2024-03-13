import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";

const Routers = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />}/>
            </Route>
        </Routes>
    )
};

export default Routers;