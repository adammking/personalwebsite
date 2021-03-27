import React from "react"
import profilePic from "./pics/profilepic2.jpg"
import ResumeModal from "./Modal.js"
import "./About.css"

function About() {

return (
    <div className="container">
        <div className="row justify-content-center my-3">
            <div className="col"><img src={profilePic}  id="picture" alt=""></img></div>
                <div className="col align-self-center">
                    <h2 id="title">About Me</h2>
                    <p className="text">
                        Are you looking for a motivated professional with a master's degree in soft skills? 
                        Then look no further! I am currently transitioning from the mental health industry and I am looking to bring my skills
                        to your company. Along with my master's, which is actually in mental health counseling, I also have my bachelors in philosophy. 
                        But what does that have to do with software development? 
                        Great question!
                        Through my educational background I have spent hours exercising problem solving skills. 
                        Studying philosophy allowed me to practice looking at problems from different perspectives,
                        while counseling helped me work productively with individuals from various backgrounds. 
                        The ability to see things through other people's eyes has become instrumental in my programming work.
                    </p>
                    <ResumeModal buttonLabel={"Resume"} className="mt-3" scrollable={true} id="res-modal"></ResumeModal> 

                </div>
            
            
        </div>
    </div> 
    
    )
}

export default About;