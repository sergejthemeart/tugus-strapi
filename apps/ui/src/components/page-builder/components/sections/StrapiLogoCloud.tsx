import "server-only"

import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiLogoCloud({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.logo-cloud">
}) {
  const { title, logos } = component

  return (
    <section className="py-16">
      <Container>
        {title && (
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {title}
          </p>
        )}
        {logos && logos.length > 0 && (
          <div className="grid grid-cols-3 items-center gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {logos.map((logo) =>
              logo.image ? (
                <div
                  key={logo.id}
                  className="flex items-center justify-center transition-all duration-300 grayscale hover:grayscale-0"
                >
                  <StrapiBasicImage
                    component={logo.image}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ) : null
            )}
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiLogoCloud.displayName = "StrapiLogoCloud"
export default StrapiLogoCloud
