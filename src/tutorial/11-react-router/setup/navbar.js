import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/people'>People</Link>
                </li>
            </ul>
        </nav>
    );
}

export default About;