import './App.css';
import Column from './components/Column/Column';

function App() {
  return <div className="App container">
    <div className="row">
      <Column title="Good Things" color="#00ff00" />
      <Column title="Bad Things" color="#ff0000" />
      <Column title="Action Items" color="#850eff" />
    </div>
  </div>
}

export default App;
