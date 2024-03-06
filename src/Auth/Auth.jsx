import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register"
import Button from "../Components/AtomComponents/Button"
import { useState } from "react";


export default function Auth() {
    const [isLogin, setLoginState] = useState(true);
    const [buttonText, setButtonText] = useState("Sign up");

    const toggleLoginState = () => {
        setLoginState(isLogin => !isLogin);
        isLogin ? setButtonText("Login") : setButtonText("Sign up");
    };

    return (
        <>
        <div>
        {isLogin ? <h1>Login Form</h1> : <h1>Registration Form</h1> }

        {isLogin ? <Login/> : <Register />}

        {isLogin ? <span>New user ? </span> : <span>Already have an account ? </span>}
        <Button buttonText={buttonText} buttonType="click" clickEvent={toggleLoginState}/>
        </div>
        </>
    );
}