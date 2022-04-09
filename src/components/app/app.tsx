import './app.css';
import Map from '../map/map';
import OrderList from '../order-list/order-list';

function App(): JSX.Element {
  return (
    <div className="page">
      <form className="app">
        <OrderList />
        <Map />
      </form>
    </div>
  );
}

export default App;
