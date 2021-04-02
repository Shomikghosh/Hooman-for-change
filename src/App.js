import './App.css';
import Navbar from './views/Navbar/Navbar';
import Sidebox from './views/Sidebox/Sidebox';
import Banner from './views/Banner-1/Banner-1';
import Footer from './views/Footer/Footer';
import Fourpoint from './views/Fourpoints/Fourpoints';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Sidebox/>
      <Fourpoint />
      <Footer />
    </div>
  );
}

export default App;
