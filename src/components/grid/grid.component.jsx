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
        <GridItem updateSelection={updateSelection} key={item.id}
        disp1={props.disp1} disp2={props.disp2} disp3={props.disp3} disp4={props.disp4}
        >{item}</GridItem>
        
      ))}
    </div>
  );
};