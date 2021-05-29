import React from 'react'
// import Classes from '../individualdevinfo/devbio.module.css'


class Devbio extends React.Component {
    render() {
        let { user } = this.props;
        return (
            <>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-2">
                        <img src={user?.img} alt="babul" style={{height: '60px', width: '60px', borderRadius: '500px'}} className="float-end"/>
                     </div>
                     <div className="col-10">
                     <div className="mb-4">
                        <h3 className="mb-0">{user?.name}</h3>
                        <p style={{fontWeight: 300}}>{user?.position},{user?.company}</p>
                     </div>
                     </div>
                 </div>
             </div>
            </>
        )
    }
}

export default Devbio;