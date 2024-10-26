import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Event } from './pages/Event';
import { Result } from './pages/Result';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Event />} /> 
        <Route path="/result" element={<Result />} />         {/* Example route for the Home page */}
        <Route path="/event" element={<Event />} />   {/* Route for the Event page */}
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;

