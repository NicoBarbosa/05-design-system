import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/NicoBarbosa.png',
    alt: 'Nicolas Penante',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

interface Story extends StoryObj<AvatarProps> {}

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
