import { useApiContext } from "./context/apiContext.jsx";
function Test() {
    let apiUrl = useApiContext();

    const loginRequest = async () => {
        let emailToSend = "example1@email.com";
        let passwordToSend = "SuperCoolPad1";

        let bodyToSend = {
            email: emailToSend,
            password: passwordToSend,
        };
        console.log(bodyToSend);

        let targetUrl = apiUrl + "/userRouter/login";
        console.log(targetUrl);

        let response = await fetch(targetUrl, {
            method: "POST",
            body: JSON.stringify(bodyToSend),
            headers: {
                "Content-Type": "application/json",
                // "Authorization":"Bearer " + someToken
                // "jwtCustomheader":someToken
            },
        });

        let data = await response.json();

        console.log(data);
    };

    return (
        <>
            <h1>{apiUrl}</h1>

            <button onClick={loginRequest}>Log in with hardcoded data</button>
        </>
    );
}

export default Test;
