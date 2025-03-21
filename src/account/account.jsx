import React, { useState } from "react";
import api from "./../api.jsx";
import "./account.css";
import placeholder from "../assets/placeholder.jpeg";

const AccountCreate = () => {
    const [isCreateAccount, setIsCreateAccount] = useState(false);
    const [newAccount, setNewAccount] = useState({
        displayname: "",
        email: "",
        name: "",
        description: "",
        photo: placeholder,
    });

    const createAccount = async () => {
        try {
            await api.post("/account", newAccount);
            setNewAccount({
                displayname: "",
                email: "",
                name: "",
                description: "",
                photo: placeholder,
            });
        } catch (error) {
            if (error?.response?.data)
                console.error("Error creating account:", error.response?.data);
            console.error("Error creating account:", error);
        }
    };

    return (
        <main>
            <div className="accountcontainer">
                <div className="secondcontainer">
                    <div className="headeraccount">Account Details</div>
                    <p className="welcome">
                        Welcome new coffee enthusiast! Please enter your details
                        below.
                    </p>
                    <img
                        className="profilepic"
                        src={newAccount.photo}
                        alt="profile"
                    ></img>
                    <div>
                        <textarea
                            className="description"
                            type="text"
                            placeholder="description"
                            value={newAccount.description}
                            onChange={(e) =>
                                setNewAccount({
                                    ...newAccount,
                                    description: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>
                </div>
                <div>
                    <div className="form">
                        <label id="label">displayname:</label>
                        <input
                            id="displayname"
                            className="input"
                            value={newAccount.displayname}
                            onChange={(e) =>
                                setNewAccount({
                                    ...newAccount,
                                    displayname: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="form">
                        <label id="label">name:</label>
                        <input
                            id="name"
                            className="input"
                            value={newAccount.name}
                            onChange={(e) =>
                                setNewAccount({
                                    ...newAccount,
                                    name: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="form">
                        <label id="label">email:</label>
                        <input
                            id="email"
                            className="input"
                            value={newAccount.email}
                            onChange={(e) =>
                                setNewAccount({
                                    ...newAccount,
                                    email: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="Submit_container">
                        <div className="submit">
                            <button className="button" onClick={createAccount}>
                                Submit
                            </button>
                        </div>
                        <div className="submit">
                            <button className="button">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default AccountCreate;
