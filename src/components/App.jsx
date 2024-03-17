import Header from "./Header";
import Footer from "./Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "../components/pages/Logement"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path ="logement/:id" element={<Logement/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;