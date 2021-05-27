import React from 'react'
import Devbio from '../individualdevinfo/devbio.js'
import Classes from '../individualdevprofile/devprofile.module.css'
import Devskill from '../individualdevinfo/devskill.js'
import Devcontact from '../individualdevinfo/devcontact.js'



class Devprofile extends React.Component {
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
               img: 'https://picsum.photos/200/300',
               skill: ['Php', 'Python', 'C', 'Javascript', 'Java']
           },
           {
               name: 'Robiul Awal',
               position: 'Front end web developer',
               company: 'Fiverr',
               img: 'https://picsum.photos/200/300',
               skill: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'react']
           }
       ]
        return (
            <>
              <div className={Classes.profilecontainer}>
                  <Devbio img={devarray[0].img} name={devarray[0].name} position={devarray[0].position} company={devarray[0].company}/>
                  <Devskill singleskill1={devarray[0].skill[0]} singleskill2={devarray[0].skill[1]} singleskill3={devarray[0].skill[2]} singleskill4={devarray[0].skill[3]} singleskill5={devarray[0].skill[4]} />
                  <Devcontact/>
              </div>
            </>
        )
    }
}

export default Devprofile;