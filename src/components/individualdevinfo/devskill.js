import React from 'react';
// import Classes from '../individualdevinfo/devskill.module.css';


class Devskill extends React.Component {
    render() {
        return (
            <>
              <div>
                <h6><u>Skills:</u></h6>
                <div className="skillscontainer mx-5 mb-4">
                  <span class="badge bg-primary m-2">{this.props.singleskill1}</span>
                  <span class="badge bg-primary m-2">{this.props.singleskill2}</span>
                  <span class="badge bg-primary m-2">{this.props.singleskill3}</span>
                  <span class="badge bg-primary m-2">{this.props.singleskill4}</span>
                  <span class="badge bg-primary m-2">{this.props.singleskill5}</span>
                </div>
              </div>
            </>
        )
    }
}

export default Devskill;