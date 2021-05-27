import React from 'react';
// import Classes from '../individualdevinfo/devskill.module.css';


class Devskill extends React.Component {
    render() {
        return (
            <>
              <div>
                <h6><u>Skills:</u></h6>
                <div className="skillscontainer mx-5 mb-4">
                  <span class="badge bg-primary m-2">Javascript</span>
                  <span class="badge bg-primary m-2">React</span>
                  <span class="badge bg-primary m-2">redux</span>
                  <span class="badge bg-primary m-2">MonggoDB</span>
                  <span class="badge bg-primary m-3">Node</span>
                  <span class="badge bg-primary">Express</span>
                </div>
              </div>
            </>
        )
    }
}

export default Devskill;