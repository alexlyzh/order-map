import './app.css';
import Map from '../map/map';

const waypoints = [
  [52.37554, 4.901976],
  [52.36854, 4.887976],
];

function App() {
  return (
    <div className="page app">
      <Map waypoints={waypoints}/>
    </div>
  );
}

export default App;
