import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {

    return (
        <div>
            <h1>Error page</h1>
            <Link to='/' className='btn btn-primary'>
                Back Home
            </Link>
        </div>
    );
}

export default Error;