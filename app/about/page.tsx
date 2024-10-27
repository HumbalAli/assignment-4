import React from "react";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const page = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="font-bold text-4xl"> About Me </h1>
      <br />
      <p>
        I&apos;m a curious and driven individual with a passion for technology,Web
        Development.
        <br /> I&apos;m known for being adaptable, enthusiastic, and someone who
        values collaboration and creativity.
      </p>

      <p>
        Beyond my professional interests, I enjoy cooking, and I&apos;m always
        looking for the next opportunity to learn something new.
        <br /> I&apos;m excited to connect with others who share similar passions and
        to make a positive impact in any environment I find myself in.
      </p>
      <Image
        src="/image/Project_1.jpg"
        alt="My Image"
        width={270}
        height={340}
        className="border-2 border-red-900"
      />
      <Footer></Footer>
    </div>
  );
};

export default page;
