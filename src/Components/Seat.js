import React, { Component } from 'react';
import axios from 'axios';

class Seat extends Component {
    constructor(props){
        super();
        this.state ={
           
        }
    }
    reserveSeat = ()=>{
        let seatData =  {
            "email":"rania@gmail.com",
            "telephone":"00131000780",
            "name":"rania",
            "seat_number":"1A",
            "ticket_id":19
          }
        axios.post('http://localhost:9090/reservation/',seatData)
        .then(response =>  {    
            //////////////problem here with setState (doesn't set state)
                           
                           console.log(response.data)
    
                           } );
    }

    render() {
      
                let seat = this.props.seat;
                let count =parseInt(seat._id.charAt(0));
                let style = {
                    float:'left',
                    width:16+"%"
                }

                if(seat.available == false){
                    
                    return (
                        <li className="seat"  style={style}>
                            <input type="radio" disabled key={seat._id} />
                            <label htmlFor={seat._id}>{seat._id}</label>
                         </li>
                         );
                }else{
                    return (

                        <li onClick={this.reserveSeat} className="seat"  style={style}>
                        <input type="radio" key={seat._id} />
                        <label htmlFor={seat._id}>{seat._id}</label>
                     </li>

                    );
                }
    }
}

export default Seat;
