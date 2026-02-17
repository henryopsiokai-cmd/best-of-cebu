import React from 'react';
import { ArticleHeader } from '@/components/editorial/ArticleHeader';
import { H2, Paragraph } from '@/components/editorial/Typography';
import { PullQuote } from '@/components/editorial/PullQuote';
import { DropCap } from '@/components/editorial/DropCap';
import { AnimatedSection } from '@/components/editorial/AnimatedSection';

export default function SakuraArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine & Aesthetic"
        title="Pink Blossoms and Fluffy Pancakes"
        subtitle="Finding a moment of Japanese-inspired calm (and a lot of pink) in the heart of Ayala Central Bloc."
        author="Christyjoy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          It was Valentine’s Day, and Sakura Dining at Ayala Malls Central Bloc was exactly what you’d expect: packed, chaotic, and radiating a very specific shade of Japanese-inspired pink. I went with a friend for a long-overdue catch-up, and despite the 35-minute wait to be seated, it turned into one of those cute memories that sticks with you. There’s something about the intensity of a holiday crowd that makes the eventually-arrived comfort of a booth feel like a hard-won victory.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://lh3.googleusercontent.com/d/1TeATLJBVl7Cz2WqS5U8cApcER8xfwCNw"
            >
              <source src="https://lh3.googleusercontent.com/d/1TeATLJBVl7Cz2WqS5U8cApcER8xfwCNw" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Sakura Dining Exterior • Cebu IT Park
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Fluff Factor</H2>
          <Paragraph>
            The menu here is a broad Japanese-fusion mix, but let’s be honest: I was there for the sweets. Specifically, the legendary fluffy pancakes that have been taking over local feeds. I ordered the Chocolate Banana Pancake (₱440), and it was easily the highlight of the afternoon. The texture was uniquely soft and smooth—a delicate, almost cloud-like consistency that’s rare to find executed this well in the city. The design was beautiful, a perfect blend of fruit and rich chocolate that felt like a treat for the eyes as much as the palate.
          </Paragraph>
          <Paragraph>
            We decided to balance the sugar with something savory and went for the Creamy Pesto (₱400). While it looked stunning on the plate, it was a bit of a mixed bag. The scent was incredibly strong—overpowering, even—when it first hit the table. Curiously, the taste was actually quite mild, not too salty and not too bland, but that initial aromatic intensity made it hard to fully enjoy compared to the pancakes.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/15UV5f5Ul2MghCGSeNKeEA_caBpwt7p2X" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sakura Decor"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/1cVPG6bOsExWX0tCnVbJ1nnfC3e9lTnyb" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sakura Pancakes"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            It was so busy that I had to press the call button multiple times just to get someone to come over so we could pay. But in a place this aesthetic, surrounded by cherry blossoms, you almost don't mind the wait.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Designed for the Feed</H2>
          <Paragraph>
            Sakura Dining is a photo dream. It’s a 25-30 person space that feels intimate but can get chaotic fast when the crowd hits. From the adorable heart bench to the cherry blossom accents, every corner is a photo spot. The outdoor area is particularly noteworthy, featuring a big heart backdrop and a "message heart tree" where people leave handwritten notes—a perfect, sentimental touch for a February 14 visit. 
          </Paragraph>
          <Paragraph>
            While the seating flow and staff response time could use some refinement during peak hours—we waited about 30 minutes for food to arrive—the fluffy pancakes and the cozy vibe are enough to bring me back. It feels like a labor of love; the staff mentioned it might be a Japanese family-owned business, and that personal touch shows in the decor. If you're looking for a place for a date night or a catch-up with friends who appreciate a good aesthetic, this is the spot. Just be prepared to use that call button.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">2nd Floor, Ayala Malls Central Bloc (above Metro Supermarket), Cebu IT Park.</p>
              <p className="text-sm text-stone-600 mt-2">IG: @sakura.ayalait • 09660738063</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">7/10. Great for pancakes and photos. Best avoided during peak holidays if you're in a rush.</p>
            </div>
          </div>
        </AnimatedSection>
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <a href="/food" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: The Island Table</a>
            <a href="/" className="hover:text-amber-500 transition-colors">Back to Issues</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
