import { Meta, StoryObj } from "@storybook/react";
import { Option } from "../components/Option";

const meta: Meta<typeof Option> = {
    title: "Option",
    component: Option,
    tags: ['autodocs'],
    argTypes: {
        text: { control: "text" }, 
        selected: { control: "boolean" },
        onClick: { action: "clicked" },
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOption: Story = {
    args: {
        text: "男性",
        selected: false,
    },
};

export const SelectedOption: Story = {
    args: {
        text: "女性",
        selected: true,
    },
};
