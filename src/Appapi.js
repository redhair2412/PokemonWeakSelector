import React, { useEffect, useState } from 'react';
import PanelList from './PanelList';
import SearchBox from './SearchBox';
import Dropdown  from './Dropdown';
import gameVers from "./GameVers";
// import TeamBox from './TeamBox';



function Appapi() {   

    const [pokedex, setPokedex] = useState([]);
    const [searchfield, setSearchField] = useState('');
    const [gameVersion, setGameVersion] = useState(["https://pokeapi.co/api/v2/pokedex/2"]);
    const [value, setvalue] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const urls = gameVersion;
            const res = await Promise.all(urls.map(url => fetch(url)));
            const pokemonz = res.map(dta => {
                return dta
                .json()
                .then(data => {
                    let results = data.pokemon_entries;
                    let promisesArray = results
                      .map(result => {
                        return fetch(result.pokemon_species.url
                            .replace(/pokemon-species/g, "pokemon"))
                            .then(response => response.json());
                      })
                return Promise.all(promisesArray);})
            })
            Promise.all(pokemonz).then((values) => {
                setPokedex(values)
            })               
        }
        fetchData();
            
    },[gameVersion]);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }   

    const filteredPokemon = pokedex.map(arry => {
            return arry.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
            })
        }).flat(1);

        return (
            <div>
                <h1>Pokemon Type Strength</h1>
                <p>Select your game and pokemon to see what types they can beat</p>
                <SearchBox searchChange={onSearchChange}/>
                <div style={{width: 250}}>
                    <Dropdown 
                        options={gameVers} 
                        prompt='Select Game...' 
                        value={value} 
                        onChange={val => setvalue(val)}
                        gameVerChange={url => setGameVersion(url)} />
                </div>
                {/* <div>
                    <TeamBox pickedValue={picked} />
                </div> */}
                <PanelList pokedex={filteredPokemon}  />
            </div>
            );
    
}

export default Appapi;


