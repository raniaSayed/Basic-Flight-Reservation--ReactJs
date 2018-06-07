import React, { Component } from 'react';
import Reservation from './Components/Reservation';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super();
    this.state  = {}
  }
  componentWillMount(){
   this.getAllSeats();
   this.getAllReservations();
}
  render() {
    let seats = this.state.seats;
    console.log("seats");
    console.log(seats);
    let count = 0;
            return (
              <div className="App">
              <Reservation seats={this.state.seats} reservations={this.state.reservations} />
              </div>
            );
        
}
  getAllSeats = ()=> {
    axios.get('http://localhost:9090/seat/')
    .then(response =>  {    
        //////////////problem here with setState (doesn't set state)
                       this.setState({seats:response.data})
                       if(response.data){
                       console.log("11111111111111")
                       }

                       } );
  }

  getAllReservations = ()=> {
  axios.get('http://localhost:9090/reservation/')
  .then(response =>  {    
      //////////////problem here with setState (doesn't set state)
                     this.setState({reservations:response.data})
                     if(response.data){
                     console.log("11111111111111")
                     }

                     } );
}
}
export default App;
