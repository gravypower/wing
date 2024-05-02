import {
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  Button,
  Modal,
  ToolbarButton,
  useTheme,
} from "@wingconsole/design-system";
import { useCallback, useState } from "react";

import classNames from "classnames";

export interface SecretProps {
}


export const Secret = ({}: SecretProps) => {
  const { theme } = useTheme();
  const [showSecret, setShowSecret] = useState(false);
  const closeSecret = useCallback(() => {
    setShowSecret(false);
  }, []);
  return (
    <div className="flex flex-col gap-y-1 gap-x-4">
      <div className="h-full flex-1 flex flex-col text-sm space-y-2">
      <Button
            label="Edit Secret"
            dataTestid="cloud.secret:edit"
            onClick={() => setShowSecret(true)}
          />
      </div>
    

      <Modal
      visible={showSecret}
      setVisible={closeSecret}
      className="max-w-[80vw] space-y-1.5"
      >
        <div className={classNames(theme.text2, "text-md flex space-x-1")}>
          <ToolbarButton title="Close" onClick={closeSecret}>
            <XMarkIcon className="w-5 h-5" />
          </ToolbarButton>
        </div>
        TEST TEST TEST
      </Modal>
    </div>
  );
};
