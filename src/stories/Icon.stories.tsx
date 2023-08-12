import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../components/Icon';

const meta: Meta<typeof Icon> = {
    title: 'Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'select' },
        type: { control: 'select' },
        size: { control: 'select' },
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const AddIcon: Story = {
    args: {
        label: 'add',
        type: 'outlined',
        size: 'medium',
    },
};

export const CencelIcon: Story = {
    args: {
        label: 'cancel',
        type: 'outlined',
        size: 'medium',
    },
};

export const EditIcon: Story = {
    args: {
        label: 'edit',
        type: 'outlined',
        size: 'medium',
    },
};

export const SearchIcon: Story = {
    args: {
        label: 'search',
        type: 'outlined',
        size: 'medium',
    },
};


