import React, { Component } from 'react';
import axios from 'axios';

class Seat extends Component {
    constructor(props){
        super();
        this.state ={
           
        }
    }
    handleLangChange = () => {
        var seat_id = this.refs.seat_id.value;
        this.props.OnChangeSeat(seat_id);            
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

                        <li className="seat"  style={style}>
                        <input type="radio" ref="seat_id" key={seat._id} value={seat._id} 
                            checked={this.state.selected === seat._id} 
                            // onChange={(e) =>  selected_seat = e.target.value }
                            onChange={this.handleLangChange} />
                        <label htmlFor={seat._id}>{seat._id}</label>
                     </li>
                    );
                }
    }
}

export default Seat;
