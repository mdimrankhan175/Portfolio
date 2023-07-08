import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Somesh Basak </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I completed my graduation in Bachelor of Commerce (Accountancy-H) in 2021 from Maharaja Bir Bikram University.
            <br />
            Additionally, I am a Full-Stack Software Developer Trainee at NxtWave.
            <br/>
            I also done two months internship of Web Development at Solar Secure Solutions in which i worked in 10 minor projects 
            and 1 major project where i built a Food Delivery Website using HTML, CSS, Bootstarap, React js, Node js, Mysql. 
            Also implemented the CRUD operations and the Paypal Payment Gateway Session.
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
          <footer className="blockquote-footer">Somesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;