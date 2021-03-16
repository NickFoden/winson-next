import React from "react";
import Link from "next/link";
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
        <p className="intro_p">
          we are now taking reservations for outdoor table service. reservations
          are for parties of 5 - 7 guests in our covered, heated outdoor dining
          space. all other parties will be sat on a walk up basis.
        </p>
        <p className="intro_p">
          we are not seating any indoor guests at this time. any further
          questions about our current offerings can be sent to
          reservations@winsonbrooklyn.com.
        </p>
        <p className="intro_p">
          our health and safety measures are listed{" "}
          <Link href="/">
            <a>here</a>
          </Link>
          .
        </p>
        <img
          className="logo"
          src="/images/ElBrillianteNightStraight2000.jpg"
          alt="lit up yellow corner restaurant at night"
        />
        <p>{service1}</p>
        <p>{service2}</p>
        <a href="mailto:info@winsonbrooklyn.com">info@winsonbrooklyn.com</a>
        <p className="address">159 Graham Ave</p>
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
          line-height: 1.1;
          text-transform: lowercase;
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
        .intro_p {
          margin-bottom: 0.5rem;
          max-width: 90vw;
          width: 750px;
        }
        .logo {
          border: 1px solid white;
          border-radius: 5px;
          height: auto;
          width: 750px;
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

export default Restaurant;

export async function getStaticProps(context) {
  const pageContent = await client.getEntry("3xE7ccbNmslBqWxYlZvHj3");
  return {
    props: {
      pageContent,
    },
  };
}
