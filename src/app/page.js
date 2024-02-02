"use client";

import styled from "styled-components";

import styles from "./page.module.css";
import { Navbar } from "@/components/navbar";
import { PageTitle } from "@/components/page-title";
import { NFTList } from "@/components/nft-list";
import { Footer } from "@/components/footer";
import { Main } from "./page.styles";

export default function Home() {
  return (
    <Main className={styles.main}>
      <Navbar />
      <PageTitle
        title="Mint New NFT"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas. "
      />
      <NFTList />
      <Footer />
    </Main>
  );
}
