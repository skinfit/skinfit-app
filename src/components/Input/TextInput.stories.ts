import { TextInput } from '@/components/Input';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'TextInput',
    component: TextInput,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        placeholder: { control: 'text' },
        size: { control: 'select' },
        align: { control: 'select' },
    },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallTextInput: Story = {
    args: {
        value: 'Text Input',
        placeholder: 'Placeholder',
        size: 'small',
        align: 'left',
    },
};

export const MediumTextInput: Story = {
    args: {
        value: 'Text Input',
        placeholder: 'Placeholder',
        size: 'medium',
        align: 'left',
    },
};

export const LargeTextInput: Story = {
    args: {
        value: 'Text Input',
        placeholder: 'Placeholder',
        size: 'large',
        align: 'left',
    },
};
