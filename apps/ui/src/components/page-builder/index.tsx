import type { UID } from "@repo/strapi-types"

import StrapiContactForm from "@/components/page-builder/components/forms/StrapiContactForm"
import StrapiNewsletterForm from "@/components/page-builder/components/forms/StrapiNewsletterForm"
import StrapiAnimatedLogoRow from "@/components/page-builder/components/sections/StrapiAnimatedLogoRow"
import StrapiCarousel from "@/components/page-builder/components/sections/StrapiCarousel"
import StrapiCTABanner from "@/components/page-builder/components/sections/StrapiCTABanner"
import StrapiFaq from "@/components/page-builder/components/sections/StrapiFaq"
import { StrapiFeaturesList } from "@/components/page-builder/components/sections/StrapiFeaturesList"
import { StrapiStatistics } from "@/components/page-builder/components/sections/StrapiFigures"
import StrapiHeadingWithCTAButton from "@/components/page-builder/components/sections/StrapiHeadingWithCTAButton"
import StrapiHero from "@/components/page-builder/components/sections/StrapiHero"
import StrapiImageWithCTAButton from "@/components/page-builder/components/sections/StrapiImageWithCTAButton"
import StrapiAnnouncementBanner from "@/components/page-builder/components/sections/StrapiAnnouncementBanner"
import StrapiBlogSection from "@/components/page-builder/components/sections/StrapiBlogSection"
import StrapiChangelog from "@/components/page-builder/components/sections/StrapiChangelog"
import StrapiFeatureSplit from "@/components/page-builder/components/sections/StrapiFeatureSplit"
import StrapiHeroAnimated from "@/components/page-builder/components/sections/StrapiHeroAnimated"
import StrapiIntegrationsGrid from "@/components/page-builder/components/sections/StrapiIntegrationsGrid"
import StrapiLogoCloud from "@/components/page-builder/components/sections/StrapiLogoCloud"
import StrapiPricing from "@/components/page-builder/components/sections/StrapiPricing"
import StrapiProblemSection from "@/components/page-builder/components/sections/StrapiProblemSection"
import StrapiStatsStrip from "@/components/page-builder/components/sections/StrapiStatsStrip"
import StrapiTeam from "@/components/page-builder/components/sections/StrapiTeam"
import StrapiTestimonials from "@/components/page-builder/components/sections/StrapiTestimonials"
import StrapiTimeline from "@/components/page-builder/components/sections/StrapiTimeline"
import StrapiCkEditorContent from "@/components/page-builder/components/utilities/StrapiCkEditorContent"
import StrapiTipTapEditorContent from "@/components/page-builder/components/utilities/StrapiTipTapEditorContent"

/**
 * Mapping of Strapi Component UID to React Component
 *
 * Consider improving dynamic/lazy loading of these components to reduce bundle size.
 */
export const PageContentComponents: Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- generic component map requires any for varying prop types
  Record<UID.Component, React.ComponentType<any>>
> = {
  // elements, seo-utilities, utilities
  // They are usually rendered or used deep inside other components or handlers
  // Add them here if they can be used on Page content level
  "utilities.ck-editor-content": StrapiCkEditorContent,
  "utilities.ck-editor-text": StrapiCkEditorContent,
  "utilities.tip-tap-rich-text": StrapiTipTapEditorContent,

  // Sections
  "sections.animated-logo-row": StrapiAnimatedLogoRow,
  "sections.faq": StrapiFaq,
  "sections.carousel": StrapiCarousel,
  "sections.heading-with-cta-button": StrapiHeadingWithCTAButton,
  "sections.hero": StrapiHero,
  "sections.image-with-cta-button": StrapiImageWithCTAButton,
  "sections.statistics": StrapiStatistics,
  "sections.features-list": StrapiFeaturesList,
  "sections.cta-banner": StrapiCTABanner,

  // Forms
  "forms.contact-form": StrapiContactForm,
  "forms.newsletter-form": StrapiNewsletterForm,

  // Tugus blocks (shadcn-ui-blocks)
  "sections.hero-animated": StrapiHeroAnimated,
  "sections.feature-split": StrapiFeatureSplit,
  "sections.logo-cloud": StrapiLogoCloud,
  "sections.problem-section": StrapiProblemSection,
  "sections.testimonials": StrapiTestimonials,
  "sections.pricing": StrapiPricing,
  "sections.team": StrapiTeam,
  "sections.blog-section": StrapiBlogSection,
  "sections.timeline": StrapiTimeline,
  "sections.changelog": StrapiChangelog,
  "sections.announcement-banner": StrapiAnnouncementBanner,
  "sections.integrations-grid": StrapiIntegrationsGrid,
  "sections.stats-strip": StrapiStatsStrip,

  // Add more components here
}
