import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/navbar/navbar.js';
import Devlist from './components/alldevlist/devlist.js'
import Post from './components/post/post.js'
import Oldstate from './components/learnstate/oldstate.js'
// import HandleForm from './components/events/events.js'
// import Uncontrolledform from './components/events/uncontrolledform.js'
// import Controlledform from './components/events/controlledform.js'
// import Signupform from './components/events/form/signupform.js'
import Validfrom from './components/events/form/formvalidation.js'
// import Form from './components/events/syfulvaiform/form.js'

class App extends React.Component {

  state = {
    users: []
  }

  createUser = user => {
    for(let a = 1; a <= this.state.users.length + 1; a++) {
         user.id = a;
    }
    this.setState({users: [...this.state.users, user]})
    
  }

  render() {
    return (
      <>


        <Navbar/>



        <section className="dev py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                 <Devlist/>
              </div>
            </div>
          </div>
        </section>

        <section className="post bg-dark" style={{padding: '100px 0px'}}>
         <h2 className="text-center mb-5" style={{color: 'tomato'}}><u>BLOG</u></h2>
           <div className="container-fluid">
             <div className="row mb-3 d-flex flex-wrap justify-content-between">
             {
               [1,2,3,4,5,6].map(post => {
                 return <div className="col-md-4 mb-3"><Post/></div>
               })
             }
             </div>
           </div>
        </section>



        <section className="state" style={{padding: '150px 0px'}}>
           <div className="container-fluid">
             <div className="row">
               <div className="col-12">
                  <Oldstate/>
               </div>
             </div>
           </div>
        </section>



      {/* <HandleForm/>
      <Uncontrolledform/>
      <Controlledform/> */}
      {/* <Form/> */}
      {/* <Signupform/> */}
      <Validfrom createUser={this.createUser}/>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 my-5">
            <h3 className="text-center mb-3"><u>List of all users</u></h3>
      
              <table class="table table-bordered table-dark table-striped table-hover text-center">
              <thead className="text-success">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                ))}
             </tbody>
            </table>


          </div>
        </div>
      </div>
      


      
      
        




      </>
    )
  }
}



export default App;