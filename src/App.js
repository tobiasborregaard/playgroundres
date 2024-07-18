import React from 'react';
import { GlobalProvider } from './Helper/Globalprovider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './Pages/Frontpage';
import GuessGame from './Pages/Guessgame';

function App() {
  
  return (
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path=" " element={<FrontPage />} />
            <Route path='/guessgame' element={<GuessGame/>}/>
            
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </Router>
      </GlobalProvider>


     );
}

export default App;
