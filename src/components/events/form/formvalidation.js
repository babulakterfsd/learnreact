import React from 'react';

class Validform extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        isagree: false
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    checkboxHandler = event => {
        this.setState({isagree: event.target.checked})
    }

    submitHandler = event => {
       event.preventDefault();
       
       if(!this.state.isagree) {
           alert('Please read our terms and accept those before you submit the data')
       } else {
          console.log(this.state);
          this.setState({name: '', email: '', isagree: false, password: ''})
       }

    }

    render() {
        return (
            <div className="container-fluid mt-5 p-5">
                <h4 className="text-center"><u className="mb-1">Let's learn form validation</u></h4>
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <form action="#" className="form">


                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} placeholder="type your name " className="form-control mb-3" onChange={this.changeHandler}/>

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={this.state.email} placeholder="type your valid email " className="form-control mb-3" onChange={this.changeHandler}/>

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={this.state.password} placeholder="password should be 8-15 characters " className="form-control mb-3" onChange={this.changeHandler}/>

                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" name="isagree" checked={this.state.isagree} onChange = {this.checkboxHandler}/>
                                <label class="form-check-label" for="isagree">
                                    I agree to all the terms and conditions
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary px-3" onClick={this.submitHandler}>create user</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Validform;