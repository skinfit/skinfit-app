import { Option } from "@/components/Select";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Option",
    component: Option,
    tags: ['autodocs'],
    argTypes: {
        value: { control: "text" },
        label: { control: "text"},
        selected: { control: "boolean" },
    }, 
} satisfies Meta<typeof Option>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedOption: Story = {
    args: {
        value: "Option",
        label: "Option",
        selected: true,
    },
};

export const UnselectedOption: Story = {
    args: {
        value: "Option",
        label: "Option",
        selected: false,
    },
};
