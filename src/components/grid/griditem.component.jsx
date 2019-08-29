import React from'react';
import './griditem.style.css'; 

const handleClick = (event, data, updateSelection) => {
    console.log(data)

    updateSelection(data);
}

export const GridItem = (props) => (
    <div className='griditem'>
        <h2 key={props.id} onClick={((event) => handleClick(event,props.children.value, props.updateSelection))}>{props.children.value}</h2>  
    </div>
);

