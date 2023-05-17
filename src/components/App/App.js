import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route exact path='/'
          element={
            <>
              <Header
                // headerText={'Войти'}
              />
              <Main>

              </Main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;