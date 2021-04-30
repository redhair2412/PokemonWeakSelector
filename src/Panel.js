import React from 'react';
import './Panel.css'

const Panel = ({id, name, types, panelId, onChange }) => {

    const handleEvent = (event) => {
        onChange(panelId)
        event.stopPropagation();
    };

    return (
        <div className="PNL" onClick={handleEvent} >
            <img className='pokeImg' alt='pokemon img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <div className='Potext'>
                <h2>{name[0].toUpperCase() + name.substring(1)}</h2>
                <p>Id: {id}</p>
                <p>Type: {
                    types.map(type => 
                    type.type.name[0].toUpperCase() + type.type.name.substring(1))
                    .join(', ')
                }</p>
            </div>
        </div>
    );
}

export default Panel;


