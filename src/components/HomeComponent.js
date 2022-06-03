import React, { useState } from 'react';
import { Button } from 'reactstrap';


function Home() {

    const [title, setTitle] = useState(null)
    const values = ['Dancer','Dog Trainer', 'Non Profit Admin', 'Actor', 'Choreographer', 'TV Host', 'Cater Waiter', 'Tour Guide', 'Office Manager', 'Education Director'];

    return (
        <div className='home' tabIndex={0}>
            <div>
                <h1>Adia Morris Swanger | Web Developer <Button outline color='secondary' onClick={() => setTitle(values[Math.floor(Math.random() * values.length)])}>and...</Button> {title}</h1>
                
            </div>
            
        </div>
    );
}

export default Home;