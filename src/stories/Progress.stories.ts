import { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../components/Progress';

const meta = {
    title: 'Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        text: {control: 'text'},
        value: { control: 'number' },
        size: { control: 'select' },
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallProgress: Story = {
    args: {
        text: 'Text',
        value: 50,
        size: 'small',
    },
};

export const MediumProgress: Story = {
    args: {
        text: 'Text',
        value: 50,
        size: 'medium',
    },
};

export const LargeProgress: Story = {
    args: {
        text: 'Text',
        value: 50,
        size: 'large',
    },
};

