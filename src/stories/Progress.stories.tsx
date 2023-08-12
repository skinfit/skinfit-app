import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../components/Progress";

const meta: Meta<typeof Progress> = {
    title: "Progress",
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        value: { control: "number" },
        size: { control: "select" },
        text: { control: "text" },
    },    
}

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressSmall: Story = {
    args: {
        value: 50,
        size: "small",
        text: "基本情報",
    },
};

export const ProgressMedium: Story = {
    args: {
        value: 50,
        size: "medium",
        text: "基本情報",
    },
};

export const ProgressLarge: Story = {
    args: {
        value: 50,
        size: "large",
        text: "基本情報",
    },
};
