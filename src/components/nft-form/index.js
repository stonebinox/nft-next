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

export const NFTForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [nftTitle, setNftTitle] = useState("");
  const [nftDesc, setNftDesc] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { showModal, hideModal, modalVisibility } = useModalContext();

  const fileClick = () => {
    document.nftupload.file.click();
  };

  const fileSelect = (e) => {
    setSelectedFile(e.currentTarget.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault();

    setSuccess("");

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
    e.preventDefault();
    // we'd attempt posting the item here
    try {
      setError("");

      const formdata = new FormData();
      formdata.append("file", selectedFile);
      const metadata = JSON.stringify({
        name: nftTitle,
        description: nftDesc,
      });
      formdata.append("pinataMetadata", metadata);

      const response = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          body: formdata,
          headers: {
            // ideally we'd need this in an env file
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0ZmYxYzMxYy1hMzZiLTQ4NjMtYTEwNi04OTA0ZDM0OTA1YWYiLCJlbWFpbCI6ImFub29wLnNhbnRoYW5hbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDY4Y2I2OWU0M2I3NWFhOTFjODAiLCJzY29wZWRLZXlTZWNyZXQiOiI4ZDJmYzdhNzNkYmVlYWFmYWJmYzA5ODBiYzAzMzQ0MmJmMjEyOGI0NjdjNTE2M2Y5MDIyMjRiNmQzNzk2NTg1IiwiaWF0IjoxNzA2OTY4OTU4fQ.1RPRCxSfad4UoAcRdYBF1VotqmVND8LhGm74K-MRX5I",
          },
        }
      );

      const data = await response.json();
      const { IpfsHash } = data;
      console.log(IpfsHash);

      setSuccess(`Created item:\n${IpfsHash}`);
      setNftDesc("");
      setNftTitle("");
      hideModal();
      document.nftupload.reset();
      setSelectedFile(null);
    } catch (e) {
      setError("Something went wrong. Try again later.");
      hideModal();
      console.log(e);
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
          <HiddenFileSelector
            type="file"
            name="file"
            onChange={fileSelect}
            accept=".jpg,.jpeg,.png,.bmp"
            width="200"
            height="200"
          />
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
