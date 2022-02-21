import type {NextPage} from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import {Col, Container, Row} from "react-bootstrap";

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
