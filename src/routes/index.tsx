import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import heroFabrics from "@/assets/hero-fabrics.jpg";
import aboutShopkeeper from "@/assets/about-shopkeeper.jpg";
import collectionMens from "@/assets/collection-mens.jpg";
import collectionWomens from "@/assets/collection-womens.jpg";
import collectionKids from "@/assets/collection-kids.jpg";
import galleryZari from "@/assets/gallery-zari.jpg";
import galleryTeal from "@/assets/gallery-teal.jpg";
import galleryTemple from "@/assets/gallery-temple.jpg";
import galleryMirror from "@/assets/gallery-mirror.jpg";
import galleryWide from "@/assets/gallery-wide.jpg";
import mapThakkolam from "@/assets/map-thakkolam.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Periyandavar Textiles & Readymades — Thakkolam" },
      {
        name: "description",
        content:
          "Family-run textile and readymade garments shop near Thakkolam Railway station. Silk sarees, menswear, womenswear and kids' wear with the latest trending designs.",
      },
      { property: "og:title", content: "Sri Periyandavar Textiles & Readymades — Thakkolam" },
      {
        property: "og:description",
        content:
          "Silk sarees, menswear, womenswear and kids' wear — a family shop a short walk from Thakkolam Railway station.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+914400000000";

function Index() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div>
            <div className="font-display text-lg font-semibold leading-none tracking-tight">
              Sri Periyandavar
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Textiles &amp; Readymades
            </div>
          </div>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#collections" className="hover:text-ink">Collections</a>
            <a href="#gallery" className="hover:text-ink">Gallery</a>
            <a href="#reviews" className="hover:text-ink">Reviews</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="rounded-full bg-maroon px-4 py-2 text-sm font-medium text-paper transition-colors duration-200 hover:bg-maroon/85"
          >
            Call the shop
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFabrics}
            alt="Silk sarees and fabric bolts in maroon, teal and gold"
            className="h-full w-full object-cover"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(22,12,11,0.82)_0%,rgba(22,12,11,0.62)_38%,rgba(21,13,12,0.34)_100%)]" />
        </div>
        <div className="animate-floaty absolute -left-24 -top-24 size-96 rounded-full bg-teal/25 blur-3xl" />
        <div
          className="animate-floaty absolute -right-20 top-32 size-80 rounded-full bg-gold/30 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />

        <div className="absolute left-6 top-8 hidden rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-paper/80 backdrop-blur-md md:inline-flex">
          Since 1978 • Family shop
        </div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-xl rounded-[30px] border border-white/10 bg-[#f4efe4]/12 p-7 shadow-[0_30px_80px_rgba(14,10,8,0.28)] backdrop-blur-xl sm:p-9 lg:p-10">
            <div className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              <span className="size-1.5 rounded-full bg-gold" />
              Festival collection now in store
            </div>
            <h1
              className="animate-rise font-display text-5xl font-semibold leading-[0.98] tracking-tight text-balance text-paper md:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Timeless sarees.
              <span className="mt-2 block italic text-[#f5d7a3]">Style that feels personal.</span>
            </h1>
            <p
              className="animate-rise mt-5 max-w-[46ch] text-pretty text-base leading-relaxed text-paper/80"
              style={{ animationDelay: "160ms" }}
            >
              Handpicked silk, cotton and festive wear for every family moment — a trusted textile
              destination near Thakkolam station, with the warm service only a neighbourhood shop can
              give.
            </p>

            <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <a
                href="#collections"
                className="rounded-full bg-[#f4efe4] px-6 py-3 text-sm font-medium text-[#211810] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fffaf2]"
              >
                Browse collections
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-medium text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/14"
              >
                Find the shop
              </a>
            </div>

            <div className="animate-rise mt-7 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-paper/65" style={{ animationDelay: "300ms" }}>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5">Silk sarees</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5">Menswear</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5">Kidswear</span>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="w-full max-w-sm rounded-[30px] border border-white/10 bg-[#1a1210]/60 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#f9d498]">Live from shop</div>
                  <div className="mt-2 font-display text-2xl font-semibold text-paper">Now trending</div>
                </div>
                <div className="rounded-full border border-[#f3d49c]/35 bg-[#f3d49c]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f5d7a3]">
                  Open 7 days
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-paper/60">Top pick</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-display text-xl font-semibold text-paper">Kanchipuram bridal</span>
                    <span className="rounded-full bg-[#f3d49c]/15 px-2 py-1 text-[10px] font-medium text-[#f7d793]">
                      ₹2,499
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-paper/60">Families</div>
                    <div className="mt-2 font-display text-3xl font-semibold text-paper">46Y</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-paper/60">Nearest</div>
                    <div className="mt-2 font-display text-3xl font-semibold text-paper">5m</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-[#f3d49c]/25 bg-[#f3d49c]/10 p-3 text-sm text-paper/80">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#f3d49c]" />
                  Just a short walk from Thakkolam station
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={aboutShopkeeper}
            alt="Shopkeeper folding a maroon silk saree"
            loading="lazy"
            width={800}
            height={1000}
            className="aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
        <div className="md:col-span-7 md:pl-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Since 1978</div>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance">
            A family shop that treats every fold like fabric.
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty leading-relaxed text-muted-foreground">
            We started as a single counter of handloom cotton and grew into a full readymade floor —
            men's shirts and mundus, women's sarees and suits, kids' festival wear. What never
            changed: the shopkeeper still unfolds the silk, still remembers your wedding date, still
            keeps your size on file.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/50 p-5 ring-1 ring-black/5">
              <div className="font-display text-3xl font-semibold text-maroon">46</div>
              <div className="mt-1 text-sm text-muted-foreground">Years on this road</div>
            </div>
            <div className="rounded-2xl bg-white/50 p-5 ring-1 ring-black/5">
              <div className="font-display text-3xl font-semibold text-teal">3</div>
              <div className="mt-1 text-sm text-muted-foreground">Generations of makers</div>
            </div>
            <div className="rounded-2xl bg-white/50 p-5 ring-1 ring-black/5">
              <div className="font-display text-3xl font-semibold text-gold">500+</div>
              <div className="mt-1 text-sm text-muted-foreground">Saree designs in stock</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          What's on the floor today
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              img: collectionMens,
              alt: "Men's cotton shirts and folded mundus",
              title: "Menswear",
              sub: "Shirts, mundus, veshtis",
              price: "From ₹399",
            },
            {
              img: collectionWomens,
              alt: "Hanging silk sarees in maroon and gold",
              title: "Womenswear",
              sub: "Sarees, suits, kurtis",
              price: "From ₹899",
            },
            {
              img: collectionKids,
              alt: "Bright festive kids' frocks and cotton sets",
              title: "Kids' wear",
              sub: "Festival & everyday",
              price: "From ₹299",
            },
          ].map((c) => (
            <a
              key={c.title}
              href="#contact"
              className="group rounded-2xl bg-white/55 p-3 ring-1 ring-black/5 backdrop-blur-md transition-colors duration-300 hover:bg-white/80"
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                width={800}
                height={600}
                className="aspect-[4/3] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="flex items-baseline justify-between p-3">
                <div>
                  <div className="font-display text-xl font-semibold">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.sub}</div>
                </div>
                <div className="text-xs uppercase tracking-wider text-gold">{c.price}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight">The fabric wall</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <img
            src={galleryZari}
            alt="Close-up of gold zari weave on deep maroon silk"
            loading="lazy"
            width={600}
            height={800}
            className="row-span-2 aspect-[3/4] h-full w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <img
            src={galleryTeal}
            alt="Stacked teal cotton sarees folded neatly"
            loading="lazy"
            width={600}
            height={600}
            className="aspect-square w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <img
            src={galleryTemple}
            alt="Gold temple-border saree draped over a wooden chair"
            loading="lazy"
            width={600}
            height={600}
            className="aspect-square w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <img
            src={galleryMirror}
            alt="Woman in a maroon saree trying a gold blouse at a counter mirror"
            loading="lazy"
            width={600}
            height={800}
            className="row-span-2 aspect-[3/4] h-full w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <img
            src={galleryWide}
            alt="Hanging fabric bolts in maroon, teal and gold"
            loading="lazy"
            width={1200}
            height={600}
            className="col-span-2 aspect-[2/1] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Neighbours who came back
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "Bought my daughter's wedding saree here. They matched the blouse thread by hand and kept it aside for a week. That's not online shopping.",
              name: "Kavitha R.",
              place: "Thakkolam",
            },
            {
              quote:
                "Cotton veshtis that actually last. The family knows the looms and won't sell you a polyester pass-off. Fair price, no fuss.",
              name: "Murugan S.",
              place: "Kilpennathur",
            },
            {
              quote:
                "Kids' festival sets arrived fresh and the shopkeeper remembered our sizes from last Diwali. Walked in from the station in ten minutes.",
              name: "Priya D.",
              place: "Ranipet",
            },
          ].map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-white/55 p-6 ring-1 ring-black/5 backdrop-blur-md"
            >
              <div className="text-sm font-medium text-gold">★★★★★</div>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                “{r.quote}”
              </p>
              <div className="mt-4 text-sm font-medium">
                {r.name}{" "}
                <span className="font-normal text-muted-foreground">· {r.place}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl ring-1 ring-black/5">
          <div className="grid md:grid-cols-2">
            <div className="bg-maroon p-10 text-paper">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">Come see the fabric</div>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">
                A two-minute walk from Thakkolam station.
              </h2>
              <p className="mt-4 max-w-[40ch] text-pretty text-sm leading-relaxed text-paper/75">
                Main Road, Thakkolam, Ranipet District, Tamil Nadu. Open all seven days.
              </p>
              <div className="mt-8 space-y-2 text-sm">
                <div className="flex justify-between border-b border-paper/15 pb-2">
                  <span className="text-paper/70">Mon – Sat</span>
                  <span>9:00 am – 9:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-paper/70">Sunday</span>
                  <span>10:00 am – 8:00 pm</span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-gold/85"
                >
                  Call the shop
                </a>
                <a
                  href={`https://wa.me/${PHONE.replace("+", "")}`}
                  className="rounded-full bg-teal px-6 py-3 text-sm font-medium text-paper transition-colors duration-200 hover:bg-teal/85"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
            <div className="relative bg-teal/10">
              <img
                src={mapThakkolam}
                alt="Illustrated map of the shop near Thakkolam railway station"
                loading="lazy"
                width={800}
                height={600}
                className="h-full min-h-[320px] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-paper/70 px-4 py-3 text-sm ring-1 ring-black/5 backdrop-blur-md">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="size-4 text-maroon" /> Thakkolam, Tamil Nadu
                </div>
                <div className="text-muted-foreground">5 min from the platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-maroon text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-xl font-semibold">
              Sri Periyandavar Textiles &amp; Readymades
            </div>
            <div className="mt-1 text-sm text-paper/60">
              Silk you can feel, from a shop you know.
            </div>
          </div>
          <div className="flex gap-6 text-sm text-paper/70">
            <a href="#collections" className="hover:text-paper">Collections</a>
            <a href="#gallery" className="hover:text-paper">Gallery</a>
            <a href="#contact" className="hover:text-paper">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
