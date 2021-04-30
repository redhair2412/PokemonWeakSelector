import React, { useState } from 'react';
import './Dropdown.css'


function Dropdown({options, prompt, value, onChange, gameVerChange}){

    const [open, setOpen] = useState(false);

    return(
        <div className='dropdown'>
            <div className='control' onClick={() => setOpen((prev) => !prev)}>
                <div className='selected-value'>{prompt}</div>
                <div className={`arrow ${open ? "open" : null}`}/>
            </div>
            <div className={`options ${open ? "open" : null}`}>
            {options.map((option) => (
                    <div 
                        className='option'
                        onClick={() => {
                            onChange(option);
                            gameVerChange(option.url)
                            setOpen(false);
                        }}>{option.name}</div>
                ))} 
            </div>
        </div>
        
    )
}


export default Dropdown;
