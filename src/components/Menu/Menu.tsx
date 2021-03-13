import React from "react";
import Link from "next/link";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Link href="/restaurant">
          <a>Restaurant</a>
        </Link>
        <Link href="/restaurant/menu">
          <a className="sub">menu</a>
        </Link>
        <Link href="/bakery">
          <a>Bakery</a>
        </Link>
        <Link href="/bakery/menu">
          <a className="sub">menu</a>
        </Link>
      </StyledMenu>
      <style jsx>{`
        a {
          color: black;
          font-family: "Courier New", Courier, monospace;
          padding: 1rem 0;
          text-decoration: none;
        }
        .sub {
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
};

export default Menu;
