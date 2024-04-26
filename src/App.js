import React, { useState } from 'react'
import './App.css';
import DashboardView from './Components/DashboardView';
import ProductListView from './Components/ProductListView';
import { Provider } from 'react-redux';
import store from './store';
import AdminToggle from './Components/AdminToggle';

const App = () => {

  const[isChecked, setIsChecked] = useState(false);

  const handleSwitch = () => {
    setIsChecked(!isChecked)
  }
  // useEffect(() => {
  //   fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory').then(response => response.json())
  //   .then(res => dispatch(setProductList(res) ));
  // }, []);

  return (
    <Provider store={store}>
      <div className='appContainer'>
        <AdminToggle handleSwitch={handleSwitch} isChecked={isChecked} />
        <DashboardView />
        <ProductListView isUser={isChecked} />
      </div>
    </Provider>
  )
}

export default App