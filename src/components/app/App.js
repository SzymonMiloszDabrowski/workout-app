import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';

import Hero from '../hero/Hero';
import Registration from '../registration/Registration';
import Login from '../login/Login';
import Main from '../main/Main';
import AddTrening from '../addTrening/AddTrening';
import AddExercise from '../addExercise/AddExercise';
import Exercises from '../exercises/Exercises';
import Progress from '../progress/Progress';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/trening">
            <AddTrening />
          </Route>
          <Route exact path="/exercise">
            <AddExercise />
          </Route>
          <Route exact path="/exercises">
            <Exercises />
          </Route>
          <Route exact path="/progress">
            <Progress />
          </Route>
          <Route path="*">
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
