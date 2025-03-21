import React from "react";
// import "./App.css";
import LoginRegister from "./loginRegister/loginRegister.jsx";
import AccountCreate from "./account/account.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginRegister />} />
                <Route path="/account" element={<AccountCreate />} />
            </Routes>
        </Router>
    );
}

export default App;
