import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Modal,
  TextArea,
  ToolbarButton,
  useTheme,
} from "@wingconsole/design-system";
import classNames from "classnames";
import { useCallback, useState, useId } from "react";

export interface SecretProps {
  currentValue: string
}

export const Secret = ({ currentValue }: SecretProps) => {
  const { theme } = useTheme();
  const secretId = useId();
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
        <div className="pt-2 px-1">
          <TextArea
            id={secretId}
            containerClassName="w-full min-w-[500px] "
            placeholder="Secret"
            className="text-xl min-h-[6rem] resize min-h-[200px]"
            value={currentValue}
            //onInput={(event) => setSecret(event.currentTarget.value)}
            //disabled={isLoading}
          />
        </div>
      </Modal>
    </div>
  );
};
