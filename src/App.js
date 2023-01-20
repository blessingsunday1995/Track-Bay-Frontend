import './App.css';
import CrmDivComponent from './component/CrmDivComponent'
import CrmSection from './component/CrmSection';
import OurProduct from './component/OurProduct';
import ContactUs from './component/ContactUs';
import FooterComponent from './component/FooterComponent';
import SVCComponent from './component/SVCComponent';
import SocialsComponent from './component/SocialsComponent';
import './components/Home';
import './components/Header/Home';
import Navbar from "./components/Nav/Nav";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Webinars from "./components/Webinars";
import Blog from "./components/Blog";
import Pages from "./components/Pages";
import Newsletter from "./components/Newsletter";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Home';



function App()
{
  return (
    <Router>
      <div className='App'>
        <ul>
          <li><Link to="/features" Features></Link></li>
          <li><Link to="/pricing" Pricing></Link></li>
          <li><Link to="/webinars" Webinars></Link></li>
          <li><Link to="/blog" Blog></Link></li>
          <li><Link to="/pages" Pages></Link></li>
          <li><Link to="/newsletter" Newsletter></Link></li>
        </ul>
        <Header />
        <Navbar />
        <Routes>

          <Route exact path='/features' element={<Features />}></Route>
          <Route exact path='/pricing' element={<Pricing />}></Route>
          <Route exact path='/webinars' element={<Webinars />}></Route>
          <Route exact path='/blog' element={<Blog />}></Route>
          <Route exact path='/pages' element={<Pages />}></Route>
          <Route exact path='/newsletter' element={<Newsletter />}></Route>
        </Routes>
        <CrmDivComponent />
        <div className="content">
          <CrmSection />
          <div className="">
            <OurProduct />
            <ContactUs />
            <SVCComponent />
            <FooterComponent />
            <SocialsComponent />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
