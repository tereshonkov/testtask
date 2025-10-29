import { useState } from "react";
import Input from "../components/Input/Input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const InteractivePassword = () => {
  const [value, setValue] = useState("");

  return (
      <Input
        variants="password"
        label="Password"
        clearable
        value={value}
        onChange={setValue}
      />
  );
};
export const InteractiveText = () => {
  const [value, setValue] = useState("");

  return (
      <Input
        variants="text"
        label="Name"
        clearable
        value={value}
        onChange={setValue}
      />
  );
};
export const InteractiveTextWidthOutClearable = () => {
  const [value, setValue] = useState("");

  return (
      <Input
        variants="text"
        label="Last Name"
        value={value}
        onChange={setValue}
      />
  );
};
export const InteractiveEmail = () => {
  const [value, setValue] = useState("");

  return (
      <Input
        variants="email"
        label="Email"
        clearable
        value={value}
        onChange={setValue}
      />
  );
};
export const InteractiveNumber = () => {
  const [value, setValue] = useState("");

  return (
      <Input
        variants="number"
        label="Age"
        clearable
        value={value}
        onChange={setValue}
      />
  );
}
export const Error: Story = {
  args: {
    variants: "text",
    label: "Name",
    value: "123",
    error: "Name must be strings only",
  },
}
