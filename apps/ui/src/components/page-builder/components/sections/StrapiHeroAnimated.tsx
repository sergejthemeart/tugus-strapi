import "server-only"

import type { Data } from "@repo/strapi-types"

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/styles"
import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiHeroAnimated({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.hero-animated">
}) {
  const { tag, title, description, links } = component

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AnimatedGridPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />
      <div className="relative z-10 max-w-3xl text-center">
        {tag && (
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
            {tag}
          </Badge>
        )}
        <h1 className="mx-auto mt-6 max-w-2xl font-semibold text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl/[1.15]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-lg md:text-xl">
            {description}
          </p>
        )}
        {links && links.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (
              <StrapiLink key={link.id} component={link} className="rounded-full" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

StrapiHeroAnimated.displayName = "StrapiHeroAnimated"
export default StrapiHeroAnimated
