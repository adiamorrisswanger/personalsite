import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function Home() {

    const [title, setTitle] = useState('_______')
    const values = ['a dancer','a dog trainer', 'a nonprofit admin', 'an actor', 'a choreographer', 'a TV host', 'a cater waiter', 'a tour guide', 'an office manager', 'an education director', 'a telemarketer', 'a mom', 'a cashier'];

    return (
        <div className='home'>
            <div>
                <h1 tabIndex={0}>Adia Morris Swanger | Web Developer</h1> 
                
                <p tabIndex={0}>I'm Adia. I'm a problem-solver and a maker, and my <Link to='/portfolio'>latest work</Link> is in web development. I've also been</p>
                <Button outline color='info' onClick={() => setTitle(values[Math.floor(Math.random() * values.length)])}>{title}.</Button> 
                
            </div>
            
        </div>
    );
}

export default Home;