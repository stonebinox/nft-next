import React from "react";

import { Navbar } from "@/components/navbar";
import { PageTitle } from "@/components/page-title";
// import { NFTList } from "@/components/nft-list"; // we don't need this
import { Footer } from "@/components/footer";
import { NFTForm } from "@/components/nft-form";
import styles from "@/app/page.module.css";
import { Main } from "@/app/page.styles";
import { useModalContext } from "@/helpers/modal-context";

export const HomePage = () => {
  const { modalVisibility } = useModalContext();

  return (
    <Main className={styles.main} isinactive={`${modalVisibility}`}>
      <Navbar />
      <PageTitle
        title="Mint New NFT"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas."
      />
      <NFTForm />
      <Footer buttonDisplay={true} />
    </Main>
  );
};
