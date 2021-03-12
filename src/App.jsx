import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Weather from './components/Weather/Weather'
import Retrospective from './components/Retrospective/Retrospective'
import Todo from './components/Todo/Todo'
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';

function App() {
  return <div className="App">
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact={true} component={Main} />
        <Route path='/weather' component={Weather} />
        <Route path='/retro' component={Retrospective} />
        <Route path='/todo' component={Todo} />
        <Route>Not found -_-</Route>
      </Switch>
    </Router>
  </div>
}

export default App;
