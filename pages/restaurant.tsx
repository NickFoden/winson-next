import React from "react";
import { client } from "../src/utils/contentful";
import Body from "../src/components/Body";
import RestMenu from "../src/components/RestMenu";
import { RestaurantContent } from "../types/restaurant";

interface RestaurantProps {
  pageContent: RestaurantContent;
  restaurantMenu: any;
}

const Restaurant = ({ pageContent, restaurantMenu }: RestaurantProps) => {
  console.dir(restaurantMenu);
  const { fields, sys } = pageContent;
  const {
    deliveryUrl,
    logo,
    name,
    pickupUrl,
    // restaurant,
    service1,
    service2,
  } = fields;

  return (
    <Body>
      <section className="column">
        <h1 className="title">{name}</h1>
        <img className="logo" src={logo.fields.file.url} alt={name} />
        <p>{service1}</p>
        <p>{service2}</p>
        <div className="row_links">
          <a
            href={pickupUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} pick up`}
            className="delivery_link"
          >
            Pick Up
          </a>
          <a
            href={deliveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Delivery`}
            className="delivery_link"
          >
            Delivery
          </a>
        </div>
      </section>
      <RestMenu menu={restaurantMenu} />
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
};

export default Restaurant;

export async function getStaticProps(context) {
  const pageContent = await client.getEntry("3xE7ccbNmslBqWxYlZvHj3");
  const restaurantMenu = await client.getEntries({
    content_type: "item",
  });
  return {
    props: {
      pageContent,
      restaurantMenu,
    },
  };
}
