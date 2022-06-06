import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardLink, CardImgOverlay, CardImg } from 'reactstrap';

//Make PortfolioInfo container

function Portfolio() {
    return (
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
                                An site designed to expand on the Work of Art: Business Skills for Artists curriculum by <a href='https://springboardforthearts.org' rel='noreferrer'>Springboard for the Arts</a>
                            </CardSubtitle>
                        <CardBody>
                            <CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink>
                            <CardLink href='#' tabIndex={0}>GitHub Link</CardLink>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-md-4'>
                    <Card>
                        <CardImg alt='' src='https://picsum.photos/200' width='100%' tabIndex={0}/>
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
                    <CardImg alt='' src='https://picsum.photos/200' width='100%' tabIndex={0}/>
                        <CardImgOverlay>
                            <CardTitle>
                                Portfolio 3
                            </CardTitle>
                            <CardSubtitle>
                                Description of Portfolio 3
                            </CardSubtitle>
                        </CardImgOverlay>
                        <CardBody>
                        <CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink>
                            <CardLink href='#' tabIndex={0}>GitHub Link</CardLink>
                        </CardBody>
                    </Card>
                </div>
            </div>
    );
};
export default Portfolio;