import React from 'react';

class Controlledform extends React.Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    inputChangeTracker = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    formhandler = event => {
        event.preventDefault();
        console.log(this.state);
        this.setState({username: '', email: '', password: ''})
    }



    render() {

      let {username,email,password} = this.state;

        return (
             <div className="formcontainer my-5 p-5 text-center">
             <h3 className="text-center"><u>Controlled Form in React</u></h3>
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-6 offset-3">
                          <form action="#" className="form" onSubmit={this.formhandler}>
                            <input className="form-control mb-2" type="text" name="username" placeholder="type your name" value={username} onChange={this.inputChangeTracker}/>
                            <input className="form-control mb-2" type="email" name="email" placeholder="type email here" value={email} onChange={this.inputChangeTracker}/>
                            <input className="form-control mb-2" type="password" name="password" placeholder="type minimum 8 character as your password" value={password} onChange={this.inputChangeTracker}/>
                            <button type="submit" className="btn btn-success mt-2">Submit</button>
                          </form>
                          </div>
                      </div>
                  </div>
               </div>
        )
    }
}

export default Controlledform;