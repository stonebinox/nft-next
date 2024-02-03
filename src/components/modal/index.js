import React, { useState, useEffect } from "react";

import {
  ModalBackdrop,
  ModalContainer,
  ModalDescription,
  ModalImage,
  ModalTitle,
} from "./index.styles";
import { Button } from "@/app/page.styles";
import { useModalContext } from "@/helpers/modal-context";

export const Modal = ({ title, image, description }) => {
  const [loadedImage, setLoadedImage] = useState(null);
  const { hideModal } = useModalContext();

  useEffect(() => {
    if (!image) return;

    const getImageFile = async () => {
      const objectUrl = await URL.createObjectURL(image);
      setLoadedImage(objectUrl);
    };

    getImageFile();
  }, [image]);

  const backdropClick = (e) => {
    if (e?.target?.id === "modal-backdrop") {
      hideModal();
    }
  };

  return (
    <ModalBackdrop onClick={backdropClick} id="modal-backdrop">
      <ModalContainer>
        {loadedImage && (
          <ModalImage src={loadedImage} alt="Image" width="100%" />
        )}
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <Button type="primary">Continue</Button>
      </ModalContainer>
    </ModalBackdrop>
  );
};
