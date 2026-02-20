'use client';

import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';

export default function GureumArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Coffee & Chill"
        title="The Half-Moon View"
        subtitle="How a Korean expat turned an empty mall corner into Banilad's most relaxing hideout."
        author="Christy Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          I found Gurium (Gureum) Cafe and Bar tucked away on the second floor of Gaisano Country Mall in Banilad, near the Chinese restaurant and just a stone's throw from the University of Cebu. Walking in, the vibe is immediate: chill, cozy, and profoundly relaxing. It’s the kind of place where you can fully relax, stretch your legs, and lounge comfortably—a rare find in a bustling city where seating usually prioritizes turnover over the actual human experience of comfort.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://lh3.googleusercontent.com/d/1WxtXwAIXBNvFygh8isE61-QIngWApWbR"
            >
              <source src="https://lh3.googleusercontent.com/d/1WxtXwAIXBNvFygh8isE61-QIngWApWbR" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              The Lounge View • Banilad
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">A Window with a Purpose</H2>
          <Paragraph>
            The owner’s story is one of my favorite parts of this discovery. Felicia, a Korean woman who has lived in the Philippines for three years, found this space when it was empty and poorly structured. Most would have seen a difficult renovation, but she saw potential in one key feature: a big window with a half-moon design. Felicia told me that people often travel far to the countryside just to find a great view, but with this window, they can enjoy the streets, the parking lot, and the rhythm of the city right from their seat. 🌙
          </Paragraph>
          <Paragraph>
            She started the business just seven months ago and comes in every single day to manage it. That hands-on spirit is evident in the vibe; she’s friendly, calm, and clearly invested in the experience of her customers. She shared that starting her first business was a struggle, but her motivation was simple: giving people a place to truly "chill" and experience a view that makes them forget they're inside a mall.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/1GkOx4UYPQm1eNW4-oY8-t15L9WqIubTZ" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Gureum Interior"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/1WzTKTb1uOgmskLhAEzhrYq6CTOMN0UTF" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Marshmallow Choco Detail"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            "I struggled at first starting this business, but my motivation was giving people a place to chill and experience a great view."
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://lh3.googleusercontent.com/d/1mKOvFS0BoNzATWWlmkfC9G5Niw399pK8"
            >
              <source src="https://lh3.googleusercontent.com/d/1mKOvFS0BoNzATWWlmkfC9G5Niw399pK8" type="video/mp4" />
            </video>
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Table Experience
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Best Picks</H2>
          <Paragraph>
            The food and drink felt like "best picks" from the owner herself. I ordered the Carbonara with Garlic Baguette (₱340), which arrived in a record 8 minutes. It was served hot with an uncooked egg on top that blended beautifully into the creamy, milky richness of the pasta as I stirred it. It’s a perfect dish if you love that rich, savory egg flavor—though note it does contain pork.
          </Paragraph>
          <Paragraph>
            I also tried the Iced Marshmallow Choco (₱180), which was surprisingly unique. The marshmallows tasted lightly grilled, adding a smoky depth to the drink. My tip: stir it well to blend the chocolate from the bottom with the marshmallows on top. It’s a satisfying, layered experience that matches the lounge's cozy energy.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-16">
            {[
              "1WxtXwAIXBNvFygh8isE61-QIngWApWbR",
              "1mKOvFS0BoNzATWWlmkfC9G5Niw399pK8",
              "1_fPU4DqStSjBtN-u8UBGsqOcBV9tRjru"
            ].map((id, i) => (
              <div key={i} className="aspect-square bg-stone-100 overflow-hidden">
                <video className="w-full h-full object-cover" muted loop onMouseOver={e => e.currentTarget.play()} onMouseOut={e => e.currentTarget.pause()}>
                  <source src={`https://lh3.googleusercontent.com/d/${id}`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Takeaway</H2>
          <Paragraph>
            Gurium isn't just a cafe; it’s a study in how to make a commercial space feel like home. With fast WiFi, friendly staff, and a stay policy that allows for a generous 2.5 hours before needing to re-order, it’s a haven for students and digital nomads. The seating isn't just functional; it’s designed for lounging. You can relax like you’re in your own living room, watching the world go by through that half-moon window. I’ll definitely be back—it’s the perfect spot for when you need to recharge and actually feel comfortable.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Service Note</h3>
              <p className="text-sm text-stone-600 italic">Very friendly staff (Rating: 5/5) and record-fast service (~8 mins). Perfect for a quality lunch or a long study session.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Policy & Vibes</h3>
              <p className="text-sm text-stone-600 italic">2.5 hour stay limit. Vibe: Chill, Cozy, Relaxing. IG: @gureumcafe • FB: Gureum cafe & bar</p>
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
