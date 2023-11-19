import { MultiSelect } from '@/components/Select';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'MultiSelect',
    component: MultiSelect,
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        options: { control: 'object' },
        value: { control: 'object' },
        orientation: { control: 'select' },
    }
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    args: {
        options: [
            { value: 'Option 1', label: 'Option 1' },
            { value: 'Option 2', label: 'Option 2' },
            { value: 'Option 3', label: 'Option 3' },
        ],
        value: [
            "Option 1",
        ],
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
        value: [
            "Option 1",
        ],
        orientation: "horizontal",
    },
};

