import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn("container-default", className)}>
      {children}
    </Component>
  )
}
