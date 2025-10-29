import { useState } from "react";
import Toast from "../components/Toast/Toast";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const InteractiveSuccess = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <Toast
          type="success"
          message="This is a success message!"
          duration={5000}
          closable
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
};

export const InteractiveWraning = () => {
    const [visible, setVisible] = useState(true);
    return (
      <>
        {visible && (
          <Toast
            type="wraning"
            message="This is a wraning message!"
            duration={5000}
            closable
            onClose={() => setVisible(false)}
          />
        )}
      </>
    );
  };

  export const InteractiveError = () => {
    const [visible, setVisible] = useState(true);
    return (
      <>
        {visible && (
          <Toast
            type="error"
            message="This is a error message!"
            duration={5000}
            closable
            onClose={() => setVisible(false)}
          />
        )}
      </>
    );
  };

  export const InteractiveInfo = () => {
    const [visible, setVisible] = useState(true);
    return (
      <>
        {visible && (
          <Toast
            type="info"
            message="This is a info message!"
            duration={5000}
            closable
            onClose={() => setVisible(false)}
          />
        )}
      </>
    );
  };
