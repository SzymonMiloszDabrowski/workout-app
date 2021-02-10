import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from '../registration/Registration';
import './app.scss';
import Login from '../login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Hero />
            </Route>
            <Route path="/registration">
              <Navbar />
              <Registration />
            </Route>
            <Route path="/login">
              <Navbar />
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
