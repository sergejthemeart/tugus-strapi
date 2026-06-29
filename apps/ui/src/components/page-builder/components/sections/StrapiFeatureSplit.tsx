import "server-only"

import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import { cn } from "@/lib/styles"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiFeatureSplit({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.feature-split">
}) {
  const { eyebrow, title, description, image, features, links } = component
  const imageLeft = (component.imagePosition ?? "right") === "left"

  return (
    <section className="py-24">
      <Container>
        <div
          className={cn(
            "flex flex-col items-center gap-12 lg:flex-row lg:gap-16",
            imageLeft && "lg:flex-row-reverse"
          )}
        >
          {/* Text side */}
          <div className="flex-1 space-y-6">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
            {features && features.length > 0 && (
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature.id} className="flex gap-3">
                    {feature.image && (
                      <StrapiBasicImage
                        component={feature.image}
                        width={24}
                        height={24}
                        className="mt-0.5 h-6 w-6 shrink-0"
                      />
                    )}
                    <div>
                      {feature.title && (
                        <p className="font-medium text-foreground">{feature.title}</p>
                      )}
                      {feature.description && (
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {links.map((link) => (
                  <StrapiLink key={link.id} component={link} />
                ))}
              </div>
            )}
          </div>

          {/* Image side */}
          {image?.image && (
            <div className="flex-1">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                <StrapiBasicImage
                  component={image.image}
                  width={700}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

StrapiFeatureSplit.displayName = "StrapiFeatureSplit"
export default StrapiFeatureSplit
