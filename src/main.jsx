import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginRegister from "./loginRegister/loginRegister.jsx";
import Review from "./review/review.jsx";
import AccountCreate from "./account/account.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        {/* <LoginRegister /> */}
        {/* <Review /> */}
        <AccountCreate />
    </StrictMode>
);
