import React from "react";
import { bakeryClient, client } from "../src/utils/contentful";
import Body from "../src/components/Body";
import RestMenu from "../src/components/RestMenu";
import { RestaurantContent } from "../types/restaurant";
import { MenuContent } from "../types/menuContent";

interface RestaurantProps {
  bakeryMenuContent: MenuContent;
  pageContent: RestaurantContent;
}

const Bakery = ({ bakeryMenuContent, pageContent }: RestaurantProps) => {
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
      <RestMenu menu={bakeryMenuContent} />
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

export default Bakery;

export async function getStaticProps(context) {
  const pageContent = await client.getEntry("6FrvEE0piUY6cWhSwzTBrP");
  const bakeryMenuContent = await bakeryClient.getEntries({
    content_type: "menuItem",
  });

  return {
    props: {
      bakeryMenuContent,
      pageContent,
    },
  };
}
