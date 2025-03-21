import React from "react";
import "./account.css";
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
                <h1 className="headeraccount">Account Details</h1>
                <p>
                    Welcome new coffee enthusiast! Please enter your details
                    below.
                </p>
                <img
                    className="profilepic"
                    src="https://via.placeholder.com"
                    alt="profile"
                ></img>
                <div>
                    <input
                        className="description"
                        type="text"
                        placeholder="description"
                    ></input>
                </div>
                <form>
                    <div className="form">
                        <label for="displayname">Displayname:</label>
                        <input id="displayname" className="input"></input>
                    </div>
                    <div className="form">
                        <label for="name">name:</label>
                        <input id="name" className="input"></input>
                    </div>
                    <div className="form">
                        <label for="email">email:</label>
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
