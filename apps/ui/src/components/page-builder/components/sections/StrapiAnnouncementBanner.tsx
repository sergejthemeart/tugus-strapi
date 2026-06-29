import "server-only"

import { ArrowUpRight } from "lucide-react"
import type { Data } from "@repo/strapi-types"

import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import { cn } from "@/lib/styles"
import type { PageBuilderComponentProps } from "@/types/general"

const variantClasses = {
  info: "bg-muted text-foreground",
  warning: "bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200",
  success: "bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-200",
  error: "bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-200",
}

export function StrapiAnnouncementBanner({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.announcement-banner">
}) {
  const { text, variant = "info", link } = component

  return (
    <div className="px-6 py-6">
      <div
        className={cn(
          "mx-auto flex min-h-10 max-w-2xl flex-wrap items-center justify-center gap-3 rounded-lg px-5 py-4 text-center text-sm",
          variantClasses[variant as keyof typeof variantClasses] ?? variantClasses.info
        )}
      >
        <p>{text}</p>
        {link && (
          <StrapiLink component={link} className="flex items-center gap-1 font-medium underline-offset-4 hover:underline">
            <ArrowUpRight className="h-4 w-4" />
          </StrapiLink>
        )}
      </div>
    </div>
  )
}

StrapiAnnouncementBanner.displayName = "StrapiAnnouncementBanner"
export default StrapiAnnouncementBanner
