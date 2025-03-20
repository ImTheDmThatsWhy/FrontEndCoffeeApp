import React, { useState, useEffect } from "react";
import api from "./../api.jsx";
import "./loginRegister.css";
// import coffee_bean from "../assets/coffeebean.png";
import mail_icon from "../assets/mail-02.jpg";
import password_icon from "../assets/password.jpg";
import person_icon from "../assets/person.jpg";
import coffee from "../assets/coffeebean.png";
const LoginRegister = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const createUser = async () => {
        try {
            await api.post("/user/register", newUser);
            setNewUser({ username: "", email: "", password: "" });
        } catch (error) {
            if (error.response?.data)
                console.error("Error creating user:", error.response?.data);
            console.error("Error creating user:", error);
        }
    };

    //attribute for icons Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
    return (
        <main>
            <div className="container">
                <img className="coffee" src={coffee} alt="coffee"></img>
                <div className="header">
                    <div className="register">Register</div>
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
                            src={person_icon}
                            alt="image of person icon"
                        ></img>
                        <input
                            type="text"
                            placeholder="username"
                            value={newUser.username}
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    username: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input">
                        <img
                            className="icon"
                            src={mail_icon}
                            alt="image of email icon"
                        ></img>
                        <input
                            type="email"
                            placeholder="email"
                            value={newUser.email}
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    email: e.target.value,
                                })
                            }
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
                            value={newUser.password}
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="Submit_container">
                    <div className="submit">
                        <button className="button" onClick={createUser}>
                            Register
                        </button>
                    </div>
                    <div className="submit">
                        <button className="button">Login</button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default LoginRegister;
