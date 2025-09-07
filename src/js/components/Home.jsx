import React from "react";
import CardJoined from "./cardJoined.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Jumbotron />
        <CardJoined />
      </main>
      <Footer />
    </>
  );
};

export default Home;
