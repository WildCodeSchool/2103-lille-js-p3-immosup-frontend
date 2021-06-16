import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TenantDashboard from './components/Tenant/TenantDashboard';
import LandlordDashboard from './components/Landlord/LandlordDashboard';
import LandlordProfil from './components/Landlord/LandlordProfil';
import LandlordContact from './components/Landlord/LandlordContact';
import LandlordBuyCredits from './components/Landlord/LandlordBuyCredits';
import LandlordAnnoucement from './components/Landlord/LandordAnnouncement';
import TenantProfil from './components/Tenant/TenantProfil';
import TenantCriteria from './components/Tenant/TenantCriteria';
import TenantMatch from './components/Tenant/TenantMatch';
import TenantAnnouncementsSave from './components/Tenant/TenantAnnouncementsSave';
import TenantRoommateHunt from './components/Tenant/TenantRoommateHunt';
import TenantHousingSearch from './components/Tenant/TenantHousingSearch';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';
import './reset.css';

export default function App() {
  return (
    <SApp>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tenant/dashboard" component={TenantDashboard} />
        <Route exact path="/landlord/dashboard" component={LandlordDashboard} />
        <Route path="/landlord/dashboard/profil" component={LandlordProfil} />
        <Route path="/landlord/dashboard/contact" component={LandlordContact} />
        <Route
          path="/landlord/dashboard/buycredits"
          component={LandlordBuyCredits}
        />
        <Route
          path="/landlord/dashboard/annoucement"
          component={LandlordAnnoucement}
        />
        <Route path="/tenant/profil" component={TenantProfil} />
        <Route path="/tenant/criteria" component={TenantCriteria} />
        <Route path="/tenant/match" component={TenantMatch} />
        <Route
          path="/tenant/announcements-save"
          component={TenantAnnouncementsSave}
        />
        <Route path="/tenant/roommate-hunt" component={TenantRoommateHunt} />
        <Route path="/tenant/housing-search" component={TenantHousingSearch} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
      <Footer />
    </SApp>
  );
}
