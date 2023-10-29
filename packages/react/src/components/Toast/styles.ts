import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0%)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0%)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const ToastContainer = styled(Toast.Root, {
  width: 320,
  backgroundColor: '$gray800',
  padding: '$3 $5',
  borderRadius: '$sm',
  lineHeight: '160%',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-in-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-in-out`,
  },
})

export const Title = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '$default',
  fontWeight: '$bold',
  marginBottom: '$1',
})

export const Description = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const Close = styled(Toast.Close, {
  all: 'unset',
  color: '$gray200',
  cursor: 'pointer',
  display: 'flex',

  '&:hover': {
    color: '$white',
    transition: 'color 0.2s ease-in-out',
  },
})

const VIEWPORT_PADDING = 32

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
