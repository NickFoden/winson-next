import React from "react";
import { bakeryClient, client } from "../../src/utils/contentful";
import Body from "../../src/components/Body";
import BakeryMenu from "../../src/components/BakeryMenu";
import { MenuBakery } from "../../types/bakeryMenu";

interface RestaurantProps {
  menu: MenuBakery;
}

const Bakery = ({ menu }: RestaurantProps) => (
  <Body>
    <BakeryMenu menu={menu} />
    <style jsx>{`
      p {
        font-size: 0.8rem;
      }
      .column {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        max-width: 500px;
      }
      .delivery_link {
        color: black;
        font-family: Courier;
        font-size: 1.5rem;
      }
      .logo {
        border: 1px solid white;
        border-radius: 5px;
        height: 250px;
        width: 250px;
        object-fit: contain;
        transition: opacity ease-in-out 350ms, border ease-in-out 350ms;
      }
      .logo:hover {
        opacity: 0.7;
      }
      .row_links {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        width: 300px;
      }
      .title {
        font-family: Courier;
      }
    `}</style>
  </Body>
);

export default Bakery;

export async function getStaticProps(context) {
  const menu = await bakeryClient.getEntry("1kCVwGCHzFWy4YRGee4uuc");

  return {
    props: {
      menu,
    },
  };
}
