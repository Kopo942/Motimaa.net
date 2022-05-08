import Navbar from "client/components/Navbar/Navbar";
import styles from "client/styles/Home.module.css";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
