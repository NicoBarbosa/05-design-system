import * as TooltipRedux from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent, TooltipTigger } from './styles'
import { ComponentProps } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  status: 'Disponível' | 'Indisponível'
}

export function Tooltip({ status }: TooltipProps) {
  return (
    <TooltipRedux.Provider>
      <TooltipRedux.Root delayDuration={0}>
        <TooltipTigger>30</TooltipTigger>
        <TooltipRedux.Portal>
          <TooltipContent sideOffset={2}>
            30 de Outubro - {status}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRedux.Portal>
      </TooltipRedux.Root>
    </TooltipRedux.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
