import "./App.css";

export default function App() {
  return (
    <div className="app">
      <section className="section section1">
        <img
          src="/hack_club_flag.svg"
          alt="Hack Club Flag"
          className="flag"
        />

        <h1 className="mainTitle">HACK CLUB HAJ4EVER</h1>

        <div className="topInfo">
          <img
            src="/me_when_u.svg"
            alt="me when u"
            className="meWhenU"
          />

          <div className="heroContent">
            <p className="introText">
              Code 6, 8, or 10 Hours or more-
              <br />
              get blahaj/smolhaj/both! shipped to you!
            </p>

            <div className="submitRow">
              <a
                href="https://hack.club/haj4ever-submission"
                target="_blank"
                rel="noreferrer"
                className="submitButton"
              >
                <img src="/submit.svg" alt="Submit" />
              </a>

              <div className="questionBlock">
                <p className="questionText">
                  Questions? <br/> Join:{" "}
                  <a
                    href="https://hackclub.enterprise.slack.com/archives/C0ATRK4G5NY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hajTag"
                  >
                    #haj4ever
                  </a>
                </p>

                <img
                  src="/shark_dance.gif"
                  alt="dancing shark"
                  className="danceShark"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cardsRow">
          <img
            src="/blahaj_table.svg"
            alt=""
            className="card card1"
          />

          <img
            src="/a_wild_blahaj.svg"
            alt=""
            className="card card2"
          />

          <img
            src="/guys_i_think_i_like_sharks.svg"
            alt=""
            className="card card3"
          />

          <img
            src="/my_honest_reaction_to_this_ysws.svg"
            alt=""
            className="card card4"
          />

          <img
            src="/blahaj_underwater.svg"
            alt=""
            className="card card5"
          />
        </div>
      </section>

      <section className="section section2">
        <div className="stepsContainer">
          <div className="step">
            <img
              src="/blahaj_spinning.gif"
              alt=""
              className="spinShark shark1"
            />

            <p>
              1. Make any
              <br />
              project for 4, 6,
              <br />
              10 or more hours.
            </p>
          </div>

          <div className="step">
            <img
              src="/blahaj_spinning.gif"
              alt=""
              className="spinShark shark2"
            />

            <p>
              2. Hackatime track
              <br />
              the hours
            </p>
          </div>

          <div className="step">
            <img
              src="/blahaj_spinning.gif"
              alt=""
              className="spinShark shark3"
            />

            <p>
              3. Submit the
              <br />
              hours to
              <br />
              Haj4ever
            </p>
          </div>

          <div className="step">
            <img
              src="/blahaj_spinning.gif"
              alt=""
              className="spinShark shark4"
            />

            <p>
              4. Get a blahaj
              <br />
              shipped to your
              <br />
              house!!
            </p>
          </div>
        </div>

        <div className="bonusText">
          Code 4 hours for smolhaj OR 6 hours for blahaj
          OR 10 hours for both! if you do above 10 you'll get a cool secret prize
        </div>
      </section>

      <section className="section section3">
        <h2 className="footerTitle">HAJ4EVER</h2>

        <div className="creditText">
          made with &lt;3 by Rupnil &amp; Flux3tor
        </div>

        <div className="footerImages">
          <img
            src="/blahaj_with_headphones.svg"
            alt=""
          />

          <img
            src="/blahaj_cluster.svg"
            alt=""
          />

          <img
            src="/blahaj_campfire.png"
            alt=""
          />
        </div>
        <div className="creditText">
          made possible by Jenin &amp; Dhamari
        </div>
      </section>
    </div>
  );
}