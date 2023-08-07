import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta = {
    title: "Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        text: { control: "text" },
        type: { control: "select" },
        size: { control: "select" },
        onClick: { action: "clicked" },
    },    
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonFilled: Story = {
    args: {
        text: "削除",
        type: "filled",
        size: "medium",
    },
  };

  export const ButtonOutlined: Story = {
    args: {
        text: "次へ",
        type: "outlined",
        size: "medium",
    },
  };  

  export const ButtonDisable: Story = {
    args: {
        text: "戻る",
        type: "disable",
        size: "medium",
    },
  };

