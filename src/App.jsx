import './reset.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TenantDashboard from './components/TenantDashboard';
import LandlordDashboard from './components/Landlord/LandlordDashboard';
import LandlordProfil from './components/Landlord/LandlordProfil';
import LandlordContact from './components/Landlord/LandlordContact';
import LandlordBuyCredits from './components/Landlord/LandlordBuyCredits';
import LandlordAnnoucement from './components/Landlord/LandordAnnouncement';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';

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
      </Switch>
      <Footer />
    </SApp>
  );
}
