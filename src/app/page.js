"use client";

import { HomePage } from "@/components/home-page";
import { ModalProvider } from "@/helpers/modal-context";

export default function Home() {
  return (
    <ModalProvider>
      <HomePage />
    </ModalProvider>
  );
}
