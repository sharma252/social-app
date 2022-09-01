import "./App.css";
import Home from "./components/routes/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation";
import SignIn from "./components/SignInComp/signIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
