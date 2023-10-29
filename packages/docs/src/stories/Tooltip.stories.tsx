import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,

  args: {
    status: 'Disponível',
  },
} as Meta<TooltipProps>

interface Story extends StoryObj<TooltipProps> {}

export const Primary: Story = {}

export const Unavailable: Story = {
  args: {
    status: 'Indisponível',
  },
}
