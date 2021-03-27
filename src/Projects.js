import React from "react" 
import connect4final from "./pics/connect4final.png"
import helperscreenshot from "./pics/helperscreenshot.png"
import jeopardyfinal from "./pics/jeopardyfinal.png"
import joblyfinal from "./pics/joblyfinal.png"
import beervana from "./pics/beervana.PNG"
import {
  Card, CardImg, CardText, CardBody, CardHeader, CardFooter,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./Projects.css"

function Projects() {
    return (
        <div className="container-sm">
            <h1 id="proj-title">Projects</h1>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                        
                            
                            
                            <Card id="full-card" className="col m-2">
                                <CardHeader>
                                    <CardImg src={beervana} alt="Card image cap" id="card-image"/>
                                </CardHeader>
                                <CardBody className="card-body">
                                    <CardTitle id="card-title" tag="h5">Beervana</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 pt-2 text-muted">https://beervana.surge.sh</CardSubtitle>
                                    <CardText id="card-text">Craft beer social media website built with Node.js, Express.js, React, and Redux</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="https://beervana.surge.sh" target="_blank" rel="noreferrer"><Button id="projButton">Check it out!</Button></a>
                                </CardFooter>
                            </Card>
                            

                            
                            <Card id="full-card" className="col m-2">
                                <CardHeader>
                                    <CardImg src={joblyfinal} alt="Card image cap" id="card-image"/>
                                </CardHeader>
                                <CardBody className="card-body">
                                    <CardTitle id="card-title" tag="h5">Jobly Project</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 pt-2 text-muted">https://jobly-front.surge.sh</CardSubtitle>
                                    <CardText id="card-text">Mock job board built with Node.js, Express.js, and React.</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="https://jobly-front.surge.sh" target="_blank" rel="noreferrer"><Button id="projButton">Check it out!</Button></a>
                                </CardFooter>
                            </Card>


                            <Card id="full-card" className="col m-2">
                                <CardHeader>
                                    <CardImg src={helperscreenshot} alt="Card image cap" id="card-image"/>
                                </CardHeader>
                                <CardBody className="card-body">
                                    <CardTitle id="card-title" tag="h5">Helper App</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 pt-2 text-muted">https://capstoneone.herokuapp.com/</CardSubtitle>
                                    <CardText id="card-text">
                                        Full stack application made with postgres, python, and flask. 
                                        Provides information on depression and referrals for resources in the state of Texas.
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="https://capstoneone.herokuapp.com/" target="_blank" rel="noreferrer"><Button id="projButton">Check it out!</Button></a>
                                </CardFooter>
                            </Card>



                            <Card id="full-card" className="col m-2">
                                <CardHeader>
                                    <CardImg src={jeopardyfinal} alt="Card image cap" id="card-image"/>
                                </CardHeader>
                                <CardBody className="card-body">
                                    <CardTitle id="card-title" tag="h5">Jeopardy Game</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 pt-2 text-muted">https://adammking.github.io/jeopardy-game/</CardSubtitle>
                                    <CardText id="card-text">
                                        Fun Jeopardy game you can play by yourself or with friends.
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="https://adammking.github.io/jeopardy-game/" target="_blank" rel="noreferrer"><Button id="projButton">Check it out!</Button></a>
                                </CardFooter>
                            </Card>




                            <Card id="full-card" className="col m-2">
                                <CardHeader>
                                    <CardImg src={connect4final} alt="Card image cap" id="card-image"/>
                                </CardHeader>
                                <CardBody className="card-body">
                                    <CardTitle id="card-title" tag="h5">Connect Four Game</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 pt-2 text-muted">https://adammking.github.io/connectFour/</CardSubtitle>
                                    <CardText id="card-text">
                                        Fun Connect Four game you can play with friends.
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="https://adammking.github.io/connectFour/" target="_blank" rel="noreferrer"><Button id="projButton">Check it out!</Button></a>
                                </CardFooter>
                            </Card>
                        

                </div>
                
        </div>
    );
}

export default Projects;