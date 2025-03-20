// import React, { useRef, errRef, useState, useEffect } from "react";
// import axios from "axios";
// import api from "./../api.jsx";
// import "./login.css";
// import coffee_bean from "../assets/coffeebean.png";
// import mail_icon from "../assets/mail-02.jpg";
// import password_icon from "../assets/password.jpg";
// import coffee from "../assets/coffeebean.png";

// const Login = () => {
//     const userRef = useRef();
//     const errRef = useRef();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errMsg, setErrMsg] = useState(false);
// };
// useEffect(() => {
//     userRef.current.focus();
// }, []);

// useEffect(() => {
//     setErrMsg("");
// }, [user, pwd]);

// const handleSubmit = async (e) => {
//     e.preventDefault();
// };
// const Loginuser = () => {
//     return (
//         <main>
//             {/* <> {success ? (
//             <section>
//                 <p
//                     ref={errRef}
//                     className={errMsg ? "errmsg" : "offscreen"}
//                     aria-live="assertive"
//                 >
//                     {errMsg}
//                 </p>
//             </section>

//         </> */}
//             <div className="container">
//                 <img className="coffee" src={coffee} alt="coffee"></img>
//                 <div className="header">
//                     <div className="register">Login</div>
//                     <div className="underline"></div>
//                 </div>
//                 <form onSubmit={handleSubmit} className="inputs">
//                     <div className="input">
//                         <img className="icon" src={mail_icon} alt=""></img>
//                         <input type="email" placeholder="email" />
//                     </div>
//                 </form>
//                 <form className="input">
//                     <img className="icon" src={password_icon} alt=""></img>
//                     <input type="password" placeholder="password" />
//                 </form>
//             </div>
//             <div className="Submit_container">
//                 <div className="submit">
//                     <button className="button">Register</button>
//                 </div>
//                 <div className="submit">
//                     <button className="button">Login</button>
//                 </div>
//             </div>
//         </main>
//     );
// };
// export default Loginuser;
