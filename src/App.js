// import React from "react";
// // import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Header from "./components/header";
// import Homepage from "./pages/home";

// const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <Homepage />
//     </div>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import CariMobil from "./pages/cari-mobil";
import Homepage from "./pages/homepage";
import DetailMobil from "./pages/detail-mobil";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cari-mobil" element={<CariMobil />} />
        <Route path="/cari-mobil/:id" element={<DetailMobil />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
