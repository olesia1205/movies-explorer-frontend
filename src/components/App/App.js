import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route exact path='/'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header__unlogged'}
              />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path='/movies'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header'}
              />
              <Movies />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
