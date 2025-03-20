import React, { useState, useEffect } from "react";
import api from "./../api.jsx";
import "./login.css";
import mail_icon from "../assets/mail-02.jpg";
import password_icon from "../assets/password.jpg";
import coffee from "../assets/coffeebean.png";

const Login = () => {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await api.post("/user/login", loginUser);
            setLoginUser({ email: "", password: "" });
        } catch (error) {
            if (error.response?.data)
                console.error("Error logging in user:", error.response?.data);
            console.error("Error logging user:", error);
        }
    };
    const Loginuser = () => {
        //attribute for icons Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
        return (
            <main>
                <div className="container">
                    <img className="coffee" src={coffee} alt="coffee"></img>
                    <div className="header">
                        <div className="register">Login</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img
                                className="icon"
                                src={mail_icon}
                                alt="image of email icon"
                            ></img>
                            <input
                                type="email"
                                placeholder="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <img
                                className="icon"
                                src={password_icon}
                                alt="image of lock icon"
                            ></img>
                            <input
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="Submit_container">
                        <div className="submit">
                            <button className="button">Register</button>
                        </div>
                        <div className="submit">
                            <button className="button" onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
;
export default Loginuser;
