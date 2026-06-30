import "server-only"

import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import { removeThisWhenYouNeedMe } from "@/lib/general-helpers"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiImageWithCTAButton({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.image-with-cta-button">
}) {
  removeThisWhenYouNeedMe("StrapiImageWithCTAButton")

  return (
    <section>
      <Container className="items-center gap-4 md:grid md:grid-cols-2 xl:gap-8">
        <div className="flex justify-center">
          <StrapiBasicImage
            component={component.image}
            className="w-full object-contain object-center"
            height={300}
          />
        </div>

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">
            {component.title}
          </h2>
          {component.subText && (
            <p className="mb-6 font-light text-muted-foreground md:text-lg">
              {component.subText}
            </p>
          )}

          <StrapiLink
            component={component.link}
            className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          />
        </div>
      </Container>
    </section>
  )
}

StrapiImageWithCTAButton.displayName = "StrapiImageWithCTAButton"

export default StrapiImageWithCTAButton
