import "./navigation.scss"
import {NavLink,} from "react-router-dom";
import {useState} from "react";

function Navigation() {



    return (

<>

    <ul>
        <li>  <NavLink to={"/"}> <p>CRIT</p> </NavLink></li>
    </ul>

    <ul>
        <li> <NavLink to={"/"}> HOME </NavLink></li>
        <li> <NavLink to={"/about"}> ABOUT </NavLink></li>
        <li> <NavLink to={"/shop"}> SHOP </NavLink></li>
        <li> <NavLink to={"/contact"}> CONTACT </NavLink></li>
        <li> <NavLink to={"/adult"}> ADULT </NavLink></li>
        <li> <NavLink to={"/contact"}> <img src="src/assets/images/bag.png" alt="logo" /> </NavLink></li>
    </ul>



</>


    );
}

export default Navigation;
