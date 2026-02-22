'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function PukotArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine & Culture"
        title="Pukot Kitchen: A Net of Local Flavors"
        subtitle="Exploring the vibrant textures and community spirit of a Banilad hole-in-the-wall."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          Pukot Kitchen is more than just a place to eat; it is a celebration of the Cebuano spirit, woven together like a traditional fishing net. Nestled inside the quiet El Dorado Subdivision in Banilad, this hole-in-the-wall gem is the kind of discovery that makes you feel like an insider. In Cebuano, "Pukot" means net—an intentional name for a space designed to gather friends, business partners, and the local community into its welcoming atmosphere.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1GlXnxZRX2l10Q1C9fxukVnjNPW84nUKu&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1GlXnxZRX2l10Q1C9fxukVnjNPW84nUKu" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Pukot Kitchen • Banilad, Cebu City
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Comfort of Local Grit</H2>
          <Paragraph>
            The owner, Sachi, shared a story of perseverance and transformation. Though the business has been running for four years, she took over only a year ago, renovating the space with a singular focus: "comfort." This isn't just a restaurant; it’s designed to function as a work-friendly sanctuary. With free WiFi, a dedicated presentation area, and a quiet daytime vibe, it's a Study-from-Home or Business Meeting alternative that retains its soulful roots.
          </Paragraph>
          <Paragraph>
            The menu is a testament to the local bounty. I ordered the Salisbury Steak (₱399), which features a generous portion and a gravy that is unapologetically Filipino-palate friendly. For a refreshing finish, the Mango Shake (₱225) avoids the syrupy pitfalls of mall chains, delivering the authentic, crunchy-ice sweetness of real mango. It's unpretentious, bold, and deeply satisfying—the kind of food that reminds you why the "comfort" label fits so well here.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1y8jiUByV_-C-xU-8mgiq4AKwyaHE4YWN&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Pukot Interior"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=14TyvAmh-_Xp9xUzN5h1H_QiPgR6FUt5l&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Pukot Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1-FZWmhy6zWFaiI0QU_lmDdqqMcV2pHxd&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Pukot Food"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            Pukot Kitchen is a place that reminds you of why we love the flavors of our home. It connects people, strengthens relationships, and serves the best of our city with genuine warmth.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">#4 Adelfa St, El Dorado Subdivision, Banilad, Cebu City. A bit secluded—follow the subdivision signs.</p>
              <p className="text-sm text-stone-600 mt-2">Open Daily 11:00 AM – 10:00 PM. IG: @pukotkitchen</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8/10. A masterclass in hole-in-the-wall comfort. Parking is a struggle, but the steak and the owner's story are well worth the subdivision navigation.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1y8jiUByV_-C-xU-8mgiq4AKwyaHE4YWN",
            "14mI0Bp6TYddqvD5gBY594qwqS8sULhPY",
            "14TyvAmh-_Xp9xUzN5h1H_QiPgR6FUt5l",
            "1-FZWmhy6zWFaiI0QU_lmDdqqMcV2pHxd",
            "1LriHVX8hXyQlTYVCpgm1lQT7zLiQMlql",
            "11bFrp9ixWLPfvEuUioyVWxXMpejgTE6s",
            "1Iz5_E_n-3SMmvsyVKGQGL8xQWi4heqgB",
            "1ABszuZYeCHmKUJnY9qB7VZ-jL11XAJ0c",
            "18Qq2uquhE-Ni18ApC71ctQH4J1RnFOOV",
            "1446a5wP9xquc7ZiVU-2eM9QGjBIJvEAb",
            "1GeskliLnBluubJ7DjNoLyrXPBXYZmw-d",
            "1I9e6lGyRk8V7A7eZqEavVCs7cmmSqQYs"
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/hatte" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Hatte Cafe</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/tamp" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Tamp Cafe</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
