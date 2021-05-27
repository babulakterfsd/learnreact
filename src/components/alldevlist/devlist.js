import React from 'react'
// import Classes from '../alldevlist/devlist.module.css'
import Devbio from '../individualdevinfo/devbio.js'
import Devskill from '../individualdevinfo/devskill.js'


class Devlist extends React.Component {
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
            <>
              <div className="p-5 mt-5 shadow-lg" style={{background: 'rgb(46, 92, 92)', color: 'white'}}>
                 <div style={{border: '1px solid tomato', padding: '20px'}}>
                    <Devbio img={devarray[0].img} name={devarray[0].name} position={devarray[0].position} company={devarray[0].company}/>
                    <Devskill singleskill1={devarray[0].skill[0]} singleskill2={devarray[0].skill[1]} singleskill3={devarray[0].skill[2]} singleskill4={devarray[0].skill[3]} singleskill5={devarray[0].skill[4]}/>
                 </div>

                 <div style={{border: '1px solid tomato', padding: '20px'}}>
                    <Devbio img={devarray[1].img} name={devarray[1].name} position={devarray[1].position} company={devarray[1].company}/>
                    <Devskill singleskill1={devarray[1].skill[0]} singleskill2={devarray[1].skill[1]} singleskill3={devarray[1].skill[2]} singleskill4={devarray[1].skill[3]} singleskill5={devarray[1].skill[4]}/>
                 </div>

                 <div style={{border: '1px solid tomato', padding: '20px'}}>
                    <Devbio img={devarray[2].img} name={devarray[2].name} position={devarray[2].position} company={devarray[2].company}/>
                    <Devskill singleskill1={devarray[2].skill[0]} singleskill2={devarray[2].skill[1]} singleskill3={devarray[2].skill[2]} singleskill4={devarray[2].skill[3]} singleskill5={devarray[2].skill[4]}/>
                 </div>
              </div>
            </>
        )
    }
}

export default Devlist;