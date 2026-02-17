import React from 'react';
import { ArticleHeader } from '@/components/editorial/ArticleHeader';
import { H2, Paragraph } from '@/components/editorial/Typography';
import { PullQuote } from '@/components/editorial/PullQuote';
import { DropCap } from '@/components/editorial/DropCap';
import { AnimatedSection } from '@/components/editorial/AnimatedSection';

export default function GureumArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Coffee & Chill"
        title="The Half-Moon View"
        subtitle="How a Korean expat turned an empty mall corner into Banilad's most relaxing hideout."
        author="Christyjoy"
        publishedAt="February 2026"
      />

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <DropCap>
          I found Gurium (Gureum) Cafe and Bar on the second floor of Gaisano Country Mall in Banilad. Walking in, the vibe is immediate: chill, cozy, and relaxing. It’s the kind of place where you can fully relax, stretch your legs, and lounge comfortably—a rare find in a bustling city like ours.
        </DropCap>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8">A Window with a Purpose</H2>
          <Paragraph>
            The owner’s story is one of my favorite parts of this discovery. Felicia, a Korean woman who has lived in the Philippines for three years, found this space when it was empty and poorly structured. She saw potential in one key feature: a big window with a half-moon design. Felicia told me that people often travel far to the countryside just to find a great view, but with this window, they can enjoy the streets and the scenery right from their seat. 
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Felicia, Owner of Gureum">
            "I struggled at first starting this business, but my motivation was giving people a place to chill and experience a great view."
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8">The Best Picks</H2>
          <Paragraph>
            The food and drink felt like "best picks" from the owner herself. I ordered the Carbonara (₱340), which arrived in a record 8 minutes. It was served hot with an uncooked egg on top that blended beautifully into the creamy, milky richness of the pasta—perfect if you love that rich egg flavor. I also tried the Iced Marshmallow Choco (₱180). The marshmallows felt lightly grilled, adding a unique smokiness to the chocolate. Tip: stir it well to blend the chocolate from the bottom with the marshmallows on top.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Service Note</h3>
              <p className="text-sm text-stone-600 italic">Fast service (~8 mins) and very friendly staff. They have usable WiFi, making it great for study or work sessions.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Policy</h3>
              <p className="text-sm text-stone-600 italic">2.5 hour stay limit, after which you'll need to place another order to keep lounging.</p>
            </div>
          </div>
        </AnimatedSection>
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <a href="/sakura" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Sakura Dining</a>
            <a href="/" className="hover:text-amber-500 transition-colors">Back to Issues</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
