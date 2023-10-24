import { Icon } from '@/components/Icon';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        name: { control: 'select' },
        variant: { control: 'select' },
        size: { control: 'select' },
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddIcon: Story = {
    args: {
        name: 'add',
        variant: 'outline',
        size: 'medium',
    },
};

export const CencelIcon: Story = {
    args: {
        name: 'cancel',
        variant: 'outline',
        size: 'medium',
    },
};

export const EditIcon: Story = {
    args: {
        name: 'edit',
        variant: 'outline',
        size: 'medium',
    },
};

export const SearchIcon: Story = {
    args: {
        name: 'search',
        variant: 'outline',
        size: 'medium',
    },
};


