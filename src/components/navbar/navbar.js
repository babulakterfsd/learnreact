import React from 'react';
import Classes from '../navbar/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


class Navbar extends React.Component {
    render() {
        return (
            <>
              <div className={Classes.navbar}>
                 <a href="https://learnreactwithbabul.netlify.app" className={Classes.logo}>Babul</a>
                 <ul>
                     <li><a href="https://babulakter.com">Home</a></li>
                     <li><a href="https://www.babulakter.com/about.html">About</a></li>
                     <li><a href="https://www.babulakter.com/portfolio.html">Portfolio</a></li>
                     <li><a href="https://www.babulakter.com/blog.html">Blog</a></li>
                     <li><a href="https://www.babulakter.com/contact.html">Contact</a></li>
                 </ul>
              </div>
            </>
        )
    }
}

export default Navbar;