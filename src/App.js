import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/navbar/navbar.js';
import Devlist from './components/alldevlist/devlist.js'
import Devprofile from './components/individualdevprofile/devprofile.js'
import Post from './components/post/post.js'
import Oldstate from './components/learnstate/oldstate.js'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>



        <section className="dev py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                 <Devlist/>
              </div>
              <div className="col-lg-6 mt-5 d-flex justify-content-center align-self-center">
                <Devprofile/>
              </div>
            </div>
          </div>
        </section>




        <section className="post bg-dark" style={{padding: '150px 0px'}}>
           <div className="container-fluid">
             <div className="row mb-3">
               <div className="col-md-4">
                 <Post/>
               </div>
               <div className="col-md-4">
                 <Post/>
               </div>
               <div className="col-md-4">
                 <Post/>
               </div>
             </div>
             <div className="row">
               <div className="col-md-4">
                 <Post/>
               </div>
               <div className="col-md-4">
                 <Post/>
               </div>
               <div className="col-md-4">
                 <Post/>
               </div>
             </div>
           </div>
        </section>



        <section className="statecontainer" style={{padding: '150px 0px'}}>
           <div className="container-fluid">
             <div className="row">
               <div className="col-12">
                  <Oldstate/>
               </div>
             </div>
           </div>
        </section>
      </>
    )
  }
}

export default App;
