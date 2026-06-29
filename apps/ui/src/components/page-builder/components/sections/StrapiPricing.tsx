import "server-only"

import { CircleCheck } from "lucide-react"
import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import { cn } from "@/lib/styles"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiPricing({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.pricing">
}) {
  const { title, description, plans } = component

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
        {plans && plans.length > 0 && (
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "rounded-lg border border-border bg-card p-6 shadow-sm",
                  plan.isHighlighted && "border-primary ring-2 ring-primary"
                )}
              >
                {plan.isHighlighted && (
                  <div className="mb-3 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                    Empfohlen
                  </div>
                )}
                <h3 className="font-medium text-lg text-foreground">{plan.name}</h3>
                {plan.price && (
                  <p className="mt-2 font-semibold text-4xl text-foreground">
                    {plan.price}
                    {plan.period && (
                      <span className="font-normal text-muted-foreground text-base">
                        {" "}{plan.period}
                      </span>
                    )}
                  </p>
                )}
                {plan.description && (
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                )}
                <hr className="my-4 border-border" />
                {plan.features && (
                  <ul className="space-y-2">
                    {plan.features
                      .split("\n")
                      .filter(Boolean)
                      .map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                  </ul>
                )}
                {plan.link && (
                  <StrapiLink
                    component={plan.link}
                    className={cn(
                      "mt-6 w-full justify-center",
                      plan.isHighlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiPricing.displayName = "StrapiPricing"
export default StrapiPricing
