import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h2>Services</h2>
      <ul>
        <li>
          <Link target="_blank" href="/web-development">
            <button className="border-2 rounded border-red-600 animate-bounce">
              --Web Development--
            </button>
          </Link>
        </li>
        <li>
          <Link target="_blank" href="/html-and-css">
            <button className="border-2 rounded border-red-600 animate-bounce">
              --Html & Css--
            </button>
          </Link>
        </li>
        <li>
          <Link target="_blank" href="/tailwind-css">
            <button className="border-2 rounded border-red-600 animate-bounce">
              --Tailwind Css--
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
