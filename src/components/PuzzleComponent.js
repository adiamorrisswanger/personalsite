import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle, CardLink } from 'reactstrap';

function Puzzle() {
    return(
        <div className='container'>
            <h2>Portfolio Project - Puzzle Cam Game</h2>
            <div className='row'>
                <div className='col-lg-10 mx-auto'>
                    <Card>
                        <CardBody>     
                            <CardImg alt='' src='./assets/images/PuzzleGameScreenshot.png' width='100%' tabIndex={0}/> 
                            <CardTitle>
                                Puzzle Cam Game
                            </CardTitle>
                                <CardSubtitle> 
                                    A vanilla javascript exercise that creates a puzzle out of the users camera image.
                                </CardSubtitle>
                                <CardText>
                                    Long description
                                </CardText>
                            <ul className='square-bullets'>
                                <li><CardLink href='#' tabIndex={0}>Video</CardLink></li>
                                <li><CardLink href='https://github.com/adiamorrisswanger/puzzle-game-practice.git' tabIndex={0}>GitHub</CardLink></li>
                            </ul>
                        </CardBody>
                    </Card>
                </div>

               
            </div> 
        </div>
    )
   
    

}

export default Puzzle; 