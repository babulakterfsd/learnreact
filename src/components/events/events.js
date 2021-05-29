import React from 'react';

class Handleevent extends React.Component {


    state = {
        name: ''
    }

    inputChange = (event) => {
        this.setState({name: event.target.value})
      }

    focusevent = (event) => {
        console.log('Focused on the input field !')
    }

    blurevent = (event) => {
        if(!this.state.name) {
            alert('You haven\'t entered anything !')
        }
        console.log('Focus is on another place !')
    }


    
    render() {
        return (
            <>
              <section className="event" style={{padding: '100px 0px'}}>
                <h3 className="text-center">Some form to test event handling</h3>
                <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                    <form action="#" className="my-4">
                        <div class="form-group">
                            <label for="eventtester">Type whatever you want:</label>
                            <input type="text"
                            class="form-control" name="eventtester" id="eventer" aria-describedby="helpId" placeholder="type your text" value={this.state.name} onChange={this.inputChange} onFocus={this.focusevent} onBlur={this.blurevent}/>
                        </div>
                    </form>
                    <br/>
                    <br/>
                    {this.state.name ? <h3 className="text-center">Welcome, {this.state.name}</h3> : ''}
                    </div>
                   </div>
                </div>
             </section>
            </>
        )
    }
}

export default Handleevent;