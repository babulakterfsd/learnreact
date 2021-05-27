import React from 'react'
// import Classes from '../individualdevinfo/devbio.module.css'


class Devbio extends React.Component {
    render() {
        const bio = {
            name: 'Babul Akter',
            position: 'Full stack web developer',
            company: 'Upwork',
            img: 'https://blog.babulakter.com/wp-content/uploads/2020/10/babulakterfsd.png'
        }
        return (
            <>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-2">
                        <img src={bio.img} alt="babul" style={{height: '60px', width: '60px'}} className="float-end"/>
                     </div>
                     <div className="col-10">
                     <div className="mb-4 mt-2">
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