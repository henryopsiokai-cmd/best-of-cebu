import React from 'react';
import Link from "next/link";
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Card } from '../../components/editorial/Card';

export default function FoodArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine"
        title="The Island Table"
        subtitle="Beyond the roast. Exploring the new wave of Cebuano cafes and hidden culinary laboratories."
        author="Criste joy"
        publishedAt="February 2026"
      />

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <DropCap>
          If lechon is the undisputed king of the Cebuano table, then a new generation of boutique cafes and bars is building the parliament. From the quiet cacao traditions at JY Square to the "outside view" windows of Banilad, our palate is expanding far beyond the smoke of the roasting pit.
        </DropCap>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8">The Tradition of Tablea</H2>
          <Paragraph>
            My journey began at Tabléa Chocolate Cafe in JY Square. It’s a quiet, traditional space, perfect for work or a business meeting, but the real draw is the heritage. I ordered the Special Set—Sikwate, Mango, and Puto Maya. While the mango was a bit sour and the puto maya lacked the texture I hoped for, the Sikwate was a revelation. It was the best I’ve ever had—perfectly thick and a true testament to our cacao traditions. I spent so much time taking photos of the counter that people started staring, but the quality of the cuisine is their best advertisement.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Felicia, Owner of Gureum">
            "People love views so much that they travel to the countryside just to find one, but with this window, they don’t need to travel."
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8">The Half-Moon View</H2>
          <Paragraph>
            In Banilad, at Gaisano Country Mall, I met Felicia, the Korean owner of Gureum Cafe & Bar. She’s lived here for three years and built this space around a single feature: a large window with a half-moon design. It gives you an "outside view" feeling of the streets and parking lot while you lounge in comfortable, home-like seating. The service was fast—my Carbonara arrived in just 8 minutes—and the Marshmallow Choco, with its lightly grilled marshmallows, was a unique find. It's a place where you can truly stretch your legs and stay for hours.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 space-y-8">
            <div className="p-8 border-l-4 border-amber-600 bg-stone-50 rounded-none shadow-sm font-sans">
              <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-amber-700">Valentine's at Sakura Dining</h3>
              <Paragraph className="text-sm">
                I visited Sakura Dining at Ayala Malls Central Bloc on February 14. The vibe was "Japanese pink" and the place was packed. Despite the 35-minute wait, the Chocolate Banana Pancake was worth it—so soft and smooth. The outdoor area is a photo dream, with a heart backdrop and a message tree where people leave notes. It’s chaotic during peak hours, and I had to hit the call button multiple times just to pay, but for a catch-up with a friend, it was a cute memory.
              </Paragraph>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Paragraph>
            The real "Best of Cebu" isn't just about the food; it's about these moments of connection—the owner-recommended "best picks," the silent craftsmanship in a cup of chocolate, and the ambition of people like Felicia who turn empty spaces into monuments of chill. Our city is growing, and its table is getting bigger every day.
          </Paragraph>
        </AnimatedSection>
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/lechon" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: The Lechon Pilgrimage</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/sakura" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Pink Blossoms and Pancakes</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
