import React from 'react'; 
import './grid.style.css';
import {GridItem} from './griditem.component';



export const Grid = (props) => {

  const updateSelection = selection => {
    props.updateSelection(selection);
  };

  return (
    <div className='grid'> 
      {props.children.map(item => (
        <GridItem updateSelection={updateSelection} key={item.id}>{item}</GridItem>
        //<h2 key={item.id}>{item.value}</h2>  
      ))}
    </div>
  );
};