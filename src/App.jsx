import React from "react";
// import "./App.css";
import LoginRegister from "./loginRegister/loginRegister.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginRegister />} />
            </Routes>
        </Router>
    );
}

export default App;
