import './app.css';
import Map from '../map/map';
import OrderList from '../order-list/order-list';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { dataAction } from '../../store/reducer/data-reducer/data-reducer';
import { getIsDataLoaded } from '../../store/reducer/data-reducer/selectors';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(getIsDataLoaded);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(dataAction.initApp());
    }
  }, [dispatch, isDataLoaded]);

  if (!isDataLoaded) {
    return <p className="spinner-text">Loading...</p>;
  }

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
