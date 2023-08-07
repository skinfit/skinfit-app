import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select";

const meta = {
    title: "Select",
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        text: { control: "text" }, 
        selected: { control: "boolean" },
        onClick: { action: "clicked" },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectDefault: Story = {
    args: {
        text: "男性",
        selected: false,
    },
};

export const SelectSelected: Story = {
    args: {
        text: "女性",
        selected: true,
    },
};
