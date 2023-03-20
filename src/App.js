import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MyContext from './MyContext';

import Home from './views/home';
import Pokemones from './views/pokemones';
import Navbar from './components/navBar';
import Pokemon from './components/pokemon';

function App() {
const [pokemones, setPokemones] = useState([]);
const [pokemonSelected, setPokemonSelected] = useState("");
const url = 'https://pokeapi.co/api/v2/pokemon/';
const globalState = { pokemones , pokemonSelected , setPokemonSelected , url }
// const navigate = useNavigate();

const getData = async() =>{
  const response = await fetch(url);
  const pokemon = await response.json();
  console.log(pokemon.results);
  const pokemonResult = pokemon.results;
  setPokemones(prevPokemon => [...pokemonResult]);
  console.log(pokemones);
}

useEffect(()=>{
  getData()
},[]);

  return (
    <div className="App">
      <MyContext.Provider value={globalState}>
        <BrowserRouter basename='/pokedex_react'>
        <Navbar />
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path='/atraparlosYa' element={<Pokemones />} />
            <Route  path="/atraparlosYa/:pokemonSelected" element={ pokemonSelected !== ""? <Pokemon /> : <Navigate to="/atraparlosYa" />}/>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
