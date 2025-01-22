import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grid from './pages/Grid';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';




const App = () => {
  return (
    <Router>
      <div className="w-full h-screen">
        <Navbar/>
        <Routes>
          <Route path="/grid" element={<Grid />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
