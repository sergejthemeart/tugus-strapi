import "server-only"

import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiChangelog({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.changelog">
}) {
  const { title, description, entries } = component

  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        {title && (
          <h2 className="font-medium text-4xl tracking-tight text-foreground">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-2 text-lg text-muted-foreground sm:mt-3 sm:text-xl">
            {description}
          </p>
        )}
        <hr className="mt-9 border-border" />
        {entries && entries.length > 0 && (
          <div className="flex flex-col divide-y divide-border">
            {entries.map((entry) => (
              <div key={entry.id} className="relative flex items-start gap-4 py-10">
                <span className="sticky top-5 mt-1.5 hidden min-w-36 text-muted-foreground tracking-tight sm:block">
                  {entry.date}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-medium text-2xl tracking-tight text-foreground">
                      {entry.title}
                    </h3>
                    {entry.version && (
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        v{entry.version}
                      </span>
                    )}
                  </div>
                  {entry.date && (
                    <span className="mt-2 block text-muted-foreground tracking-tight sm:hidden">
                      {entry.date}
                    </span>
                  )}
                  {entry.description && (
                    <p className="mt-3 text-muted-foreground">{entry.description}</p>
                  )}
                  <div className="mt-4 space-y-4">
                    {entry.features && (
                      <div>
                        <h4 className="mb-1 font-medium text-lg text-foreground">Features</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {entry.features.split("\n").filter(Boolean).map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {entry.changes && (
                      <div>
                        <h4 className="mb-1 font-medium text-lg text-foreground">Changes</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {entry.changes.split("\n").filter(Boolean).map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {entry.fixes && (
                      <div>
                        <h4 className="mb-1 font-medium text-lg text-foreground">Fixes</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {entry.fixes.split("\n").filter(Boolean).map((fix) => (
                            <li key={fix}>{fix}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiChangelog.displayName = "StrapiChangelog"
export default StrapiChangelog
