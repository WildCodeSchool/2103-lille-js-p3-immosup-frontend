import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserInfos from './contexts/UserInfos';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage';
import TenantDashboard from './components/Tenant/TenantDashboard';
import TenantProfil from './components/Tenant/TenantProfil';
import TenantMatch from './components/Tenant/TenantMatch';
import TenantAnnouncementsSave from './components/Tenant/TenantAnnouncementsSave';
import TenantRoommateHunt from './components/Tenant/TenantRoommateHunt';
import TenantHousingSearch from './components/Tenant/TenantHousingSearch';
import LandlordDashboard from './components/LandlordDashboard';
import FiltreLogement from './components/FiltreLogement';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';
import './reset.css';

export default function App() {
  const [userInfos, setUserInfos] = useState(null);

  return (
    <SApp>
      <GlobalStyle />
      <UserInfos.Provider value={{ userInfos, setUserInfos }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tenant/dashboard" component={TenantDashboard} />
          <Route path="/landlord/dashboard" component={LandlordDashboard} />
          <Route path="/tenant/profil" component={TenantProfil} />
          <Route path="/tenant/criteria" component={FiltreLogement} />
          <Route path="/tenant/match" component={TenantMatch} />
          <Route
            path="/tenant/announcements-save"
            component={TenantAnnouncementsSave}
          />
          <Route path="/tenant/roommate-hunt" component={TenantRoommateHunt} />
          <Route
            path="/tenant/housing-search"
            component={TenantHousingSearch}
          />
        </Switch>
      </UserInfos.Provider>
      <ToastContainer />
      <Footer />
    </SApp>
  );
}
