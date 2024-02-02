import React, { useState } from "react";
import Image from "next/image";

import {
  FileSelector,
  FileSelectorSubtext,
  FileSelectorTitle,
  FormContainer,
  HiddenFileSelector,
} from "./index.styles";

export const NFTForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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
    </FormContainer>
  );
};
