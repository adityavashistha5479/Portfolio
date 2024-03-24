import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import Spotify from "../../Assets/Projects/Spotify.jpg";
import food_order from "../../Assets/Projects/food-order-app.png";
import Blog_Post from "../../Assets/Projects/Blog-post.jpg";
import CryptoBuddy from "../../Assets/Projects/CryptoBuddy.png";

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
              imgPath={food_order}
              isBlog={false}
              title="Food Corner"
              description="A fully functional front end Angular based app to order food online. Some features included in the app are searching option based on names, tags and ratings out of 5 stars, add to card functionality and checkout option."
              ghLink="https://github.com/adityavashistha5479/Food-Order-Application"
              demoLink="https://foodorder5479.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CryptoBuddy}
              isBlog={false}
              title="Crypto Buddy"
              description="A beautiful and elegant cryptocurrency website application which can be used to see live cryptocurrency prices of top 100 cryptos. Also included is the details page with live graph of the crypto selected with filters of timeframes"
              ghLink="https://github.com/adityavashistha5479/CryptoBuddy.github.io"
              demoLink="https://cryptobuddy5479.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify Clone"
              description="Spotify clone app made using Vanilla Javascript, HTML and CSS with full funtional music player and spotify like user interface."
              ghLink="https://github.com/adityavashistha5479/Spotify-Clone"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog_Post}
              isBlog={false}
              title="Blog Post"
              description="A full stack Python and Django based website application where one can write their own blogs, add pictures to it and see others' blogs. Inspired from Reddit."
              ghLink="https://github.com/adityavashistha5479/BLOG-POST-WEBSITE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E Commerce App"
              description="An ecommerce web app made using Angular 13 with CRUD operations and made using JSON Server with a user friendly interface."
              ghLink="https://github.com/adityavashistha5479/E-Commerse"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
