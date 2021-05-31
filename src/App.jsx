import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudentsPage from './components/StudentsPage';
import DepositorsPage from './components/DepositorsPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <p>App</p>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/students" component={StudentsPage} />
        <Route path="/depositors" component={DepositorsPage} />
      </Switch>
      <Footer />
    </div>
  );
}
