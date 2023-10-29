import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipTigger = styled(Tooltip.Trigger, {
  borderRadius: '$sm',
  padding: '$4 26px',
  backgroundColor: '$gray600',
  border: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  fontWeight: '$regular',
  fontFamily: '$default',
  fontSize: '$md',
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: 5,
  padding: '$3 $4',
  fontSize: '$sm',
  lineHeight: '140%',
  fontFamily: '$default',
  color: '$gray100',
  backgroundColor: '$gray900',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
