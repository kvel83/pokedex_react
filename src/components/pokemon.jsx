import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../MyContext";
import BarraEstado from "./barraEstado";

import './pokemon.css';
import {Badge} from 'react-bootstrap';
import LoadingSpinner from "./loadingSpinner";


const Pokemon = () => {
    const { url } = useContext(MyContext);
    const [pokemonSel, setPokemonSel] = useState({});
    const [isLoading, setIsLoading] = useState (true);
    const {pokemonSelected} = useParams();

    const showLoader = () => {
        setIsLoading(true);
      };

      const hideLoader = () => {
        setIsLoading(false);
      };

    const getDataPokemon = async() =>{
        // showLoader();
        console.log(url+pokemonSelected);
        const response = await fetch(url+pokemonSelected);
        const pokemonResponse = response.json().then(
            (data)=> {
                console.log(data);
                setPokemonSel(data);
                // hideLoader();
            }
        );
    }
    useEffect(()=> {
        // setTimeout(() => {
            getDataPokemon();
        // }, 3000);

    },[pokemonSelected]);
    return (
        <div className="container border border-0 mw-100 vh-90 gap-4">
            {/* {isLoading && ( */}
                {/* // <LoadingSpinner /> */}
            {/* // )} */}
            <div className="whoIs d-flex align-items-center gap-5 bg bg-warning rounded mt-3">
                {/* <img src={pokemonSel.sprites.other['official-artwork'].front_default} alt="imagen pokemon"/> */}
                <div className="data d-flex flex-column text-success fw-5">
                    <h2>¿Quien es ese Pokemon?</h2>
                    <p>Nombre: {pokemonSel.name}</p>
                    <p>Altura: {pokemonSel.height}</p>
                    <p>Peso: {pokemonSel.weight}</p>
                    <p>Habilidades: {pokemonSel.abilities?.map(ability => (
                        <p key={pokemonSel.id}>{ability.ability.name}</p>
                        ))}</p>
                </div>
            </div>
            <div className="stats d-flex flex-column bg bg-warning rounded mt-3">
                <h2 className="text-center mt-1 text-success">Estadísticas</h2>
                {
                    pokemonSel.stats?.map(stat => (
                        <p className="ms-5 me-5 text-success">{stat.stat.name} : <BarraEstado value={stat.base_stat} /> {stat.base_stat}</p>
                    ))
                }
            </div>
            <div className="evolution bg bg-warning rounded mt-3 mb-3 pb-5 mb-5">
                <h2 className="text-center text-success">Tipos a los que pertenece</h2>
                <div className="types d-flex justify-content-center">
                    {
                        pokemonSel.types?.map(type => (
                            <h3><Badge pill bg="success" className="me-3">{type.type.name}</Badge></h3>
                        ))
                    }
                </div>
                <div className="games text-center mt-4">
                    <h3 className="text-success">Juegos en los que aparece</h3>
                    {
                        pokemonSel.game_indices?.map(game => (
                            <Badge pill bg="success me-3">{game.version.name}</Badge>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Pokemon;