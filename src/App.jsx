import './App.css';
import Column from './components/Column/Column';

function App() {
  return <div className="App container">
    <div className="row">
      <Column title="Good Things" color="#00FF00" />
      <Column title="Bad Things" color="#FF0000" />
      <Column title="Action Items" color="#0000FF" />
    </div>
  </div>
}

export default App;
