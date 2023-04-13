import './App.css';
import InfoSection from './Components/InfoSection/InfoSection';
import SVGSection from './Components/SVGSection/SVGSection';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main_screen">
        <InfoSection />
        <SVGSection />
      </div>
    </div>
  );
}

export default App;
