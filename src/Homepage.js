import React from "react" 
import "./Homepage.css"
import { Button } from "reactstrap"


function Homepage() {
    return (
        <div id="home-container" className="greeting container d-flex flex-column justify-content-center align-items-center">
            <h1 className="home-welcome mt-2">Welcome to my portfolio!</h1>
            <span className="home-text my-2">I am a full stack software developer/engineer looking to bring my skills to an amazing company.</span>
            <a href="/projects"><Button id="home-button" className="mb-4">See Projects</Button></a>
        </div>
    );
}

export default Homepage;