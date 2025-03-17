import React from "react";
import "./loginRegister.css";
const LoginRegister = () => {
    //attribute for icons Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
    return (
        <main>
            <div classname="container">
                <div className="header">
                    <h1 className="LoginHeading">Login or Register</h1>
                    <div className="underline"></div>
                </div>
                <div className="input">
                    <i class="fi fi-rr-user"></i>
                    <input type="text" />
                </div>
                <div className="input">
                    <i class="fi fi-rr-envelope"></i>
                    <input type="email" />
                </div>
                <div className="input">
                    <i class="fi fi-rr-lock"></i>
                    <input type="password" />
                </div>
                <div className="Submit_container">
                    <div className="submit">Register</div>
                    <div classname="submit">Login</div>
                </div>
            </div>
        </main>
    );
};
export default LoginRegister;
