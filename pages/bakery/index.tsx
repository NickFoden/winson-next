import React from "react";
import { bakeryClient, client } from "../../src/utils/contentful";
import Body from "../../src/components/Body";
import { RestaurantContent } from "../../types/restaurant";

interface RestaurantProps {
  pageContent: RestaurantContent;
}

const Bakery = ({ pageContent }: RestaurantProps) => {
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
          src="/images/Winson_people_2_crop.png"
          alt={name}
        />
        <p>{service1}</p>
        <p>{service2}</p>
        <a href="mailto:bakery@winsonbrooklyn.com">bakery@winsonbrooklyn.com</a>
        <p className="address">164 Graham Ave</p>
        <p>Brooklyn, NY 11206</p>
      </section>
      <style jsx>{`
        a {
          color: black;
          font-size: 1rem;
          margin-top: 2rem;
        }
        a:hover {
          opacity: 0.7;
        }
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
          width: 90vw;
          object-fit: contain;
          transition: opacity ease-in-out 350ms, border ease-in-out 350ms;
          margin: 2rem 0;
        }
        .logo:hover {
          opacity: 0.7;
        }
        .title {
          font-family: Courier;
        }
        @media screen and (max-width: 800px) {
          a {
            font-size: 0.75rem;
            padding: 0.2rem 0;
          }
        }
      `}</style>
    </Body>
  );
};

export default Bakery;

export async function getStaticProps(context) {
  const pageContent = await client.getEntry("6FrvEE0piUY6cWhSwzTBrP");

  return {
    props: {
      pageContent,
    },
  };
}
