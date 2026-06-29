import "server-only"

import Link from "next/link"
import type { Data } from "@repo/strapi-types"

function safeSocialUrl(url: string | null | undefined): string | null {
  if (!url) return null
  return url.startsWith("https://") || url.startsWith("http://") ? url : null
}

import { Container } from "@/components/elementary/Container"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiTeam({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.team">
}) {
  const { eyebrow, title, description, links, members } = component

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col justify-center gap-14 lg:flex-row">
          <div className="lg:max-w-xs">
            {eyebrow && (
              <p className="font-medium text-muted-foreground text-sm uppercase tracking-widest">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-medium text-3xl tracking-tight text-foreground md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-foreground/80">{description}</p>
            )}
            {links && links.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {links.map((link) => (
                  <StrapiLink key={link.id} component={link} />
                ))}
              </div>
            )}
          </div>

          {members && members.length > 0 && (
            <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
              {members.map((member) => (
                <div key={member.id} className="flex items-start gap-4 md:flex-col">
                  {member.image ? (
                    <StrapiBasicImage
                      component={member.image}
                      width={80}
                      height={80}
                      className="h-16 w-16 shrink-0 rounded-full bg-secondary object-cover sm:h-20 sm:w-20"
                    />
                  ) : (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted text-2xl font-semibold text-muted-foreground sm:h-20 sm:w-20">
                      {member.name?.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium text-lg text-foreground">{member.name}</h3>
                    {member.role && (
                      <p className="text-muted-foreground text-sm">{member.role}</p>
                    )}
                    {member.bio && (
                      <p className="mt-2 text-foreground/90 text-sm">{member.bio}</p>
                    )}
                    <div className="mt-4 flex items-center gap-2">
                      {safeSocialUrl(member.twitterUrl) && (
                        <Link
                          href={safeSocialUrl(member.twitterUrl)!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                          </svg>
                        </Link>
                      )}
                      {safeSocialUrl(member.linkedinUrl) && (
                        <Link
                          href={safeSocialUrl(member.linkedinUrl)!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

StrapiTeam.displayName = "StrapiTeam"
export default StrapiTeam
