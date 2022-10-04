import { Link } from "react-router-dom";
import Switch from "./Switch";
import "./Navbar.css"
import React, {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";


const Navbar = () => {
    const {theme, changeTheme} = useContext(ThemeContext)

    return (
    <header>
        <div className= {theme ? "light-nav" : "dark-nav"}>
            <Link className= {theme ? 'light-home' : 'dark-home'} to= '/'>
                Freki
            </Link>
            <nav>
                <Link className={theme ? "light-login" : "dark-login"}  to="/login">Login</Link>
                <Link className={theme ? "light-signup" : "dark-signup"} to="/signup">Signup</Link>
            </nav>
        </div>
        <Switch/>
    </header>);
}
 
export default Navbar;