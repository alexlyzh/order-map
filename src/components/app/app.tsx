import './app.css';
import Map from '../map/map';
import OrderList from '../order-list/order-list';

const waypoints = [
  [52.37554, 4.901976],
  [52.36854, 4.887976],
];

function App(): JSX.Element {

  return (
    <div className="page">
      <form className="app">
        <OrderList />
        <Map waypoints={waypoints}/>
      </form>
    </div>
  );
}

export default App;
