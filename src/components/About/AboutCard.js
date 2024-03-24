import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Vashistha </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently employed as a Software Engineer at TCS.
            <br />
            I have completed my BTECH from Maharaja Agrasen Institute of Technology(GGSIPU), Delhi, India
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Day Trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Online Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya Vashistha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
