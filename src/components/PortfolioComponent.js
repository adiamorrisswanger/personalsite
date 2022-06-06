import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardLink, CardImg } from 'reactstrap';

//Make PortfolioInfo container

function Portfolio() {
    return (
<div className='container'>
    <div className='row'> 
        <div className='col-md-12'>
            <h1>Portfolio Projects</h1>
        </div>
        <div className='col-md-4'>
            <Card>
                <CardImg alt='' src='./assets/images/woa-screencapture-6-3-22.png' width='100%' tabIndex={0}/>
                    <CardTitle>
                        Work of Art: Interactive
                        </CardTitle>
                    <CardSubtitle>
                        A full stack site using React and Node, designed to expand on the Work of Art: Business Skills for Artists curriculum by <a href='https://springboardforthearts.org' rel='noreferrer'>Springboard for the Arts</a>
                    </CardSubtitle>
                <CardBody>
                    <CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink>
                    <CardLink href='#' tabIndex={0}>GitHub Link</CardLink>
                </CardBody>
            </Card>
        </div>
        <div className='col-md-4'>
            <Card>
                <CardImg alt='' src='./assets/images/campsiteresscreenshot.png' width='100%' tabIndex={0}/>
                    <CardTitle>
                        Campsite Reservation Site
                    </CardTitle>
                    <CardSubtitle>
                        A React site for booking campsites, choosing favorites, and leaving comments.
                    </CardSubtitle>                       
                <CardBody>
                <CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink>
                    <CardLink href='#'tabIndex={0}>GitHub Link</CardLink>
                </CardBody>
            </Card>
        </div>
        <div className='col-md-4'>
            <Card>
                <CardImg alt='' src='./assets/images/PuzzleGameScreenshot.png' width='100%' tabIndex={0}/>        
                    <CardTitle>
                        Puzzle Cam Game
                    </CardTitle>
                    <CardSubtitle>
                        A vanilla javascript exercise that creates a puzzle out of the users camera image.
                    </CardSubtitle>
                    <CardBody>
                    <CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink>
                        <CardLink href='#' tabIndex={0}>GitHub Link</CardLink>
                    </CardBody>
            </Card>
        </div>      
    </div>
</div>


    );
};
export default Portfolio;