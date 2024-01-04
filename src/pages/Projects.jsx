import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpg"
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Herobe"

              description="HeroBee's award-winning smart beehive solution, recognized with the second prize in the international Orange Summer Competition, seamlessly integrates advanced technologies like AI and IoT into its MERN stack architecture. Beyond its technological prowess, HeroBee also thrives as a collaborative venture, with dedicated contributions from business professionals ensuring its viability and a design team enhancing user experiences. This multifaceted success underscores HeroBee's commitment to the intersection of innovation, sustainability, and collaborative excellence in the evolving landscape of beekeeping."
              ghLink="https://github.com/zogh1/projetOSC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="InterDonation"
              description="InterDonation streamlines the donation process with an easy-to-use interface for all users. It allows charities to create personalized donation forms, supports various payment methods, and provides a reporting dashboard for tracking donations and donor behavior. Prioritizing security and privacy, InterDonation ensures a trustworthy platform. With low transaction fees and flexible pricing, the app promotes accessibility for charities of all sizes, fostering a wider reach and impactful online fundraising."
              ghLink="https://github.com/zogh1/doonation-pltafrom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="HerobeeVetrine"
              description="HerobeeVetrine.js is a powerful JavaScript library designed to seamlessly integrate with HeroBee, enhancing the visualization and presentation of hive-related data. This lightweight and versatile library offers dynamic and interactive features, allowing users to showcase vital information in a visually appealing manner."
              ghLink="https://github.com/zogh1/HerobeeVetrine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="JavaCalometre"
              description="JavaCalometre is a robust Java-based application tailored to support individuals in their fitness journey, providing a comprehensive solution for tracking and optimizing workouts. This dynamic application seamlessly integrates with sport and gym activities, offering features designed to enhance the overall fitness experience."
              ghLink="https://github.com/zogh1/CalometreJava"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project DevOps"
              description="Our DevOps CI/CD (Continuous Integration/Continuous Deployment) project is a robust and streamlined solution designed to enhance the software development lifecycle by automating key processes. This comprehensive DevOps framework facilitates collaboration between development and operations teams, ensuring faster delivery, improved quality, and increased efficiency in the software development process."
              ghLink="https://github.com/zogh1/DEVOPS-ski"
            
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  )
}

export default Projects