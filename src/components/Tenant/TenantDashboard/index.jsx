import { Link } from 'react-router-dom';
import STenantDashboard from './style';

export default function TenantDashboard() {
  return (
    <STenantDashboard>
      <p>TenantDashboard</p>
      <Link to="/tenant/profil">Profil</Link>
      <Link to="/tenant/criteria">Criteria</Link>
      <Link to="/tenant/match">Match</Link>
      <Link to="/tenant/announcements-save">Announcements save</Link>
      <Link to="/tenant/roommate-hunt">Roommate hunt</Link>
      <Link to="/tenant/housing-search">Housing search</Link>
    </STenantDashboard>
  );
}
