import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';

export default function LechonArticlePage() {
    return (
        <div className="min-h-screen bg-white text-stone-900 font-serif">
            <ArticleHeader
                category="The Culinary Issue"
                title="The Lechon Pilgrimage"
                subtitle="Why the dusty streets of Carcar still hold the crown for the world's most coveted roasted pig."
                author="Henry"
                publishedAt="February 2026"
            />

            <figure className="max-w-7xl mx-auto px-4 mb-24 -mt-12">
                <div className="relative h-[60vh] w-full mb-12 rounded-sm overflow-hidden shadow-xl">
                    <img
                        src="/best-of-cebu/images/lechon.png"
                        alt="Whole roasted lechon being prepared in Carcar"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[30s] hover:scale-105"
                    />
                </div>
                <figcaption className="mt-2 text-right text-[10px] font-sans uppercase tracking-widest text-stone-400">
                    Photography by Local Artisans
                </figcaption>
            </figure>

            <article className="max-w-3xl mx-auto px-6 pb-24">
                <DropCap>
                    The smell hits you long before the market gates appear. It is a thick, primordial scent—charcoal smoke, rendered fat, and a secret constellation of lemongrass and peppercorns. This is Carcar. To some, it is a transit point between the city and the beaches of the south. To those who understand the soul of Cebuano cuisine, it is a holy site.
                </DropCap>

                <H2 className="italic border-b-2 border-stone-900 inline-block pb-2">The Skin and the Salt</H2>

                <Paragraph>
                    While Manila style lechon relies on a thick liver-based sauce, the Cebuano variant is self-sufficient. In the stalls of the Carcar Public Market, the pigs are stuffed with locally grown aromatics that steam the meat from the inside out while the skin reaches a crystalline, glass-like shatter.
                </Paragraph>

                <PullQuote attribution="Mang Tomas, Master Roaster">
                    In Carcar, we don't cook for the tourists. We cook for the salt of the earth. If the pig isn't perfect, the city doesn't eat.
                </PullQuote>

                <Paragraph>
                    The true ritual isn't found in the pristine air-conditioned restaurants of IT Park. It is found here, sitting on a wooden stool, peeling apart layers of tender pork with your hands, accompanied by nothing more than a few pieces of <em className="italic font-bold">puso</em> (hanging rice) and the cacophony of a morning market in full swing.
                </Paragraph>
            </article>

            {/* Navigation Footer */}
            <footer className="bg-stone-900 text-white py-24 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
                    </div>
                    <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-amber-500 transition-colors">Previous Feature</a>
                        <a href="/" className="hover:text-amber-500 transition-colors">Back to Issues</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Next Feature</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
