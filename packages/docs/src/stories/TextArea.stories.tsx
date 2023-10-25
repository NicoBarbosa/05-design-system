import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column' }}>
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

interface Story extends StoryObj<TextAreaProps> {}

export const Primary: Story = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
