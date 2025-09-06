import { Route, Routes } from "react-router-dom";
import Agence from "./pages/Agence";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/navigation/FullScreenNav";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
