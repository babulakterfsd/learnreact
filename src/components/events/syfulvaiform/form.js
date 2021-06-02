import React from 'react';
import { Input, Button, Label } from './comps';


class Form extends React.Component{

    state = {
        newUser: {
            username: '',
            email: '',
            password: '',
            gender: '',
            skills: [],
            birthDate: '',
            salary: '',
            country: ''
        },

        isInfo: false,
        isAgree: false
    }

    handleCondition = e => {
       this.setState({
           [e.target.name]: e.target.checked
       })
    }

    handleChange = e => {

        if(e.target.name === "skills"){
            if(e.target.checked){
                //add skills
                this.setState({
                    newUser:{
                        ...this.state.newUser,
                        [e.target.name]: [e.target.value, ...this.state.newUser.skills]
                    }
                })
            }else{
                //remove skills
                let filteredSkill = this.state.newUser.skills.filter(sk => e.target.value !== sk);
                this.setState({
                    newUser: {
                        ...this.state.newUser,
                        [e.target.name]: filteredSkill
                    }
                })
            }
        }else{
            this.setState({
                newUser: {
                    ...this.state.newUser,
                    [e.target.name]: e.target.value
                }
            });
        }


    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.newUser)
    }

    handleReset = e => {
        this.setState({
            newUser: {
                username: '',
                email: '',
                password: '',
                gender: '',
                skills: [],
                birthDate: '',
                salary: '',
                country: ''
            },
            isInfo: false,
            isAgree: false
        })
    }

    render(){

        let {username, email, password, gender, birthDate, salary, country } = this.state.newUser;
        let isSubmitDisabled = this.state.isAgree && this.state.isInfo;


        return<div style={{width: "60%", margin: "50px auto"}}>

            <form onSubmit={this.handleSubmit}>
                <Label><strong>Name:</strong></Label><br/>
                <Input name="username" value={username} type="text" placeholder="username" onChange={this.handleChange} /><br/><br/>

                <Label><strong>E-Mail:</strong></Label><br/>
                <Input name="email" value={email} type="email" placeholder="example@gmail.com" onChange={this.handleChange}/><br/><br/>

                <Label><strong>Password:</strong></Label><br/>
                <Input name="password" value={password} type="password" placeholder="******" onChange={this.handleChange} /><br/><br/>

                <Label><strong>Gender</strong></Label><br/>
                <Input name="gender" type="radio" value="male" inputText="Male" onChange={this.handleChange}/>
                <Input name="gender" type="radio" value="female" inputText="Female" onChange={this.handleChange}/>
                <Input name="gender" type="radio" value="other" inputText="Other" onChange={this.handleChange}/>
                <br/><br/>

                <Label><strong>Skills</strong></Label><br/>
                <Input name="skills" type="checkbox" inputText="Express JS" value="Express Js" onChange={this.handleChange}/>
                <Input name="skills" type="checkbox" inputText="JavaScript" value="JavaScript" onChange={this.handleChange}/>
                <Input name="skills" type="checkbox" inputText="React JS" value="React JS" onChange={this.handleChange}/>
                <Input name="skills" type="checkbox" inputText="Angular JS" value="Angular JS" onChange={this.handleChange}/>
                <Input name="skills" type="checkbox" inputText="Node JS" value="Node JS" onChange={this.handleChange}/>
                <br/><br/>

                <Label><strong>BirthDate</strong></Label><br/>
                <Input name="birthDate" value={birthDate} type="date" onChange={this.handleChange}/><br/><br/>

                <Label><strong>Salary:</strong></Label><br/>
                <Input name="salary" value={salary} type="number" placeholder="salary" onChange={this.handleChange}/><br/><br/>

                <Label><strong>Country:</strong></Label><br/>
                <Input name="country" value={country} list="country" onChange={this.handleChange}/>
                <datalist id="country">
                    <option value="bangladesh" />
                    <option value="USA" />
                    <option value="Canada" />
                    <option value="UK" />
                </datalist>
                <br/><br/>

                <Input name="isInfo" type="checkbox" inputText="No Info" onChange={this.handleCondition}/><br/>
                <Input name="isAgree" type="checkbox" inputText="I Agree" onChange={this.handleCondition} /><br/><br/>


                <div style={{width:"200px", display:"flex", justifyContent:"space-between"}}>
                    <Button disabled={!isSubmitDisabled} type="submit">Submit</Button>
                    <Button type="reset" onClick={this.handleReset}>Reset</Button>
                </div>

            </form>

        </div>
    }
}


export default Form;