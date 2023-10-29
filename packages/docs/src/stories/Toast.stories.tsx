import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Components/Toast',
  component: Toast,

  args: {
    duration: 10000,
  },
} as Meta<ToastProps>

interface Story extends StoryObj<ToastProps> {}

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Recarregue a página para ver a duração diferente depois que alterar o campo`duration`.',
      },
    },
  },
}
