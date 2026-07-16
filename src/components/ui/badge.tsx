import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-amber-100 text-amber-800",
        primary: "bg-blue-100 text-blue-800",
        success: "bg-emerald-100 text-emerald-800",
        outline: "border border-current",
        dark: "bg-navy-900/10 text-navy-900",
        gold: "bg-amber-500 text-white",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
