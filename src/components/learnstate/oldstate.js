import React from 'react';
import '../learn/learn.css';

class Learn extends React.Component {

    state = {
        count: 0,
        minute: 0,
        isDisabled: false
    }

    intervalId = null;

    increment = () => {
        this.setState({count: this.state.count + 1});
        if(this.state.count > 58) {
            this.setState({count: 0, minute: this.state.minute + 1})
           }
    }

    decrement = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
        if(this.state.count === 0 && this.state.minute) {
            this.setState({count: 59, minute: this.state.minute - 1})}
    }

   starter = () => {

    if(this.state.count > 0) {
        this.setState({isDisabled: true})
    }

       if(this.state.count > 0 && !this.intervalId) {
           this.intervalId = setInterval(() => {
              this.setState({count: this.state.count - 1}, () => { 
                    if(this.state.count === 0 && this.state.minute) {
                        this.setState({count: 59, minute: this.state.minute - 1})}
                    if(this.state.count === 0 && this.state.minute === 0) {
                    clearInterval(this.intervalId);
                    this.intervalId = null;
               }
            })
           },1000)
       }
   }

   pauser = () => {
       if(this.intervalId) {
           clearInterval(this.intervalId);
           this.intervalId = null
       }
   }

   reseter = () => {
       this.setState({count: 0,minute: 0, isDisabled: false});
       clearInterval(this.intervalId);
       this.intervalId = null
   }


   render() {
       return (
           <div className = "mainStateContainer">
           <div className="stateContainer">
            <h3>A Simple Time Counter App</h3>
           <h1><span>{this.state.minute}</span> : <span>{this.state.count}</span></h1>
           </div>
           <div className="buttonContainer">
               <button disabled = {this.state.isDisabled} className="increment" onClick = {this.increment}>+</button>
               <button disabled = {this.state.isDisabled} className="decrement" onClick = {this.decrement}>-</button>
           </div>
           <div className="timerContainer">
               <button className="start" onClick = {this.starter}>Start</button>
               <button className="pause" onClick = {this.pauser}>Pause</button>
               <button className="reset" onClick = {this.reseter}>Reset</button>
           </div>
           </div>
       )
   }
}


export default Learn;