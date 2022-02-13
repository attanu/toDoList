import React, { useEffect, useState } from 'react';
import ListItems from './ListItems';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ClearAllIcon from '@mui/icons-material/ClearAll';


const App = () => {

    // fetching data from localStorage
    const localStorageData = () => {
        const list = localStorage.getItem('toDos')

        if(list) {
            return JSON.parse(list);
        }
        else {
            return [];
        }
    }

    
    const [input, setInput] = useState('');
    const [item, setItem] = useState(localStorageData());

    // capturing inputes
    const inputEvent = (event) => {
        setInput(event.target.value);
    }
    
    // hndling click event and addding, formatting and checking entry 
    const addEvent = () => {
        let slicedInput;
        input.length < 27 ? (slicedInput = input) : (slicedInput = `${input.slice(0,27)}...`);
        input !== '' ? setItem([...item,slicedInput]) : alert('Enter an item !');
        setInput('');
    }

    // handling keyPress and adding item on pressing enter button
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addEvent();
          }    
    }

    // handling item deletion
    const deleteItems = (id) => {
        console.log('deleted');

        setItem((old) => {
            return old.filter((arr, index) => index !== id)
        });
    }

    // handling clear(delete) all
    const deleteAll = () => {
        console.log('All deleted.');

        setItem([]);
    }


    // storing data to localStorage
    useEffect(() => localStorage.setItem('toDos', JSON.stringify(item)), [item]);

   
    return (
        <>
            <div className="container">
                <div className="main">
                    <h1>To Do List 
                    <span className='clear-all' title='Clear All' onClick={deleteAll}>
                    <ClearAllIcon />
                    </span>
                </h1>
                    <div className="input-and-button">
                        <input type="text" placeholder='Add an item' onChange={inputEvent} onKeyPress={handleKeyPress} value={input}/>
                        <Fab className='add-btn' onClick={addEvent}> <AddIcon /> </Fab>
                        <hr/>
                    </div>
                    <ul>
                        {
                            item.map((value, indx) => {
                                return (
                                    <ListItems             
                                    key={indx}
                                    id={indx}
                                    ListItemvalue={value}
                                    deleteItems={deleteItems}
                                    />                 
                                );
                            })
                        }

                    </ul>
                </div>
                <nav>Note : Editings and Check marks will no be stored, those are for temporary use.</nav>
            </div>
        </>
    );
}

export default App;







