import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Content from './components/Content';
import Membership from './components/Membership';
import Navbar from './components/Navbar';
import TopHeader from './components/TopHeader';
import HomePage from './pages/HomePage';
import MembershipPage from './pages/MembershipPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/member" element={<MembershipPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
