import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/profile"  element={<Profile />} />
        <Route path="/profile/:username"  element={<Profile />} />
        <Route path="/under-construction"  element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
