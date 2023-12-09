import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MOHAMMAD IMRAN KHAN </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I completed my Masters in Computer Applications in 2011 from Aurora PG College, Hyderabad.
            <br />
            I am a Full-Stack Software Developer Trainee at NxtWave.
            <br/>
            I done my Mini Project BOOK HUB using React JS
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Consistency and patience are the building blocks of software development success."{" "}
          </p>
          <footer className="blockquote-footer">IMRAN KHAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;