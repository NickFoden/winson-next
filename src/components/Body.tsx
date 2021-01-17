import Head from "next/head";
import HeaderNav from "./HeaderNav";

const Body = ({ children }) => (
  <>
    <Head>
      <title>Win Son</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Win Son" key="title" name="title" />
      <meta
        name="description"
        content="Winson - taiwanese american restaurant and bakery in Brooklyn New York City"
      />
      <meta property="og:image" content="/winson-bear.jpg" />
      <meta property="og:url" content="https://winsonbrooklyn.com/" />
    </Head>
    <HeaderNav />
    <main className="container">{children}</main>
    <footer>
      <p>Win Son Brooklyn</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
    <style jsx>
      {`
        footer {
          display: flex;
          flex-direction: column;
          font-family: "Courier New", Courier, monospace;
          align-items: center;
          width: 100vw;
        }
        .container {
          margin: 0 auto;
          max-width: 700px;
          min-height: 90vh;
          padding: 1rem;
        }
      `}
    </style>
  </>
);

export default Body;
