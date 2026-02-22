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
        subtitle="Exploring the modern comfort and technical precision of Tamp Cafe & Co."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          Tamp Cafe & Co. is a masterclass in modern comfort. Located in the heart of the city, it is a space where the design is clean, the service is efficient, and the food is consistently exceptional.
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
              Tamp Cafe & Co. • Cebu City
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Technical Precision</H2>
          <Paragraph>
            The menu at Tamp is defined by its technical precision. From the perfectly balanced coffee to the beautifully presented plates, every element is considered. It's a place for people who value quality and consistency—a reliable haven in the city's fast-paced culinary landscape.
          </Paragraph>
          <Paragraph>
            Whether you're there for a quick caffeine fix or a leisurely brunch, the experience is one of effortless elegance. It's a testament to the city's growing appetite for refined dining experiences that don't compromise on comfort.
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
            At Tamp, the elegance is in the details—from the perfect extraction to the thoughtful presentation.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">Cebu City. Modern comfort and precision.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8/10. A masterclass in consistency and modern cafe culture.</p>
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
            <Link href="/sakura" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Sakura Dining</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
