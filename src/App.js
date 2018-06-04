import React, { Component } from 'react';
import Project from './Components/Project';
import Reservation from './Components/Reservation';

class App extends Component {
  constructor(props){
    super();
    this.state  = {mood:"Happy"}
  }
  render() {
    return (
      <div className="App">
       <Reservation />
      </div>
    );
  }
  toggleMood = ()=> {
      let m = (this.state.mood == "Happy")? "Sad" : "Happy";
      this.setState({mood:m});    
  }
}

export default App;
