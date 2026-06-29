import { cn } from "@/lib/styles"

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "secondary" | "outline"
}

export function Badge({ children, className, variant = "secondary" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        variant === "default" && "bg-primary text-primary-foreground ring-primary",
        variant === "secondary" && "bg-secondary text-secondary-foreground ring-secondary",
        variant === "outline" && "bg-transparent text-foreground ring-border",
        className
      )}
    >
      {children}
    </span>
  )
}
