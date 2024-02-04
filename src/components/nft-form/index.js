import React, { useState } from "react";
import Image from "next/image";

import {
  AlertText,
  ButtonGroup,
  ErrorContainer,
  FileSelector,
  FileSelectorSubtext,
  FileSelectorTitle,
  FormContainer,
  HiddenFileSelector,
  InputField,
  SuccessContainer,
  TextareaField,
} from "./index.styles";
import { Button } from "@/app/page.styles";
import { useModalContext } from "@/helpers/modal-context";
import { Modal } from "../modal";
import { uploadImage, uploadMetadata } from "@/helpers/api";

export const NFTForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [nftTitle, setNftTitle] = useState("");
  const [nftDesc, setNftDesc] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [mint, setMint] = useState(true);
  const { showModal, hideModal, modalVisibility } = useModalContext();

  const fileClick = () => {
    document.getElementById("fileselector").click();
  };

  const fileSelect = (e) => {
    setSelectedFile(e.currentTarget.files[0]);
  };

  const submitForm = (e, mint = true) => {
    e.preventDefault();

    setSuccess("");
    setMint(mint);

    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    if (!nftTitle || nftTitle.trim() === "") {
      setError("Enter a valid title");
      return;
    }

    if (!nftDesc || nftDesc.trim() === "") {
      setError("Enter a valid description");
      return;
    }

    setError("");

    showModal();
  };

  const modalButtonClick = async (e) => {
    e?.preventDefault();
    // we'd attempt posting the item here
    try {
      setError("");

      const formdata = new FormData();
      formdata.append("file", selectedFile);
      const metadata = JSON.stringify({
        name: nftTitle,
      });
      formdata.append("pinataMetadata", metadata);

      const response = await uploadImage(formdata);

      const data = await response.json();
      const { IpfsHash } = data;
      const imageUrl = `ipfs://${IpfsHash}`;

      processMetadata(imageUrl);
    } catch (e) {
      setError("Something went wrong. Try again later.");
      hideModal();
      console.log(e);
    }
  };

  const processMetadata = async (imageUrl) => {
    try {
      const data = JSON.stringify({
        pinataContent: {
          name: nftTitle,
          description: nftDesc,
          external_url: "https://pinata.cloud",
          image: imageUrl,
        },
        pinataMetadata: {
          name: `${nftTitle}.json`,
        },
      });

      const response = await uploadMetadata(data);

      const parsedData = await response.json();
      const { IpfsHash } = parsedData;

      setSuccess(`Created CID:\n${IpfsHash}`);
      setNftDesc("");
      setNftTitle("");
      hideModal();
      document.nftupload.reset();
      setSelectedFile(null);

      if (mint) {
        // we'd mint the NFT from here
      }
    } catch (e) {
      console.log(e);
      setError("Something went wrong. Try again later.");
      hideModal();
    }
  };

  return (
    <>
      <FormContainer name="nftupload">
        {error !== "" && (
          <ErrorContainer>
            <AlertText>{error}</AlertText>
          </ErrorContainer>
        )}
        {success !== "" && (
          <SuccessContainer>
            <AlertText>{success}</AlertText>
          </SuccessContainer>
        )}
        <FileSelector onClick={fileClick}>
          <FileSelectorTitle>
            <Image
              src="/assets/upload-icon.svg"
              alt="Upload"
              width="16"
              height="16"
            />{" "}
            {!selectedFile ? "Upload Image" : "Image selected"}
          </FileSelectorTitle>
          <FileSelectorSubtext>format supported</FileSelectorSubtext>
        </FileSelector>
        <InputField
          type="text"
          name="nft-title"
          placeholder="NFT Title"
          onChange={(e) => setNftTitle(e.currentTarget.value)}
        />
        <TextareaField
          name="nft-description"
          placeholder="Description"
          onChange={(e) => setNftDesc(e.currentTarget.value)}
        />
        <ButtonGroup>
          <Button onClick={(e) => submitForm(e, false)}>
            Mint without listing
          </Button>
          <Button type="primary" onClick={submitForm}>
            Mint and list immediately
          </Button>
        </ButtonGroup>
      </FormContainer>
      <HiddenFileSelector
        type="file"
        id="fileselector"
        onChange={fileSelect}
        accept=".jpg,.jpeg,.png,.bmp"
        width="200"
        height="200"
      />
      {modalVisibility && (
        <Modal
          image={selectedFile}
          title={nftTitle}
          description={nftDesc}
          buttonClick={modalButtonClick}
        />
      )}
    </>
  );
};
