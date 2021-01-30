import React from "react";
import Link from "next/link";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Link href="/restaurant">
          <a tabIndex={tabIndex}>Restaurant</a>
        </Link>
        <Link href="/bakery">
          <a tabIndex={tabIndex}>Bakery</a>
        </Link>
      </StyledMenu>
      <style jsx>{`
        a {
          color: black;
          font-family: "Courier New", Courier, monospace;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Menu;
