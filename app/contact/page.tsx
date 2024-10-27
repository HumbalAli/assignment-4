import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const page = () => {
  return (
    <div>
      <Header></Header>
      <h3 className="text-yellow-300 text-bold text-3xl py-2">Contact</h3>
      <p className="text-cyan-100">
        <strong>Email:</strong> humbalali3@gmail.com
      </p>
      <Footer></Footer>
    </div>
  );
};

export default page;
