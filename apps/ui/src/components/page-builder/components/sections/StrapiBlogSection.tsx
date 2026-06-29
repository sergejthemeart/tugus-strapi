import "server-only"

import type { Data } from "@repo/strapi-types"

import { Container } from "@/components/elementary/Container"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import StrapiLink from "@/components/page-builder/components/utilities/StrapiLink"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { PageBuilderComponentProps } from "@/types/general"

export function StrapiBlogSection({
  component,
}: PageBuilderComponentProps & {
  component: Data.Component<"sections.blog-section">
}) {
  const { title, link, posts } = component

  return (
    <section className="py-16">
      <Container>
        <div className="flex items-end justify-between">
          {title && (
            <h2 className="font-medium text-2xl tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {link && <StrapiLink component={link} />}
        </div>
        {posts && posts.length > 0 && (
          <div className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="gap-3 bg-muted/30 py-0 shadow-none">
                {post.image && (
                  <CardHeader className="p-1.5 pb-0">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <StrapiBasicImage
                        component={post.image}
                        width={600}
                        height={340}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                )}
                <CardContent className="px-4 pt-0 pb-5">
                  {post.category && (
                    <Badge variant="secondary">{post.category}</Badge>
                  )}
                  <h3 className="mt-4 font-medium text-xl tracking-tight text-foreground">
                    {post.link ? (
                      <StrapiLink component={post.link} className="hover:underline">
                        {post.title}
                      </StrapiLink>
                    ) : (
                      post.title
                    )}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-6 flex items-center justify-between">
                    {post.author && (
                      <span className="font-medium text-muted-foreground text-sm">
                        {post.author}
                      </span>
                    )}
                    {post.date && (
                      <span className="text-muted-foreground text-sm">{post.date}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiBlogSection.displayName = "StrapiBlogSection"
export default StrapiBlogSection
