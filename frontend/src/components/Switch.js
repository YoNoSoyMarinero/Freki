import React, {useContext} from "react";
import "./Switch.css"
import { ThemeContext } from "../context/ThemeContext";


const Switch = () => {
    const {theme, changeTheme} = useContext(ThemeContext)
    return ( 
        <label className="switch">
            <input type="checkbox" onClick={(changeTheme)}/>
            <span className="slider" />
        </label>
     );
}
 
export default Switch;