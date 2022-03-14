import { Route, Router, Routes } from "react-router-dom";
import Block from "./components/Block";
import './index.css';
import Profile from "./pages/Profile";

function App() {
  Links();
  return (
    <div>
      <Block />
    </div>
  );
}

function Links(){
  <Router>
    <Routes>
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  </Router>
}

export default App;
