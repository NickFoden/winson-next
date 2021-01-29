import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useOnClickOutside } from "../utils/clickOutside";
import Burger from "../components/Burger";
import Menu from "../components/Menu";

const HeaderNav = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      <nav ref={node}>
        <Link href="/">
          <a className="home">Win Son</a>
        </Link>
        <Burger open={open} setOpen={setOpen} />
        <div className="links_container">
          <Link href="/restaurant">
            <a
              className={
                router && router.pathname === "/restaurant"
                  ? "venue_active venue"
                  : "venue"
              }
            >
              Restaurant
            </a>
          </Link>
          <Link href="/bakery">
            <a
              className={
                router && router.pathname === "/bakery"
                  ? "venue_active venue"
                  : "venue"
              }
            >
              Bakery
            </a>
          </Link>
        </div>
      </nav>
      {loaded && <Menu open={open} setOpen={setOpen} />}
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
          font-size: 1.5rem;
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
          font-size: 1.5rem;
          line-height: 1.2;
          margin-right: 2rem;
          text-decoration: none;
        }
        .venue:hover {
          opacity: 0.7;
        }
        .venue_active {
          text-decoration: underline;
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
