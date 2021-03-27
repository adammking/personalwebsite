import React from "react"
import profilePic from "./pics/profilepic2.jpg"
import softwareRes from "./pics/SoftwareEngineer.pdf"
import ResumeModal from "./Modal.js"
import "./About.css"

function About() {

return (
    <div className="container">
        <div className="row justify-content-center my-3">
            <div className="col"><img src={profilePic}  id="picture"></img></div>
                <div className="col align-self-center">
                    <h2 id="title">About Me</h2>
                    <p className="text">
                    Are you looking for a motivated professional with a master's degree in soft skills? 
                    Then look no further! I am currently transitioning from the mental health industry and I am looking to bring my skills
                    to your company. Along with my master's, which is actually in mental health counseling, I also have my batchelor's in philosophy. 
                    But what does that have to do with software development? 
                    Great question!
                    Through my educational background I have spent hours excercising problem solving skills. philosophy helped me practice looking at problems from different perspectives,
                    while counseling helped me view problems from other individuals perspectives. The ability to see things through other peoples eyes has become instrumental in my programming work.
                    </p>
                    <ResumeModal buttonLabel={"Resume"} className="mt-3"></ResumeModal> 

                </div>
            
            
        </div>
    </div> 
    
    )
}

export default About;