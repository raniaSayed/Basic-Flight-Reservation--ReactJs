import React, { Component } from 'react';
import Seat from '../Components/Seat';
import uuid from 'uuid';
import axios from 'axios';
class Reservation extends Component {
    constructor(props){
        super();
        this.state ={
        }
        this.seat= "";
        this.reservedSeats = [];
        this.emptySeats = [];
        this.changeSeat = this.changeSeat.bind(this);
    }
    handleSubmit = (event)=>{
        var email = this.refs.email.value;
        var name = this.refs.name.value;
        var telephone = this.refs.telephone.value;
        

            let seatData =  {
                "email":email,
                "telephone":telephone,
                "name":name,
                "seat_number":this.seat
            }
            axios.post('http://localhost:9090/reservation/',seatData)
            .then(response =>  {
                // this.forceUpdate();

              if(response.data.error){
                event.preventDefault();
              }
                
               // if(response.errorCode)
            } );
    
    }
    changeSeat = (e)=>{
        //problem with setState
       // this.setState({selected:e.target.value});
       this.seat = e.target.value;
    } 
    
  render() {
    console.log("this.props.seats");
    console.log(this.props.seats);
    if(this.props.seats){


        return (
            <div>
        <div className="plane">
        <div className="cockpit">
        <h1>Please select a seat</h1>
        </div>
        <div className="exit exit--front fuselage">
        
        </div>
        <form onSubmit={this.handleSubmit}>
        <div className="userform" style={{paddingLeft:10 +"px"}}> 
            <label>Name: </label><input ref="name" /><br />
            <label>Email: </label> <input ref="email" /><br />
            <label>Telephone: </label><input ref="telephone" /><br />
        </div>
       
        <ol className="cabin fuselage" type="A">
        {this.props.seats.map(seat =>{
            console.log(seat.available)
            if(seat.available == false)this.reservedSeats.push(seat);
            else this.emptySeats.push(seat);
            return <Seat key={uuid.v4()} seat={seat} OnChangeSeat= {this.changeSeat} /> 
        })
        }
        {
            console.log("ssssssssssssss")}
            
            {console.log(this.reservedSeats)}
        </ol>
        <input type="submit" value="Save" />
        </form>

    <div className="exit exit--back fuselage">
        
    </div>
    </div>

<hr />

<div>
        <h1>Empty Seats </h1>
        <div className="plane">
        <div className="cockpit">
        <h1>Empty Seats</h1>
        </div>
        <div className="exit exit--front fuselage">
        
        </div>
        <ol className="cabin fuselage" type="A">
        {this.emptySeats.map(seat =>{
          
            return <Seat key={uuid.v4()} seat={seat} empty={true}  /> 
        })
       
        }
         <br />
        </ol>

    </div>
    </div>
    <div>
        <div className="plane">
        <div className="cockpit">
        <h1>Reserved Seats</h1>
        </div>
        <div className="exit exit--front fuselage">
        
        </div>
        <ol className="cabin fuselage" type="A">
        {this.emptySeats.map(seat =>{
          
            return <Seat key={uuid.v4()} seat={seat} reserved={true}  /> 
        })
       
        }
         <br />
        </ol>

    </div>
    </div>
    </div>

        );
    }
    return null;



}
}

export default Reservation;
