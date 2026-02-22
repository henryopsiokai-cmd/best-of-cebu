'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function LaParisienneArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine & Ambiance"
        title="French Soul in the Heart of the Queen City"
        subtitle="Exploring the timeless charm and buttery layers of La Parisienne Cebu."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          Stepping into La Parisienne Cebu is less of a dining choice and more of a temporal shift. Nestled in the historic enclave of Lahug, this bakery-bistro is a monument to the Gallic art of living, where the aroma of fresh-baked baguettes and the clink of wine glasses create a symphony that feels miles away from the humidity of the city.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1uHOgSLbHReFbbDDm9FXxdhHYl9FcRPQW&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1uHOgSLbHReFbbDDm9FXxdhHYl9FcRPQW" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              La Parisienne Interior • Cebu City
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Patisserie Standard</H2>
          <Paragraph>
            The display cases at La Parisienne are a dangerous place for the uninitiated. Rows of jewel-toned macarons, éclairs that glisten with dark ganache, and golden-brown croissants that promise a thousand shatter-crisp layers are the real protagonists here. 
          </Paragraph>
          <Paragraph>
            Each pastry feels like a piece of quiet craftsmanship—a technical achievement of butter and flour that respects the traditional French methods while embracing the local Cebuano spirit of gathering. Whether it's a mid-morning espresso with a pain au chocolat or a long afternoon shared over a charcuterie board, the quality remains consistent: unapologetically classic.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="La Parisienne Setting"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1X7hRsNRM-WVY7ka6mfKVb-EZD3NvV_u8&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Pastry Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1KMv1w73XVTR8qV6uIo-P2cBBqaNj5rKS&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Dining Detail"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            In the soft glow of the bistro’s lights, the city’s traffic feels like a distant memory, replaced by the buttery scent of a life lived at a slower pace.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <Paragraph>
            Beyond the sweets, the savory menu offers a robust exploration of bistro staples. From the creamy richness of a well-executed quiche to the crisp freshness of a niçoise salad, there is a commitment to ingredients that elevates the experience above your standard cafe fare. It is a place that understands the value of ambiance—where the decor, the service, and the plate all work together to tell a story of refined comfort.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1OgAhoB4FHDeOo76323EkliXG0L10NUNU&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1OgAhoB4FHDeOo76323EkliXG0L10NUNU" type="video/mp4" />
            </video>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">371 Gorordo Ave, Cebu City. A true neighborhood staple.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8/10. An essential destination for anyone seeking the perfect croissant or a quiet corner that feels like a European getaway.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m",
            "1X7hRsNRM-WVY7ka6mfKVb-EZD3NvV_u8",
            "1KMv1w73XVTR8qV6uIo-P2cBBqaNj5rKS",
            "1T-qeXsKy8RXevtPXRLsfdx1O_EJiRJn9",
            "1UTIHUCYxu7s9NHHYbWN5DrV2ohkrPdbG",
            "1rmzukoVjgV_NkpHXzn54DEG6gUMse4uo",
            "1oS8PRE59vv7TIXXgLF907zZxgeAoIQyU",
            "1aIIzg46iygKp28fWrVvfNcNYKecETyU0",
            "1LPulHkltrPkNeVa-SNiGuEJ9as2W2iXg",
            "1u2vcC4Ztz9gY9vh70QBbqr_gB5Br1dC-",
            "1yeMeGqljlpM4__xgkFg5IdURcoLS_esm",
            "1PuCYx4GtHBt7wwKXWpEIC3hkQNnbCP4X"
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/sakura" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Pink Blossoms</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/hatte" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Hatte Cafe</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
