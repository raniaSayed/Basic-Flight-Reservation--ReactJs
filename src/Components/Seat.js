import React, { Component } from 'react';
import axios from 'axios';

class Seat extends Component {
    constructor(props){
        super();
        this.state ={
           
        }
    }
    /*getAllSeats = ()=> {
       let seats =  axios.get('http://localhost:9090/seat/')
          .then(response => (response.data).map(element => {
              return <label>{element._id}</label>
          })
        );
        return seats;
    }*/
    componentWillMount(){
        // axios.get('http://localhost:9090/seat/')
        //      .then(response =>  {    
        //          //////////////problem here with setState (doesn't set state)
        //                         this.setState({Seats:response.data})
        //                         console.log("11111111111111")

        //                         } );
    }

    render() {
        console.log("222222222222222")

        console.log(this.state);
   //     let seats = this.props.seats;
        // if(seats){
        //     let count = 0;
        //  return (

            
        //     seats.map(seat =>{
                let seat = this.props.seat;
                let count =parseInt(seat._id.charAt(0));

                if(seat.available == false){
                    
                    return (
                        <li className="seat"  width="16%">
                            <input type="checkbox" disabled id="{seat._id}" />
                            <label htmlFor={seat._id}>{seat._id}</label>
                         </li>
                         );
                }else{
                    return (

                        <li className="seat"  width="16%">
                        <input type="checkbox" id="{seat._id}" />
                        <label htmlFor={seat._id}>{seat._id}</label>
                     </li>

                    );
                }
        //  })
        //  );
        // }else{
        //     return (
        //         <div> Loading....</div>
        //     );
       // }
        //  {this.state.Seats.map(seat =>{
        //     return (
        //    <button  key={seat._id}>{seat._id}</button>
        //     );
        //  })}

    }
}

export default Seat;
