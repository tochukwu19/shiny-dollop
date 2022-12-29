import './App.css';
import Home from './pages/index';
import Stats from './pages/stats';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/stats" element={<Stats />}/>
      </Routes>
    </div>
  );
}

export default App;
