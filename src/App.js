// App.js
import { useSelector } from 'react-redux';

import DashboardPage from './Pages/DashboardPage';


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log("hello")
  console.log(isAuthenticated)



  return (
    <div >
     <div>
   

      <DashboardPage />
     
      
    </div>
    </div>
  );
}

export default App;
