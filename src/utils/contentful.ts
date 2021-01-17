import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const bakeryClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_BAKERY_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_BAKERY_ACCESS_TOKEN,
});
