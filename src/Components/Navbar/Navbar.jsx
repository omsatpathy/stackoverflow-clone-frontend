import { NavLink } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Auth from "../../Auth/Auth";
import stackOverflowLogo from "../../images/stack_overflow.png"
import searchBarImage from "../../images/search_bar_image.png"
import './Navbar.css'
import Input from "../AtomComponents/Input";
import Button from "../AtomComponents/Button";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const logoutHandler = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <>
            <div className="hr-nav-top" />
            <nav className="navbar">
                <NavLink to="/" className="nav-logo"><img src={stackOverflowLogo} alt="logo"/></NavLink>
                {
                    token ?
                        <ul>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/questions">My Questions</NavLink></li>
                            <li><NavLink to="/answers/my">My Answers</NavLink></li>
                        </ul>
                    :
                        <ul>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/questions/all">Questions</NavLink></li>
                        </ul>
                }
                <div className="nav-search-bar-container">
                    <img src={searchBarImage}/>
                    <Input className="nav-search-bar" type="text" placeholder="Search..." />
                </div>
                {
                    token ?
                        <div className="nav-right-part">
                            <NavLink to="/">
                                <Button buttonText="Logout" className="login-button" type="button" clickEvent={logoutHandler} />
                            </NavLink>
                        </div>
                    :
                        <div className="nav-right-part">
                            <NavLink to="/login">
                                <Button buttonText="Login" className="login-button" type="button" />
                            </NavLink>
                            <NavLink to="/signup">
                                <Button buttonText="Sign up" className="signup-button" type="button"/>
                            </NavLink>
                        </div>
                }

            </nav>
            <div className="hr-nav-bottom" />
        </>
    );
}