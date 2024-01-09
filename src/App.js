import './App.css';
/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
