import React from 'react'
import Classes from '../individualdevinfo/devcontact.module.css'
import 'font-awesome/css/font-awesome.min.css';



class Devcontact extends React.Component {
    render() {
        return (
            <>
              <div className={Classes.contactcontainer}>
              <h6><u>Social:</u></h6>
              <div className="linkscontainer mx-5">
                <a href="https://facebook.com/babulakterfsd" className="mx-3"><button title="facebook" type="button" class="btn btn-primary px-4 py-0"><i class="fa fa-facebook" aria-hidden="true"></i></button></a>
                <a href="https://github.com/babulakterfsd" className="mx-3"><button title="github" type="button" class="btn btn-primary px-4 py-0"><i class="fa fa-github" aria-hidden="true"></i></button></a>
                <a href="https://twitter.com/babulakterfsd" className="mx-3"><button title="twitter" type="button" class="btn btn-primary px-4 py-0"><i class="fa fa-twitter" aria-hidden="true"></i></button></a>
                <a href="https://babulakter.com" className="mx-3"><button title="portfolio" type="button" class="btn btn-primary px-4 py-0"><i class="fa fa-code" aria-hidden="true"></i></button></a>
              </div>
              </div>
            </>
        )
    }
}

export default Devcontact;