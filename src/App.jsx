import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserInfos from './contexts/UserInfos';
import HomePage from './components/HomePage';
/* import ContactUs from './components/ContactUs'; */
import TenantDashboard from './components/Tenant/TenantDashboard';
import LandlordDashboard from './components/Landlord/LandlordDashboard';
import LandlordProfil from './components/Landlord/LandlordProfil';
import LandlordContact from './components/Landlord/LandlordContact';
import LandlordBuyCredits from './components/Landlord/LandlordBuyCredits';
import LandlordAnnoucement from './components/Landlord/LandordAnnouncement';
import TenantProfil from './components/Tenant/TenantProfil';
import TenantMatch from './components/Tenant/TenantMatch';
import TenantAnnouncementsSave from './components/Tenant/TenantAnnouncementsSave';
import TenantRoommateHunt from './components/Tenant/TenantRoommateHunt';
import TenantHousingSearch from './components/Tenant/TenantHousingSearch';
import TenantCriteria from './components/Tenant/TenantCriteria';
/* import NavBar from './components/NavBar'; */
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';
import './reset.css';
import AddAnnonce from './components/AddAnnonce';

export default function App() {
  const [userInfos, setUserInfos] = useState(null);

  return (
    <div>
      <SApp>
        {/*   <NavBar /> */}
        <GlobalStyle />
        <UserInfos.Provider value={{ userInfos, setUserInfos }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/tenant/dashboard" component={TenantDashboard} />
            <Route path="/landlord/dashboard" component={LandlordDashboard} />
            <Route path="/tenant/profil" component={TenantProfil} />
            <Route path="/tenant/match" component={TenantMatch} />
            <Route path="/tenant/criteria" component={TenantCriteria} />
            <Route
              exact
              path="/landlord/dashboard"
              component={LandlordDashboard}
            />
            <Route
              path="/landlord/dashboard/profil"
              component={LandlordProfil}
            />
            <Route
              path="/landlord/dashboard/contact"
              component={LandlordContact}
            />
            <Route
              path="/landlord/dashboard/buycredits"
              component={LandlordBuyCredits}
            />
            <Route
              path="/landlord/dashboard/annoucement"
              component={LandlordAnnoucement}
            />
            <Route
              path="/tenant/announcements-save"
              component={TenantAnnouncementsSave}
            />
            <Route
              path="/tenant/roommate-hunt"
              component={TenantRoommateHunt}
            />
            <Route path="/addannonce" component={AddAnnonce} />
            <Route
              path="/tenant/housing-search"
              component={TenantHousingSearch}
            />
            {/*    <Route path="/contact-us" component={ContactUs} /> */}
          </Switch>
        </UserInfos.Provider>
        <Footer />
      </SApp>
    </div>
  );
}
