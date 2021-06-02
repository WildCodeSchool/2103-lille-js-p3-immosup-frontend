import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TenantDashboard from './components/Tenant/TenantDashboard';
import LandlordDashboard from './components/LandlordDashboard';
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
        <Route path="/landlord/dashboard" component={LandlordDashboard} />
      </Switch>
      <Footer />
    </SApp>
  );
}
