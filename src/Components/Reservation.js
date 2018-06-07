import React, { Component } from 'react';
import Seat from '../Components/Seat';
import uuid from 'uuid';
import axios from 'axios';
class Reservation extends Component {
    constructor(props){
        super();
        this.state ={
        }
    }
    handleSubmit = ()=>{
        var email = this.refs.email.value;
        var name = this.refs.name.value;
        var telephone = this.refs.telephone.value;
        //send request with data to api
        //
            let seatData =  {
                "email":email,
                "telephone":telephone,
                "name":name,
                "seat_number":"1A"////////////////////get seat number from seat component
            }
            axios.post('http://localhost:9090/reservation/',seatData)
            .then(response =>  {    
                //////////////problem here with setState (doesn't set state)
                               
                               console.log(this.refs)
                            //   this.forceUpdate();
        
                               } );
    
    }
    changeSeat = (selected_seat_value)=>{
        this.setState({selected_seat:selected_seat_value})
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
        <div className="userform" style={{paddingLeft:10 +"px"}}> 
            <label>Name: </label><input ref="name" /><br />
            <label>Email: </label> <input ref="email" /><br />
            <label>Telephone: </label><input ref="telephone" /><br />
        </div>
       
        <ol className="cabin fuselage" type="A">
        {this.props.seats.map(seat =>{
            return <Seat key={uuid.v4()} seat={seat} OnChangeSeat= {this.changeSeat} /> 
        })
        }
       <button onClick={this.handleSubmit}>Submit</button>
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
