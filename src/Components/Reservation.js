import React, { Component } from 'react';
import Seat from '../Components/Seat';
import uuid from 'uuid';
class Reservation extends Component {
    constructor(props){
        super();
        this.state ={
           
        }
    }
    
  render() {
    console.log("this.props.seats");
    console.log(this.props.seats);
    if(this.props.seats){

        return (
        <div className="plane">
        <div className="cockpit">
        <h1>Please select a seat</h1>
        </div>
        <div className="exit exit--front fuselage">
        
        </div>
        <ol className="cabin fuselage" type="A">
        {this.props.seats.map(seat =>{
            return <Seat key={uuid.v4()} seat={seat} /> 
        })
        }
       
        </ol>
    <div className="exit exit--back fuselage">
        
    </div>
    </div>
        );
    }
    return null;



}
}

export default Reservation;
