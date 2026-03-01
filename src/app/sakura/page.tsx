'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function SakuraArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine & Aesthetic"
        title="Pink Blossoms and Fluffy Pancakes"
        subtitle="A Valentine visit to Sakura Dining in Cebu IT Park, where fluffy pancakes, pink interiors, and crowd day chaos all land in one memorable meal."
        author="Criste Joy"
        publishedAt="February 2026"
        imageSrc="https://drive.google.com/thumbnail?id=1ttkMNUMItqVYmdDjEtSTyq1sawCUAGBG&sz=w1600"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          Valentine&apos;s Day is not the easiest time to judge a restaurant fairly, but it does reveal what a place feels like under pressure. Sakura Dining at Ayala Malls Central Bloc was full, loud, and visibly stretched. I came with a friend for a long catch up, and we waited around 30 to 35 minutes before getting seated. By the time we settled in, the room still delivered what people come for: a cozy Japanese pink aesthetic, a crowd that treated dinner like an event, and a setting that instantly felt like Cebu IT Park date night.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/Ik1FpM7f1-w"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Sakura Dining Exterior • Cebu IT Park
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Fuwari Fluff Factor</H2>
          <Paragraph>
            The menu covers both savory and sweet options, but the reason most people come here is obvious after one bite of the Chocolate Banana Pancake (₱440). It was the best item we ordered, and it carried the table from first spoonful to last. 
          </Paragraph>
          <Paragraph>
            The pancake texture is extremely soft and smooth, closer to a cloud like souffle style than a standard dense stack. Chocolate and banana were balanced, not overly sweet, and the plating looked polished without feeling forced. For a dish that gets a lot of social media attention, it still earns its reputation in person.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://drive.google.com/thumbnail?id=1PpG_XkRhmmbqRVdl0RlKOrAwxy9e6qA7&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sakura Pink Interior"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://drive.google.com/thumbnail?id=1gxEp5BoMgnCL9YlKT9qxoPe7XA20Hqwt&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sakura Table Setting"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://drive.google.com/thumbnail?id=1T5l5McKM2JxPggenRObvKnK4brLX-Mmj&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sakura Pancakes"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Paragraph>
            We also ordered the Creamy Pesto (₱400) to balance the sweetness. This was the weaker plate. It looked great and the flavor itself was mild and acceptable, but the smell was very strong when it arrived. That first aroma was overpowering enough to affect the overall experience, which is why it landed as the least favorite item for this visit.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            On packed nights, Sakura can test your patience first and reward you second.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/Nn-T9lsQGAo"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Table Detail & Food
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Aesthetic Architecture</H2>
          <Paragraph>
            The space is one of Sakura&apos;s biggest strengths. Seating is around 25 to 30 people, with indoor and outdoor areas under full air conditioning. On ordinary days it likely feels relaxed, but on major occasions it can shift into crowd mode quickly. The design language is consistent across the room, with cherry blossom details, soft pink tones, and the heart bench that many guests use as their main photo anchor.
          </Paragraph>
          <Paragraph>
            The outdoor zone adds another layer with a large heart backdrop and a message heart tree where people leave notes. It is a smart, local friendly touch that turns dinner into something more social and memorable. Service remains the weak point during peak periods. Food took around 20 to 30 minutes, staff attentiveness was around 2 out of 5, and we had to press the table call button multiple times before someone came to process payment.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <Paragraph>
            For guests who value atmosphere, photos, and dessert as much as the main course, Sakura remains one of the more distinctive stops in IT Park. I would come back mainly for the pancakes and the cozy vibe, and I would recommend it to couples, friend groups, and anyone who enjoys aesthetic Japanese style dining. The best strategy is simple: avoid peak rush if possible, then settle in and let the experience unfold.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">Ayala Malls Central Bloc, Cebu I.T. Park, Padriga Street, Apas, Cebu City 6000, Philippines. 2nd Floor above Metro Supermarket. Open daily 10am to 9pm.</p>
              <p className="text-sm text-stone-600 mt-2">Phone: 09660738063 • Email: fuwari.ayalait@gmail.com • IG: @sakura.ayalait • FB: Sakura Dining Ayala Central Bloc</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">★★★☆☆ (7/10) • Best order: Chocolate Banana Pancake (₱440) • Price range: ₱500 to ₱1000 • Main friction points: wait times and slower staff response during crowded periods • No WiFi available.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={["1PpG_XkRhmmbqRVdl0RlKOrAwxy9e6qA7","1gxEp5BoMgnCL9YlKT9qxoPe7XA20Hqwt","1T5l5McKM2JxPggenRObvKnK4brLX-Mmj","1M-RvM9a-bSE6e33LSfWHdrYpfyI98cwS","1K791V7YMwsNW7cAMK3Uvay_YYQkQmXO9","1YcNphN2FYIKVN5BnfWa8l3o3zHjkVQuj","1KVrTvadNYCsEw0dMAaHV4QHIzJ149I9r","1ft-PhXUC-bfeAbF7WMiSFUmBQ2R7jOFx","10rbhUacH-TW9ZTv-kBu7OJ-3Kp6bUwLb","1EfYSPEv5PpdKU9FPl9yUj1WuDv2edyEe","1FjXl9rlSBJQIlQXMHFbIrtdN6HKC15TY","1Ns7fGbSkp-sxK2zATNZ4QSkckPRcVQNU","1LTRdvijVFrF_ZOy-D-AeaZYWF9sTKsv-","1bc-abCC9mqWu_7Qjbk98Jns39XFEvO7e"]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/tamp" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Tamp Cafe</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/laparisienne" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: French Soul</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
