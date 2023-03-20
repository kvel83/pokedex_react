import React from "react";
import { NavLink } from 'react-router-dom';

import './navBar.css'

const NavBar = () =>{
    const setActiveClass = ({ isActive }) => ( isActive? "active" : "inactive");
    const setPokeballActive = ({ isPokeball }) => ( isPokeball? "pokeballActive" : "pokeballInactive" );
    return(
        <div className="d-flex gap-4 bg bg-secondary p-3 contenedor justify-content-end">
            <NavLink className={ setActiveClass } to='/'>
                <div className="d-flex gap-1">
                    <img src="./pokebola.png" alt="pokebola" className = "pokeballActive"/>
                    <span>Home</span>
                </div>
            </NavLink>
            <NavLink className={ setActiveClass } to='/atraparlosYa'>
                <div className="d-flex gap-1">
                    <img src={process.env.PUBLIC_URL+'/pokebola.png'} alt="pokebola" className = "pokeballActive"/>
                    <span>Atraparlos Ya!!!</span>
                </div>
            </NavLink>
        </div>
    )
}

export default NavBar;