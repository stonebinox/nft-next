"use client";

import styled from "styled-components";

import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/navbar";

const Main = styled.main`
  background: url(/assets/bg.png) no-repeat center;
  background-size: cover;
`;

export default function Home() {
  return (
    <Main className={styles.main}>
      <Navbar />
    </Main>
  );
}
