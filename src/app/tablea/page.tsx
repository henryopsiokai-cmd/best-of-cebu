import React from 'react';
import Link from "next/link";
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';

export default function TableaArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cacao Traditions"
        title="The Cacao Ritual"
        subtitle="Exploring the quiet heritage of Filipino chocolate at JY Square."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          I found Tabléa Chocolate Cafe on the ground floor of JY Square in Salinas Drive, just a few steps away from the neighborhood McDonald's. It’s a quiet, traditional space that feels more business-like and formal than your typical neighborhood cafe—making it an ideal spot for work-from-cafe sessions or professional meetings. But I wasn't there for the WiFi (they don't have any); I was there for a deeper, older connection to Filipino culture: the chocolate.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1c7PyaftjWM8YTJf2xqzzMIgvwDMqWxAw&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1c7PyaftjWM8YTJf2xqzzMIgvwDMqWxAw" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              The Tablea Counter • Salinas Drive
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Sikwate Standard</H2>
          <Paragraph>
            I ordered the Special Set (₱175), a traditional trio featuring Sikwate, fresh mango, and Puto Maya. In a city where mass-produced coffee dominates, this variety of tableya options is a unique and refreshing commemoration of Filipino cacao traditions. The fresh mango was a bit on the sour side during my visit, and the Puto Maya, served heated but perhaps not as fresh as it could be, had a texture that left me wanting a bit more.
          </Paragraph>
          <Paragraph>
            However, the Sikwate—the heart of the ritual—was a revelation. It was, quite simply, the best tableya I’ve ever had. Perfectly thick, rich, and authentic, it carried the deep, bittersweet essence of local cacao with a consistency that only comes from traditional preparation. If you're coming here, come for the Sikwate; it’s the undisputed highlight of the menu.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
            {[
              "1s1Y4nFqAzq3Wo1F4rNQuWOi3OH7hD5CQ",
              "10mspYEJA01lZ_CCnYSJsb5e-GJm_kjF0",
              "1Ro_bw6TN80T69Yy4QBFlOTfSHge7V5hC",
              "1r_gI840N2MhUUhcJrznD_79B8dC-xjUj"
            ].map((id, i) => (
              <div key={id} className="aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden relative group border border-stone-200 shadow-sm">
                <img 
                  src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={`Tablea Gallery ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            I spent so much time taking photos of the counter and the food that people started staring. But in a city of modern facades, seeing someone commemorate Filipino cacao tradition is worth the attention.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Quiet Craft</H2>
          <Paragraph>
            The service at Tabléa is efficient; my order arrived in just five minutes. While the staff were friendly, they couldn't share much about the shop's history as there was no owner on-site to tell the tale. The space itself is compact, seating about 15 people, and while it lacks some modern amenities like WiFi or background music, the quality of their cuisine serves as their most effective advertisement. 
          </Paragraph>
          <Paragraph>
            My tip for visitors: focus on the counter and the food. It beautifully commemorates our local traditions even in this small, business-like space. I look forward to returning to sample additional selections from their menu—mainly for that incredible Sikwate experience. It’s a quiet monument to a craft that deserves to be celebrated.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Highlight</h3>
              <p className="text-sm text-stone-600 italic">The Sikwate (Tableya drink). Perfectly thick and authentic. Easily the best thing on the menu and a must-try for cacao lovers.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Environment</h3>
              <p className="text-sm text-stone-600 italic">Quiet, formal, and traditional. Best for focused work or small business meetings where silence is appreciated.</p>
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
            <Link href="/gureum" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: The Half-Moon View</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/lechon" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: The Lechon Pilgrimage</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
