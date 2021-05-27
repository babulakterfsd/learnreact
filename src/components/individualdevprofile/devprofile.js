import React from 'react'
import Devbio from '../individualdevinfo/devbio.js'
import Classes from '../individualdevprofile/devprofile.module.css'
import Devskill from '../individualdevinfo/devskill.js'
import Devcontact from '../individualdevinfo/devcontact.js'



class Devprofile extends React.Component {
    render() {
        return (
            <>
              <div className={Classes.profilecontainer}>
                  <Devbio/>
                  <Devskill/>
                  <Devcontact/>
              </div>
            </>
        )
    }
}

export default Devprofile;