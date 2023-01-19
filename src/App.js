import './App.css';
import CrmDivComponent from './component/CrmDivComponent'
import CrmSection from './component/CrmSection';
import OurProduct from './component/OurProduct';
import ContactUs from './component/ContactUs';
import FooterComponent from './component/FooterComponent';
import SVCComponent from './component/SVCComponent';
import SocialsComponent from './component/SocialsComponent';



function App() {
  return (
    <div className="App">
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
  );
}

export default App;
