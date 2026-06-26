import "./App.css";

export default function App() {
  return (
    <div className="app">
      <section className="section section1">
        <a
            href="https://hackclub.com/"
            target="_blank"
            rel="noreferrer"
        >
          <img
              src="https://cdn.hackclub.com/019efadb-bc72-7214-b372-7fd576af7b97/hack_club_flag.svg"
              alt="Hack Club Flag"
              className="flag pop"
          />
        </a>

        <h1 className="mainTitle popSmall">HACK CLUB HAJ4EVER</h1>

        <div className="topInfo">
          <img
            src="https://cdn.hackclub.com/019efadb-bfe6-76e9-b50d-33cc982b12d3/me_when_u.svg"
            alt="me when u"
            className="meWhenU popSmall"
          />

          <div className="heroContent">
            <p className="introText popTurn">
              Code for 4, 6, 10 or more hours-
              <br />
              get smolhaj/blahaj/both! shipped to you!
            </p>

            <div className="submitRow">
              <a
                href="https://hack.club/haj4ever-submission"
                target="_blank"
                rel="noreferrer"
                className="submitButton"
              >
                <img src="https://cdn.hackclub.com/019efadb-c8ca-7ba1-be92-382311255995/submit.svg" alt="Submit" />
              </a>

              <div className="questionBlock">
                <p className="questionText popTurn">
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
                  src="https://cdn.hackclub.com/019efadb-c5d5-7700-956a-b89b8e82b05d/shark_dance.gif"
                  alt="dancing shark"
                  className="danceShark pop"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cardsRow">
          <img
            src="https://cdn.hackclub.com/019efadb-69f3-7511-be3f-73552eacf173/blahaj_table.svg"
            alt=""
            className="card card1 pop"
          />

          <img
            src="https://cdn.hackclub.com/019efadb-530c-7bb8-9373-21c4beb0ea33/a_wild_blahaj.svg"
            alt=""
            className="card card2 pop"
          />

          <img
            src="https://cdn.hackclub.com/019efadb-cbca-7516-b50c-3f9f8de5784e/guys_i_think_i_like_sharks.svg"
            alt=""
            className="card card3 pop"
          />

          <img
            src="https://cdn.hackclub.com/019efadb-c2b7-7019-8ddb-eddc27b3a0d0/my_honest_reaction_to_this_ysws.svg"
            alt=""
            className="card card4 pop"
          />

          <img
            src="https://cdn.hackclub.com/019efadb-6cda-74ea-93b0-805117f58aae/blahaj_underwater.svg"
            alt=""
            className="card card5 pop"
          />
        </div>
      </section>

      <section className="section section2">
        <div className="stepsContainer">
          <div className="step">
            <img
              src="https://cdn.hackclub.com/019efadb-676b-7af0-80e5-e0bf5e64ed35/blahaj_spinning.gif"
              alt=""
              className="spinShark shark1 popLarge"
            />

            <p className="popTurn">
              1. Make any
              <br />
              project for 4, 6,
              <br />
              10 or more hours.
            </p>
          </div>

          <div className="step">
            <img
              src="https://cdn.hackclub.com/019efadb-676b-7af0-80e5-e0bf5e64ed35/blahaj_spinning.gif"
              alt=""
              className="spinShark shark2 popLarge"
            />

            <p className="popTurn">
              2. Hackatime track
              <br />
              the hours
            </p>
          </div>

          <div className="step">
            <img
              src="https://cdn.hackclub.com/019efadb-676b-7af0-80e5-e0bf5e64ed35/blahaj_spinning.gif"
              alt=""
              className="spinShark shark3 popLarge"
            />

            <p className="popTurn">
              3. Submit the
              <br />
              hours to
              <br />
              Haj4ever
            </p>
          </div>

          <div className="step">
            <img
              src="https://cdn.hackclub.com/019efadb-676b-7af0-80e5-e0bf5e64ed35/blahaj_spinning.gif"
              alt=""
              className="spinShark shark4 popLarge"
            />

            <p className="popTurn">
              4. Get a blahaj
              <br />
              shipped to your
              <br />
              house!!
            </p>
          </div>
        </div>

        <div className="bonusText popSmall">
          Code 4 hours for smolhaj OR 6 hours for blahaj
          OR 10 hours for both! if you do above 10 you'll get a cool secret prize
        </div>
      </section>

      <section className="section section3">
        <h2 className="footerTitle popSmall">HAJ4EVER</h2>

        <div className="creditText popTurn">
          made with &lt;3 by Rupnil &amp; Flux3tor
        </div>

        <div className="footerImages">
          <img
              className={"popSmall"}
              src="https://cdn.hackclub.com/019efadb-6f92-79c3-9841-5126ec410a89/blahaj_with_headphones.svg"
              alt=""
          />

          <img
              className={"popSmall"}
              src="https://cdn.hackclub.com/019efe3c-6829-7748-ba77-b8655afff58e/blahaj_cluster.jpg"
              alt=""
          />

          <img
              className={"popSmall"}
              src="https://cdn.hackclub.com/019efadb-5ee5-77fb-98ae-8ad68114f0fb/blahaj_campfire.png"
              alt=""
          />
        </div>
        <div className="creditText popTurn">
          made possible by Jenin &amp; Dhamari
        </div>
      </section>
    </div>
  );
}
