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
        subtitle="Exploring the disarming charm and cinematic romance of La Parisienne Cebu, where Gorordo Avenue fades into a Parisian dream."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          There is a specific moment when you arrive at La Parisienne Cebu where the world simply shifts. Located at 371 Gorordo Avenue in the Lahug district, the establishment sits right along the highway, making it remarkably easy to reach by Grab or taxi. However, the proximity to the busy road is forgotten the second you step inside. The transition is immediate and profound. You leave behind the heat and the humidity of the city and enter a space that feels like a romantic escape from a classic film. It is a place designed for soft feelings and slow conversations.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/TtWfYsJ9WzE"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Atmospheric View
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Practical Information</H2>
          <Paragraph>
            La Parisienne Cebu is open daily, with hours extending until 1:00 AM on weekdays and 2:00 AM on weekends. This makes it a great late-night destination for those who aren't ready for the evening to end. Parking is available, though it can become limited during the popular evening hours. If you are looking for a specific "main character" seat, it is best to arrive around 5:00 PM before the dinner crowd takes over.
          </Paragraph>
          <Paragraph>
            Whether you are visiting for a first date, a long talk with friends, or a solo contemplation of life, this little corner of Lahug offers a sanctuary that is hard to find elsewhere. It is a place that reminds you to love "love" again, starting with yourself.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Details</h3>
              <p className="text-sm text-stone-600 italic">371 Gorordo Ave, Lahug, Cebu City 6000. Located by the highway, near UP Cebu. Easy Grab drop-off.</p>
              <p className="text-sm text-stone-600 mt-2">Mon–Thu: 9:00 AM – 1:00 AM. Fri–Sun: 9:00 AM – 2:00 AM. WiFi: PisoNet. Parking: Available.</p>
              <p className="text-sm text-stone-600 mt-2">IG: @laparisiennecebu • FB: La Parisienne CEBU</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8.7/10. An essential romantic escape in Cebu City. The dark chocolate gelato is world-class, the bookshelf bathroom is a delight, and the atmosphere is thick with cinematic charm. A few service improvements would make it flawless, but it remains a must-visit for anyone who believes in the art of the slow conversation.</p>
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
