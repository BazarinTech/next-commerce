import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Terminal } from 'lucide-react'

type Props = {
    children: React.ReactNode,
    title: string,
    icon?: React.ReactNode,
    className? : string,
}

function AlertComp({children, title, icon, className}: Props) {
  return (
    <Alert className={className ? className : ''}>
      {icon ? icon : <Terminal className="h-4 w-4" />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
       {children}
      </AlertDescription>
    </Alert>
  )
}

export default AlertComp