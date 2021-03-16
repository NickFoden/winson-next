import Head from "next/head";
import HeaderNav from "./HeaderNav";

const Body = ({ children }) => {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <>
      <Head>
        <title>Win Son</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Win Son" key="title" name="title" />
        <meta
          name="description"
          content="taiwanese-american restaurant and bakery"
        />
        <meta property="og:image" content="/winson-bear.jpg" />
        <meta property="og:url" content="https://winsonbrooklyn.com/" />
        {!isDev && (
          <script
            defer
            type="text/javascript"
            src="https://brighter-metrics.netlify.app/basic.js"
          >
            // @ts-expect-error
            {typeof window !== "undefined" &&
              (function (k, v) {
                // @ts-expect-error
                if (!window.brighter) {
                  // @ts-expect-error
                  window.brighter = { [k]: v };
                }
              })("pid", "wsb")}
          </script>
        )}
      </Head>
      <HeaderNav />
      <main className="container">{children}</main>
      <footer>
        <p>win son brooklyn</p>
        {/* <a href="mailto:info@winsonbrooklyn.com">info@winsonbrooklyn.com </a> */}
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
            max-width: 750px;
            min-height: 90vh;
            padding: 1rem;
          }
          a {
            color: black;
          }
          a:hover {
            opacity: 0.7;
          }
          @media screen and (max-width: 800px) {
            a {
              font-size: 0.75rem;
              padding: 0.2rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Body;
