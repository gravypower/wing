import { useCallback, useEffect, useState } from "react";

import { trpc } from "./trpc.js";

export interface UseSecretOptions {
  resourcePath: string;
}

export const useSecret = ({ resourcePath }: UseSecretOptions) => {
  const secretValue = trpc["secret.get"].useQuery({ resourcePath });
  //const resetCounter = trpc["secret.set"].useMutation();

  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    setCurrentValue(secretValue.data ?? "");
  }, [secretValue.data]);

  // const reset = useCallback(() => {
  //   resetCounter.mutate({ resourcePath, value: 0 });
  // }, [resetCounter, resourcePath]);

  return {
    //reset,
    currentValue,
  };
};
