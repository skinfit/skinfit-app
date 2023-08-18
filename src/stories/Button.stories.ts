import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta = {
    title: "Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        value: { control: "text" },
        variant: { control: "select"},
        size: { control: "select"},
        onClick: { action: "clicked" },
        disabled: { control: "boolean" },
    }, 
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FillButton: Story = {
    args: {
        value: "Button",
        variant: "fill",
        disabled: false,
        size: "medium",
    },
};

export const FillDisabledButton: Story = {
    args: {
        value: "Button",
        variant: "fill",
        disabled: true,
        size: "medium",
    },
};

export const OutlineButton: Story = {
    args: {
        value: "Button",
        variant: "outline",
        disabled: false,
        size: "medium",
    },
};

export const OutlineDisabledButton: Story = {
    args: {
        value: "Button",
        variant: "outline",
        disabled: true,
        size: "medium",
    },
};

