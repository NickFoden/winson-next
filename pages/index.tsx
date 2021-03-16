import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { client } from "../src/utils/contentful";
import Body from "../src/components/Body";

const Home = ({ pageContent }) => {
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
  return <Body>{documentToReactComponents(body1, options)}</Body>;
};

export default Home;

export async function getStaticProps(context) {
  const pageContent = await client.getEntry("2Wl0LiwXi1zKj8isybwT6D");
  return {
    props: {
      pageContent,
    },
  };
}
