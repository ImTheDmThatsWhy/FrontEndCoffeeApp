import React from "react"; //{ useRef, useState, useEffect } from "react";
// import axios from "axios";
// import api from "./../api.jsx";
import "./login.css";
// import coffee_bean from "../assets/coffeebean.png";
import mail_icon from "../assets/mail-02.jpg";
import password_icon from "../assets/password.jpg";
import coffee from "../assets/coffeebean.png";

// const Login = () => {
//     const userRef = useRef();
//     const errRef = useRef();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errMsg, setErrMsg] = useState(false);
// };

// const LoginRegister = async () => {
//     {try{
//         await api.post("/user/login",loginUser)
//     }}
//     [loginUser, setNewUser] = useState({
//         email: "",
//         password: "",
//     });
const Loginuser = () => {
    return (
        <main>
            <div className="container">
                <img className="coffee" src={coffee} alt="coffee"></img>
                <div className="header">
                    <div className="register">Login</div>
                    <div className="underline"></div>
                    {/* <div className="coffee-background">
                        <img
                            src={coffee_bean}
                            alt="image of coffebean background"
                        ></img>
                    </div> */}
                </div>
                <div className="inputs">
                    <div className="input">
                        <img
                            className="icon"
                            src={mail_icon}
                            alt="image of email icon"
                        ></img>
                        <input type="email" placeholder="email" />
                    </div>
                    <div className="input">
                        <img
                            className="icon"
                            src={password_icon}
                            alt="image of lock icon"
                        ></img>
                        <input type="password" placeholder="password" />
                    </div>
                </div>
                <div className="Submit_container">
                    <div className="submit">
                        <button className="button">Register</button>
                    </div>
                    <div className="submit">
                        <button className="button">Login</button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Loginuser;
