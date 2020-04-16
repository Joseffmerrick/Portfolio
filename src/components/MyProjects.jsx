import React from 'react';
import TheNavBar from './projects/TheNavBar'
import BringIt from './projects/BringIt'

export default function MyProjects () {
    const [project, setProject] = React.useState(<></>)

    function gotoTheNavBar (event) {
        event.preventDefault();
        setProject(<TheNavBar />)
    }
    
    function gotoBringIt (event) {
        event.preventDefault();
        setProject(<BringIt />)

    }

    return (
        <div className="My-Projects">
            <h2>My Projects</h2>
            <div className="My-Projects-Container">
                <ul className="My-Projects__Project-List">
                    <li className="Project-List-Item" onClick={gotoTheNavBar}>
                        <h3>The Nav Bar</h3>
                        <p>An app that allows users to showcase their cocktail recipes.</p>
                    </li>
                    <li className="Project-List-Item" onClick={gotoBringIt}>
                        <h3>Bring It!</h3>
                        <p>An app that helps users organize the attendees and needs of an event.</p>
                    </li>
                </ul>
                <div className="My-Projects__Display-Area">
                    {project}
                </div>
            </div>
        </div>
    )
}