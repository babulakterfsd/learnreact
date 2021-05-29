import React from 'react';
// import Classes from '../individualdevinfo/devskill.module.css';


class Devskill extends React.Component {
    render() {
      let { user } = this.props;
        return (
            <>
              <div>
                <h6><u>Skills:</u></h6>
                <div className="skillscontainer mx-5 mb-4">
                  
                  {
                    user?.skill.map(sk => (
                      <span className="badge bg-primary m-2">{sk}</span>
                    ))
                  }
                </div>
              </div>
            </>
        )
    }
}

export default Devskill;