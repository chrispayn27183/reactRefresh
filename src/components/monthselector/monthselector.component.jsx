import React, {Component} from 'react'; 
import './monthselector.style.css'; 
//incoming props this.activeMonth
//incoming function refreshCalendar


export class MonthSelector extends Component {
  constructor(){
    super()
    this.state ={
      activeMonth: '',
      activeYear: '',
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
    }
  }
    
  async componentDidMount(){
    let temp = new Date();
    let monthNo = temp.getMonth()+1;
    let yearNo = temp.getFullYear();
    await this.setState({activeMonth: monthNo});
    await this.setState({activeYear: yearNo});
    this.showSelectedMonth(this.props.activeMonth, this.state.months)
  }

  incMonth = async () => {
    const currentMonth = this.props.activeMonth;
    const currentYear = this.props.activeYear; 
    if(currentMonth%12===0){
      const newMonth = 1;
      const newYear = currentYear +1;
      console.log(newYear);  
      await this.setState({activeMonth: newMonth, activeYear: newYear}); 
    }else{  
      const newMonth = currentMonth + 1;
      await this.setState({activeMonth: newMonth}); 
    }
    this.getNewCalendar(this.props.refreshCalendar);
    this.showSelectedMonth(this.props.activeMonth, this.state.months)
  }
    
  decMonth = async () => {
    const currentMonth = this.props.activeMonth;
    const currentYear = this.props.activeYear; 

    if(currentMonth===1){
      const newMonth = 12;
      const newYear = currentYear -1;
      console.log(newYear);  
      await this.setState({activeMonth: newMonth, activeYear: newYear}); 
    }else{  
      const newMonth = currentMonth - 1;
      await this.setState({activeMonth: newMonth}); 
    }

    this.getNewCalendar(this.props.refreshCalendar);
    this.showSelectedMonth(this.props.activeMonth, this.state.months)
  }
  
  getNewCalendar = (refreshCalendar) => {
    refreshCalendar(this.state.activeMonth, this.state.activeYear);
  }

  showSelectedMonth = (selectMonth, monthsSet) => {
    const shownMonth = monthsSet.filter(function(month) {
      return month.id === selectMonth; 
    })
    this.setState({"activeMonth": shownMonth[0].value}); 
  }

  render() {
    return (
      <div className="selectorBlock" > 
        <button className="selector" onMouseUp={this.incMonth}>+</button>
        <p>{this.state.activeMonth} {this.state.activeYear} </p>
        <button className="selector" onMouseUp={this.decMonth}>-</button> 
      </div>
    );
  }
};