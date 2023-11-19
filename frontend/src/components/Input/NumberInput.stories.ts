import { NumberInput } from "@/components/Input";
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'NumberInput',
    component: NumberInput,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'number' },
        placeholder: { control: 'text' },
        size: { control: 'select' },
    },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallNumberInput: Story = {
    args: {
        value: 100,
        placeholder: 'Placeholder',
        size: 'small',
    },
};

export const MediumNumberInput: Story = {
    args: {
        value: 100,
        placeholder: 'Placeholder',
        size: 'medium',
    },
};

export const LargeNumberInput: Story = {
    args: {
        value: 100,
        placeholder: 'Placeholder',
        size: 'large',
    },
};
