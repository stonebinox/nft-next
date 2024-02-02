"use client";

import styled from "styled-components";

import styles from "./page.module.css";
import { Navbar } from "@/components/navbar";
import { PageTitle } from "@/components/page-title";
// import { NFTList } from "@/components/nft-list"; // we don't need this
import { Footer } from "@/components/footer";
import { Main } from "./page.styles";
import { NFTForm } from "@/components/nft-form";

export default function Home() {
  return (
    <Main className={styles.main}>
      <Navbar />
      <PageTitle
        title="Mint New NFT"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas. "
      />
      <NFTForm />
      <Footer />
    </Main>
  );
}
