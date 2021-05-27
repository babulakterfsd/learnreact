import React from 'react'
// import Classes from '../individualdevinfo/devbio.module.css'


class Devbio extends React.Component {
    render() {
        const bio = {
            name: 'Babul Akter',
            position: 'MERN Stack web developer',
            company: 'Upwork'
        }
        return (
            <>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-4">
                        <img src="https://blog.babulakter.com/wp-content/uploads/2020/10/babulakterfsd.png" alt="babul" style={{height: '60px', width: '60px'}}/>
                     </div>
                     <div className="col-8">
                     <div className="mb-4">
                        <h6 className="mb-0">{bio.name}</h6>
                        <p style={{fontWeight: 300}}>{bio.position},{bio.company}</p>
                     </div>
                     </div>
                 </div>
             </div>
            </>
        )
    }
}

export default Devbio;