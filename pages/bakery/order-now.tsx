import React from "react";
import Body from "../../src/components/Body";
import { client } from "../../src/utils/contentful";

const OrderNow = ({ bakeryContent }) => {
  const { fields } = bakeryContent;
  const { deliveryUrl, pickupUrl } = fields;
  return (
    <Body>
      <p>
        walk up, online pick up orders and delivery options are available at
        both restaurants, so please check out the links below. remember to keep
        a safe distance from other folks while waiting outside and thank you for
        your support!
      </p>
      <div className="row_links">
        <a
          href={pickupUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Restaurant pick up`}
          className="delivery_link"
        >
          take-out
        </a>
        <a
          href={deliveryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Restaurant Delivery`}
          className="delivery_link"
        >
          delivery
        </a>
      </div>
      <style jsx>{`
        a {
          font-size: 2rem;
          cursor: pointer;
          color: black;
        }
        a:hover {
          opacity: 0.7;
        }
        p {
          font-size: 1.5rem;
          line-height: 1.1;
          margin-top: 2rem;
          text-align: justify;
        }
        .logo {
          width: 200px;
        }
        .row_links {
          display: flex;
          justify-content: space-between;
          margin: 2rem auto 0;
          width: 400px;
        }
        @media only screen and (max-width: 450px) {
          p {
            font-size: 1.2rem;
          }
          .row_links {
            align-items: center;
            display: flex;
            flex-direction: column;
            margin: 2rem auto 0;
            height: 100px;
            max-width: 90vw;
          }
        }
      `}</style>
    </Body>
  );
};

export default OrderNow;

export async function getStaticProps(context) {
  const bakeryContent = await client.getEntry("6FrvEE0piUY6cWhSwzTBrP");

  return {
    props: {
      bakeryContent,
    },
  };
}
