import "server-only"

import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiTestimonials({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.testimonials">
}) {
  const { title, description, testimonials } = component

  return (
    <section className="py-20">
      <Container>
        {(title || description) && (
          <div className="text-center">
            {title && (
              <h2 className="font-medium text-4xl tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-muted-foreground text-xl">{description}</p>
            )}
          </div>
        )}
        {testimonials && testimonials.length > 0 && (
          <div className="mt-14 columns-1 gap-8 md:columns-2 lg:mt-16 lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="mb-8 break-inside-avoid rounded-xl bg-muted p-6 dark:bg-muted/60"
              >
                <div className="flex items-center gap-3">
                  {testimonial.image ? (
                    <StrapiBasicImage
                      component={testimonial.image}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground text-xl">
                      {testimonial.authorName?.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-foreground">{testimonial.authorName}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.authorRole}
                      {testimonial.authorCompany && ` · ${testimonial.authorCompany}`}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[17px] text-foreground">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiTestimonials.displayName = "StrapiTestimonials"
export default StrapiTestimonials
