import { AppContext, globalState } from "./AppContext"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

function App() {
  return (
    <AppContext.Provider value={{ globalState }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/profile"  element={<Profile />} />
          <Route path="/profile/:username"  element={<Profile />} />
        </Routes>
      </Router>
    </AppContext.Provider>
    
    // <Profile />
    // <Login />
    // <Register />
  );
}

export default App;
