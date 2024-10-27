import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const page = () => {
  return (
    <div>
      <Header></Header>
      <br />
      <h1 className="font-bold text-4xl text-yellow-300">
        HTML & CSS Development
      </h1>
      <br />
      <p className="text-cyan-100">
        Our HTML and CSS development services focus on creating the structural
        foundation and styling of your website.
        <br />
        We write clean, semantic HTML code and use advanced CSS techniques to
        bring your designs to life, ensuring your site is both aesthetically
        pleasing and functionally robust.
        <br /> With a keen eye for detail, we make sure that each element is
        styled for consistency, responsiveness, and accessibility, creating an
        interface that enhances the user experience.
        <br />
        Whether you’re looking to update a single page or build a fully
        customized site from scratch, our team has the expertise to deliver
        exceptional results.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};

export default page;
