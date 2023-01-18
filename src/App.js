import './App.css';
import CrmDivComponent from './component/CrmDivComponent'
import CrmSection from './component/CrmSection';

function App() {
  return (
    <div className="App">
      <CrmDivComponent />
      <div className="content">
        <CrmSection />
      </div>
    </div>
  );
}

export default App;
