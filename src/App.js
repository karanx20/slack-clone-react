import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import  store  from './app/store';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img 
          src='https://yt3.googleusercontent.com/ytc/AIf8zZQTjGhyv6zCabZQRDnnudwAJ7AoRvnucvEkhi4DSA=s900-c-k-c0x00ffffff-no-rj'
          alt='' 
          />

          <Spinner
          name="ball-spin-fade-loader"
          color="purple"
          fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} exact />
              </Routes>
            </AppBody>
          </>
          )}
        </Router>
      </div>
    </Provider>
  );
}

export default App;

const AppLoading = styled.div`
`;

const AppLoadingContents = styled.div`
 text-align: center;
 padding-bottom: 100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 > img {
  height: 100px;
  padding: 20px;
  margin-bottom: 40px;
 }
`;

const AppBody = styled.div`
 display: flex;
 height: 100vh;
`;