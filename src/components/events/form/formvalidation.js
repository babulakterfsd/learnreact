import React from 'react';

class Validform extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        isagree: false,
        errors: {name: '', email: '', password: ''}
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    checkboxHandler = event => {
        this.setState({isagree: event.target.checked})
    }

    handleErrors = user => {
        let errors = {};
        if(!user.name)errors.name = "name is required";
        if(!user.email)errors.email = "email is required";
        if(!user.password)errors.password = "password is required";

        return {
            errors, 
            isError : Object.keys(errors).length !== 0
         }
    }

    submitHandler = event => {
       event.preventDefault();
       let {name, email, password} = this.state;
       let {errors, isError} = this.handleErrors({name, email, password})

        if(isError){
            this.setState({errors: errors});
            setTimeout(() => {
                this.setState({errors: {name: '', email: '', password: ''}})
            }, 1000)
        }else{
            console.log(this.state);
        }


    //    if(!this.state.isagree) {
    //        alert('Please read our terms and accept those before you submit the data')
    //    } else {
    //       console.log(this.state);
    //       this.setState({name: '', email: '', isagree: false, password: ''})
    //    }

    }

    render() {
        let {errors} = this.state;
        return (
            <div className="container-fluid mt-5 p-5">
                <h4 className="text-center"><u className="mb-1">Let's learn form validation</u></h4>
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <form action="#" className="form">


                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name" 
                                value={this.state.name}
                                placeholder="type your name " className="form-control"
                                onChange={this.changeHandler}
                            />
                            {errors?.name && <small style={{color: "red"}}>{errors?.name}</small>}<br/>

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={this.state.email} placeholder="type your valid email " className="form-control mb-3" onChange={this.changeHandler}/>
                            

                            {errors?.email && <small style={{color: "red"}}>{errors?.email}</small>}<br/>

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={this.state.password} placeholder="password should be 8-15 characters " className="form-control" onChange={this.changeHandler}/>

                            {errors?.password && <small style={{color: "red"}}>{errors?.password}</small>}<br/>

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