import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import path from 'path';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      {/* <h1>ERB Version {app.getVersion()}</h1> */}
      <div>
        <h1>ERB v1.0.0</h1>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
