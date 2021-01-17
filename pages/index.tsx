import Body from "../src/components/Body";

const Home = () => {
  return (
    <Body>
      <main>
        <h1>Win Son Brooklyn</h1>
      </main>

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
