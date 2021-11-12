import { Route } from "react-router-dom";
import "./App.css";
import Start from "./pages/start";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/singup";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/start" exact component={Start} />
      <Route path="/signin" exact component={SigninPage} />
      <Route path="/register" exact component={SignupPage} />
      <Route path="/profile" exact component={ProfilePage} />
    </div>
  );
}

export default App;
