import "server-only"

import { ArrowUpRight } from "lucide-react"
import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiIntegrationsGrid({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.integrations-grid">
}) {
  const { title, description, link, integrations } = component

  return (
    <section className="py-20">
      <Container>
        {title && (
          <h2 className="text-center font-medium text-4xl tracking-tight text-foreground">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-3 text-center text-muted-foreground text-xl">{description}</p>
        )}
        {integrations && integrations.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <div
                key={integration.id}
                className="flex flex-col items-start rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <div className="grow">
                  {integration.image && (
                    <StrapiBasicImage
                      component={integration.image}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded object-contain"
                    />
                  )}
                  <h3 className="mt-5 font-medium text-xl text-foreground">
                    {integration.title}
                  </h3>
                  {integration.description && (
                    <p className="mt-1 text-muted-foreground">{integration.description}</p>
                  )}
                </div>
                {integration.link && (
                  <StrapiLink
                    component={integration.link}
                    className="mt-6 flex items-center gap-1"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </StrapiLink>
                )}
              </div>
            ))}
          </div>
        )}
        {link && (
          <div className="mt-10 text-center">
            <StrapiLink component={link} />
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiIntegrationsGrid.displayName = "StrapiIntegrationsGrid"
export default StrapiIntegrationsGrid
