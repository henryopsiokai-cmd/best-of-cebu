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
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Coffee & Architecture"
        title="Industrial Minimal in Mandaue"
        subtitle="Exploring the monochromatic brew and brutalist lines of Hatte Cafe."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          Hatte Cafe is a sharp departure from the warmth of Cebu's traditional cafe scene. Located along the bustling Governor M. Cuenco Avenue in the Banilad/Apas area, it is a Korean-owned space defined by gray concrete, sharp angles, and a focus on the drink as the sole ornament. It’s a "color block" universe that feels more like a modern art installation than a coffee shop.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1zAvCch1ub-QAqA-khiU-ZKv452HhZMBp&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1zAvCch1ub-QAqA-khiU-ZKv452HhZMBp" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Hatte Cafe • Mandaue City
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Industrial Brew</H2>
          <Paragraph>
            The aesthetic at Hatte is unapologetically modern. It's a place for people who appreciate the silence of brutalist design—where the texture of the raw concrete walls is as important as the crema on the espresso. The space is layered, with an "up and down" configuration that gives it a mini-adventure feel despite its compact footprint. 
          </Paragraph>
          <Paragraph>
            The coffee program is similarly focused. I ordered the Iced Vanilla Bean Latte (₱180), which features a rich layer of creamy vanilla milk at the bottom—stirring is essential here to balance the sweetness. For snacks, the Oreo S’more Cookie (₱120) is a solid companion, though a bit on the firm side. In a city often defined by vibrant color and noise, Hatte offers a monochromatic sanctuary of high-quality caffeine.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1l3TYo14AA8kylwsWEqABsMxFOt0CX1An&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Hatte Interior"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1VhS-B9HW1zM2B7F0aIDfSnvVKCmQeiEL&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Hatte Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1zSI98rF-_UmReGydX-D_PCsOBNMsUS-o&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Hatte Coffee"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            At Hatte, the simplicity of the concrete is the perfect canvas for the complexity of the bean. It feels like a little Korean cafe world where you can just chill and be cute.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1YaZYx8OneR7yAWrsXT1rpcVmWoYndDRj&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1YaZYx8OneR7yAWrsXT1rpcVmWoYndDRj" type="video/mp4" />
            </video>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">Gov. M. Cuenco Ave, Apas (near UC Banilad). Open 9:00 AM – 10:00 PM (11:00 PM on weekends). Closed Sundays.</p>
              <p className="text-sm text-stone-600 mt-2">IG: @hatte_cebu • FB: Hatte Cafe</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8/10. An aesthetic powerhouse with a friendly staff. Perfect for those who love minimal lines and a peaceful afternoon reset.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1l3TYo14AA8kylwsWEqABsMxFOt0CX1An",
            "1VhS-B9HW1zM2B7F0aIDfSnvVKCmQeiEL",
            "1zSI98rF-_UmReGydX-D_PCsOBNMsUS-o",
            "126KeTIImFN-UCLinEEwJO4Iv8fU7ekU_",
            "1VhS-B9HW1zM2B7F0aIDfSnvVKCmQeiEL",
            "1erihX6dsru23QXoL_jVnLWvWAN_5eglh",
            "1etzwvO84Hukz-vVnDtUMQqQ35i0HyC6o",
            "1wQEIS6JXK-qtxTtdoc_yaZoYZENpF33I",
            "1L1IGQxekreNsuqmSJ3-2ShfKN3v5FF6a",
            "1bCol_I5fcGWl4VqRj5Wyin-X7WAmZYY1",
            "1vwnyZjDJIal1_Ks9KGtuRlux039g1i9A",
            "1brsBQ2EqfXR4dANcxjFRkhDjcvKDc32v"
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/laparisienne" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: La Parisienne</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/pukot" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Pukot Kitchen</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
