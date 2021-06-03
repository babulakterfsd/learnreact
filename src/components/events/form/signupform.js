import React from 'react'
import Textinput from '../form/textinput.js'
import Radiobutton from '../form/radiobutton.js'
import Checkbox from '../form/checkbox.js'
import Select from '../form/select.js'
import Birthday from '../form/bdate.js'
import Textarea from '../form/textarea.js'



class Signup extends React.Component {

    state = {
       username: '',
       email: '',
       password: '',
       gender: '',
       skills: [],
       country: '',
       bday: '',
       bio: '',
       isAgreed: false
    }

    inputchangehandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    skillsHandler = event => {
        if(event.target.checked) {
            this.setState({skills: [...this.state.skills, event.target.value]})
        } else {
            let skills = this.state.skills.filter((skill) => {
                return skill !== event.target.value
            })
            this.setState({skills})
        }

    }

    checkboxHandler = event => {
        this.setState({isAgreed: event.target.checked})
    }

    submitHandler = event => {
         event.preventDefault();
        if(!this.state.isAgreed) {
            alert('You didn\'t agree to our terms and conditions')
        } else {
            console.log(this.state);
        }
    }

    resetHandler = event => {
        this.setState({username: '',
        email: '',
        password: '',
        gender: '',
        skills: [],
        country: '',
        bday: '',
        bio: '',
        isAgreed: false})
    }

    render() {

        const {username, email, password, gender,skills,isAgreed} = this.state;

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

                             <Checkbox name={skills} label='Skills:' onChange={this.skillsHandler} checked={skills.includes('javascript')} />


                             <Select onChange={this.inputchangehandler}/>

                             <Birthday onChange={this.inputchangehandler}/>

                             <Textarea placeholder='write about you in short' onChange={this.inputchangehandler}/>

                             <div className="form-group">
                             <input type="checkbox" name="isAgreed" checked={isAgreed} value={isAgreed} onChange={this.checkboxHandler}/> I agree to your <a href="https://babulakter.com">terms and conditions</a>
                             </div>



                             <button type="submit" className="btn btn-success mt-5" onClick={this.submitHandler}>Submit</button>

                             <button type="reset" className="btn btn-danger mt-5 mx-4" onClick={this.resetHandler}>Reset</button>

                             

                          </form>







                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;