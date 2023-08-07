import { Meta, StoryObj } from "@storybook/react";
import { SelectGroup } from "../components/SelectGroup";

const meta = {
    title: "SelectGroup",
    component: SelectGroup,
    tags: ['autodocs'],
    argTypes: {
        options: { control: "array" },
        orientation: { control: "select" },
        value: { control: "text" },
        onChange: { action: "changed" },
    },
} satisfies Meta<typeof SelectGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectHorizontal: Story = {
    args: {
        options: ["男性", "女性"],
        orientation: "horizontal",
        value: "男性",
    },
};

export const SelectVertical: Story = {
    args: {
        options: ["にきび", "しみ", "そばかす"],
        orientation: "vertical",
        value: "にきび",
    },
};

