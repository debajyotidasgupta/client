import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
