import React from "react";
import { Button } from "./Button";

export default {
  title: "Elements/Button",
  component: Button,
  args: { children: "Click me", variant: "primary", size: "md", fullWidth: false, disabled: false },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "ghost"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" }
  }
};

export const Primary = {};
export const Secondary = { args: { variant: "secondary" } };
export const Ghost = { args: { variant: "ghost" } };
export const Large = { args: { size: "lg" } };
export const Small = { args: { size: "sm" } };
export const FullWidth = { args: { fullWidth: true } };
export const Disabled = { args: { disabled: true } };
