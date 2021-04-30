import React, {useState, useEffect} from 'react';
import Panel from './Panel';
import './PanelList.css';


const PanelList = ({ pokedex }) => {
    const [cardIndex, setCardIndex] = useState(null);
    const [cardArray, setCardArray] = useState([])
    const [panelPick, setPanelPick] = useState(null);


    useEffect(() => {
        setPanelPick(panelComp[cardIndex]);

        addCardSelected();

    },[cardIndex]);


    const panelComp = pokedex.map((pokemon, i) => {
        return <Panel 
            onChange={num => setCardIndex(num)} 
            panelId={i} 
            id={pokedex[i].id} 
            name={pokedex[i].name} 
            types={pokedex[i].types}
            />
    })

    const addCardSelected = event => {
        if (panelPick !== null && cardArray.length < 6) {
            setCardArray(prev => [...prev, panelComp[cardIndex]])
            console.log(cardArray);
        }
    }

    const removeSelection = (event) => {
        event.stopPropagation();
        // cardArray.splice(value, 1)
        console.log(cardIndex);
    }

    return (
        <div>
            <div>
                <div className='emptyBox' id='Block1'>{cardArray[0]}</div>
                <div className='emptyBox' id='Block2'>{cardArray[1]}</div>
                <div className='emptyBox' id='Block3'>{cardArray[2]}</div>
                <div className='emptyBox' id='Block4'>{cardArray[3]}</div>
                <div className='emptyBox' id='Block5'>{cardArray[4]}</div>
                <div className='emptyBox' id='Block6'>{cardArray[5]}</div>
            </div>
            <div>
                {panelComp}
            </div>
        </div>
    );
}

export default PanelList;