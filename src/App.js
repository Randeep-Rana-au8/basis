import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import Home from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/start" exact element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
