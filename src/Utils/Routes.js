import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Contact from "../Pages/Contact";

const Routers = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route exact path="/" element={<Home />}/>
                <Route path="/lander" element={<Navigate to="/" replace />} />
                <Route path="/services" element = {<Services />} />
                <Route path="/about" element = {<About />} />
                <Route path="/career" element = {<Career />} />
                <Route path="/contact" element = {<Contact />} />
            </Route>
        </Routes>
    )
};

export default Routers;