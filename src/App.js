import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./screens/contact";
import Homepage from "./screens/homepage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;