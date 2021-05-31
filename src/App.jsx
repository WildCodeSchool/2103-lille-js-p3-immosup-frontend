import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TenantDashboard from './components/TenantDashboard';
import LandlordDashboard from './components/LandlordDashboard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tenant/dashboard" component={TenantDashboard} />
        <Route path="/landlord/dashboard" component={LandlordDashboard} />
      </Switch>
      <Footer />
    </div>
  );
}
