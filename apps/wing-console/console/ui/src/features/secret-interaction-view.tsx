import { memo } from "react";
import { Secret } from "../ui/secret.js";


export interface SecretInteractionViewProps {
  resourcePath: string;
}

export const SecretInteractionView = memo(
  ({  }: SecretInteractionViewProps) => {

    return (
      <Secret    />
    );
  },
);
