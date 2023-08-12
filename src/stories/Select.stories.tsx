import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select";

const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        options: { control: "array" },
        orientation: { control: "select" },
        type: { control: "select" },
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioSelectHorizontal: Story = {
    args: {
        options: ["男性", "女性"],
        orientation: "horizontal",
        type: "radio",
    },
};

export const RadioSelectVertical: Story = {
    args: {
        options: ["男性", "女性"],
        orientation: "vertical",
        type: "radio",
    },
};

export const MultiSelectHorizontal: Story = {
    args: {
        options: ["にきび", "しみ", "そばかす"],
        orientation: "horizontal",
        type: "multi",
    },
};

export const MultiSelectVertical: Story = {
    args: {
        options: ["にきび", "しみ", "そばかす"],
        orientation: "vertical",
        type: "multi",
    },
};

