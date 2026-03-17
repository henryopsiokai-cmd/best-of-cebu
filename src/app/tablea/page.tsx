'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function TableaArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cacao Traditions"
        title="The Cacao Ritual"
        subtitle="A grounded Cebu visit to JY Square where Filipino cacao tradition still leads the menu."
        author="Criste Joy"
        publishedAt="February 2026"
        imageSrc="https://drive.google.com/thumbnail?id=1E5tqV782jMV13U6mUXRyVx0ahK4vf4jV&sz=w1600"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          I visited Tabléa Chocolate Cafe on February 12, 2026, at the ground floor of JY Square on Salinas Drive, just near McDonald&apos;s. The space is small, quiet, and business like, so it feels less like a trendy cafe and more like a practical stop for people who want to sit down and focus. I came for one reason: to see if their traditional sikwate still delivers the kind of Filipino cacao experience people talk about.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/3DJPA5N3Su8"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Tablea Chocolate Cafe: The Cacao Ritual
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Sikwate Standard</H2>
          <Paragraph>
            I ordered the Special Set for ₱175, which includes sikwate, fresh mango, and puto maya. As a value order, it is worth trying because you get a full snapshot of their traditional pairing in one tray. The mango leaned sour on this visit, and the puto maya was served warm but not fresh enough to hold its best texture.
          </Paragraph>
          <Paragraph>
            The sikwate carried the whole set. It was thick, deep, and balanced, and easily the best tableya based drink I have had in Cebu so far. This is where Tabléa stands out. In a city crowded with coffee concepts, it still centers Filipino cacao without apology and does it with real quality in the cup.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
            {[
              "1s1Y4nFqAzq3Wo1F4rNQuWOi3OH7hD5CQ",
              "10mspYEJA01lZ_CCnYSJsb5e-GJm_kjF0",
              "1Ro_bw6TN80T69Yy4QBFlOTfSHge7V5hC",
              "1r_gI840N2MhUUhcJrznD_79B8dC-xjUj"
            ].map((id, i) => (
              <div key={id} className="aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden relative group border border-stone-200 shadow-sm">
                <img 
                  src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={`Tablea Gallery ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            I took so many photos of the counter and the food that people started staring, but preserving this kind of Filipino cacao story is worth the awkward moment.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Quiet Craft</H2>
          <Paragraph>
            Service was fast from the start. Seating was immediate, and the order arrived in about five minutes. Staff friendliness was around 3 out of 5, but attentiveness was lower at 1 out of 5, especially for follow through after the food landed. The team was accommodating for photos, though, which made content capture easy.
          </Paragraph>
          <Paragraph>
            The room fits around 15 people, with air conditioning and a conversational noise level that works for work sessions and short meetings. There is no WiFi and no background music, and the layout plus chairs could still be improved. Even with those gaps, I would still come back for the sikwate alone. If you are visiting for the first time, focus on the counter and food details because that is where the Filipino tradition is most visible.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
              <p className="text-sm text-stone-600 italic">Ground Floor, JY Square, Salinas Drive, Cebu City 6000 • Open daily 8:00 AM to 8:00 PM, except holidays • Parking available • Easy taxi access near the main road • Near McDonald&apos;s.</p>
              <p className="text-sm text-stone-600 mt-2">Best for work from cafe sessions and meetings • Seating about 15 • Air conditioned • WiFi: none • Noise level: conversational • Cleanliness: 3/5.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">★★★☆☆ (7/10) • Best order: Special Set (₱175), mainly for the sikwate • Sikwate: standout • Mango: a bit sour • Puto Maya: weakest item • Main improvements needed: table layout, better chairs, WiFi, and background music.</p>
              <p className="text-sm text-stone-600 mt-2">Contact: 0968-694-4871 • Instagram: tableachocolateph • Facebook: Tablea Chocolate.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={["1UjqrMjoW9mMIOmjEQ-_5saQDnNbirKFb","1FdHa_mk7WCgPBVoDcXHYRYtuIDUoE1Jk","1uBQnglxog2hiiV4pykcNWxzsg7_fOewQ","1TCbs6pyu0MoyLOztHHppucZAI_B6u5C5","1pKSBNTJu5rSUjERQn9vGxGZ19oIyZdba","10wHa8WAKH-QjhFExFrmi6tIPS-Fb5M-b","1mVYs-Cz6gEVkE1IGaG0aoXczHolMxvcj","1QDA1tBMv1G2hMURmTakS2LdTa8bD9ekG","1dvX4cofjodAutr2s9cpi5NBnl988jpJl","1Nx7oO02kbOPO3Tcv1XQU3Yf2YTroA0bJ"]}
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/gureum" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: The Half-Moon View</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/amato" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Amato</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
