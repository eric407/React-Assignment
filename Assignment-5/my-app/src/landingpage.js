import React from 'react';

import {Link} from 'react-router-dom';
import './landingpage.css';
import lambo from './images/lambo.jpeg'

function Landingpage() {
return (
  <>

    <div className='container'>
      <img className='image' src={lambo} alt="omen_image"/>

      <div className='left-content'>
      <h1>My Collection</h1>

      <Link className='button' to="/instaClonePage">Enter </Link>
      </div>
    </div>

</>
);

}

export default Landingpage