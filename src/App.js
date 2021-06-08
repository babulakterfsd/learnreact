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
      <Validfrom/>
      


      
      
        




      </>
    )
  }
}



export default App;