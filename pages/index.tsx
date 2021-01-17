import { client } from "../src/utils/contentful";
import Body from "../src/components/Body";

const Home = ({ pageContent }) => {
  return (
    <Body>
      <main></main>

      <footer>Win Son Brooklyn</footer>
      <style jsx>{`
        footer {
          display: flex;
          font-family: "Courier New", Courier, monospace;
          justify-content: center;
          width: 100vw;
        }
        main {
          min-height: 90vh;
        }
      `}</style>
    </Body>
  );
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
