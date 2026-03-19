import { cn } from "@/lib/utils"

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "strong"
  glow?: boolean
}

export function GlassPanel({
  children,
  className,
  variant = "default",
  glow = false,
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        variant === "default" && "glass-panel",
        variant === "strong" && "glass-panel-strong",
        glow && "glow-border",
        className
      )}
    >
      {children}
    </div>
  )
}
