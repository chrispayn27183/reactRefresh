import React, {Component} from 'react';
import './App.css';
import {Grid} from './components/grid/grid.component';
import {MonthSelector} from './components/monthselector/monthselector.component'; 


class App extends Component {
  constructor(){
    super()
    this.renderCount= 1;                
    this.state = {
      // i2: 0,
      // i1: 1,
      // result: 1,
      selection: [],
      monthSwitch: [
        {id: 1, value: '<'},
        {id: 3, value: '>'}],
      calendarArr: [],
      activeMonth: 1
    } 
  }

  async componentDidMount () {
    let temp = new Date();
    let monthNo = temp.getMonth()+1;
    await this.setState({activeMonth: monthNo})
    
    fetch('http://localhost:3030/rota',{method: 'POST',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"monthNo": this.state.activeMonth, "teamId":1 })
    })
    .then(response => response.json())
    .then(days => this.setState({calendarArr: days})); 
  }

  updateSelection = newSelection => {
    let prevSelection = this.state.selection;
    
    if(prevSelection.includes(newSelection)===true){
      prevSelection = prevSelection.filter(n => n!==newSelection);
    }else{
      prevSelection.push(newSelection);
    }
    this.setState({ selection: prevSelection });
    console.log(this.state.selection);
  }

  doButton = () => {
    const tempi2 = this.state.i1;
    const tempi1 = this.state.result;
    const tempresult = tempi1 + tempi2;
    this.setState({i1: tempi1,i2: tempi2,result: tempresult});
  }
  
  refreshCalendar = async (newMonth) => {    
    await this.setState({"activeMonth": newMonth})

    fetch('http://localhost:3030/rota',{method: 'POST',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"monthNo": this.state.activeMonth, "teamId":1 })
    })
    .then(response => response.json())
    .then(days => this.setState({calendarArr: days})); 
  }

  render() {
    console.log(`Render Count: ${this.renderCount}`);
    this.renderCount++;
    //const {i2, i1, result} = this.state;
    
    return (
      <div className="App">
        {/* <p>{i2} + {i1} = {result}</p>
        <button onKeyDown={this.doButton} onMouseUp={this.doButton}>Do the thing</button>
        <p></p> */}

        <MonthSelector refreshCalendar={this.refreshCalendar} activeMonth={this.state.activeMonth}></MonthSelector>

        <p></p>

        <Grid updateSelection={this.updateSelection} disp1='date' disp2='day' disp3='user_name' disp4='id'>{this.state.calendarArr}</Grid>

        <h2>{this.state.selection}</h2>
    </div>
    )
  }
}

export default App;