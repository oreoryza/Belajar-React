import Header from "./molecules/Header";
import Navbar from "./molecules/Navbar";
import React from "react";
import Section from "./molecules/Section";
import Team from "./molecules/Team";
import Banner from "./molecules/Banner";
import Footer from "./molecules/footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header title="About" />
      <Section
        title="About Us"
        subTitle="One of the Fastest Way to Business Growth"
        text="It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed"
      />
      <Team title="Team" subTitle="Our Leaders"/>
      <Banner text="Some of the History of Our Company is that we are Catching up through Video"/>
      <Footer/>
    </div>
  );
}
