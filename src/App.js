import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Display from "./components/Display";


const App = () => {
  return (
    <>
      <Header />
      <Display />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
