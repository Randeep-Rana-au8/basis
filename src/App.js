import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/singup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/start" exact element={<Start />} />
        <Route path="signin" exact element={<SigninPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
