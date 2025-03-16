import React from "react";
import "./loginRegister.css";
import user_icon from "../assets/person.jpg";
import email_icon from "../assets/mail-02.jpg";
import password_icon from "../assets/password.jpg";

const LoginRegister = () => {
    return (
        <div classname="container">
            <div className="header">
                <h1 className="LoginHeading">Login or Register</h1>
                <div className="underline"></div>
            </div>
            <div className="input">
                <img src={user_icon} alt="icon of a head" />
                <input type="text" />
            </div>
            <div className="input">
                <img src={email_icon} alt="icon of an envelope" />
                <input type="email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="icon of a lock" />
                <input type="password" />
            </div>
            <div className="forgot_password">Forgotten your password?</div>
        </div>
    );
};
export default LoginRegister;
