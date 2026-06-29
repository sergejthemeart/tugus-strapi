import "server-only"

import type { Data } from "@repo/strapi-types"

import CkEditorRenderer from "@/components/elementary/ck-editor"
import { Container } from "@/components/elementary/Container"
import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiStatsStrip({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.stats-strip">
}) {
  const { title, description, link, stats } = component

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start gap-14 md:flex-row sm:gap-10">
          <div className="md:max-w-md lg:max-w-lg">
            {title && (
              <h2 className="font-medium text-4xl tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-muted-foreground text-xl">{description}</p>
            )}
            {link && (
              <StrapiLink component={link} className="mt-8 sm:mt-10" />
            )}
          </div>
          {stats && stats.length > 0 && (
            <div className="grow space-y-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="space-y-3 rounded-xl bg-muted p-6 dark:bg-muted/70"
                >
                  <div className="font-medium text-5xl text-foreground">
                    {stat.prefix}{stat.number?.toString()}{stat.suffix}
                  </div>
                  {stat.description && (
                    <CkEditorRenderer
                      htmlContent={String(stat.description)}
                      className="text-foreground/80 text-lg"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

StrapiStatsStrip.displayName = "StrapiStatsStrip"
export default StrapiStatsStrip
