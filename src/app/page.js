"use client";

import styled from "styled-components";

import styles from "./page.module.css";
import { Navbar } from "@/components/navbar";
import { PageTitle } from "@/components/page-title";
import { NFTList } from "@/components/nft-list";
import { Footer } from "@/components/footer";

const Main = styled.main`
  background: url(/assets/bg.png) no-repeat center;
  background-size: cover;
`;

export default function Home() {
  return (
    <Main className={styles.main}>
      <Navbar />
      <PageTitle title="Listing Owned NFTs" />
      <NFTList />
      <Footer />
    </Main>
  );
}
