'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function GureumArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Coffee &amp; Chill"
        title="The Half-Moon View"
        subtitle="How a Korean expat turned a forgotten speakeasy above a Chinese restaurant into Banilad's most disarming hideout — and why a single window changed everything."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          You enter through a Chinese restaurant. That is the first thing you need to know about Gureum Cafe and Bar, and it is the detail that sets the tone for everything that follows. On the second floor of Gaisano Country Mall — the sprawling, Spanish-villa-inflected landmark that Cebuanos affectionately call "C Mall" — there is a doorway tucked inside A Taste of Mandarin that most shoppers walk past without a second glance. Behind it, a spiral staircase ascends into what was once a speakeasy bar: a clandestine space with the bones of something theatrical but the soul of something abandoned. The space sat empty for a long time, poorly structured and largely forgotten, until a Korean woman named Felicia walked in one afternoon, looked past the neglect, and saw a window.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1WxtXwAIXBNvFygh8isE61-QIngWApWbR&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1WxtXwAIXBNvFygh8isE61-QIngWApWbR" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              The Lounge View • Banilad
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">A Cloud Above the Mall</H2>
          <Paragraph>
            Not a window, really. A wall of glass shaped like a half-moon — a sweeping hemispherical curve that crowns one of Country Mall's tower tops, flooding the room with natural light and framing a panorama that has no business being this captivating from the second floor of a shopping center. Through it, you see the parking lot, the tangle of Banilad Road traffic, the rooftops of nearby subdivisions, and the slow pulse of a city going about its afternoon. It is not the Busay mountains. It is not a white-sand beach. It is the utterly ordinary theatre of Cebu's urban rhythm, and somehow, from a cushioned seat beside that crescent of glass, it becomes mesmerizing.
          </Paragraph>
          <Paragraph>
            Felicia understood this instinctively. "People love views so much that they travel all the way to the countryside just to find one," she told me during our conversation, her tone measured and thoughtful, her English colored with a gentle Korean cadence. "But with this window, they don't need to travel. They can sit, relax, and enjoy scenery right here." It is a deceptively simple philosophy — that a great view is less about what you see and more about the permission it gives you to slow down — and it is the founding principle of everything Gureum has become.
          </Paragraph>
          <Paragraph>
            The name itself is a declaration of intent. "Gureum" — 구름 in Korean — translates to "cloud." Like the clouds perched above the city, the cafe sits at the peak of Gaisano Country Mall's Tower 2, physically elevated above the commercial bustle below. The name was a deliberate choice: airy, unanchored, suggestive of floating. It is worth noting — as a Cebu Insights article clarified — that despite the Korean name and Korean ownership, Gureum is not a Korean cafe. Its interior is an eclectic fusion of modern French Baroque and contemporary minimalist sensibilities: ornate portrait frames on the walls, clean table lines, and a moodboard that feels less Seoul and more Montmartre-by-way-of-Banilad. The menu is similarly cosmopolitan — pastas, sandwiches, rice bowls, coffee blends, desserts, cocktails, and wines — a deliberate refusal to be pinned down by a single cuisine.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://drive.google.com/thumbnail?id=1LS1w_jTl9EasdEjhzmkGavYkzpGM8dhF&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Gureum Interior"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://drive.google.com/thumbnail?id=1z-PVEsiKuaCTK7yOxLR_0M6NHnmKRbGi&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Marshmallow Choco Detail"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Felicia's Story</H2>
          <Paragraph>
            Felicia has lived in the Philippines for three years. Before Gureum, she had never run a business. She is the kind of owner who doesn't fit neatly into the entrepreneur archetype — no MBA, no franchise playbook, no Instagram-ready origin story about "following a passion." What she has is an intuition for space and an unusual patience for the unglamorous work of building something from nothing. When she found the empty room above A Taste of Mandarin, most people would have seen a renovation nightmare: a defunct speakeasy with awkward bones and no foot traffic. Felicia saw the half-moon window and reverse-engineered an entire concept from that single architectural detail.
          </Paragraph>
          <Paragraph>
            She started the business seven months before my visit, and she comes in every single day to manage it. This is not a vanity project overseen from a distance. Felicia is there when the first customers arrive and when the last ones leave. She greets people, adjusts the playlist, watches the room. Her hands-on spirit seeps into the atmosphere in a way that is difficult to quantify but impossible to miss. There is a calmness to the space that feels authored — not the sterile calm of an airport lounge, but the warm, lived-in calm of someone's carefully arranged living room. She told me that starting her first business was a struggle, and I believe it, because the result feels like the product of earned lessons rather than inherited formulas.
          </Paragraph>
          <Paragraph>
            This story resonates within a broader context that has been quietly reshaping Cebu's cafe landscape. Banilad, the district where Country Mall sits, has become one of the city's most vibrant corridors for Korean-owned establishments. Fueled by the Philippines' deep love affair with K-culture — from K-dramas to K-pop to samgyupsal — a wave of Korean entrepreneurs have opened cafes, restaurants, and barbecue joints across the IT Park, Lahug, and Banilad neighborhoods. Gureum is part of this wave, but it stands apart from the neon-and-photocard aesthetic of places like Gangnam Cafe in Lahug. Felicia isn't selling K-culture. She is selling comfort, filtered through her own sensibility, in a space that happens to be beautiful.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Felicia, Owner of Gureum">
            "I struggled at first starting this business, but my motivation was giving people a place to chill and experience a great view. People travel far just for a view — here, they don't have to."
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1mKOvFS0BoNzATWWlmkfC9G5Niw399pK8&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1mKOvFS0BoNzATWWlmkfC9G5Niw399pK8" type="video/mp4" />
            </video>
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Table Experience
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Food: Owner's Best Picks</H2>
          <Paragraph>
            There is a feeling you get when the food at a place feels curated rather than merely listed. At Gureum, the menu reads like a selection of personal recommendations from Felicia herself — her "best picks," as I came to think of them — and the two items I ordered bore that theory out completely.
          </Paragraph>
          <Paragraph>
            The Carbonara with Garlic Baguette (₱340) arrived in a startling eight minutes. Eight minutes. In a mall cafe on a Tuesday afternoon, that kind of speed suggests either a well-oiled kitchen or dangerously low standards, and I can report it is emphatically the former. The dish came to the table hot — genuinely, steam-curling-off-the-plate hot — with a raw egg perched on top of the pasta like a small, golden crown. This is the kind of detail that separates a kitchen that understands carbonara from one that merely serves it. As I broke the yolk and stirred it into the noodles, it transformed the dish: the egg melted into the creamy, milky base, adding a savory richness that felt luxurious without tipping into heaviness. The garlic baguette on the side was warm and crusty, a perfect vehicle for scooping up the sauce. A note for the conscientious diner: the dish contains pork, which may not suit all palates, but for those who indulge, this is comfort food executed with genuine skill.
          </Paragraph>
          <Paragraph>
            The Iced Marshmallow Choco (₱180) was the surprise of the afternoon. I expected a standard hot chocolate variant — sweet, predictable, Instagram-friendly. What I got was something with depth. The marshmallows tasted lightly grilled, carrying a faint smokiness that elevated the entire drink from novelty to legitimate flavor experience. There is a crucial technique to enjoying it: you must stir. The chocolate settles at the bottom of the glass, beneath the marshmallow layer, and if you drink it as-is, you get two separate, unbalanced experiences. But once you blend them — the smoky marshmallow, the rich chocolate, the cold milk — it becomes a layered, satisfying thing that matched the lounge's energy perfectly. Other regulars, I'm told, swear by the Gureum Tiramisu and the Dirty Matcha, both known for their generous portions — a recurring theme in a place that seems philosophically opposed to stinginess.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Space: Engineered for Staying</H2>
          <Paragraph>
            Most cafes in Cebu are designed for throughput. Tables are positioned to maximize capacity. Chairs are just comfortable enough that you won't complain but just uncomfortable enough that you won't linger. WiFi, if it exists, is throttled or hidden behind time-gated captive portals. The implicit message is always the same: order, eat, leave, make room.
          </Paragraph>
          <Paragraph>
            Gureum inverts this entirely. The seating is not just functional — it is designed for lounging. Deep cushions. Low tables. Arrangements that let you stretch your legs, lean back, and settle in like you're in your own living room. The approximately thirty-seat capacity means the space never feels cavernous, but the layout is generous enough that you don't feel surveilled by the table next to you. The room is fully air-conditioned and entirely indoors, sealed off from the noise of the mall below, and the WiFi is fast enough for actual work — not just social media scrolling, but the kind of sustained, uninterrupted connectivity that students and remote workers require.
          </Paragraph>
          <Paragraph>
            The noise level hovers at a pleasant conversational murmur. Background music plays — enough to keep the silence from becoming oppressive, not enough to intrude on your thoughts. Cleanliness is solid (I'd rate it a 4 out of 5), and the overall impression is of a space that has been thought through with unusual care. The stay policy is explicitly generous: 2.5 hours before you need to re-order. In a city where some cafes start giving you side-eye after ninety minutes, this feels like a radical act of hospitality.
          </Paragraph>
          <Paragraph>
            It is best suited for work-from-cafe sessions, solo dining, student study groups, and casual hangouts where the objective is presence rather than performance. I found myself thinking: this is the kind of place where you could read an entire book, or have the conversation you've been postponing, or simply sit with your thoughts and a good drink and watch the Banilad traffic through that crescent of glass.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Service: Warm Once You're In</H2>
          <Paragraph>
            The staff at Gureum are friendly — genuinely so, rating a 5 out of 5 on my scale — but they operate with a particular rhythm that's worth noting. When you first walk in, there is a brief period of professional reserve. They don't hover. They don't launch into a rehearsed welcome script. They seat you immediately, hand you a menu, and give you space to breathe. A staff member checked on me once before I ordered, a light touch to confirm I was ready, and then retreated. It is only after you place your order that the warmth fully activates: the food arrives fast, the staff smile easily, and the overall service experience becomes one of quiet efficiency.
          </Paragraph>
          <Paragraph>
            This approach might read as disengagement to some — a Western-trained hospitality eye might want more proactive check-ins, more water refills, more "How is everything?" interruptions. But I think it reflects something more intentional: a service philosophy that prioritizes your autonomy as a guest. You came here to chill. They let you chill. When you need them, they're there. When you don't, they're not. In a city where overly attentive service can sometimes feel performative, Gureum's restraint is refreshing.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Getting There</H2>
          <Paragraph>
            Gureum Cafe and Bar is located on the 2nd Floor of Gaisano Country Mall (Tower 2), Banilad Road, Apas, Cebu City. The entrance is hidden inside A Taste of Mandarin — the Chinese restaurant on the second floor — so look for the clandestine doorway and the spiral staircase. It's near the University of Cebu (UC) Banilad campus, making it a natural study haven for students in the area. Parking is available outside Country Mall. Grab and taxi drop-off is easy. For public transport, take jeepney routes 17B (Colon–Fuente–IT Park–C Mall), 13C or 13B (Talamban–Colon), 22I (Mandaue–C Mall), or 24G (Consolacion–C Mall). Open daily from 10:00 AM to 10:00 PM.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Takeaway</H2>
          <Paragraph>
            Gureum Cafe and Bar is not the kind of place that announces itself. There is no neon sign on Banilad Road. There is no influencer partnership driving foot traffic. There is a spiral staircase hidden behind a Chinese restaurant, a room that used to be a speakeasy, and a Korean woman who saw a half-moon window and decided to build something around it. What she built is, quietly, one of the most thoughtful spaces in Cebu's increasingly crowded cafe scene: a place where the design serves the experience rather than the other way around, where the food is genuinely good rather than merely photogenic, and where the governing ethos is that your time and comfort matter more than your table's turnover rate.
          </Paragraph>
          <Paragraph>
            I'll be coming back. It's near my school, the WiFi works, the carbonara is excellent, and the half-moon window makes me feel like I'm watching a film about Cebu rather than living inside the chaos of it. At ₱340 for a pasta that could hold its own in any Italian trattoria and ₱180 for a drink that tastes like someone actually thought about it, the value proposition is strong. The 2.5-hour stay policy is generous. The lounge seating is genuinely comfortable. And the view — that unremarkable, utterly captivating view of parking lots and traffic and ordinary life — is, against all logic, the best thing on the menu.
          </Paragraph>
          <Paragraph>
            My overall rating: 8.5 out of 10. A cloud worth chasing.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
              <p className="text-sm text-stone-600 italic">2nd Floor (Tower 2), Gaisano Country Mall, Banilad Rd, Apas, Cebu City 6000. Enter through A Taste of Mandarin, take the spiral staircase.</p>
              <p className="text-sm text-stone-600 mt-2">Open Daily 10:00 AM – 10:00 PM. WiFi: Yes. Stay limit: 2.5 hrs.</p>
              <p className="text-sm text-stone-600 mt-2">IG: @gureumcafe • FB: Gureum cafe &amp; bar</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8.5/10. A hidden gem in the truest sense — physically concealed behind a Chinese restaurant, philosophically committed to comfort over commerce. The carbonara is a revelation, the half-moon window is unforgettable, and the lounge seating will ruin you for every other cafe chair in the city.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1GAcrZLjxe8Cq947rDcJqQ5GHyluGgFNm",
            "1XsN0WPMwS3FvvwLQ-MB1cVKKDO8gnL3-",
            "1vUaCc2mTiPXJLglHDWBL5l0eba-RWYJG",
            "1uqq2dHF4o_zYX619gFy4jUonmZ3Z5QtS",
            "1VXn70UvbLfg8JxwB9t8od1GuAuAV5_Mu",
            "1DsscyQ7b61XxFkxHLNyLoPuv9drpk12b",
            "1uvg1E69bw91FpFwvCnMR4xHUW01J1x61",
            "1s4ak6ofCrCMnMRGzU9aPoGS-bjTuOVcX",
            "19VCDVDfJq56grSRYOFYLiZtMEhER7_q7",
            "1vupArAcmPqN0uVZr8dFHpFblVAtZNrQV",
            "1tUXGU6CL-ZVFcS7VIbGToZ_N82X0j5jk",
            "1K2JpMA6w9JfcGGKoDttgDvTXAQHU7OcX"
          ]} 
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
            <Link href="/tablea" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: The Cacao Ritual</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
