import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Weather from './components/Weather/Weather'
import Retrospective from './components/Retrospective/Retrospective'
import Todos from './components/Todo/Todos'
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
        <Route path='/todos' component={Todos} />
        <Route>Not found -_-</Route>
      </Switch>
    </Router>
  </div>
}

export default App;
