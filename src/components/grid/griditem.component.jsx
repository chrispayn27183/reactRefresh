import React from'react';
import './griditem.style.css'; 

const handleClick = (event, data ) => {
    console.log(data)
}

export const GridItem = (props) => (
    <div className='griditem'>
        <h2 key={props.id} onClick={((event) => handleClick(event,props.children.value))}>{props.children.value}</h2>  
    </div>
);

