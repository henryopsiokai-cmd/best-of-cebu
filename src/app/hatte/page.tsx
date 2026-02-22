'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function HatteArticle() {
  return (
    <div className=\"min-h-screen bg-white text-stone-900 font-serif\">
      <ArticleHeader
        category=\"Coffee & Architecture\"
        title=\"The Mushroom Universe: Hatte Cafe in Banilad\"
        subtitle=\"Step into the split-level, color-blocked world of Hatte Cafe, where the aesthetic is sharp but the hospitality is disarmingly sweet.\"
        author=\"Criste Joy\"
        publishedAt=\"February 2026\"
      />

      <article className=\"max-w-4xl mx-auto px-6 pb-24\">
        <DropCap>
          There are spaces that feel like they belong to a different geography entirely, and Hatte Cafe is one of them. Located along the transit artery of Governor M. Cuenco Avenue, it sits in the Apas neighborhood near the University of Cebu. From the exterior, the sharp lines and color-blocked design hint at a modern industrialist sensibility. But once you cross the threshold, the vibe undergoes a curious transformation. It feels less like a sterile gallery and more like a tiny, self-contained universe. Some might describe it as stepping into the architecture of a mushroom, a whimsical, up-and-down adventure that makes the most of its compact footprint.
        </DropCap>

        <AnimatedSection>
          <div className=\"my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl\">
             <video 
              className=\"w-full h-full object-cover\"
              controls
              poster=\"https://drive.google.com/thumbnail?id=1zAvCch1ub-QAqA-khiU-ZKv452HhZMBp&sz=w1000\"
            >
              <source src=\"https://drive.google.com/uc?export=download&id=1zAvCch1ub-QAqA-khiU-ZKv452HhZMBp\" type=\"video/mp4\" />
            </video>
            <div className=\"absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm\">
              Hatte Cafe • Banilad Corridor
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className=\"italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest\">A Korean Aesthetic in Cebu</H2>
          <Paragraph>
            The interior design of Hatte is a masterclass in the \"Korean cafe\" aesthetic that has taken a firm hold of Cebuano youth culture. The space is layered and tiered, creating a sense of height and vertical exploration that is rare for cafes of this size. It is quiet and peaceful during the afternoon hours, providing a gentle reset for anyone looking to escape the traffic of the main road. The music is curated to be calm, an atmospheric layer that supports rather than interrupts the silence.
          </Paragraph>
          <Paragraph>
            The atmosphere is particularly popular with the local student population, specifically the Korean students from the nearby language schools. This makes perfect sense, as the cafe feels like a localized fragment of the Seoul cafe scene. It is a place for soft days and quiet discussions, where the objective is to sip something sweet and appreciate the surrounding aesthetic. The layout, with its multi-level seating, allows for a variety of vantage points, giving even a solo visitor a sense of being part of a larger, carefully designed world.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-4 my-16\">
            <div className=\"aspect-[4/5] bg-stone-200 overflow-hidden relative group border\">
              <img 
                src=\"https://drive.google.com/thumbnail?id=1l3TYo14AA8kylwsWEqABsMxFOt0CX1An&sz=w1000\" 
                className=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110\" 
                alt=\"Hatte Interior\"
              />
            </div>
            <div className=\"aspect-[4/5] bg-stone-200 overflow-hidden relative group border\">
              <img 
                src=\"https://drive.google.com/thumbnail?id=1VhS-B9HW1zM2B7F0aIDfSnvVKCmQeiEL&sz=w1000\" 
                className=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110\" 
                alt=\"Hatte Detail\"
              />
            </div>
            <div className=\"aspect-[4/5] bg-stone-200 overflow-hidden relative group border\">
              <img 
                src=\"https://drive.google.com/thumbnail?id=1zSI98rF-_UmReGydX-D_PCsOBNMsUS-o&sz=w1000\" 
                className=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110\" 
                alt=\"Hatte Coffee\"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className=\"italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest\">Bashful Service and Warm Welcomes</H2>
          <Paragraph>
            What truly distinguishes Hatte is the human element behind the counter. The service is exceptional, rating a perfect five out of five for friendliness. During our visit, the staff were disarmingly sweet and supportive. When asked for permission to document the space, they agreed immediately without any of the hesitation often found in more corporate establishments.
          </Paragraph>
          <Paragraph>
            There was a charming, wholesome quality to the interaction. As cameras were brought out to capture the counter and the interior, the staff reacted with a bashful laughter, jokingly hiding their faces like shy celebrities caught in the spotlight. This lack of pretension makes Hatte feel safe and welcoming. It is the kind of hospitality that isn't taught in a manual, but instead stems from a genuine kindness that matches the cafe's cute, approachable vibe.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution=\"Criste Joy\">
            At Hatte, the world feels smaller and gentler. It is a place where you can reset your mood and simply feel comfortable in the aesthetics of the moment.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className=\"italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest\">The Vanilla Bean Ritual</H2>
          <Paragraph>
            The menu is focused and effective. The Iced Vanilla Bean Latte (₱180) is a particular standout. It arrives with a distinct layer of creamy vanilla milk at the bottom of the glass, requiring a thorough stir to achieve the perfect balance. It is a sweet, consistent brew that becomes even more satisfying the longer you sit with it. For those who enjoy a vanilla-forward profile, it is an easy recommendation.
          </Paragraph>
          <Paragraph>
            The Oreo S’more Cookie (₱120) provides a textured companion to the coffee. It is flavored deeply with Oreo and carries a solid, firm consistency. While it is satisfying from the first bite, one could imagine it being even better if it were slightly softer, but it remains a reliable snack for a mid-afternoon break. The food and drinks arrive quickly, usually within five to ten minutes, reflecting a kitchen that is as efficient as it is friendly.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className=\"my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-xl\">
             <video 
              className=\"w-full h-full object-cover\"
              controls
              poster=\"https://drive.google.com/thumbnail?id=1YaZYx8OneR7yAWrsXT1rpcVmWoYndDRj&sz=w1000\"
            >
              <source src=\"https://drive.google.com/uc?export=download&id=1YaZYx8OneR7yAWrsXT1rpcVmWoYndDRj\" type=\"video/mp4\" />
            </video>
            <div className=\"absolute top-4 right-4 bg-amber-500 text-white text-[10px] uppercase tracking-widest px-2 py-1\">
              Barista Detail
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className=\"italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest\">Room for Growth</H2>
          <Paragraph>
            For all its charm, Hatte does have some practical omissions that a frequent visitor will notice. There is no Wi-Fi provided, and more notably, there is no on-site bathroom. These are significant factors for a cafe that is otherwise so inviting to stay in for hours. One could also hope for a wider variety of seating options, perhaps some couch-style chairs to complement the existing aesthetic and make long coffee dates even more comfortable.
          </Paragraph>
          <Paragraph>
            However, these points are secondary to the atmosphere itself. Hatte remains a favorite for its uniqueness and the peaceful, aesthetic environment it provides. It is the sort of place you recommend to friends or a partner for an afternoon reset.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className=\"my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans\">
            <div className=\"p-8 bg-stone-50 border shadow-sm\">
              <h3 className=\"text-amber-600 font-bold uppercase tracking-widest text-xs mb-2\">Location & Contact</h3>
              <p className=\"text-sm text-stone-600 italic\">Gov. M. Cuenco Ave, Apas, Cebu City. Near UC Banilad and Gaisano Country Mall.</p>
              <p className=\"text-sm text-stone-600 mt-2\">Open 9:00 AM – 10:00 PM (Mon–Thu) and 11:00 PM (Fri–Sat). Closed Sundays.</p>
              <p className=\"text-sm text-stone-600 mt-2\">IG: @hatte_cebu • FB: Hatte Cafe</p>
            </div>
            <div className=\"p-8 bg-stone-50 border shadow-sm\">
              <h3 className=\"text-amber-600 font-bold uppercase tracking-widest text-xs mb-2\">The Verdict</h3>
              <p className=\"text-sm text-stone-600 italic\">8/10. A visually striking, split-level sanctuary with a disarmingly kind staff. The lack of Wi-Fi and facilities are the only hurdles in an otherwise beautiful experience. Go for the vanilla latte and stay for the mood reset.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            \"1l3TYo14AA8kylwsWEqABsMxFOt0CX1An\",
            \"1VhS-B9HW1zM2B7F0aIDfSnvVKCmQeiEL\",
            \"1zSI98rF-_UmReGydX-D_PCsOBNMsUS-o\",
            \"126KeTIImFN-UCLinEEwJO4Iv8fU7ekU_\",
            \"1VhS-B9HW1zM2B7F0aIDfSnvVKCmQeiEL\",
            \"1erihX6dsru23QXoL_jVnLWvWAN_5eglh\",
            \"1etzwvO84Hukz-vVnDtUMQqQ35i0HyC6o\",
            \"1wQEIS6JXK-qtxTtdoc_yaZoYZENpF33I\",
            \"1L1IGQxekreNsuqmSJ3-2ShfKN3v5FF6a\",
            \"1bCol_I5fcGWl4VqRj5Wyin-X7WAmZYY1\",
            \"1vwnyZjDJIal1_Ks9KGtuRlux039g1i9A\",
            \"1brsBQ2EqfXR4dANcxjFRkhDjcvKDc32v\"
          ]} 
        />
      </article>

      <footer className=\"bg-stone-900 text-white py-24 px-6\">
        <div className=\"max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center\">
          <div className=\"mb-8 md:mb-0\">
            <h3 className=\"text-2xl font-black italic uppercase tracking-tighter\">Best of Cebu</h3>
          </div>
          <nav className=\"flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest\">
            <Link href=\"/laparisienne\" className=\"hover:text-amber-500 transition-colors text-stone-400 italic\">Previous: La Parisienne</Link>
            <Link href=\"/\" className=\"hover:text-amber-500 transition-colors\">Back to Issues</Link>
            <Link href=\"/pukot\" className=\"hover:text-amber-500 transition-colors text-stone-400 italic\">Next: Pukot Kitchen</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
