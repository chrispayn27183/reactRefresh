import React, {Component} from 'react';
import './App.css';
import {Grid} from './components/grid/grid.component'

class App extends Component {
  constructor(){
    super()
    this.state = {
      i2: 0,
      i1: 1,
      result: 1,
      arr1: [{id: 1, value: 1},
        {id: 2, value:2},
        {id: 3, value:3},
        {id: 4, value:4},
        {id: 5, value:5}],
      arr2: [{id: 2, value:'Here'},
        {id: 5, value:'are'},
        {id: 7, value:'some'},
        {id: 9, value:'words'}],
      months: [{id: 1, value:'Jan'},
        {id: 2, value:'Feb'},
        {id: 3, value:'Mar'},
        {id: 4, value:'Apr'},
        {id: 5, value:'May'},
        {id: 6, value:'Jun'},
        {id: 7, value:'Jul'},
        {id: 8, value:'Aug'},
        {id: 9, value:'Sep'},
        {id: 10, value:'Oct'},
        {id: 11, value:'Nov'},
        {id: 12, value:'Dec'}],
      selection: 'Selection placeholder, replace with value of clicked blue box...'                
    } 
  }

  updateSelection = selection => {
    this.setState({ selection });
  }

  doButton = async () => {
    await this.setState({i2: this.state.i1});
    await this.setState({i1: this.state.result});
    await this.setState({result: this.state.i1 + this.state.i2});
  }
  
  render() {
    const {i2, i1, result} = this.state;
    
    return (
      <div className="App">
        
        <p>{i2} + {i1} = {result}</p>
        <button onKeyDown={this.doButton} onMouseUp={this.doButton}>Do the thing</button>
        <p></p>

        <Grid updateSelection={this.updateSelection}>{this.state.arr1}</Grid>
        <Grid updateSelection={this.updateSelection}>{this.state.arr2}</Grid>
        <Grid updateSelection={this.updateSelection}>{this.state.months}</Grid>
        <h2>{this.state.selection}</h2>
    </div>
    )
  }
}

export default App;
