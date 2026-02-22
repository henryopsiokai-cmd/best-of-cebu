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
        category="Cuisine & Comfort"
        title="Tamp Cafe: Effortless Elegance in Every Bite"
        subtitle="Exploring the modern comfort and technical precision of Tamp Cafe & Co. at Paseo Banawa."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          Tamp Cafe & Co. is a masterclass in modern comfort. Located in the heart of Paseo Arcenas Mall in Banawa, it is a space where the design is clean, the service is efficient, and the food is consistently exceptional. Even on a weekday evening, the place is buzzing with a lively energy that makes it clear: this is a local favorite that doesn't need mall traffic to stay full.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=17CBbV8_QcQ76IXt3o_qrWEm-4hE074s4&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=17CBbV8_QcQ76IXt3o_qrWEm-4hE074s4" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Tamp Cafe & Co. • Paseo Banawa
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Technical Precision</H2>
          <Paragraph>
            The menu at Tamp is defined by its technical precision and thoughtful promotions. I tried the Beef Stroganoff (₱395), which features slow-cooked, incredibly tender beef in a creamy white sauce. While the side of lettuce felt a bit sparse, the meat itself was a revelation of texture and flavor. 
          </Paragraph>
          <Paragraph>
            The real winner, however, is their signature "One Peso Cake" promotion: purchase a meal and a drink, and you can get a generously sized slice of cake for just ₱1. I chose the Yema Cake, and they certainly didn't hold back on the ingredients. It was rich, sweet, and satisfying—a masterstroke of customer loyalty that makes every visit feel like a special occasion.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1FSLuFuIQan4A0cb77gn12Tv9TUmlSinn&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Interior"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1X6zdvfRm8JCEwyL-3aV9kbxN7eAdw55t&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1nun4LORx-YOZOXL9J3nvIhhafIDE9rGd&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Food"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            At Tamp, the elegance is in the details—from the nuttiness of the Iced Pistachio Latte to the tiny, thriving ecosystem of the fish pond at the counter.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Cozy Organization</H2>
          <Paragraph>
            Beyond the food, the service stands out. The staff, led by a particularly warm supervisor, are engaged and professional, even during peak hours. The space is well air-conditioned and features a unique touch: a small, living pond on one of the tables near the counter, complete with colorful fish and snails. It adds a layer of charm and personality that distinguishes Tamp from more clinical mall cafes.
          </Paragraph>
          <Paragraph>
            While the lack of WiFi and background music means it's more of an "eating and talking" spot than a digital nomad hub, the quality of the experience remains top-tier. It's a reliable haven for families, friends, and anyone seeking a refined but accessible dining experience in Cebu.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">Paseo Arcenas Mall, Banawa, Cebu City. Open Daily 7:30 AM – 10:00 PM.</p>
              <p className="text-sm text-stone-600 mt-2">Special: ₱1 Promo Cake with Meal + Drink. IG: @tampcafecebu</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8/10. A masterclass in consistency and modern cafe culture. The promo is genuinely thoughtful and the beef is world-class.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1FSLuFuIQan4A0cb77gn12Tv9TUmlSinn",
            "1X6zdvfRm8JCEwyL-3aV9kbxN7eAdw55t",
            "1lGiugt9SF5ujWWZ5VqpIi4MDnpkZLpnZ",
            "1EimJ5SSpFDL5_V4cGY_R80C0mZN3_few",
            "1tAZiftIdiMZKOw1OeTxwhmyl05HrfKHh",
            "125nKaB3y_3fyl2RLXkZl6rIoDHUZyf4-",
            "1ZbjTxIw9Iygn6fu0mZ8f65XpeBn8uIb-",
            "1SJJ8t3F1VzO2oCU9jnYawX5KfQamFvai",
            "1TzNZvb7iSbItgBur_rvXk03Rp44JfbqI",
            "1sS-kK0sbLwHKpPyYhT68oYETs-zHBCCE",
            "1FbXCxBCQ9IqyPsyoSxiLATw7MBItv2BL",
            "1nun4LORx-YOZOXL9J3nvIhhafIDE9rGd"
          ]} 
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
