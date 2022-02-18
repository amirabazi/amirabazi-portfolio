import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./screens/contact";
import Homepage from "./screens/homepage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;