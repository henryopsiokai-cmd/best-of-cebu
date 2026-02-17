import React from 'react';
import { ArticleHeader } from '@/components/editorial/ArticleHeader';
import { H2, Paragraph } from '@/components/editorial/Typography';
import { PullQuote } from '@/components/editorial/PullQuote';
import { DropCap } from '@/components/editorial/DropCap';
import { AnimatedSection } from '@/components/editorial/AnimatedSection';

export default function TableaArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cacao Traditions"
        title="The Cacao Ritual"
        subtitle="Exploring the quiet heritage of Filipino chocolate at JY Square."
        author="Christyjoy"
        publishedAt="February 2026"
      />

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <DropCap>
          I found Tabléa Chocolate Cafe on the ground floor of JY Square in Salinas Drive. It is a quiet, traditional space that feels more business-like than a typical cozy cafe—perfect for work-from-cafe sessions or meetings. But I wasn't there for the WiFi (they don't have any); I was there for the chocolate.
        </DropCap>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8">The Sikwate Standard</H2>
          <Paragraph>
            I ordered the Special Set (₱175), which includes Sikwate, fresh mango, and Puto Maya. The mango was a bit sour and the Puto Maya didn't quite hit the mark for me in terms of texture, but the Sikwate was a revelation. It was the best tableya I’ve ever had—perfectly thick and rich. It’s clear they take their cacao traditions seriously here.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Notes from the Field">
            I spent so much time taking photos of the counter and the food that people started staring. But in a city of mass-produced coffee, seeing someone commemorate Filipino cacao tradition is worth the attention.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8">Quiet Craft</H2>
          <Paragraph>
            The service was immediate, and my order arrived in just five minutes. While the staff couldn't share much about the shop's history and there was no owner on-site, the quality of their cuisine serves as their most effective advertisement. I recommend focusing on the counter—it beautifully commemorates our local traditions even in a relatively small space. 
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Highlight</h3>
              <p className="text-sm text-stone-600 italic">The Sikwate (Tableya drink). Perfectly thick and authentic. Easily the best thing on the menu.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Vibe</h3>
              <p className="text-sm text-stone-600 italic">Quiet, traditional, and business-like. Great for work if you don't need internet.</p>
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
            <a href="/gureum" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Gureum Cafe & Bar</a>
            <a href="/" className="hover:text-amber-500 transition-colors">Back to Issues</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
