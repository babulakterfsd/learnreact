import React from 'react'
import Devbio from '../individualdevinfo/devbio.js'
import Classes from '../individualdevprofile/devprofile.module.css'
import Devskill from '../individualdevinfo/devskill.js'
import Devcontact from '../individualdevinfo/devcontact.js'
import Modal from './modal.js'


class Devlist extends React.Component {

    state = {   
        userDetails: null
    }

    showDetails = user => {
        this.setState({userDetails: user});
    }

    render() {
        const devarray = [
             {
                name: 'Babul Akter',
                position: 'Full stack web developer',
                company: 'Upwork',
                img: 'https://picsum.photos/200/300',
                skill: ['javascript', 'react', 'redux', 'node', 'express']
            },
            {
                name: 'Sayful islam',
                position: 'MERN stack web developer',
                company: 'CodeBumble',
                img: 'https://picsum.photos/200',
                skill: ['Php', 'Python', 'C', 'Javascript', 'Java']
            },
            {
                name: 'Robiul Awal',
                position: 'Front end web developer',
                company: 'Fiverr',
                img: 'https://picsum.photos/id/237/200/300',
                skill: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'react']
            }
        ]
        return (
            <div className="listcontainer d-lg-flex justify-content-between">
              
                <div className="innerlist">
                {
                    devarray.map(user => (
                        <div className="p-5 shadow-lg" style={{background: 'rgb(46, 92, 92)', color: 'white'}}>
                <div style={{borderBottom: '1px solid tomato', padding: '5px', marginBottom: '8px 0px'}}>
                    <Devbio user = {user}/>
                    <Devskill user={user}/>
                    <button className="btn btn-success btn-sm my-3" onClick={() => this.showDetails(user)}>Details..</button>

                </div>
                </div>
                    )) 
                }
                </div>

                <div className="individualprofile mt-5">
                {
                    this.state.userDetails?
                    <div className={Classes.profilecontainer}>
                  <Devbio user={this.state.userDetails}/>
                  <Devskill user={this.state.userDetails} />
                  <Devcontact/>
              </div>
                    :null
                }
                </div>
                 
            </div>

        )
    }
}

export default Devlist;










