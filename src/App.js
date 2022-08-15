import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
