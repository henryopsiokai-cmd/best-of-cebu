import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function CafeCappuccino() {
    return (
        <div className="min-h-screen bg-white text-stone-900 font-serif">

            <ArticleHeader
                category="Cafe"
                title="Cafe Cappuccino by Double Dutch"
                subtitle="A European-style coffee bar bringing international cafe culture to Cebu."
                author="Best of Cebu"
                publishedAt="2025"
                imageSrc="https://drive.google.com/thumbnail?id=10wmdOPGY__rL_XkEuTUIlTGpb760oGBW&sz=w1600"
            />

            <article className="max-w-4xl mx-auto px-6 pb-24">
                <DropCap>
                    This is the opening paragraph in first person. Start with atmosphere, location context, and emotional hook.
                </DropCap>

                <AnimatedSection>
                    <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden border relative shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/t4RCtIH3Pds"
                            title="Best of Cebu video"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Experience</H2>
                    <Paragraph>
                        Narrative paragraph one.
                    </Paragraph>
                    <Paragraph>
                        Narrative paragraph two.
                    </Paragraph>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                        <figure><img src="https://drive.google.com/thumbnail?id=14Sgkv5JgvJBitouOv5MMzNxYjZG5-184&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="Cafe Cappuccino interior" /></figure>
                        <figure><img src="https://drive.google.com/thumbnail?id=1uiCbs1m6DHlDOuQbbuF1dxGQcU7JppQc&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="Cafe Cappuccino cappuccino" /></figure>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <PullQuote>
                        Author pull quote goes here.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Details</h3>
                            <p className="text-sm text-stone-600 italic">Address, area, hours, parking, WiFi, contact links.</p>
                        </div>
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
                            <p className="text-sm text-stone-600 italic">★★★★☆ (X.X/10) • Price: ₱₱₱. Best order, strengths, weaknesses, return recommendation.</p>
                        </div>
                    </div>
                </AnimatedSection>

                <Gallery images={["14Sgkv5JgvJBitouOv5MMzNxYjZG5-184","1uiCbs1m6DHlDOuQbbuF1dxGQcU7JppQc","14avUWZmE1qTWVRopt_PWpzohg5mZqniz","1NPZivveo2IIlMCGUcj3U7TG0BlM4w0UC","1hx6SK8WfjFGTAAa5-z7D1g8N-Decf-yQ","1RwGNBi9BfIzGltH1hoR9nC8Vxblaniu9","1vBHB-33r1hVi-f6uSx6sTqt3VSMr-h4K","1nBQ3ZLwLAzl9gVQyw80Xo0z37RTtA9Ni","1mEjA0ZWbLrl78KknAWi5ThUfnY_lNHC-","1RfHB47c-ISpCqkJTIeBbgwX0wsffIU7e","17c2sMUpEkcHmZXFv5zwJnDcchWvreNdt","1WdCevYgC6psQU6zLQwAEyZVDOYd4hsEB","1VOJ6KQRFiowZMvZRNwJplhtot6vu4YR-","10NOXZCi6260BX7LHyGNtYDb76gK_VP6z"]} />
            </article>

            <footer className="bg-stone-900 text-white py-24 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
                    </div>
                    <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
                        <a href="/" className="hover:text-amber-500 transition-colors">Back to Issues</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
