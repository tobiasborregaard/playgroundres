import React from 'react';
import { GlobalProvider } from './Helper/Globalprovider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './Pages/Frontpage';
import GuessGame from './Pages/Guessgame';

function App() {
  
  return (
      <GlobalProvider>
        <Router basename='playgroundres'>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path='/guessgame' element={<GuessGame/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </GlobalProvider>


     );
}

export default App;
