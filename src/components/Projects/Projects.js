import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviesApp from "../../Assets/Projects/MoviesApp.png";
import shoppingApp from "../../Assets/Projects/Nxttrendz_ShoppingWebsite.png";
import youtubeApp from "../../Assets/Projects/NxtWatch_YoutubeClone.png";
import bmiApp from "../../Assets/Projects/BmiCalculator.png";
import jobbyApp from "../../Assets/Projects/JobbyApp.png";
import passwordmanagerApp from "../../Assets/Projects/PasswordManager.png"
import matchgameApp from "../../Assets/Projects/MatchGameApp.png";
import moneymanagerApp from "../../Assets/Projects/MoneyManagerApp.png";
import memegeneratorApp from "../../Assets/Projects/MemeGeneratorApp.png";
import todoApp from "../../Assets/Projects/TodosApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtubeApp}
              isBlog={false}
              title="Videos App"
              description="Developed a responsive Youtube Clone website where users have to first login and
              can see a list of trending videos, gaming videos etc and also can play, like, dislike and
              can save videos. Search Bar is also provided where users can search videos and also
              has two types of background themes black and white. 
              Username: rahul/Password: rahul@2021"
              ghLink="https://github.com/SomeshBasak/NXTWATCH-Youtube-Clone-ReactJS"
              demoLink="https://someshnxtwatch.ccbp.tech/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviesApp}
              isBlog={false}
              title="Movies App"
              description="Developed a Movies App like Amazon Prime by React js. Firstly we have to login by 
              username and password then there will be a homepage where there are number of movies according to 
              there categories. I used the bootstrap inbuilt class like carousel. By clicking the individual movies 
              we can see the genres, audio available, rating count, rating average, budget, release date and the recommended 
              movies also. 
              Username: rahul / Password: rahul@2021"
              ghLink="https://github.com/SomeshBasak/Movies-App"
              demoLink="https://someshmoviesapp.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingApp}
              isBlog={false}
              title="Shopping App"
              description="Developed a shopping website in which we have to login by username and password
              and for authentication used the jwt-token. In the homepage there are three types of
              protected routes(Home, Product and Cart) so that no unauthenticated users can login.
              In the Product page there are many products in which we can search for the individual
              products in the search bar, categorize the products, sort and filter the products
              according to the prices and ratings, we can also add and remove the products from
              the cart. There is also an option of logut by removing the jwt token. 
              Username:rahul / Password: rahul@2021"
              ghLink="https://github.com/SomeshBasak/Nxt-Trendz-Shopping-Website"
              demoLink="https://someshnxttrendz.ccbp.tech/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmiApp}
              isBlog={false}
              title="BMI Calculator App"
              description="Developed a calculator with the help of React js. in which we can measure our Body Mass Index by Height and Weight."
              ghLink="https://github.com/SomeshBasak/BMI-Calculator-React-Hook"
              demoLink="https://someshbmicalctr.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobbyApp}
              isBlog={false}
              title="Jobby App"
              description="Developed a job app with the help of React js. in which we can search jobs according to our qualification and skills. 
              Firstly we have to login by username and password then there will be a homepage where there is job option in which we can search jobs, 
              filter by types of employment and salary ranges. By clicking individual jobs we can see the description, skills, life at company and similar jobs. 
              Username:rahul / Password: rahul@2021"
              ghLink="https://github.com/SomeshBasak/Jobby-App-React-JS"
              demoLink="https://someshjobbyapp.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordmanagerApp}
              isBlog={false}
              title="Password Manager App"
              description="Developed a password manager app with the help of React js. in which we can save any website url username and password and the password is 
              also be encrypted by stars. We can also search the particular website password through many. There is also a option to see the encrypted password and also can be deleted."
              ghLink="https://github.com/SomeshBasak/Password-Manager-React-JS"
              demoLink="https://someshpaswrdmgr.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matchgameApp}
              isBlog={false}
              title="Match Game App"
              description="Developed a match game app with the help of React js. in which there will be 1 min countdown and we have to match all the pictures which will be shown in the screen."
              ghLink="https://github.com/SomeshBasak/Match-Game-React-JS"
              demoLink="https://someshmatchgame.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moneymanagerApp}
              isBlog={false}
              title="Money Manager App"
              description="Developed a money manager app with the help of React js. in which we can notedown all the transcation of a business or individual whether it is income or expense. There is also an option of deleting the transaction."
              ghLink="https://github.com/SomeshBasak/Money-Manager-React-js"
              demoLink="https://someshmoneymger.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memegeneratorApp}
              isBlog={false}
              title="Meme Generator App"
              description="Developed a meme generator app with the help of React js. in which we can put a image url, top heading, bottom heading and the font size. After putting all the details we have to click the Generate button and a meme will be created."
              ghLink="https://github.com/SomeshBasak/Meme-Generator-ReactJS"
              demoLink="https://someshmemegnrtr.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="Todos App"
              description="Made a simple todos app where we can create todo, complete todo by putting tick and delete the todos. There is also an another option which is we can save todos in our local storage."
              ghLink="https://github.com/SomeshBasak"
              demoLink="https://someshtodo.ccbp.tech"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;