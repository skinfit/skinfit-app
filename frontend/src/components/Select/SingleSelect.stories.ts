import { SingleSelect } from '@/components/Select';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'SingleSelect',
    component: SingleSelect,
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        options: { control: 'object' },
        value: { control: 'text' },
        orientation: { control: 'select' },
    }
} satisfies Meta<typeof SingleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    args: {
        options: [
            { value: 'Option 1', label: 'Option 1' },
            { value: 'Option 2', label: 'Option 2' },
            { value: 'Option 3', label: 'Option 3' },
        ],
        value: 'Option 1',
        orientation: "vertical",
    },
};

export const Horizontal: Story = {
    args: {
        options: [
            { value: 'Option 1', label: 'Option 1' },
            { value: 'Option 2', label: 'Option 2' },
            { value: 'Option 3', label: 'Option 3' },
        ],
        value: 'Option 1',
        orientation: "horizontal",
    },
};

