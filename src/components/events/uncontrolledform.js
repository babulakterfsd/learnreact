import React from 'react';

class Uncontrolledform extends React.Component {

    ucformhandler = event => {
        event.preventDefault()
        let formData = {
            name: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        console.log(formData);
    }

    render() {
        return <div className="ucformcontainer my-5 p-5 text-center">
            <h3 className="text-center"><u>Uncontrolled Form</u></h3>
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-12 col-md-6 offset-md-3">
                          <form action="#" className="form" onSubmit={this.ucformhandler}>
                            <input className="form-control mb-2" type="text" name="username" placeholder="type your name"/>
                            <input className="form-control mb-2" type="email" name="email" placeholder="type email here"/>
                            <input className="form-control mb-2" type="password" name="password" placeholder="type minimum 8 character as your password"/>
                            <button type="submit" className="btn btn-success mt-2">Submit</button>
                          </form>
                          </div>
                      </div>
                  </div>
               </div>
    }
}

export default Uncontrolledform;