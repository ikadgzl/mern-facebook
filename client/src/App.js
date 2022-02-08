import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Topbar from './components/topbar/Topbar';

//TODO: remove sidebar from both home and profile, put it here to prevent repeating.

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
