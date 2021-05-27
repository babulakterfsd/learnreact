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
                <a href="https://facebook.com/babulakterfsd"><button title="facebook" type="button" class="btn btn-primary px-4 py-0 m-2"><i class="fa fa-facebook" aria-hidden="true"></i></button></a>
                <a href="https://github.com/babulakterfsd"><button title="github" type="button" class="btn btn-primary px-4 py-0 m-2"><i class="fa fa-github" aria-hidden="true"></i></button></a>
                <a href="https://twitter.com/babulakterfsd"><button title="twitter" type="button" class="btn btn-primary px-4 py-0 m-2"><i class="fa fa-twitter" aria-hidden="true"></i></button></a>
                <a href="https://babulakter.com"><button title="portfolio" type="button" class="btn btn-primary px-4 py-0 m-2"><i class="fa fa-code" aria-hidden="true"></i></button></a>
              </div>
              </div>
            </>
        )
    }
}

export default Devcontact;