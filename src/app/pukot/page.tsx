'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function PukotArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine &amp; Culture"
        title="Pukot Kitchen: A Net of Local Flavors"
        subtitle="Inside a subdivision in Banilad, a restaurant named after a fishing net is quietly weaving together community, comfort food, and one owner's hard-won philosophy on perseverance."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          You will almost certainly get lost the first time you try to find Pukot Kitchen. This is not a criticism — it is part of the experience. The restaurant sits at #4 Adelfa Street inside El Dorado Subdivision in Banilad, a quiet residential enclave a few walks from the University of Cebu's Banilad campus and not far from the Nuat Thai Foot and Body Massage that serves as the most reliable nearby landmark. There is no dedicated parking. The streets are narrow and residential. The signage, if you can call it that, is modest. And yet, on its busiest day, this secluded hole-in-the-wall has served two hundred people. Not on a holiday. Not during a festival. Just a regular day when word of mouth did what billboards cannot. In Cebuano, "Pukot" means net — and this restaurant, true to its name, has been quietly catching people ever since.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1GlXnxZRX2l10Q1C9fxukVnjNPW84nUKu&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1GlXnxZRX2l10Q1C9fxukVnjNPW84nUKu" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Pukot Kitchen • Banilad, Cebu City
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Name on the Wall</H2>
          <Paragraph>
            I asked Sachi — the owner, a warm and surprisingly candid woman who radiates the kind of quiet authority that comes from years of business experience — what "Pukot" means to her. Her answer was immediate and well-rehearsed, but not in the way that corporate taglines are rehearsed. It felt like something she had lived into rather than written down. "It's like a net," she said, leaning forward slightly. "A net that gathers friends, business partners, coworkers. You come here, and you get connected. The restaurant becomes the place that strengthens relationships."
          </Paragraph>
          <Paragraph>
            It is a beautiful metaphor, and it is also, upon spending an afternoon inside Pukot Kitchen, a remarkably accurate description of what the space actually does. The restaurant — a mix of indoor air-conditioned seating and outdoor areas, with a capacity of fifty to sixty people — is designed less like a typical Cebuano eatery and more like a private meeting room that happens to serve food. There is free WiFi. There is a television set up for presentations. The noise level during daytime hours is conversational and quiet, the kind of ambient hum that lets you hear yourself think. Sachi told me that the renovation was intentionally done to make the space comfortable for workers and businessmen — "like a restaurant that also functions as a work-friendly cafe" — and the result is a room that invites you to sit down, open your laptop, and stay.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1y8jiUByV_-C-xU-8mgiq4AKwyaHE4YWN&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Pukot Interior"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=14TyvAmh-_Xp9xUzN5h1H_QiPgR6FUt5l&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Pukot Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1-FZWmhy6zWFaiI0QU_lmDdqqMcV2pHxd&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Pukot Food"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Sachi's Story: Ten Years of Grit</H2>
          <Paragraph>
            The story behind Pukot Kitchen is not a simple founding narrative. Sachi did not build this restaurant from scratch. The business has been running for four years under various iterations, but Sachi took over ownership only one year ago, purchasing the operation and then undertaking a full renovation — new theme, new name, new management philosophy. The "Pukot" identity is hers. What came before it was something else entirely, and the transformation from inherited business to personal vision is part of what gives the space its distinctive character.
          </Paragraph>
          <Paragraph>
            Sachi herself has been in business for a decade, but this is her first restaurant. She is hands-on to a degree that borders on compulsive — present nearly every day, usually arriving around 1:00 PM and staying through the evening or late into the night, sometimes coming as early as 11:00 AM when her business partner visits or when she has special customers she wants to entertain personally. When I asked her to describe the restaurant business in a single word, she didn't hesitate: "Comfort." Not profit. Not growth. Not innovation. Comfort.
          </Paragraph>
          <Paragraph>
            That word echoed through our entire conversation. She told me about failures — not in vague, inspirational-poster terms, but with the specificity of someone who has actually failed and had to decide, the next morning, to continue anyway. "Don't go for shortcuts," she said, and the advice felt less like a platitude and more like a scar. "Take time to study. Value education. Balance experience with study." She kept returning to a single idea, a kind of mantra: even if there are failures, you smile, get up tomorrow, and continue. Perseverance and grit. She said it like someone who means it, and I believed her.
          </Paragraph>
          <Paragraph>
            I was honestly a bit speechless after the interview. There is a difference between a restaurant owner who tells you their food is great and one who tells you about the philosophy of showing up every day after a setback. I had to sit with everything she shared — about business, passion, and the unglamorous discipline of continuing when it gets hard. The walls of Pukot Kitchen display beautiful photographs, and Sachi pointed out that they were all taken by her business partner. They are real images of real places, not stock art, and they reinforce the feeling that everything in this room has a story behind it, a reason for being here.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Sachi, Owner of Pukot Kitchen">
            "Even if there are failures, you smile, get up tomorrow, and continue. It's perseverance and grit."
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Food: Filipino Palate, No Apologies</H2>
          <Paragraph>
            Pukot Kitchen's menu walks a line between Western presentation and Filipino sensibility, and it walks it well. The selection mixes international comfort food — steaks, pastas, burgers — with the unmistakable flavor profile of Cebuano home cooking: bold gravies, generous rice portions, fresh vegetable sides that feel like someone's lola picked them that morning. Online reviewers on TripAdvisor and Restaurant Guru (where the restaurant carries a 4.5-star rating across 165 reviews) frequently single out the Pukot Cheeseburger as one of the best in Cebu City — a claim I will have to verify on a return visit.
          </Paragraph>
          <Paragraph>
            On this visit, I ordered the Salisbury Steak (₱399). A small confession: the kitchen initially brought me the wrong order. I didn't send it back. I loved it too much. The correct dish, when it arrived, was substantial — a generous portion of beef in a gravy that is, to borrow a term from the culinary anthropologists, unapologetically "Filipino-palate friendly." The beef itself, if I'm being honest, is not the highest grade. It's a little bland inside when isolated. But the gravy transforms it — rich, savory, and calibrated to that exact frequency of taste that Filipinos recognize as comfort. Together, the meat and the sauce form a partnership where neither component works alone but the combination is deeply satisfying. The rice was good. The fresh vegetable sides were crisp and felt considered rather than obligatory. It is a plate of food that costs ₱399 and delivers the emotional equivalent of a home-cooked meal prepared by someone who wants you to be full and happy.
          </Paragraph>
          <Paragraph>
            The Mango Shake (₱225) was the other bright spot. In a city where mango shakes are as common as jeepneys and about as variable in quality, Pukot's version stands out for its simplicity. There is no syrup. There is no artificial thickener. There is real mango, ice that breaks into satisfying crunchy bits as you drink, and a natural sweetness that tastes like fruit rather than sugar. It is not fancy-looking. It arrives in a standard glass without garnish or ceremony. But it tastes like the best version of what a mango shake should be — unpretentious, cold, and genuinely refreshing. In a landscape of overly engineered mall-chain smoothies, this is a quiet act of defiance.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Space: Traditional Comfort, Modern Function</H2>
          <Paragraph>
            Pukot Kitchen occupies a liminal space in Cebu's dining taxonomy. It is not a cafe — it doesn't have the espresso-forward identity or the Instagram-optimized decor. It is not a carinderia — there is air conditioning, proper table settings, and a price point that places it firmly in the moderate-to-upscale range. It is not a coworking space — there are no membership tiers or booking systems. And yet it functions, improbably, as all three.
          </Paragraph>
          <Paragraph>
            The vibe, as I noted in my field report, is "businesslike, traditional, comfort." That tripartite description is more precise than it might sound. The businesslike quality comes from the layout: tables arranged for conversation rather than crowd management, the presentation TV on the wall, the WiFi that actually works. The traditional quality comes from the aesthetic — the photographs on the walls, the warm wood tones, the absence of neon or industrial-chic affectation. And the comfort quality comes from everything else: the food that tastes like home, the owner who treats you like a guest rather than a customer, the feeling that you could stay here for three hours and nobody would ask you to leave.
          </Paragraph>
          <Paragraph>
            Staff friendliness is a 5 out of 5, anchored by Sachi's own hospitality. She originally thought I was with SunStar — the Cebu-based media company — when I mentioned Best of Cebu, which suggests that the restaurant has had some press attention before. Once I explained we were a new lifestyle platform, she became even more interested, and the conversation deepened into the business philosophy that became the emotional center of this review. The space is open daily from 11:00 AM to 10:00 PM, and if TripAdvisor's listing is to be believed, their cocktail menu extends the experience into the evening hours.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Honest Tradeoffs</H2>
          <Paragraph>
            No place is perfect, and Pukot Kitchen has friction points that deserve honest acknowledgment. The parking situation is, to put it diplomatically, a challenge. The restaurant sits inside a residential subdivision with no dedicated lot, and the narrow streets of El Dorado mean that on a busy night, you may find yourself circling like a lost jeepney looking for a gap in the curb. If you're arriving by Grab, you'll have no problem — the drop-off is easy — but drivers should come prepared for creative solutions.
          </Paragraph>
          <Paragraph>
            The secluded location is both a strength and a weakness. It's what gives Pukot its "insider discovery" quality — the feeling that you've stumbled upon something the mainstream hasn't found yet. But it also means that first-time visitors will struggle with navigation, and the lack of foot traffic means the restaurant relies heavily on word of mouth, social media, and the loyalty of regulars. At two hundred customers on a peak day without any holiday, the word-of-mouth engine is clearly working. But the physical accessibility remains a barrier.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Takeaway: What a Net Catches</H2>
          <Paragraph>
            Pukot Kitchen is a place that makes you think about what restaurants are actually for. Not the food — any kitchen can serve food. Not the decor — any designer can arrange a room. But the purpose. The reason the doors open every morning and stay open until the last customer leaves. Sachi's answer to that question — "comfort" — is deceptively simple, but it contains an entire worldview: that a restaurant can be a place where people don't just eat, but connect. Where business partners shake hands over salisbury steak. Where students gather after class to discuss ideas in a room that feels like someone's dining room. Where the photographs on the walls are real, the WiFi works, and the owner is present — not as a figurehead, but as the animating force of the entire operation.
          </Paragraph>
          <Paragraph>
            I left Pukot Kitchen feeling something I don't usually feel after a restaurant visit: moved. Not by the food alone, though the food was good. Not by the space alone, though the space was thoughtful. But by the conversation with Sachi, and the reminder that behind every restaurant that works, there is a person who decided — after setbacks, after doubt, after the initial failure of a first attempt — to get up the next morning and continue. The net catches flavors, catches friends, catches business, catches community. But what it really catches, if you let it, is meaning.
          </Paragraph>
          <Paragraph>
            My overall rating: 8 out of 10. Navigate the subdivision. Park where you can. Stay for the story.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Contact</h3>
              <p className="text-sm text-stone-600 italic">#4 Adelfa St, El Dorado Subdivision, Banilad, Cebu City 6000. Secluded — follow subdivision signs. Nearest landmark: Nuat Thai Banilad.</p>
              <p className="text-sm text-stone-600 mt-2">Open Daily 11:00 AM – 10:00 PM. WiFi: Free. Parking: Limited (street only).</p>
              <p className="text-sm text-stone-600 mt-2">IG: @pukotkitchen • FB: Pukot Kitchen • Email: pukot.kitchen@gmail.com</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8/10. A masterclass in hole-in-the-wall comfort with genuine depth. The salisbury steak is a Filipino-palate triumph, the mango shake is pure honesty, and the owner's story will stay with you longer than the meal. Parking is a struggle, but the journey is the point.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1y8jiUByV_-C-xU-8mgiq4AKwyaHE4YWN",
            "14mI0Bp6TYddqvD5gBY594qwqS8sULhPY",
            "14TyvAmh-_Xp9xUzN5h1H_QiPgR6FUt5l",
            "1-FZWmhy6zWFaiI0QU_lmDdqqMcV2pHxd",
            "1LriHVX8hXyQlTYVCpgm1lQT7zLiQMlql",
            "11bFrp9ixWLPfvEuUioyVWxXMpejgTE6s",
            "1Iz5_E_n-3SMmvsyVKGQGL8xQWi4heqgB",
            "1ABszuZYeCHmKUJnY9qB7VZ-jL11XAJ0c",
            "18Qq2uquhE-Ni18ApC71ctQH4J1RnFOOV",
            "1446a5wP9xquc7ZiVU-2eM9QGjBIJvEAb",
            "1GeskliLnBluubJ7DjNoLyrXPBXYZmw-d",
            "1I9e6lGyRk8V7A7eZqEavVCs7cmmSqQYs"
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/hatte" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Hatte Cafe</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/tamp" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Tamp Cafe</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
