import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landingpage from './landingpage';
import Postview from './Postview';


function App() {
  return (
    <div className="site-container">

    <Router>
        <Routes>
            <Route path="/" element={<Landingpage />}/>
            <Route path="/instaClonePage" element={<Postview />}/>
        </Routes>
        
    </Router>


    </div>
  );
}

export default App;