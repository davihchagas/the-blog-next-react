"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      content="501"
      contentTitle="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar"
    />
  );
}
