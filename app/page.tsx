import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <section>
          <h1 className="text-yellow-300 text-bold text-4xl">
            About this website
          </h1>
          <br />
          <p className="text-cyan-100">
            In this website I have put everything that I have learned througout
            in the journey of learning TypeScript, JavaScript, Node.js, Next.js,
            HTML, Css, Tailwind Css.
            <br />
            And I will continue to learn more and more and put more efforts in
            my career i will strive for more great achivements.
          </p>
          <br />
          <h1 className="text-bold text-yellow-300 text-2xl py-2">
            This is my Github Account
          </h1>
          <a target="_blank" href="https://github.com/HumbalAli">
            <button className="border-2 rounded border-red-600">
              --Github--
            </button>
          </a>
        </section>
        <br />
      </div>
      <br />
      <section>
        <h2 className="text-bold text-yellow-300 text-3xl py-2">
          These are more pages
        </h2>
        <ul>
          <li>
            <Link target="_blank" href="/about">
              <button className="border-2 rounded border-red-600 animate-bounce cursor-no-drop">
                --About--
              </button>
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/services">
              <button className="border-2 rounded border-red-600 animate-bounce cursor-progress">
                --Services--
              </button>
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/contact">
              <button className="border-2 rounded border-red-600 animate-bounce cursor-crosshair">
                --Contact--
              </button>
            </Link>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default page;
