import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";

const Routers = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route exact path="/" element={<Home />}/>
                <Route path="/services" element = {<Services />} />
            </Route>
        </Routes>
    )
};

export default Routers;