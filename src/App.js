import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/navbar/navbar.js';
import Devlist from './components/alldevlist/devlist.js'
import Devprofile from './components/individualdevprofile/devprofile.js'


class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <section className="dev">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                 <Devlist/>
              </div>
              <div className="col-sm-6 mt-5">
                <Devprofile/>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default App;
