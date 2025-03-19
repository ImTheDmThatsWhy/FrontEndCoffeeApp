import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApiContextProvider } from "./context/apiProvider.jsx";
import Test from "./test.jsx";
import { BrowserRouter } from "react-router";
import LoginRegister from "./loginRegister/loginRegister.jsx";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
            <Test />
            <LoginRegister />
        </React.StrictMode>
    </BrowserRouter>
);
