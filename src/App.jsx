import Home from "./pages/Home/Home"
import { AppContext, globalState } from "./AppContext"

// import Login from "./pages/Login/Login";
// import Profile from "./pages/Profile/Profile";
// import Register from "./pages/Register/Register";




function App() {
  return (
    <AppContext.Provider value={{ globalState }}>
      <Home />
    </AppContext.Provider>
    
    // <Profile />
    // <Login />
    // <Register />
  );
}

export default App;
