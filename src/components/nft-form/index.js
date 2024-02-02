import React, { useState } from "react";
import Image from "next/image";

import {
  ButtonGroup,
  FileSelector,
  FileSelectorSubtext,
  FileSelectorTitle,
  FormContainer,
  HiddenFileSelector,
  InputField,
  TextareaField,
} from "./index.styles";
import { Button } from "@/app/page.styles";

export const NFTForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [nftTitle, setNftTitle] = useState("");
  const [nftDesc, setNftDesc] = useState("");

  const fileClick = () => {
    document.nftupload.file.click();
  };

  const fileSelect = (e) => {
    setSelectedFile(e.currentTarget.files[0]);
  };

  return (
    <FormContainer name="nftupload">
      <FileSelector onClick={fileClick}>
        <HiddenFileSelector type="file" name="file" onChange={fileSelect} />
        <FileSelectorTitle>
          <Image
            src="/assets/upload-icon.svg"
            alt="Upload"
            width="16"
            height="16"
          />{" "}
          Upload Image
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
        <Button>Mint without listing</Button>
        <Button type="primary">Mint and list immediately</Button>
      </ButtonGroup>
    </FormContainer>
  );
};
