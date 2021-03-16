import { client } from "../src/utils/contentful";
import LandingPage from "./index";

const ErrorPage = ({ pageContent }) => (
  <LandingPage pageContent={pageContent} />
);

export default ErrorPage;

export async function getStaticProps(context) {
  const pageContent = await client.getEntry("2Wl0LiwXi1zKj8isybwT6D");

  return {
    props: {
      pageContent,
    },
  };
}
