import React, { useState } from "react";
import Image from "next/image";

import {
  ButtonGroup,
  ErrorContainer,
  ErrorText,
  FileSelector,
  FileSelectorSubtext,
  FileSelectorTitle,
  FormContainer,
  HiddenFileSelector,
  InputField,
  TextareaField,
} from "./index.styles";
import { Button } from "@/app/page.styles";
import { useModalContext } from "@/helpers/modal-context";
import { Modal } from "../modal";

export const NFTForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [nftTitle, setNftTitle] = useState("");
  const [nftDesc, setNftDesc] = useState("");
  const [error, setError] = useState("");
  const { showModal, hideModal, modalVisibility } = useModalContext();

  const fileClick = () => {
    document.nftupload.file.click();
  };

  const fileSelect = (e) => {
    setSelectedFile(e.currentTarget.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault();

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

  return (
    <>
      <FormContainer name="nftupload">
        {error !== "" && (
          <ErrorContainer>
            <ErrorText>{error}</ErrorText>
          </ErrorContainer>
        )}
        <FileSelector onClick={fileClick}>
          <HiddenFileSelector type="file" name="file" onChange={fileSelect} />
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
          <Button onClick={submitForm}>Mint without listing</Button>
          <Button type="primary" onClick={submitForm}>
            Mint and list immediately
          </Button>
        </ButtonGroup>
      </FormContainer>
      {modalVisibility && (
        <Modal image={selectedFile} title={nftTitle} description={nftDesc} />
      )}
    </>
  );
};
