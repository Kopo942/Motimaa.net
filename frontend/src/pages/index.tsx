import Navbar from "client/components/Navbar/Navbar";
import styles from "client/styles/Home.module.css";
import type { NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container fluid="md">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
