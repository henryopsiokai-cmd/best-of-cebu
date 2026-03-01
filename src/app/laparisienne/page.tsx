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
        title="La Parisienne Cebu: A Romantic Escape on Gorordo Avenue"
        subtitle="A Lahug destination where atmosphere, dessert, and thoughtful design details turn an ordinary dinner into an occasion."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24 -mt-4 md:-mt-6">
        <DropCap>
          On paper, La Parisienne sits on one of the busiest stretches in Lahug. In person, it feels like a pocket world. The traffic noise fades fast, the lighting softens the whole room, and you immediately understand why people come here for long conversations instead of quick meals. It is one of those Cebu places that changes your mood before your food even arrives.
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
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">A Room Built for Lingering</H2>
          <Paragraph>
            The layout is part of the reason this place works. You get indoor seating for comfort, an outdoor section for people watching, and a rooftop area that becomes the emotional center once evening settles in. Many diners still remember the older La Vie naming, but the current La Parisienne identity feels sharper and more focused. The concept is Paris inspired, but it still feels grounded in Cebu nightlife culture where groups stay late and conversations stretch.
          </Paragraph>
          <Paragraph>
            Timing matters. Around 5:00 PM to 6:00 PM gives you first pick of seats and the best transition from daylight to city lights. By peak dinner, it gets crowded and louder, but the music and lighting still keep the room intimate enough for proper conversation.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m&sz=w1600"
                alt="La Parisienne facade and first impression"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1b7YpR9VUesTsuZLkpyR1gfxhqhMR7W82&sz=w1600"
                alt="La Parisienne hidden bookshelf bathroom entrance"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Design That Feels Personal</H2>
          <Paragraph>
            A lot of themed spaces can feel forced. This one does not. The wine wall, curved architectural details, and warm amber tones feel consistent from section to section. Even details that are obviously photo friendly, like the Eiffel Tower feature and rooftop corners, still read as part of the identity instead of visual gimmicks.
          </Paragraph>
          <Paragraph>
            The bathroom is a standout detail worth calling out clearly. Cleanliness is 5 out of 5, and the entrance is disguised as a bookshelf, which is a fun surprise the first time you see it. It sounds like a small touch, but it captures what La Parisienne does well. It blends romance, playfulness, and thoughtful design in ways that guests actually remember.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            What keeps people coming back is not only how it looks, but how complete the whole experience feels from arrival to dessert.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Food Notes From This Visit</H2>
          <Paragraph>
            Service timing was fast for this visit. Seating was immediate, and food landed in about 5 to 10 minutes. The order was Spaghetti Meatballs (₱450), Water (₱60), and Dark Chocolate Gelato (₱175). The spaghetti came in at 7.8/10. The sauce and meatballs carried most of the flavor, and the dish worked as straightforward comfort food.
          </Paragraph>
          <Paragraph>
            The Dark Chocolate Gelato was the strongest plate by a clear margin at 9.3/10. Texture, consistency, and richness were all excellent without becoming heavy. If you are building your first order here, dessert should be non negotiable.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1KMv1w73XVTR8qV6uIo-P2cBBqaNj5rKS&sz=w1200"
                alt="Dessert and table styling at La Parisienne"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1u_9Bp1KVC-8446wlZmZMR7ulZTNJVXHe&sz=w1200"
                alt="Ambient corner at La Parisienne"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1Aq7hbwLJFjiXy-aHWoyFUzWCQsDHeo8w&sz=w1200"
                alt="Night atmosphere at La Parisienne Cebu"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Final Assessment</H2>
          <Paragraph>
            La Parisienne is best for people who care about atmosphere as much as menu choices. It works for couples, friends, solo diners, and even families because the space offers options instead of forcing one dining style. The strongest feature is still the emotional tone of the place. Cozy, romantic, and homey is an accurate summary.
          </Paragraph>
          <Paragraph>
            Improvement areas are clear too. Staff friendliness sits around 2 to 3 out of 5, attentiveness around 2 out of 5, and these dips are more noticeable during busy periods. PisoNet WiFi is available, but it is not ideal for long work sessions. More high protein options would also strengthen the menu for repeat customers.
          </Paragraph>
          <Paragraph>
            Overall score: 8.7/10. If you want a Cebu restaurant that feels cinematic but still accessible, La Parisienne remains a strong pick in Lahug.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
              <p className="text-sm text-stone-600 italic">371 Gorordo Ave, Lahug, Cebu City 6000. Near UP Cebu with easy drop off access for Grab and taxi riders.</p>
              <p className="text-sm text-stone-600 mt-2">Mon to Thu: 9:00 AM to 1:00 AM. Fri to Sun: 9:00 AM to 2:00 AM. Prime visit window is 5:00 PM to 6:00 PM.</p>
              <p className="text-sm text-stone-600 mt-2">Seating: indoor, outdoor, and rooftop. WiFi: PisoNet access. Parking is available but can fill quickly at peak dinner hours. Bathroom: 5/5 cleanliness, with a hidden bookshelf style entrance.</p>
              <p className="text-sm text-stone-600 mt-2">Phone: 0999 885 4318 • IG: @laparisiennecebu • FB: La Parisienne CEBU</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">★★★★☆ (8.7/10) • Price: ₱₱₱. Best order: Dark Chocolate Gelato (₱175) at 9.3/10. Spaghetti Meatballs (₱450): 7.8/10. Best for couples, friend catch ups, solo reset nights, and family dinners. Main drawback: service warmth and attentiveness can dip during high traffic periods.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={["1dfQbYclFftuselKFte0lgUDElKFeGnoy","1GS9AsKEAwENjs_bv-0THikccNRgzjDI7","1Q_LfawLJ3ST5S4ihYJXIfFihHpwdW7wq","1qfN6a_SReXCavRvft6ftxLLfNFrF-eAT","1SQFmaaTgM7XPpuLSoOQCSNW9J6oZBb-_","1s0ItKtySUAOjSt2QkKdeG9K2ypmGEgRG","10Q7N5j5G4egWJHroeQOYSd7N811TTSuQ","1wK1EJ0QYXEz-abPizhh0C9psH9IsErgC","1hXOpGm8JcI6E0aeBx7yIyAOWBEgD9uO6","1iOOB2a7N-r-qsxoRD_d4kT-X3AgqJcl2","1VhpJQwXdvmemqlQhkUsrFnQ3pSOosLNl","10bbvk30Ty38M3fVqvYClI3cuzmNYMwfg","1SThsmTXxLxJLC5ApuX4NStIrzw8-JyoU","1jaRiirbX0Bw3RB53gPrHUCo4DiXUr5Wn","1wIeDhHnRQZilfXNVsfKWUIoomlgMrTiS","1r-Eh641GmsufX3dKqa492w7QghQfODeD","1oV7D5dboqxxZ6Vkq2v5mRdx_uRN3iCIL","1ZBca0S-q674-Id_Q_4e1etzwwabpnuCX","1BR-c7R4CxozACApzclUy_ABkygkHIC_C","18HbxTiPHtj6YaryM8fEbtGa848c5GRV0"]} 
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
