import React from 'react';

class HandleForm extends React.Component {

    state = {
        name: '',
        country: '',
        bio: '',
        bday: '',
        gender: '',
        agree: false,
        skills: []
    }


    showdata = (event) => {
        
        if(!this.state.agree) {
            alert('You didn\'t agree to our conditions')
        } else {
            console.log(this.state);
        }
        event.preventDefault(); 
    }



    changeValue = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleCheckbox = event => {
        this.setState({agree: event.target.checked})
    }

    handleSkills = event => {
        if(event.target.checked) {
             this.setState({skills: [...this.state.skills, event.target.value]})
        } else {
            const skills = this.state.skills.filter((skill) => {
                return skill !== event.target.value
            })
            this.setState({skills})
        }
    }

       render() {
           return (
               <div className="form-container p-5">
                   <h3 className="text-center mb-5"><u>Learn handling Individual form elements in React</u></h3>
                   <div className="container-fluid">
                       <div className="row">
                           <div className="col-md-6 offset-3">
                              <form action="#" className="form">
                                  <label htmlFor="name">Your name:</label>
                                  <input type="text" name="name" className="form-control my-2" placeholder="type your name here" value={this.state.name} onChange={this.changeValue}/>
                                  <select name="country" id="country" className="form-control my-2" value={this.state.country} onChange={this.changeValue}>
                                      <option>select Country</option>
                                      <option value="Bangladesh">Bangladesh</option>
                                      <option value="India">India</option>
                                      <option value="Pakistan">Pakistan</option>
                                      <option value="Srilanka">Srilanka</option>
                                      <option value="Afganisthan">Afganisthan</option>
                                  </select>
                                  <textarea name="bio" className="form-control my-2" placeholder="Write about you in short" value={this.state.bio} onChange={this.changeValue}></textarea>
                                  <input type="date" name="bday" className="form-control my-2" value={this.state.bday} onChange={this.changeValue}/>


                                      <label className="mt-2">Gender:</label>
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" value="Male" id="flexRadioDefault1" onChange={this.changeValue}/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Male
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" value="Female"  id="flexRadioDefault1"  onChange={this.changeValue} />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Female
                                    </label>
                                    </div>
                                    <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="gender" value="Other"  id="flexRadioDefault1"  onChange={this.changeValue} />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        other
                                    </label>
                                    </div>

                                
                                    <span>Skills: <br/></span>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="Javascript" name="skills" onChange={this.handleSkills} checked={this.state.skills.includes('Javascript')} />
                                        <label class="form-check-label" for="inlineCheckbox1">Javascript</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="Java" name="skills" onChange={this.handleSkills} checked={this.state.skills.includes('Java')} />
                                        <label class="form-check-label" for="inlineCheckbox1">Java</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="Python" name="skills" onChange={this.handleSkills} checked={this.state.skills.includes('Python')} />
                                        <label class="form-check-label" for="inlineCheckbox1">Python</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="Go" name="skills" onChange={this.handleSkills} checked={this.state.skills.includes('Go')} />
                                        <label class="form-check-label" for="inlineCheckbox1">Go</label>
                                    </div>













                                    <div class="form-check my-3">
                                        <input class="form-check-input" type="checkbox" name="agree" id="flexCheckDefault" onChange={this.handleCheckbox} checked={this.state.agree}/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            I agree with all the <a href="https://github.com/babulakterfsd">terms and conditions</a>
                                        </label>
                                    </div>

                                    



                                  <button type="submit" class="btn btn-primary" onClick={this.showdata}>Submit</button>
                              </form>
                           </div>
                       </div>
                   </div>
               </div>
           )
       }
}

export default HandleForm;