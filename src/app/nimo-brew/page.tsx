import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function NimoBrew() {
    return (
        <div className="min-h-screen bg-white text-stone-900 font-serif">

            <ArticleHeader
                category="Cafe"
                title="Nimo Brew"
                subtitle="A neighborhood coffee shop with soul — where slow mornings and good espresso coexist."
                author="Best of Cebu"
                publishedAt="2025"
                imageSrc="https://drive.google.com/thumbnail?id=1-ntB8rfrmt4aDE0BdH0TnYs1MjuUpyXY&sz=w1600"
            />

            <article className="max-w-4xl mx-auto px-6 pb-24">
                <DropCap>
                    This is the opening paragraph in first person. Start with atmosphere, location context, and emotional hook.
                </DropCap>

                <AnimatedSection>
                    <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden border relative shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/6PzlJdJjjgc"
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
                        <figure><img src="https://drive.google.com/thumbnail?id=1U4_5Kl8H6Wj20RJYjTdcQJcWXPnmj1wV&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="Nimo Brew interior" /></figure>
                        <figure><img src="https://drive.google.com/thumbnail?id=1cNptWMEi7yrqCr_GAgIy1WoZaPmjF0rY&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="Nimo Brew coffee" /></figure>
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

                <Gallery images={["1U4_5Kl8H6Wj20RJYjTdcQJcWXPnmj1wV","1cNptWMEi7yrqCr_GAgIy1WoZaPmjF0rY","1gu0qHarpiy6baNmV4eR-LED7DBkOZgG3","1BNwoV0LSW-gM9S90U39IdfIWL0x5eB0h","1j9Juj5TKM73vY7WD10CfXog4GBJKKikR","1WzOuop6gDowmU_PBndT-fdvD3jsYenL8","1guVTvYGo2knFooopLNAy3mCawpwRJCoU","1b2dL9mwKyUOigiHSJnCQqvXR6cR5HKk4","1AxIARPMuocNBbRRpIM5ibJcrh7O3AUzY","16hUe5FURKhpBxLMAFWN4xDBWlkzAocl9","1YjWqNGqdAlEQ5_XfSE3-4n71x2-BIrRH","17iyP9rbQS6nCtADqsMNDyVJQivnbsQJe","1Ig7COxiLtcHltq7Yo9NdIZsofpiHI0B4","1U0Pyl1Gcn0-mA7TU5i93OmxqulGzqsA3","1L_9tcZ4Y3D2PrbXTDll6HYji85TGGcmM","11D4Ilbb43bLikm9UwLxTy_pkY3Z_GIcM","1tqG3sqmfQUUFVpvLDrGjXPrYoVa5TvJr","1XZhg-6oxehyuwJPqoC6GjLFtV_WaCcN2","1bK_coukk0tSDQf4fbELPguKWQpNmUtyM"]} />
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
