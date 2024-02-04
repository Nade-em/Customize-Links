import './App.css';
import Appbar from './Appbar';
import Intro from './Components/Intro';
import Profile from "./Components/Profile"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const bStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFFBF5",
  };

  return (
    <div style={bStyle} >
      <Appbar />

      <Router>
        <Routes>
          <Route path="/intro" element={Intro} />
          <Route path="/links" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
