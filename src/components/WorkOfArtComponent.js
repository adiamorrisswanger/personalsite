import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle, CardLink } from 'reactstrap';

function WorkOfArt() {
    return (
        <div className='container'>
            <h2>Portfolio Project - Work of Art: Interactive</h2>
            <Card>
                <CardBody className='col-lg-10 mx-auto'>
                    <CardImg alt='Screen capture of Work of Art: Interactive page' src='./assets/images/woa-screencapture-6-3-22.png' width='100%' tabIndex={0}/>
                        <CardTitle>
                            Work of Art: Interactive
                            </CardTitle>
                        <CardSubtitle>
                            A full stack site using React and Node, designed to expand on the Work of Art: Business Skills for Artists curriculum by <a href='https://springboardforthearts.org' rel='noreferrer'>Springboard for the Arts.</a>
                        </CardSubtitle>
                        <CardText>
                            Long description
                        </CardText>
                            <ul className='square-bullets'>
                                <li><CardLink href='#' tabIndex={0}>Video</CardLink></li>
                                <li><CardLink href='https://github.com/adiamorrisswanger/work-of-art-client.git' tabIndex={0}>Front End GitHub</CardLink></li>
                                <li><CardLink href='https://github.com/adiamorrisswanger/workOfArtServer.git' tabIndex={0}>Back End GitHub</CardLink></li>
                            </ul>
                </CardBody>
            </Card>
        </div>

    )
}


export default WorkOfArt; 