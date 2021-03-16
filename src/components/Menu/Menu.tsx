import React from "react";
import Link from "next/link";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Link href="/restaurant">
          <a>
            <img
              src="/svg/morewinsonbuttons_restaurant.svg"
              className="logo_links"
            />
          </a>
        </Link>
        <Link href="/restaurant/dinner">
          <a>
            <img src="/svg/dinner.svg" className="sub_menu" />
          </a>
        </Link>
        <Link href="/restaurant/brunch">
          <a>
            <img src="/svg/brunch.svg" className="sub_menu" />
          </a>
        </Link>
        <Link href="/restaurant/order-now">
          <a className="sub">
            <img src="/svg/ordernow.svg" className="sub_menu" />
          </a>
        </Link>
        <Link href="/bakery">
          <a>
            <img
              src="/svg/morewinsonbuttons_bakery.svg"
              className="logo_links"
            />
          </a>
        </Link>
        <Link href="/bakery/menu">
          <a>
            <img src="/svg/menu.svg" className="sub_menu" />
          </a>
        </Link>
        <Link href="/bakery/order-now">
          <a className="sub">
            <img src="/svg/ordernow.svg" className="sub_menu" />
          </a>
        </Link>
      </StyledMenu>
      <style jsx>{`
        a {
          color: black;
          font-family: "Courier New", Courier, monospace;
          padding: 1rem 0;
          text-decoration: none;
          min-width: 250px;
        }
        .logo_links {
          height: 2.5rem;
        }
        .sub {
          font-size: 1.25rem;
        }
        .sub_menu {
          height: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default Menu;
