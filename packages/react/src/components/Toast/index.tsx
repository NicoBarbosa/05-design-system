import { ComponentProps } from 'react'
import {
  Close,
  Description,
  Title,
  ToastContainer,
  ToastProvider,
  Viewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  duration: number
}

export function Toast({ duration }: ToastProps) {
  return (
    <ToastProvider duration={duration}>
      <ToastContainer>
        <Title>
          Agendamento realizado
          <Close>
            <X size={20} />
          </Close>
        </Title>
        <Description>Segunda-feira, 30 de Outubro às 16h</Description>
      </ToastContainer>
      <Viewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
