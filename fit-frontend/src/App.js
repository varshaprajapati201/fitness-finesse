
import './App.css';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import Body from './components/Body';
import Associate from './components/Associate';
import AssociateType from './components/AssociateType';
import Signin from './components/Signin';
import NewUser from './components/NewUser';
import Diet from './components/Diet';
import WeightGain from './components/weightGain';
import WeightLoss from './components/weightLoss';
import ProteinSource from './components/proteinSource';
import LossVeg from './components/lossVeg';
import LossNon from './components/lossNon';
import PrivateComp from './components/PrivateComp';
import AssociateProduct from './components/AssociateProduct';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import GymPage from './components/GymPage';
import Store from './components/Store';
import Faq from './components/Faq';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Navbar2 />

        <Routes>

          <Route path="/" element={<Body />}></Route>

         


          <Route path="/signin" element={<Signin />} />

          <Route path="/newUser" element={<NewUser />} />

          <Route path="/diet" element={<Diet />} />

          <Route path="/weightGain" element={<WeightGain />} />

          <Route path="/weightLoss" element={<WeightLoss />} />

          <Route path="/proteinSource" element={<ProteinSource />} />

          <Route path="/lossVeg" element={<LossVeg />} />

          <Route path="/lossNon" element={<LossNon />} />

          <Route path="/gyms" element={<GymPage />} />

          <Route path="/store" element={<Store />} />

          <Route path="/faq" element={<Faq />} />

          <Route element={<PrivateComp/>}>
          <Route path="/associateType" element={<AssociateType />} />

          <Route path="/associate" element={<Associate />} />

          <Route path="/associateProduct" element={<AssociateProduct />} />

          <Route path="/profile" element={<Profile/>} />

          <Route path="/updateProfile" element={<UpdateProfile/>} />
          </Route>

        </Routes>

        <Footer />
      </Router>
    </div>
  );

}


export default App;
