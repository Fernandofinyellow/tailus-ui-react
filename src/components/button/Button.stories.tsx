import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button";


const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['solid', 'soft', 'outlined', 'ghost'] 
    },
    colorVariant: { 
      control: 'select', 
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray", "neutral"] 
    },
    icon: { 
      control: 'select', 
      options: ["none", "only", "leading", "trailing"] 
    },
    size: { 
        control: 'select', 
        options: ["xs", "sm", "md", "lg", "xl"] 
      },
    disabled: {
        control: 'boolean'
    },
    label: { control: 'text' },
    href: { control: 'text' },
    children: { control: 'text' },
    className: { control: 'text' },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;



export const Solid: Story = {
  args: {
    variant: 'solid',
    colorVariant: 'primary',
    icon: 'none',
    size: "md",
    label: "Open",
    children: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
    ),
    className: 'p-2'
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    colorVariant: 'primary',
    icon: 'none',
    size: "md",
    label: "Open",
    children: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
      </svg>
  )
  },
};

export const Oulined: Story = {
    args: {
      variant: 'outlined',
      colorVariant: "primary",
      icon: 'none',
      size: "md",
      label: "Open",
      children: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
    )
    },
  };

  export const Ghost: Story = {
    args: {
      variant: 'ghost',
      colorVariant: "primary",
      size: "md",
      label: "Open",
      children: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
    )
    },
  };
  
