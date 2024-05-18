import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./containers/whatgpt3/Whatgpt3";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/Cta";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
