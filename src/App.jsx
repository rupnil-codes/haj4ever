import "./App.css";

export default function App() {
  return (
    <div className="app">
      <img src="/flag.png" alt="" className="flag" />

      <main className="hero">
        <div className="title-wrap">
          <div className="new-drop">{`{NEW DROP!!!}`}</div>

          <h1 className="site-name">
            HACK CLUB HAJ4EVER
          </h1>
        </div>

        <p className="tagline">
          ship anything shark/ocean related get a blahaj/smolhaj!
        </p>

        <a
          className="btn-submit"
          href="https://haj4ever.fillout.com/submit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/submit.png" alt="submit" />
        </a>

        <section className="cards">
          <div className="card card-blahaj">
            <img src="/blahaj.png" alt="blahaj" />
          </div>

          <div className="card card-meme">
            <img src="/meme.png" alt="meme" />
          </div>
        </section>
      </main>
    </div>
  );
}