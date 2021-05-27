import React from 'react';
import Classes from '../individualdevinfo/devskill.module.css';


class Devskill extends React.Component {
    render() {
        return (
            <>
              <div className={Classes.skillcontainer}>
                <h6><u>Skills:</u></h6>
                <div className="skillscontainer mx-5 mb-4">
                  <span class="badge bg-primary mx-2">Javascript</span>
                  <span class="badge bg-primary mx-2">React</span>
                  <span class="badge bg-primary mx-2">redux</span>
                  <span class="badge bg-primary mx-2">MonggoDB</span>
                  <span class="badge bg-primary mx-2">Node</span>
                  <span class="badge bg-primary">Express</span>
                </div>
              </div>
            </>
        )
    }
}

export default Devskill;