import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "@repo/ui/button";

// Storybook Meta Configuration
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" }, // Logs click actions in Storybook
  },
  args: {
    onClick: action("button-clicked"), // Logs click events
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    color: "primary",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    color: "secondary",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
