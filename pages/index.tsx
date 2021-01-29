import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import { client } from "../src/utils/contentful";
import Body from "../src/components/Body";

const Home = ({ bakeryContent, pageContent, restaurantContent }) => {
  const { fields: bakeryFields } = bakeryContent;
  const { fields: restaurantFields } = restaurantContent;
  const { fields = {} } = pageContent;
  const { body1 } = fields;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p
          style={{
            marginBottom: "1rem",
            lineHeight: 1.2,
            textAlign: "justify",
          }}
        >
          {children}
        </p>
      ),
    },
  };
  return (
    <Body>
      {documentToReactComponents(body1, options)}
      <div className="container">
        <div className="column">
          <Link href="/bakery">
            <img
              src={`https:${bakeryFields.logo.fields.file.url}`}
              className="logo"
              alt="winson bakery banner"
            />
          </Link>
          <Link href="/bakery">
            <a className="restaurant_links">Bakery</a>
          </Link>
          <p className="address">164 Graham Ave, 11206</p>
          <p className="service">{bakeryFields.service1}</p>
          <p className="service">{bakeryFields.service2}</p>
        </div>
        <div className="column">
          <Link href="/restaurant">
            <img
              src={`https:${restaurantFields.logo.fields.file.url}`}
              className="logo"
              alt="winson bear"
            />
          </Link>
          <Link href="/restaurant">
            <a className="restaurant_links">Restaurant</a>
          </Link>
          <p className="address">159 Graham Ave, 11206</p>
          <p className="service">{restaurantFields.service1}</p>
          <p className="service">{restaurantFields.service2}</p>
        </div>
      </div>
      <style jsx>{`
        .address {
          font-size: 1.1rem;
          margin: 1rem 0;
        }
        .column {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container {
          display: grid;
          grid-template-columns: 1fr
          margin: 4rem auto;
          min-width: 300px;
          max-width: 90vw;
        }
        .logo {
          cursor: pointer;
          height: 150px;
          object-fit: cover;
          width: 150px;
        }
        .restaurant_links {
          color: black;
          font-size: 1.25rem;
        }
        .restaurant_links:hover {
          opacity: 0.7;
        }
        .service {
          font-size: 0.7rem;
          margin-bottom: 0.4rem;
        }
        @media only screen and (min-width: 450px) {
          .service {
            font-size: 1rem;
          }
        }
        @media only screen and (min-width: 650px) {
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: 4rem auto;
            min-width: 300px;
            max-width: 90vw;
          }
          .service {
            font-size: 0.7rem;
          }
        }
        @media only screen and (min-width: 900px) {
          .logo {
            height: 200px;
            object-fit: cover;
            width: 200px;
          }
          .container {
            width: 700px;
          }
        }
      `}</style>
    </Body>
  );
};

export default Home;

export async function getStaticProps(context) {
  const pageContent = await client.getEntry("2Wl0LiwXi1zKj8isybwT6D");
  const bakeryContent = await client.getEntry("6FrvEE0piUY6cWhSwzTBrP");
  const restaurantContent = await client.getEntry("3xE7ccbNmslBqWxYlZvHj3");
  return {
    props: {
      bakeryContent,
      pageContent,
      restaurantContent,
    },
  };
}
