import React, {Component} from 'react'; 

//incoming props this.activeMonth
//incoming function refreshCalendar


export class MonthSelector extends Component {
  constructor(){
    super()
    this.state ={
      activeMonth: '',
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
    
    await this.setState({activeMonth: monthNo})
    this.showSelectedMonth(this.props.activeMonth, this.state.months)
  }


  incMonth = async () => {
      const currentMonth = this.props.activeMonth;
      const newMonth = currentMonth + 1;
      await this.setState({activeMonth: newMonth});
      this.getNewCalendar(this.props.refreshCalendar);

      this.showSelectedMonth(this.props.activeMonth, this.state.months)
  }
    
  decMonth = async () => {
      const currentMonth = this.props.activeMonth;
      const newMonth = currentMonth - 1;
      await this.setState({activeMonth: newMonth});
      this.getNewCalendar(this.props.refreshCalendar);

      this.showSelectedMonth(this.props.activeMonth, this.state.months)
  }
  
  getNewCalendar = (refreshCalendar) => {
    refreshCalendar(this.state.activeMonth);
  }

  showSelectedMonth = (selectMonth, monthsSet) => {
    const shownMonth = monthsSet.filter(function(month) {
      return month.id === selectMonth; 
    })
    this.setState({"activeMonth": shownMonth[0].value}); 
  }

  render() {
    return (
      <div > 
      <button onMouseUp={this.incMonth}>+</button>
      <p>{this.state.activeMonth}</p>
      <button onMouseUp={this.decMonth}>-</button> 
      </div>
    );
  }
};