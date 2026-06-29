import "server-only"

import { Building2, Calendar } from "lucide-react"
import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import { Badge } from "@/components/ui/badge"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiTimeline({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.timeline">
}) {
  const { title, description, events } = component

  return (
    <section className="py-20">
      <Container className="max-w-2xl">
        {(title || description) && (
          <div className="mb-12">
            {title && (
              <h2 className="font-medium text-3xl tracking-tight text-foreground md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {events && events.length > 0 && (
          <div className="relative ml-3">
            <div className="absolute top-4 bottom-0 left-0 border-l-2 border-border" />
            {events.map((event, index) => (
              <div key={event.id ?? index} className="relative pb-12 pl-8 last:pb-0">
                <div className="absolute top-3 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
                <div className="space-y-3">
                  {event.subtitle && (
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{event.subtitle}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium text-xl tracking-tight text-foreground">
                      {event.title}
                    </h3>
                    {event.period && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.period}</span>
                      </div>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {event.description}
                    </p>
                  )}
                  {event.tags && (
                    <div className="flex flex-wrap gap-2">
                      {event.tags
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter(Boolean)
                        .map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full">
                            {tag}
                          </Badge>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiTimeline.displayName = "StrapiTimeline"
export default StrapiTimeline
