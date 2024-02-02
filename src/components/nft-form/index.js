import React from "react";
import Image from "next/image";

import {
  FileSelector,
  FileSelectorSubtext,
  FileSelectorTitle,
  FormContainer,
} from "./index.styles";

export const NFTForm = () => {
  return (
    <FormContainer name="nftupload">
      <FileSelector>
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
