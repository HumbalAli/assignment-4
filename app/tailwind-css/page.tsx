import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const page = () => {
  return (
    <div>
      <Header></Header>
      <br />
      <h1 className="font-bold text-4xl text-yellow-300">
        Tailwind CSS Development
      </h1>
      <br />
      <p className="text-cyan-100">
        We offer specialized services in Tailwind CSS, a utility-first CSS
        framework that allows for rapid design implementation without
        sacrificing customization.
        <br /> Our team uses Tailwind CSS to build visually appealing and
        functional websites, ensuring pixel-perfect precision and
        responsiveness.
        <br /> With Tailwind, we can create custom, theme-consistent designs
        faster, giving you a unique and professional look without the typical
        constraints of traditional CSS frameworks.
        <br /> Tailwind’s flexibility allows us to tailor each site to fit your
        brand perfectly, resulting in a modern, cohesive user experience.
      </p>
      <br />
      <Footer></Footer>
    </div>
  );
};

export default page;
