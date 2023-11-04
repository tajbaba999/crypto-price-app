import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Exchange from "./components/Exchange";
import Coins from "./components/Coins";
import Coindetail from "./components/Coindetail";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
// import { TabTitle } from "./utils/GeneralFunctions";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coins/:id" element={<Coindetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// function NotFound() {
//   return (
//     <div>
//       <h1>404 - Not Found</h1>
//       <p>The page you are looking for does not exist.</p>
//     </div>
//   );
// }

export default App;
