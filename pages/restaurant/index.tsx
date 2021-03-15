import React from "react";
import { client } from "../../src/utils/contentful";
import Body from "../../src/components/Body";
import RestMenu from "../../src/components/RestMenu";
import { RestaurantContent } from "../../types/restaurant";

interface RestaurantProps {
  pageContent: RestaurantContent;
}

const Restaurant = ({ pageContent }: RestaurantProps) => {
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
        <img
          className="logo"
          src="/images/ElBrillianteNightStraight2000.jpg"
          alt="lit up yellow corner restaurant at night"
        />
        <p>{service1}</p>
        <p>{service2}</p>
        <p className="address">159 Graham Ave</p>
        <p>Brooklyn, NY 11206</p>
      </section>
      <style jsx>{`
        p {
          font-size: 1rem;
        }
        .address {
          font-size: 1rem;
          margin-top: 2rem;
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
          height: auto;
          width: 550px;
          margin-bottom: 2rem;
          max-width: 100vw;
          object-fit: contain;
          transition: opacity ease-in-out 350ms, border ease-in-out 350ms;
        }
        .logo:hover {
          opacity: 0.7;
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
  return {
    props: {
      pageContent,
    },
  };
}
