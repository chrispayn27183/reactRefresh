import React, {Component} from'react';
import './griditem.style.css'; 

// const handleClick = (event, data, updateSelection) => {
//     updateSelection(data);
// }
//const color = ff7b00e7;

export class GridItem extends Component {
    constructor(){
        super()
        this.state = {
            bgColor: '',
            color: 'ff7b00e7'  
        }
    }

    handleClick = (event, data, updateSelection) => {
        updateSelection(data);
        
        if(this.state.bgColor=== 'orange'){
            this.setState({bgColor: ''})
        }else{
            this.setState({bgColor: 'orange'})
        }
    }

    render() {
        return (
            <div className='griditem' style={{backgroundColor: this.state.bgColor}} >
            <h2 key={this.props.id}  onClick={((event) => this.handleClick(event,this.props.children.value, this.props.updateSelection))}>{this.props.children.value}</h2>  
            </div>
        )
    }
}

// export default class GridItem {}

// export const GridItem = (props) => (
//     <div className='griditem'>
//         <h2 key={props.id} onClick={((event) => handleClick(event,props.children.value, props.updateSelection))}>{props.children.value}</h2>  
//     </div>
// );
