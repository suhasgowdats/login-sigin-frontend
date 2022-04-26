import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Signin from './Signin';
import Dashboard from './Dashboard';
import ForgotPass from './ForgotPass';
import Otpverify from './Otpverify';
import PwsVerify from './PwsVerify';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/forgotpass' element={<ForgotPass/>}/>
         <Route path='/otpverification' element={<Otpverify/>}/>
         <Route path='/pwsverify' element={<PwsVerify/>}/>
        </Routes>
       </BrowserRouter>        
    </div>
  );
}

export default App;
