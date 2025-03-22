import React, { useState, useEffect } from "react";
import api from "./../api.jsx";
import "./account.css";

const AccountCreate = () => {
    const [isCreateAccount, setIsCreateAccount] = useState(false);
    const [Success, setSuccess] = useState("");
    const [newAccount, setNewAccount] = useState({
        displayname: localStorage.getItem("displayname"),
        email: "",
        name: "",
        description: "",
    });

    const getAuthorizationToken = () => {
        return {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };
    };

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        if (user_id) {
            console.log(user_id);
            api.get("/user/" + user_id, getAuthorizationToken())
                .then((response) => setNewAccount(response.data))
                .catch((err) => console.log(err));
        }
    }, []);
    const createAccount = async () => {
        try {
            await api.post("/account", newAccount, getAuthorizationToken());
            setNewAccount({
                displayname: "",
                email: "",
                name: "",
                description: "",
            });
            setSuccess("successfully submitted");
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
                        <p className="success">{Success}</p>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default AccountCreate;
