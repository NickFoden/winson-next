import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SubHeaderNav from "./SubHeaderNav";
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
          <a>
            <img src="/svg/morewinsonbuttons_winson.svg" className="logo" />
          </a>
          {/* <a className="home">Win Son</a> */}
        </Link>
        <Burger open={open} setOpen={setOpen} />
        <div className="links_container">
          <div className="links_container">
            <Link href="/restaurant">
              <a
                className={
                  router && router.pathname.includes("restaurant")
                    ? "venue_active venue"
                    : "venue"
                }
              >
                <img
                  src="/svg/morewinsonbuttons_restaurant.svg"
                  className="logo_links"
                />
              </a>
            </Link>
            <Link href="/bakery">
              <a
                className={
                  router && router.pathname.includes("bakery")
                    ? "venue_active venue"
                    : "venue"
                }
              >
                <img
                  src="/svg/morewinsonbuttons_bakery.svg"
                  className="logo_links"
                />
              </a>
            </Link>
          </div>
          <div className="links_container">
            <SubHeaderNav />
          </div>
        </div>
      </nav>
      {loaded && <Menu open={open} setOpen={setOpen} />}
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          width: 100vw;
          margin: 0 auto;
          max-width: 750px;
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
        .logo {
          height: 3rem;
          width: auto;
        }
        .logo_links {
          height: 1.5rem;
          width: auto;
        }
        .venue {
          margin-right: 2rem;
        }
        .venue:hover {
          opacity: 0.7;
        }
        .venue_active {
          border-bottom: 3px solid black;
        }
        @media screen and (max-width: 800px) {
          .logo_links {
            height: 1.5rem;
          }
        }
        @media screen and (min-width: 720px) {
          .links_container {
            display: block;
          }
        }
        @media screen and (min-width: 1280px) {
          .logo_links {
            height: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderNav;
