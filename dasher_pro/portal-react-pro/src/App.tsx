import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
