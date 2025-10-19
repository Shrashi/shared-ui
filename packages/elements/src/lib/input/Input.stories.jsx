
import Input from "./Input";

export default {
  title: "Elements/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    type: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    placeholder: "Type here...",
  },
};

export const Password = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};
