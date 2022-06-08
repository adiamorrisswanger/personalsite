import React from "react";

//To Do: Add social links

function Footer() {

    return(
        <div className='footer'>
             <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2 twitter-link'>
                            <div>
                                <a className='btn btn-social-icon' href='https://www.linkedin.com/in/adia-morris-swanger/'><i className="fa fa-brands fa-linkedin"></i> LinkedIn</a> 
                            </div>
                            <div>
                                <a className='btn btn-social-icon' href='https://github.com/adiamorrisswanger'><i className="fa fa-brands fa-github" ></i> GitHub</a> 
                            </div>
                            <div>
                                <a className='btn btn-social-icon' href='https://twitter.com/longtallsallie'><i className="fa fa-brands fa-twitter-square social-icon" ></i> Twitter</a> 
                            </div>
                        </div>
                        {/* Figure out why Twitter link text is grey. */}
                        
                    </div>
            </div>
        </div>
       
    )
}

export default Footer;