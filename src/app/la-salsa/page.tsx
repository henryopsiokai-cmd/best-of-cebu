import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function LaSalsa() {
    return (
        <div className="min-h-screen bg-white text-stone-900 font-serif">

            <ArticleHeader
                category="Restaurant"
                title="La Salsa"
                subtitle="Authentic flavors and vibrant atmosphere — a celebration of Latin American cuisine in the heart of Cebu."
                author="Best of Cebu"
                publishedAt="2025"
                imageSrc="https://drive.google.com/thumbnail?id=1EjjXS9J6F5eBes8nkEnMvSzReqQkLVrj&sz=w1600"
            />

            <article className="max-w-4xl mx-auto px-6 pb-24">
                <DropCap>
                    This is the opening paragraph in first person. Start with atmosphere, location context, and emotional hook.
                </DropCap>

                <AnimatedSection>
                    <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden border relative shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/hdbnF11oZHM"
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
                        <figure><img src="https://drive.google.com/thumbnail?id=1EjjXS9J6F5eBes8nkEnMvSzReqQkLVrj&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="La Salsa interior" /></figure>
                        <figure><img src="https://drive.google.com/thumbnail?id=1YAWft0khxEAgJ0YGA8L5HjbdwwMhalRH&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="La Salsa food" /></figure>
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

                <Gallery images={["1YZzbWyw1_chnSlgjv2xSDmbiYx8Qnwrr","1aRDKvhZgyuNs3aKZZsDKpI-CIJuboPPd","1LXCtrglkw4XVFUTpo9GI0UjNWHbUsYx3","1cO1yhXE0FcVvUqAwjQSqbTLJrKOnd4LE","1EMo6XU2Hy-XlWpHOMkmZzdUaZThjvlWZ","1NLGBpMb-8cryoognfRc4YvZBSBUDZBZz","1wB5Z3Ug4vjGkL0SC_h5QS52Ecis1hqgD","1ELdoSNo1Ym1ZcSBbOcusyZQtZR7Sw5x9","1EdnbpKGAHz7cr0xIRAA_9RyV-lqd76HQ","1ifwS8SdV2aDUdLDMiraWsPRA_gCCqQZ3","1bm0X1GTvMOtfK1RrJBu1yvd1wLmu1fZh","1__xJaU-XCnVoTVnpOkpqGz_xiP2qcj7F","1CwKwwQuw_Fd5UolPg-GXbctVDJPALvPR","1o502HvmzGwHnN8AF8c-Bp4M6gPwLnZjB"]} />
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
