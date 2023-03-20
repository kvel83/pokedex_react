/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { NavLink } from 'react-router-dom';

import "./home.css"




export default () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return(
        <div className="container border border-0 mw-100 vh-100">
            <div className="portada d-flex align-items-center pt-5 ps-5 ms-5">
                <img src="./ash.png" alt="ash tirando pokebola" className="ash" />
                <NavLink className={setActiveClass} to= "/atraparlosYa">
                    <img src="./pokebolaPortada.png" alt="pokeball" className="pokebola"/>
                    <img src="./atrapalosya.png" alt="atrapalos ya" />
                </NavLink>
            </div>
        </div>
    )
}