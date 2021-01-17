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
      `}</style>
    </>
  );
};

export default HeaderNav;
