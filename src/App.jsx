import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TenantDashboard from './components/Tenant/TenantDashboard';
import TenantProfil from './components/Tenant/TenantProfil';
import TenantCriteria from './components/Tenant/TenantCriteria';
import TenantMatch from './components/Tenant/TenantMatch';
import TenantAnnouncementsSave from './components/Tenant/TenantAnnouncementsSave';
import TenantRoommateHunt from './components/Tenant/TenantRoommateHunt';
import TenantHousingSearch from './components/Tenant/TenantHousingSearch';
import LandlordDashboard from './components/Landlord/LandlordDashboard';
import ContactUs from './components/ContactUs';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';
import AddAnnonce from './components/AddAnnonce';
import './reset.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <SApp>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tenant/dashboard" component={TenantDashboard} />
          <Route path="/landlord/dashboard" component={LandlordDashboard} />
          <Route path="/landlord/addannonce" component={AddAnnonce} />
          <Route path="/tenant/profil" component={TenantProfil} />
          <Route path="/tenant/criteria" component={TenantCriteria} />
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

          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <Footer />
      </SApp>
    </div>
  );
}
