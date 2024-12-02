import React from "react";
import Hero from "../../Hero/Hero";
import Navbar from "../../Navbar/Navbar";

function HomePage() {

  return (
    <>
      <Navbar page={"home"} />
      <Hero />
    </>
  );
}

export default HomePage;
