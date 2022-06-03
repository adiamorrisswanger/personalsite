import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardLink, CardImgOverlay, CardImg } from 'reactstrap';

function Portfolio() {

    return (
        <div className='container'>
            <div className='row'> 
                <div className='col'>
                    <Card>
                        <CardImg alt='' src='https://picsum.photos/200' width='100%' tabIndex={0}/>
                        <CardImgOverlay>
                            <CardTitle>
                                Portfolio 1
                            </CardTitle>
                            <CardSubtitle>
                                Description of Portfolio 1
                            </CardSubtitle>
                        </CardImgOverlay>
                        <CardBody>
                            <CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink>
                            <CardLink href='#' tabIndex={0}>GitHub Link</CardLink>
                        </CardBody>
                    </Card>
                </div>
                <div className='col'>
                    <Card>
                        <CardImg alt='' src='https://picsum.photos/200' width='100%' tabIndex={0}/>
                        <CardImgOverlay>
                            <CardTitle>
                                Portfolio 2
                            </CardTitle>
                            <CardSubtitle>
                                Description of Portfolio 2
                            </CardSubtitle>
                        </CardImgOverlay>
                        <CardBody>
                            <CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink>
                            <CardLink href='#'tabIndex={0}>GitHub Link</CardLink>
                        </CardBody>
                    </Card>
                </div>
                <div className='col'>
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
        </div>
    )
}


export default Portfolio;