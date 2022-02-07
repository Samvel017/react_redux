import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Instructions from "./Instructions";
import Main from "./Main";

export default function Page() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Instructions />
      <Footer />
    </div>
  );
}
