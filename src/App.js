import './App.css';
import CrmDivComponent from './component/CrmDivComponent'
import CrmSection from './component/CrmSection';
import OurProduct from './component/OurProduct';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <div className="App">
      <CrmDivComponent />
      <div className="content">
        <CrmSection />
        <div className="">
          <OurProduct />
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;
