import './App.css';
import 'video-react/dist/video-react.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from '../src/Pages/Home'
import Publish from '../src/Pages/Publish'
import Engage from '../src/Pages/Engage'
import Advertise from '../src/Pages/Advertise'
import Monitor from '../src/Pages/Monitor'
import Analyze from '../src/Pages/Analyze'
import Facebook from '../src/Pages/Facebook'
import Instagaram from '../src/Pages/Instagaram'
import Youtube from '../src/Pages/Youtube'
import Linkedin from '../src/Pages/Linkedin'
import Twitter from '../src/Pages/Twitter'
import Pinterest from '../src/Pages/Pinterest'
import Soical from '../src/Pages/Soical'
import AppDirectery from '../src/Pages/AppDirectery'
import Adds from '../src/Pages/Adds'
import Impact from '../src/Pages/Impact'
import Insights from '../src/Pages/Insights'
import Mobileapp from '../src/Pages/Mobileapp'
import SoicalMarketing from '../src/Pages/SoicalMarketing'
import SocialSelling from '../src/Pages/SocialSelling'
import CustomerService from '../src/Pages/CustomerService'
import EmployeeAdvocacy from '../src/Pages/EmployeeAdvocacy'
import FinancialServices from '../src/Pages/FinancialServices'
import Government from '../src/Pages/Government'
import Healthcare from '../src/Pages/Healthcare'
import HigherEducation from '../src/Pages/HigherEducation'
import Agencies from '../src/Pages/Agencies'
import SuccessStories from '../src/Pages/SuccessStories'
import TrainingServices from '../src/Pages/TrainingServices'
import Brandambassador from '../src/Pages/Brandambassador'
import Plans from '../src/Pages/Plans'


function App() {
  return (
    <div>
       <Router>
         <Routes>

      <Route exact path="/" element={<Home/>} />
      <Route  path="/publish" element={<Publish/>} />
      <Route  path="/engage" element={<Engage/>} />
      <Route  path="/advertise" element={<Advertise/>} />
      <Route  path="/monitor" element={<Monitor/>} />
      <Route  path="/analyze" element={<Analyze/>} />
      <Route  path="/facebook" element={<Facebook/>} />
      <Route  path="/instagaram" element={<Instagaram/>} />
      <Route  path="/youtube" element={<Youtube/>} />
      <Route  path="/linkedin" element={<Linkedin/>} />
      <Route  path="/twitter" element={<Twitter/>} />
      <Route  path="/pinterest" element={<Pinterest/>} />
      <Route  path="/soical" element={<Soical/>} />
      <Route  path="/app" element={<AppDirectery/>} />
      <Route  path="/adds" element={<Adds/>} />
      <Route  path="/impact" element={<Impact/>} />
      <Route  path="/insights" element={<Insights/>} />
      <Route  path="/mobileapp" element={<Mobileapp/>} />
      <Route  path="/soicalmarketing" element={<SoicalMarketing/>} />
      <Route  path="/socialselling" element={<SocialSelling/>} />
      <Route  path="/customerservice" element={<CustomerService/>} />
      <Route  path="/employeeAdvocacy" element={<EmployeeAdvocacy/>} />
      <Route  path="/financialservices" element={<FinancialServices/>} />
      <Route  path="/government" element={<Government/>} />
      <Route  path="/healthcare" element={<Healthcare/>} />
      <Route  path="/highereducation" element={<HigherEducation/>} />
      <Route  path="/agencies" element={<Agencies/>} />
      <Route  path="/Successstories" element={<SuccessStories/>} />
      <Route  path="/trainingservices" element={<TrainingServices/>} />
      <Route  path="/brandambassador" element={<Brandambassador/>} />
      <Route  path="/Plans" element={<Plans/>} />

      
      </Routes>
       </Router>
    </div>
  );
}

export default App;
