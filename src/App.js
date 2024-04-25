import React from 'react'
import './App.css';
import DashboardView from './Components/DashboardView';
import ProductListView from './Components/ProductListView';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  // useEffect(() => {
  //   fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory').then(response => response.json())
  //   .then(res => dispatch(setProductList(res) ));
  // }, []);
  return (
    <Provider store={store}>
      <div className='appContainer'>
        <DashboardView />
        <ProductListView />
      </div>
    </Provider>
  )
}

export default App