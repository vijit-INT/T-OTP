import './App.css';
import OtpVerification from './Components/otpverification/OtpVerification';
import UserRegister from './Components/RegisterPage.jsx/UserRegister';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
     
      <Routes>
      <Route path='/' element={ <UserRegister />}/>
        <Route path='/otpVerification' element={<OtpVerification />}/>
        
      </Routes>
    </div>
  );
}

export default App;
