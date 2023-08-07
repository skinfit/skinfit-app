import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../components/Progress";

const meta = {
    title: "Progress",
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        progress: { control: "number" },
    },    
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressSmall: Story = {
    args: {
        progress: 50,
        size: "small",
    },
};

export const ProgressMedium: Story = {
    args: {
        progress: 50,
        size: "medium",
    },
};

export const ProgressLarge: Story = {
    args: {
        progress: 50,
        size: "large",
    },
};
