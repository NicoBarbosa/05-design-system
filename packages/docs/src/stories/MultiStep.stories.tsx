import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

interface Story extends StoryObj<MultiStepProps> {}

export const Primary: Story = {
  args: {},
}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
