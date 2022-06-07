import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardLink, CardImg } from 'reactstrap';

//Future to-do: make portfolio images into modals
//Match card height: d-flex align-items-stretch and d-flex flex-column
function Portfolio() {
    return (
<div className='container portfolio'>
    <div className='row'> 
        <div className='col-md-12 portfolio'>
            <h2>Portfolio Projects</h2>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
            <Card>
                <CardBody className='d-flex flex-column'>
                    <a href='portfolio/woa'><CardImg alt='Screen capture of Work of Art: Interactive page' src='./assets/images/woa-screencapture-6-3-22.png' width='100%' tabIndex={0}/></a>
                        <CardTitle>
                            <a href='portfolio/woa'>Work of Art: Interactive</a>
                            </CardTitle>
                        <CardSubtitle>
                            A full stack site using React and Node, designed to expand on the Work of Art: Business Skills for Artists curriculum by <a href='https://springboardforthearts.org' rel='noreferrer'>Springboard for the Arts.</a>
                        </CardSubtitle>
                            <ul className='square-bullets'>
                                <li><CardLink href='#' tabIndex={0}>Video</CardLink></li>
                                <li><CardLink href='https://github.com/adiamorrisswanger/work-of-art-client.git' tabIndex={0}>Front End GitHub</CardLink></li>
                                <li><CardLink href='https://github.com/adiamorrisswanger/workOfArtServer.git' tabIndex={0}>Back End GitHub</CardLink></li>
                            </ul>
                </CardBody>
            </Card>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
            <Card>
                <CardBody className='d-flex flex-column'>
                <a href='portfolio/camp'><CardImg alt='' src='./assets/images/campsiteresscreenshot.png' width='100%' tabIndex={0}/></a>
                    <CardTitle>
                    <a href='portfolio/camp'>Campsite Reservation Site</a>
                    </CardTitle>
                    <CardSubtitle>
                        A React site for booking campsites, choosing favorites, and leaving comments.
                    </CardSubtitle>  
                        <ul className='square-bullets'>
                            <li><CardLink href='#' tabIndex={0}>Video</CardLink></li>
                            <li><CardLink href='https://github.com/adiamorrisswanger/react-ncs.git'tabIndex={0}>GitHub</CardLink></li>
                        </ul>
                </CardBody>
            </Card>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
            <Card>
                <CardBody>     
                <a href='portfolio/puzzle'><CardImg alt='' src='./assets/images/PuzzleGameScreenshot.png' width='100%' tabIndex={0}/> </a>
                <CardTitle>
                    <a href='portfolio/puzzle'>Puzzle Cam Game</a>
                </CardTitle>
                    <CardSubtitle> 
                        A vanilla javascript exercise that creates a puzzle out of the users camera image.
                    </CardSubtitle>
                <ul className='square-bullets'>
                    <li><CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink></li>
                    <li><CardLink href='https://github.com/adiamorrisswanger/puzzle-game-practice.git' tabIndex={0}>GitHub</CardLink></li>
                </ul>
                </CardBody>
            </Card>
        </div>      
    </div>
</div>


    );
};
export default Portfolio;