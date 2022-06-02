import React, { useState } from 'react';
import { Button } from 'reactstrap';


function Home() {

    const [title, setTitle] = useState(null)
    const values = ['Dancer','Dog Trainer', 'Non Profit Admin', 'Actor', 'Choreographer', 'TV Host', 'Cater Waiter', 'Tour Guide'];

    return (
        <div className='home'>
            <div>
                <h1>Adia Morris Swanger | Web Developer and...{title}</h1>
                <Button color='info' onClick={() => setTitle(values[Math.floor(Math.random() * values.length)])}>Change It Up</Button>
            </div>
            
        </div>
    );
}

export default Home;