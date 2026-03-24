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
                    Here's a secret nobody tells you about Mactan: some of the best escapes are hiding in plain sight. I was driving along Casanta-Soong Road, squinting at the highway, when the GPS announced we'd arrived — except all I saw was what looked like a regular house with a small sign. That's Nimo Brew for you. It doesn't announce itself with neon lights or a flashy facade. You walk through what feels like someone's garden, and suddenly you're in this incredible outdoor space that feels miles away from the traffic and noise of the city. I'm not exaggerating when I say I exhaled audibly the moment I stepped in. The air was different — cleaner, greener, quieter. Plants everywhere, wooden seating scattered under trees, a small air-conditioned area if you need it but honestly, the outdoor tables were where it's at. This is the kind of place you bring a book, a friend, or just yourself and your thoughts. It's the opposite of a mall cafe. It's a destination.
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
                        I almost skipped the food here and just ordered coffee — cafes like this often play it safe with the kitchen. But the 12-hour Marinated Salmon Fillet (₱540) caught my eye, and I'm glad I went for it. The marinade was genuinely interesting: not the usual soy-garlic overload I'd braced myself for, but something more nuanced. The salmon had a unique flavor that wasn't too salty, which is my biggest pet peeve with Filipino-style fish preparations. Was it perfectly cooked? I'll be honest — no. The texture was slightly overdone in a couple of spots, and the sauce could have used a bit more presence. But the flavors were there, and I'd order it again knowing what I was getting. At ₱540, it's not cheap, but you're paying for the experience as much as the food. The staff seated me right away, and my food arrived within 5-8 minutes, which I appreciated.
                    </Paragraph>
                    <Paragraph>
                        Let me talk about what really matters here: the space. The cleanliness was immaculate — 5 out of 5, no hesitation. The bathrooms? Also 5 out of 5. In a country where bathroom standards can vary wildly, this matters more than people admit. There are easily 100+ seats, mostly outdoor under covered pavilions, with a small air-conditioned area that fits maybe 5-6 people. WiFi is available, so yes, you can work from here. But honestly? You'd be cheating yourself. This place is for unwinding, for slow mornings with good coffee, for solo lunch dates with a notebook, for friends who actually want to talk instead of stare at their phones. It's about a 12-minute walk from Mactan Newtown, which keeps the crowd to people who actually sought it out. That's part of its charm.
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
                        The air was different — cleaner, greener, quieter. This is the kind of place you bring a book, a friend, or just yourself and your thoughts.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Details</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Address:</strong> Cebu Plant Company Compound, Casanta-Soong Road, Brgy. Casanta Soong, Mactan, Lapu-Lapu City, 6015 Cebu<br/>
                                <strong>Hours:</strong> 8:00 AM – 9:00 PM daily<br/>
                                <strong>Parking:</strong> Yes, near entrance (no valet)<br/>
                                <strong>WiFi:</strong> Yes<br/>
                                <strong>Phone:</strong> Not listed<br/>
                                <strong>Nearest Landmark:</strong> ~12-minute walk from Mactan Newtown<br/>
                                <em>Looks like a regular house from the highway — look for the sign.</em>
                            </p>
                        </div>
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Rating:</strong> ★★★★☆ (Space & vibe: exceptional; Food: solid with minor misses)<br/>
                                <strong>Price:</strong> ₱₱₱ (₱400–₱800 per person)<br/>
                                <strong>Best Order:</strong> 12-hour Marinated Salmon Fillet (₱540)<br/>
                                <strong>Best For:</strong> Work-from-cafe, solo dining, unwinding, chill dates, nature lovers<br/>
                                <strong>Would Return:</strong> Yes — this is the kind of place you return to when you need to reset
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <Gallery images={["1bK_coukk0tSDQf4fbELPguKWQpNmUtyM","1XZhg-6oxehyuwJPqoC6GjLFtV_WaCcN2","1tqG3sqmfQUUFVpvLDrGjXPrYoVa5TvJr","11D4Ilbb43bLikm9UwLxTy_pkY3Z_GIcM","1L_9tcZ4Y3D2PrbXTDll6HYji85TGGcmM","1U0Pyl1Gcn0-mA7TU5i93OmxqulGzqsA3","1Ig7COxiLtcHltq7Yo9NdIZsofpiHI0B4","17iyP9rbQS6nCtADqsMNDyVJQivnbsQJe","1YjWqNGqdAlEQ5_XfSE3-4n71x2-BIrRH","16hUe5FURKhpBxLMAFWN4xDBWlkzAocl9","1AxIARPMuocNBbRRpIM5ibJcrh7O3AUzY","1b2dL9mwKyUOigiHSJnCQqvXR6cR5HKk4","1guVTvYGo2knFooopLNAy3mCawpwRJCoU","1WzOuop6gDowmU_PBndT-fdvD3jsYenL8","1j9Juj5TKM73vY7WD10CfXog4GBJKKikR","1BNwoV0LSW-gM9S90U39IdfIWL0x5eB0h","1gu0qHarpiy6baNmV4eR-LED7DBkOZgG3"]} />
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
