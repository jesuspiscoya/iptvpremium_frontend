import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Channels } from "./pages/Channels";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Player } from "./pages/Player";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col gap-8 min-h-full bg-indigo-950">
        <Navbar />
        <div className="container flex-1 flex flex-col gap-8  self-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/player/" element={<Player />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
