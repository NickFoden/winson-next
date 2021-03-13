import { client } from "../src/utils/contentful";
import LandingPage from "./index";

const ErrorPage = ({ bakeryContent, pageContent, restaurantContent }) => (
  <LandingPage
    bakeryContent={bakeryContent}
    pageContent={pageContent}
    restaurantContent={restaurantContent}
  />
);

export default ErrorPage;

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
