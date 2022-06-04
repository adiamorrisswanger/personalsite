import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardLink, CardImgOverlay, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPortfolioItem({portfolio}) {

    return (
        <Card>
            <Link to={`portfolio/${portfolio.id}`}>
                <CardImg src={portfolio.image} width='100%' tabIndex={0} alt={portfolio.description}/>
                        <CardImgOverlay>
                            <CardTitle>
                                {portfolio.title}
                            </CardTitle>
                            <CardSubtitle>
                                {portfolio.description}
                            </CardSubtitle>
                        </CardImgOverlay>
                        <CardBody>
                            <CardLink href='#' tabIndex={0}>Video Walkthrough</CardLink>
                            <CardLink href='#' tabIndex={0}>GitHub Link</CardLink>
                        </CardBody>
            </Link>
        </Card>
    )


}


function Portfolio(props) {

    const portfolio = props.portfolio.map(portfolio => {
        return (
            <div key={portfolio.id} className='col-md-6'>
                <RenderPortfolioItem portfolio={{portfolio}}/>
            </div>
        )
    })

    return (
        <div className='container'>
            <div className='row'>
                <h1>Projects</h1> 
                <div className='col-md-5'>
                    {portfolio}
                </div>
            </div>
        </div>
    )
}


export default Portfolio;