import React from 'react';
import { ArticleHeader } from '@/components/editorial/ArticleHeader';
import { H2, Paragraph } from '@/components/editorial/Typography';
import { PullQuote } from '@/components/editorial/PullQuote';
import { DropCap } from '@/components/editorial/DropCap';
import { AnimatedSection } from '@/components/editorial/AnimatedSection';

export default function SakuraArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine & Aesthetic"
        title="Pink Blossoms and Fluffy Pancakes"
        subtitle="Finding a moment of Japanese-inspired calm (and a lot of pink) in the heart of Ayala Central Bloc."
        author="Christyjoy"
        publishedAt="February 2026"
      />

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <DropCap>
          It was Valentine’s Day, and Sakura Dining at Ayala Malls Central Bloc was exactly what you’d expect: packed, chaotic, and radiating a very specific shade of Japanese-inspired pink. I went with a friend for a long-overdue catch-up, and despite the 35-minute wait to be seated, it turned into one of those cute memories that sticks with you.
        </DropCap>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8">The Fluff Factor</H2>
          <Paragraph>
            The menu is a mix, but I was there for the sweets. I ordered the Chocolate Banana Pancake (₱440), and it was easily the highlight. The texture was uniquely soft and smooth—perfectly fluffy. We also tried the Creamy Pesto (₱400), which looked beautiful, but the scent was a bit too overpowering for my taste, even though the flavor itself was quite mild. 
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Field Notes: Service under Pressure">
            It was so busy that I had to press the call button multiple times just to get someone to come over so we could pay. But in a place this aesthetic, you almost don't mind the wait.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8">Designed for the Feed</H2>
          <Paragraph>
            Sakura Dining is a photo dream. From the adorable heart bench to the cherry blossom accents, every corner is a photo spot. The outdoor area features a big heart backdrop and a message heart tree where people leave notes—a perfect touch for a February 14 visit. While the seating flow and staff response time could use some refinement during peak hours, the fluffy pancakes and the cozy, Japanese-pink vibe are enough to bring me back.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location</h3>
              <p className="text-sm text-stone-600 italic">2nd Floor, Ayala Malls Central Bloc (above Metro Supermarket), Cebu IT Park.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Best For</h3>
              <p className="text-sm text-stone-600 italic">Date nights, catch-ups with friends, and anyone looking for fluffy Japanese pancakes.</p>
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
            <a href="/food" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: The Island Table</a>
            <a href="/" className="hover:text-amber-500 transition-colors">Back to Issues</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
