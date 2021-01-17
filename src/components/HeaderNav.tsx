import React, { useState, useRef } from "react";
import Link from "next/link";
import { useOnClickOutside } from "../utils/clickOutside";
import Burger from "../components/Burger";
import Menu from "../components/Menu";

const HeaderNav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <nav ref={node}>
        <Link href="/">
          <a className="home">Win Son</a>
        </Link>
        <Burger open={open} setOpen={setOpen} />
        <div className="links_container">
          <Link href="/restaurant">
            <a className="venue">Restaurant</a>
          </Link>
          <Link href="/bakery">
            <a className="venue">Bakery</a>
          </Link>
        </div>
      </nav>
      <Menu open={open} setOpen={setOpen} />
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          width: 100vw;
        }
        .home {
          color: black;
          font-family: "Courier New", Courier, monospace;
          text-decoration: none;
        }
        .home:hover {
          opacity: 0.7;
        }
        .links_container {
          display: none;
        }
        .venue {
          color: black;
          font-family: "Courier New", Courier, monospace;
          margin-right: 2rem;
          text-decoration: none;
        }
        .venue:hover {
          opacity: 0.7;
        }
        @media screen and (min-width: 500px) {
          .links_container {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderNav;
