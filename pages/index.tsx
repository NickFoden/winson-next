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
        <p style={{ marginBottom: "1rem", lineHeight: 1.2 }}>{children}</p>
      ),
    },
  };
  return (
    <Body>
      {documentToReactComponents(body1, options)}
      <div className="row">
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
        </div>
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
        </div>
      </div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .logo {
          height: 75px;
          object-fit: cover;
          width: 75px;
        }
        .restaurant_links {
          color: black;
          font-size: 1.25rem;
        }
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: 4rem auto;
          min-width: 300px;
          max-width: 90vw;
        }
        @media only screen and (min-width: 900px) {
          .logo {
            height: 200px;
            object-fit: cover;
            width: 200px;
          }
          .row {
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
