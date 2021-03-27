import React from "react"
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <div>
            <h3 id="email">Email: kingab_93@yahoo.com</h3>
            <a href="https://www.linkedin.com/in/adammking/"><FontAwesomeIcon id="awesome" icon={faLinkedin}/></a>
            <a href="https://adammking.medium.com/"><FontAwesomeIcon id="awesome" icon={faMedium}/></a>
            <a href="https://github.com/adammking"><FontAwesomeIcon id="awesome" icon={faGithub}/></a>
        </div>
    )

}

export default Contact;