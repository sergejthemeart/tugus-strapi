import "server-only"

import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiProblemSection({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.problem-section">
}) {
  const { title, description, problems } = component

  return (
    <section className="dark bg-tugus-dark py-24">
      <Container>
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        {problems && problems.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="rounded-2xl border border-white/10 bg-card p-6 shadow-md"
              >
                {problem.image && (
                  <div className="mb-4">
                    <StrapiBasicImage
                      component={problem.image}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                )}
                {problem.title && (
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {problem.title}
                  </h3>
                )}
                {problem.description && (
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiProblemSection.displayName = "StrapiProblemSection"
export default StrapiProblemSection
