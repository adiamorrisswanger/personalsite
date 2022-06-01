import React, { useState } from 'react';


function Home() {

    const [title, setTitle] = useState(0)
    const values = ['Dancer','Dog Trainer', 'Non Profit Admin', 'Actor', 'Choreographer', 'TV Host'];

    return (
        <div>
            <div>
                <p>Adia Morris Swanger | Web Developer | {title}</p>
                <button onClick={() => setTitle(values[Math.floor(Math.random() * values.length)])}></button>
            </div>
            
        </div>
    );
}

export default Home;