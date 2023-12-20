import {createContext} from 'react';
import DashBoard from './Component/DashBoard';

export const Theme=createContext();
function App() {
  Theme.displayName='hello'
  return (
    <div>
    <Theme.Provider value={{hello:1,id:2,name:"jsagdk"}} >
      <DashBoard/>
    </Theme.Provider>
    </div>
  );
}

export default App;
