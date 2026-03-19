import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  titleClassName?: string
  className?: string
  as?: "h1" | "h2" | "h3"
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  titleClassName,
  className,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {label && <p className="section-label">{label}</p>}
      <Heading className={cn("section-title", titleClassName)}>{title}</Heading>
      {subtitle && (
        <p
          className={cn(
            "body-large",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
