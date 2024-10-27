import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const page = () => {
  return (
    <div>
      <Header></Header>
      <br />
      <h1 className="font-bold text-4xl text-yellow-300"> Web Development </h1>
      <br />
      <p className="text-cyan-100">
        Our web development services are crafted to help businesses and
        individuals establish a strong, effective online presence.
        <br /> We specialize in building responsive, high-performance websites
        that not only look great but also provide a seamless user experience
        across all devices.
        <br /> From landing pages to complex web applications, our team is
        dedicated to creating solutions that align with your vision and business
        goals.
        <br />
        With an emphasis on clean, maintainable code, we ensure that every
        project we deliver is optimized for speed, accessibility, and
        scalability.
      </p>
      <br />
      <Footer></Footer>
    </div>
  );
};

export default page;
