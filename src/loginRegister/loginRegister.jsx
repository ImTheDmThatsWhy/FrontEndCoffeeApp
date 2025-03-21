import React, { useState, useEffect } from "react";
import api from "./../api.jsx";
import "./loginRegister.css";
// import coffee_bean from "../assets/coffeebean.png";
import mail_icon from "../assets/mail-02.jpg";
import password_icon from "../assets/password.jpg";
import person_icon from "../assets/person.jpg";
import coffee from "../assets/coffeebean.png";

const LoginRegister = () => {
    const [isRegisterPage, setIsRegisterPage] = useState(false);
    const onClick = () => setIsRegisterPage(!isRegisterPage);
    const [Success, setSuccess] = useState("");
    const [user, setLoginUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const createUser = async () => {
        if (isRegisterPage) {
            try {
                await api.post("/user/register", user).then((response) => {
                    localStorage.setItem("token", response.data.token);
                });
                setSuccess("successfully submitted");
                setLoginUser({ username: "", email: "", password: "" });
            } catch (error) {
                if (error.response?.data)
                    console.error("Error creating user:", error.response?.data);
                console.error("Error creating user:", error);
            }
        } else {
            try {
                await api.post("/user/login", user).then((response) => {
                    localStorage.setItem("token", response.data.token);
                });
                setLoginUser({ email: "", password: "" });
            } catch (error) {
                if (error.response?.data)
                    console.error(
                        "Error logging in user:",
                        error.response?.data
                    );
                console.error("Error logging user:", error);
            }
        }
    };

    //attribute for icons Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
    return (
        <main>
            <div className="container">
                <img className="coffee" src={coffee} alt="coffee"></img>
                <div className="header">
                    <div className="register">
                        {isRegisterPage ? "Register" : "Login"}
                    </div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {isRegisterPage ? (
                        <div className="input">
                            <img
                                className="icon"
                                src={person_icon}
                                alt="image of person icon"
                            ></img>

                            <input
                                type="text"
                                placeholder="username"
                                value={user.username}
                                onChange={(e) =>
                                    setLoginUser({
                                        ...user,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                    ) : null}
                    <div className="input">
                        <img
                            className="icon"
                            src={mail_icon}
                            alt="image of email icon"
                        ></img>
                        <input
                            type="email"
                            placeholder="email"
                            value={user.email}
                            onChange={(e) =>
                                setLoginUser({
                                    ...user,
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
                            value={user.password}
                            onChange={(e) =>
                                setLoginUser({
                                    ...user,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="Submit_container">
                    <div className="submit">
                        <button className="button" onClick={createUser}>
                            Submit
                        </button>
                    </div>
                    <div className="submit">
                        <button className="button" onClick={onClick}>
                            {isRegisterPage ? "Login" : "Register"}
                        </button>
                    </div>
                    <p className="success">{Success}</p>
                </div>
            </div>
        </main>
    );
};
export default LoginRegister;
