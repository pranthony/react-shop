import './App.css';
import React from 'react';

class Clock extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        date : new Date()
      };
    }
    
    componentDidMount(){
      this.timer = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    componentWillUnmount(){
      clearInterval(this.timerID);  
    }
  
    tick(){
      this.setState({
        date: new Date()
      });
    }
  
    render(){
      return(
        <div>
          <h1>Reloj</h1>
          <h2>It is {this.state.date.toLocaleTimeString(this.props.time)}.</h2>
        </div>  
      )
    }
  }

export default Clock;