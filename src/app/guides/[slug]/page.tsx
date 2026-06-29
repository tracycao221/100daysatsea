import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { seoGuideBySlug, seoGuides } from "@/data/seo-guides";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return seoGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = seoGuideBySlug.get(slug);
  if (!guide) return {};

  const canonical = `${siteConfig.domain}/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: canonical,
      type: "article",
      images: [{ url: "/opengraph-image" }]
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/opengraph-image"]
    }
  };
}

export default async function SeoGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = seoGuideBySlug.get(slug);
  if (!guide) notFound();

  const siblingGuides = seoGuides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: guide.title, href: `/guides/${guide.slug}` }
        ]}
      />
      <FaqJsonLd items={guide.faq} />
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: guide.title, href: `/guides/${guide.slug}` }
        ]}
      />

      <PageIntro eyebrow={guide.eyebrow} title={guide.title} description={guide.intro}>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="button-secondary">
            Home
          </Link>
          <Link href="/guides" className="button-primary">
            Guide hub
          </Link>
        </div>
      </PageIntro>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.42fr]">
        <div className="grid gap-5">
          {guide.sections.map((section) => (
            <article key={section.title} className="content-card">
              <h2 className="text-2xl font-extrabold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/66">{section.body}</p>
              <ul className="mt-4 grid gap-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-sm leading-6 text-white/70">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="grid content-start gap-5">
          <section className="content-card">
            <span className="mini-label">Related pages</span>
            <div className="mt-4 grid gap-3">
              {guide.related.map((item) => (
                <Link key={`${item.href}-${item.label}`} href={item.href} className="row-link">
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="content-card">
            <span className="mini-label">More guides</span>
            <div className="mt-4 grid gap-3">
              {siblingGuides.map((item) => (
                <Link key={item.slug} href={`/guides/${item.slug}`} className="row-link">
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Quick answers"
          title={`${guide.title} FAQ`}
          copy="Short answers help searchers choose the next page without duplicating code tables or unverified update claims."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guide.faq.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.q}</h2>
              <p className="mt-2 text-sm leading-6 text-white/68">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
