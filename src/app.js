// import stand lib
import React from "react";

// import router
import Router from "./router/router";

// import conponents from components folder
import LeftNav from "./components/left_nav";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header title="Boston Children's Hospital" />

      <LeftNav />

      <Router />

      <Footer />
    </div>
  );
};

export default App;
