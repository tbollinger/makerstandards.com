import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Confirm: Story = {
  args: {
    color: 'sun',
    label: 'Button',
  },
};

export const Info: Story = {
  args: {
    color: 'ocean',
    label: 'Button',
  },
};

export const Success: Story = {
  args: {
    color: 'grass',
    label: 'Button',
  }
}

export const Danger: Story = {
  args: {
    color: 'darling',
    label: 'Button',
  }
}

export const White: Story = {
  args: {
    label: 'Button',
  },
};
