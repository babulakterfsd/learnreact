import React from 'react';
import Classes from '../navbar/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


class Navbar extends React.Component {
    render() {
        const navlink = {
            logo: 'https://learnreactwithbabul.netlify.app',
            home: 'https://babulakter.com',
            about: 'https://www.babulakter.com/about.html',
            portfolio: 'https://www.babulakter.com/portfolio.html',
            blog: 'https://www.babulakter.com/blog.html',
            contact: 'https://www.babulakter.com/contact.html'
        }
        return (
            <>
              <div className={Classes.navbar}>
                 <a href={navlink.log} className={Classes.logo}>Babul</a>
                 <ul>
                     <li><a href={navlink.home}>Home</a></li>
                     <li><a href={navlink.about}>About</a></li>
                     <li><a href={navlink.contact}>Contact</a></li>
                 </ul>
              </div>
            </>
        )
    }
}

export default Navbar;