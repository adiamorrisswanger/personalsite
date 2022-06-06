import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardLink, CardImg } from 'reactstrap';

//Future to-do: make portfolio images into modals
//Match card height: d-flex align-items-stretch and d-flex flex-column
function Portfolio() {
    return (
<div className='container portfolio'>
    <div className='row'> 
        <div className='col-md-12 portfolio'>
            <h1>Portfolio Projects</h1>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
            <Card>
                <CardBody className='d-flex flex-column'>
                    <a href='woa-screencapture-6-3-22.png'><CardImg alt='' src='./assets/images/woa-screencapture-6-3-22.png' width='100%' tabIndex={0}/></a>
                        <CardTitle>
                            Work of Art: Interactive
                            </CardTitle>
                        <CardSubtitle>
                            A full stack site using React and Node, designed to expand on the Work of Art: Business Skills for Artists curriculum by <a href='https://springboardforthearts.org' rel='noreferrer'>Springboard for the Arts.</a>
                        </CardSubtitle>
                            <ul className='square-bullets'>
                                <li><CardLink href='#' tabIndex={0}>Video</CardLink></li>
                                <li><CardLink href='https://github.com/adiamorrisswanger/work-of-art-client.git' tabIndex={0}>Front End GitHub Link</CardLink></li>
                                <li><CardLink href='https://github.com/adiamorrisswanger/workOfArtServer.git' tabIndex={0}>Back End GitHub Link</CardLink></li>
                            </ul>
                </CardBody>
            </Card>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
            <Card>
                <CardBody className='d-flex flex-column'>
                <CardImg alt='' src='./assets/images/campsiteresscreenshot.png' width='100%' tabIndex={0}/>
                    <CardTitle>
                        Campsite Reservation Site
                    </CardTitle>
                    <CardSubtitle>
                        A React site for booking campsites, choosing favorites, and leaving comments.
                    </CardSubtitle>  
                        <ul className='square-bullets'>
                            <li><CardLink href='#' tabIndex={0}>Video</CardLink></li>
                            <li><CardLink href='https://github.com/adiamorrisswanger/react-ncs.git'tabIndex={0}>GitHub Link</CardLink></li>
                        </ul>
                </CardBody>
            </Card>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
            <Card>
                <CardBody>     
                <CardImg alt='' src='./assets/images/PuzzleGameScreenshot.png' width='100%' tabIndex={0}/> 
                <CardTitle>
                    Puzzle Cam Game
                </CardTitle>
                    <CardSubtitle> 
                        A vanilla javascript exercise that creates a puzzle out of the users camera image.
                    </CardSubtitle>
                <ul className='square-bullets'>
                    <li><CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink></li>
                    <li><CardLink href='https://github.com/adiamorrisswanger/puzzle-game-practice.git' tabIndex={0}>GitHub Link</CardLink></li>
                </ul>
                </CardBody>
            </Card>
        </div>      
    </div>
</div>


    );
};
export default Portfolio;