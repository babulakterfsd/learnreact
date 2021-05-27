import React from 'react'
// import Classes from '../individualdevinfo/devbio.module.css'


class Devbio extends React.Component {
    render() {
        
        return (
            <>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-2">
                        <img src={this.props.img} alt="babul" style={{height: '60px', width: '60px', borderRadius: '500px'}} className="float-end"/>
                     </div>
                     <div className="col-10">
                     <div className="mb-4">
                        <h3 className="mb-0">{this.props.name}</h3>
                        <p style={{fontWeight: 300}}>{this.props.position},{this.props.company}</p>
                     </div>
                     </div>
                 </div>
             </div>
            </>
        )
    }
}

export default Devbio;