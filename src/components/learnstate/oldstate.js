import React from 'react';

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
            <h3 className="text-center">A Simple Time Counter App</h3>
           <h1 className="text-center"><span>{this.state.minute}</span> : <span>{this.state.count}</span></h1>
           </div>
           <div className="buttonContainer text-center mb-3">
               <button disabled = {this.state.isDisabled} className="increment" onClick = {this.increment} style={{marginRight: '20px'}}>+</button>
               <button disabled = {this.state.isDisabled} className="decrement" onClick = {this.decrement} style={{marginLeft: '20px'}}>-</button>
           </div>
           <div className="timerContainer text-center">
               <button className="start mx-2" onClick = {this.starter}>Start</button>
               <button className="pause mx-2" onClick = {this.pauser}>Pause</button>
               <button className="reset mx-2" onClick = {this.reseter}>Reset</button>
           </div>
           </div>
       )
   }
}


export default Learn;