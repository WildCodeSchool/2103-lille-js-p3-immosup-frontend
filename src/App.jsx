import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserInfos from './contexts/UserInfos';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';
import WorkInProgressDisplay from './components/WorkInProgress/Display';
import PositionFooter from './PositionFooter';
import './reset.css';

export default function App() {
  const [userInfos, setUserInfos] = useState(null);
  const [userToken, setUserToken] = useState(null);

  return (
    <SApp>
      <PositionFooter>
        <GlobalStyle />
        <UserInfos.Provider
          value={{ userInfos, setUserInfos, userToken, setUserToken }}
        >
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/" component={WorkInProgressDisplay} />
          </Switch>
        </UserInfos.Provider>
        <ToastContainer />
      </PositionFooter>
      <Footer />
    </SApp>
  );
}
