import { memo } from "react";

import { Secret } from "../ui/secret.js";
import { useSecret } from "../services/use-secret.js";

export interface SecretInteractionViewProps {
  resourcePath: string;
}

export const SecretInteractionView = memo(({resourcePath}: SecretInteractionViewProps) => {
  const { currentValue } = useSecret({
    resourcePath,
  });

  return <Secret currentValue={currentValue} />;
});
