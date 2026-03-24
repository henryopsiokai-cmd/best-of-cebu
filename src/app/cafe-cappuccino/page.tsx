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
                    There's something about Cafe Cappuccino by Double Dutch that hits different. Maybe it's the fact that it's perched right along the M.L. Quezon National Highway — easy to get to, easy to miss if you're not looking. Or maybe it's the size of the place, which is frankly enormous for a cafe in Mactan. I'm talking 100+ seats, all air-conditioned, with this European bistro energy that makes you forget you're a stone's throw from the Newtown. Across from Mactan Elementary School, tucked into Unit II, it's the kind of place that could easily be a tourist trap but somehow isn't. The vibe walks this interesting line between cafe and bar — casual enough for a weekday coffee run, but with enough atmosphere to make a date night feel special. On weekends, there's apparently a live band, which I didn't experience but can imagine transforms the space entirely. For now, I came on a quiet afternoon, and it was exactly what I needed: space to breathe, good food, and the faint hum of conversation around me.
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
                        The Hawaiian Pizza was the right call. I'm picky about pizza — I grew up with the thin, crispy New York style, so the Sicilian-adjacent approach here suited me perfectly. The bottom was crunchy in that satisfying way where you get a little resistance before the toppings give way. The top wasn't as crispy, which I actually prefer — it meant the cheese and sauce stayed gooey instead of getting that cardboard texture. What surprised me was how much I enjoyed the onions. They're not just filler; they're caramelized enough to bring sweetness that balanced the ham and pineapple without overwhelming either. Food arrived in about 10-15 minutes, which felt reasonable given the crowd. I could see the kitchen was keeping pace. Hein, the owner, seems like the kind of person who'd rather focus on getting things right than chatting up every table, which I respect.
                    </Paragraph>
                    <Paragraph>
                        On a weekday afternoon, the noise level was perfect — quiet enough to work or have a real conversation, but with enough ambient life that it didn't feel sterile. I can imagine on Friday or Saturday nights, when the band kicks in, it gets loud and celebratory in a way that would be perfect for groups or anyone looking for nightlife energy. The cleanliness scored a 3.5 out of 5 for me — not remarkable, but nothing off-putting either. Same with the bathrooms. The staff friendliness was a 3.5 out of 5, attentiveness a 3 — professional but not effusive. I'd call this place ideal for daytime work sessions, casual dates, or hosting foreigners who want that international cafe feel without leaving Cebu. The WiFi is reliable, the seating is comfortable, and there's enough variety on the menu to keep things interesting over multiple visits.
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
                        The Hawaiian Pizza was the right call. The bottom was crunchy in that satisfying way where you get a little resistance before the toppings give way.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Details</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Address:</strong> M.L. Quezon National Highway, Unit II Mactan, Lapu-Lapu City, 6015 Cebu<br/>
                                <strong>Hours:</strong> 8:00 AM – 11:00 PM Mon–Thu | Until 1:00 AM Fri–Sat–Sun<br/>
                                <strong>Parking:</strong> Yes, front and back (no valet)<br/>
                                <strong>WiFi:</strong> Yes<br/>
                                <strong>Owner:</strong> Hein<br/>
                                <strong>Nearest Landmark:</strong> Across Mactan Elementary School; ~5 min walk from Mactan Newtown
                            </p>
                        </div>
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Rating:</strong> ★★★★☆ (Solid all-rounder with weekend live music bonus)<br/>
                                <strong>Price:</strong> ₱₱ (₱250–₱600 per person)<br/>
                                <strong>Best Order:</strong> Hawaiian Pizza<br/>
                                <strong>Best For:</strong> Date night, work-from-cafe (best daytime), foreigners, groups<br/>
                                <strong>Would Return:</strong> Yes — for the pizza, the space, and the weekend atmosphere
                            </p>
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
