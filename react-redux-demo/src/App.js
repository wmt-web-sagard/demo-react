import logo from './logo.svg';
import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux';
import store from './component/redux/store';
import CakeContainerHooks from './component/CakeContainerHooks';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainerHooks/>
      <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
