import React from 'react'
import Textinput from '../form/textinput.js'
import Radiobutton from '../form/radiobutton.js'



class Signup extends React.Component {

    state = {
       username: '',
       email: '',
       password: '',
       gender: '',

    }

    inputchangehandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {

        const {username, email, password, gender} = this.state;

        console.log(this.state);

        return (
            <div className="signupformcontainer" style={{marginTop: '200px', padding: '100px 0px'}}>
                <h2 className="text-center text-primary"><u>A fully custom react signup form</u></h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 offset-2">




                          <form action="#" className="form p-2" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '100px 50px', borderLeft: '15px solid #3b5'}}>
                             <Textinput label={'name:'} name={'username'} type={'text'} id={'username'} placeholder={'type your name here'} value={username} onChange={this.inputchangehandler} />

                             <Textinput label={'email:'} name={'email'} type={'email'} id={'email'} placeholder={'type your valid email'} value={email} onChange={this.inputchangehandler} />

                             <Textinput label={'password:'} name={'password'} type={'password'} id={'password'} placeholder={'minimum 8 characters'} value={password} onChange={this.inputchangehandler} />

                             <Radiobutton label={'gender:'} name={'gender'} type={'radio'} id={'gender'} value={gender} onChange={this.inputchangehandler} />

                          </form>







                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;