import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import LoginRegister from "./loginRegister/loginRegister.jsx";
import CreateReview from "./review/review.jsx";
import Rating from "./review/star.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        {/* <LoginRegister /> */}
        {/* <CreateReview /> */}
        <Rating />
    </StrictMode>
);
