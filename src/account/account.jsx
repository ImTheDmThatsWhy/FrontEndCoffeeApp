import React from "react";
import "./account.css";
import placeholder from "../assets/placeholder.jpeg";
// const AccountPage = () => {
//         const [isCreateAccount, setIsCreateAccount]=
//         useState(false)
//         const on
//     }
// };

const AccountPage = () => {
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
                        src={placeholder}
                        alt="profile"
                    ></img>
                    <div>
                        <textarea
                            className="description"
                            type="text"
                            placeholder="description"
                        ></textarea>
                    </div>
                </div>
                <form>
                    <div className="form">
                        <label id="label" for="displayname">
                            displayname:
                        </label>
                        <input id="displayname" className="input"></input>
                    </div>
                    <div className="form">
                        <label id="label" for="name">
                            name:
                        </label>
                        <input id="name" className="input"></input>
                    </div>
                    <div className="form">
                        <label id="label" for="email">
                            email:
                        </label>
                        <input id="email" className="input"></input>
                    </div>
                    <div className="Submit_container">
                        <div className="submit">
                            <button className="button">Submit</button>
                        </div>
                        <div className="submit">
                            <button className="button">Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};
export default AccountPage;
