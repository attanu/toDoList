import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ListItem = (props) => {

    const [line, setLine] = useState(false);

    const lineThrough = {
        textDecoration: 'line-through 2px #ff5735'
    }

    const lineDefault = {
        textDecoration: 'none'
    }

    const checkBtnChecked = {
        backgroundColor: '#81f542',
    }

    const checkBtnDefault = {
        backgroundColor: '#806a95',
    }

    const checkUncheck = () => {
       line ? setLine(false) : setLine(true)
    }

    return (
        <>
            <hr/>
            <div className='list-item'>
            <IconButton 
            varient='contained'
            className='check-btn' 
            onClick={checkUncheck} 
            style={line ? checkBtnChecked : checkBtnDefault}>
                ✔
            </IconButton>

            <li title='click to edit' style={line ? lineThrough : lineDefault} contentEditable='true'>
              {props.ListItemvalue} 
             </li>
             <IconButton 
             varient='contained'
             className='delete-btn' 
             onClick={()=>{props.deleteItems(props.id)}}>
              <DeleteIcon />
             </IconButton>     
            </div>
        </>
    );
}

export default ListItem;