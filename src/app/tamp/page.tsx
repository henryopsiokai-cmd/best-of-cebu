'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function TampArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine &amp; Comfort"
        title="Tamp Cafe in Banawa: The One Peso Cake That Actually Delivers"
        subtitle="A full fresh take on Paseo Arcenas favorite, where tender beef, warm service, and a tiny fish pond turn dinner into a story."
        author="Criste Joy"
        publishedAt="February 2026"
        imageSrc="https://drive.google.com/thumbnail?id=1j5ePObO-Mp7ue3hcL8Qt3K4MHe8nXwPK&sz=w1600"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          I arrived at Tamp Cafe &amp; Co. around 7:00 PM on February 19, and the contrast was immediate. Much of Paseo Arcenas felt calm for a weekday night, but Tamp was packed and lively. Tables were full, conversations were loud in a good way, and the team still managed the room with structure. I expected a quiet midweek cafe stop and walked into one of the busiest dining pockets in Banawa.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/OEVW6neWPbE"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Tamp Cafe: The One Peso Cake
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The One-Peso Masterstroke</H2>
          <Paragraph>
            The first thing to understand about Tamp is the promo, because it shapes the whole experience. If you order one meal and one drink, you can add a cake for one peso. In practice, it does not feel like a token giveaway. The serving is generous and the quality is real, which is why people keep talking about it.
          </Paragraph>
          <Paragraph>
            I chose the Yema Cake promo slice and it came out rich, creamy, and satisfying, with a portion that felt larger than expected for a promo add on. I rated it 7.5/10. For one peso, it is a genuinely thoughtful offer and not a gimmick. It makes the meal feel complete and gives guests a reason to return with friends or family.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1EimJ5SSpFDL5_V4cGY_R80C0mZN3_few&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Interior"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1tAZiftIdiMZKOw1OeTxwhmyl05HrfKHh&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=125nKaB3y_3fyl2RLXkZl6rIoDHUZyf4-&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Food"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Beef Stroganoff Question</H2>
          <Paragraph>
            The Beef Stroganoff at ₱395 was my best order. The beef was very tender, the creamy white sauce blended well, and the overall taste felt comforting and well built. The rice was fine with a slight garlic note, while the lettuce side was fresh and bright from lemon.
          </Paragraph>
          <Paragraph>
            The weakness was balance on the plate. The beef portion felt small relative to how good it was, and the side was too simple to support it. This is a dish that could move from very good to excellent with stronger side options.
          </Paragraph>
          <Paragraph>
            I also ordered the Iced Pistachio Latte at ₱275. The aroma was strong and nutty right away, and the flavor held up if you like pistachio forward drinks. The only gap was texture, since it drank lighter than expected.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            Tamp won me over with small details that felt human, warm service, one peso cake, and a tiny fish pond that made the whole cafe feel unforgettable.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Supervisor, the Fish, and Other Small Miracles</H2>
          <Paragraph>
            Service was one of the strongest parts of this visit. We were seated right away even during a busy hour, and food arrived in about 8 minutes despite a quoted 15 to 20 minute wait. Staff friendliness was 5/5 and attentiveness 3/5, with the supervisor standing out for being warm, helpful, and genuinely engaged.
          </Paragraph>
          <Paragraph>
            When I introduced Best of Cebu, the team was curious and open. They asked questions, listened, and took my number for follow up with their office side. At the same time, the supervisor stayed professional and clear about limits without owner permission, which made the interaction feel respectful.
          </Paragraph>
          <Paragraph>
            The most unique design detail is the tiny pond near the counter. It has stones, plants, small fish in orange and blue tones, and even snails. It is simple, cute, and surprisingly memorable. That one feature gives the space personality and makes the cafe easier to remember after the meal.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Tamp Empire</H2>
          <Paragraph>
            Tamp Cafe &amp; Co. is now a familiar Cebu name with several branches across the city, and this Banawa location shows why the brand keeps growing. It combines value, speed, and warm service in a way that works for everyday diners, not just special occasion crowds.
          </Paragraph>
          <Paragraph>
            The Paseo Arcenas branch benefits from easy highway access, available parking, and a mixed crowd that includes students, families, and groups of friends. It is easy to reach, easy to recommend, and active even on nights when nearby spots are quieter.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Honest Tradeoffs</H2>
          <Paragraph>
            The gaps are clear too. There is no WiFi, no background music, and seating can feel tight once the dinner rush starts. Even with capacity around 40 to 60, the room can still feel limited because of layout pressure on busy nights.
          </Paragraph>
          <Paragraph>
            Bathroom condition was decent at 3/5. The food quality is good overall, but side options need work, especially beside strong mains like the beef stroganoff. Better side choices and a little more space would immediately improve the full dining experience.
          </Paragraph>
          <Paragraph>
            Even with those tradeoffs, Tamp gets the important parts right. Service feels human, pricing feels fair, and the one peso cake promo gives guests a reason to stay longer and come back.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Takeaway</H2>
          <Paragraph>
            Tamp Cafe &amp; Co. at Paseo Arcenas delivers a strong Banawa dining experience built on comfort food, warm staff energy, and practical value. The beef stroganoff is the dish to prioritize, the pistachio latte is a good companion, and the one peso cake promo is one of the smartest value plays in this category.
          </Paragraph>
          <Paragraph>
            Final score from this visit is 8/10. I would come back for the service, the stroganoff, and the relaxed but lively atmosphere. If they improve space flow and side options, this location gets even stronger.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
              <p className="text-sm text-stone-600 italic">Paseo Arcenas Mall, Banawa, Cebu City, Philippines • Open daily 7:30 AM to 10:00 PM • Parking available • Easy Grab or taxi access beside the main highway.</p>
              <p className="text-sm text-stone-600 mt-2">Best for solo dining, families, friends, and students • Seating capacity around 40 to 60 • Mixed indoor and outdoor setup with good air conditioning • No WiFi • Conversational noise level • Cleanliness 4/5 • Bathroom 3/5.</p>
              <p className="text-sm text-stone-600 mt-2">Best known for the one peso cake promo with one meal plus one drink, plus warm service from a well managed floor team.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">★★★★☆ (8/10) • Best order: Beef Stroganoff (₱395) • Drink pick: Iced Pistachio Latte (₱275) • Promo highlight: Yema Cake (₱1) rated 7.5/10 • Main improvements needed: stronger sides, more space, and better seating flow during peak hours.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={["1Iq2Oj5I0Qs15skCvd8faqx1Hb8zJ9TYL","1adDTSmuy5HeZ9qkdg-Pis6k9531AaQOq","1NECY_j_2iLHWLpz-3sc4UEDh7ArOpB-E","1dCdll8egZXgLX_j6vwGGZZ14VFo7S700","1C3B-jtbq_kgUj1_hF0VZ5Hy0s_Y99HFQ","1_mrWVhi4-gG1hvP7pJ2wTqLYO0vr7IMc","1XJ60JrUD6N46E2F27u1pgqlFM_NXIiRV","1gZnIgjoZlydUuFhXSoIjhzPEsXj3I_pT","17FlhTXj-A1jGs-JdsQDxk6BAtB-XWA9M","1quvJkT8m4ZqDaNcl4Mfbe6GGhchHISSY","12o4HnDAGtJbl2PkZCFhEANXSIvfrwuCT","19UAc1apQX2UsWXnRTgj0RFUQH1qYs8zy","1PjDSc9oQbRzT0EKSUoDHJP47y_Nij0-2","1pYUpEqG-huIsM5GkPtfcapakmqWvuE20","1PgbTkGMNiJiicbFYWDtTxZjlWSLXQ55y"]}
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/pukot" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Pukot Kitchen</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/gureum" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: The Half-Moon View</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
