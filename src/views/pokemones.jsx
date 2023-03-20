/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import SearchPokemon from "../components/searchPokemon";

export default () => {
    return (
        <div className="container border border-0 mw-100 vh-100 d-flex justify-content-center">
            <div className="search d-flex flex-column w-50">
                <img src={process.env.PUBLIC_URL+'/Pokedex.png'} alt="Pokedex" className=""/>
                <SearchPokemon />
            </div>
        </div>
    )
}