import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

function Camp() {
    return (
        <div className='container'>
            <h2>Portfolio Project - Campsite Reservation Site</h2>
            <div className='row'>
                <div className='col-lg-10 mx-auto'>
                    <Card>
                        <CardBody>
                        <CardImg alt='Screenshot of campsite reservation site' src='./assets/images/campsiteresscreenshot.png' width='100%' tabIndex={0}/>
                            <CardTitle>
                                Campsite Reservation Site
                            </CardTitle>
                            <CardSubtitle>
                                A React site for booking campsites, choosing favorites, and leaving comments.
                            </CardSubtitle>  
                            <CardText>
                                Long description
                            </CardText>
                                <ul className='square-bullets'>
                                    <li><CardLink href='#' tabIndex={0}>Video</CardLink></li>
                                    <li><CardLink href='https://github.com/adiamorrisswanger/react-ncs.git'tabIndex={0}>GitHub</CardLink></li>
                                </ul>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}


export default Camp;