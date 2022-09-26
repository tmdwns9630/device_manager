import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Counter from "../components/Counter";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className="">Hello World</div>
      <Counter title={[1, 2, 3, 4, 5]} subtitle="타입스크립트" />
    </>
  );
};

export default Home;
