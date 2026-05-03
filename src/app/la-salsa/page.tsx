'use client';
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
                author="Criste Joy"
                publishedAt="March 2026"
                imageSrc="https://drive.google.com/thumbnail?id=1EjjXS9J6F5eBes8nkEnMvSzReqQkLVrj&sz=w1600"
            />

            <article className="max-w-4xl mx-auto px-6 pb-24">
                <DropCap>
                    I had driven past Salinas Drive more times than I could count, and every single time the little house with the colorful signage just blended into the scenery. That is the thing about this place. It does not announce itself. From the road it looks like someone's home, the kind of place where a lola might be watching the telenovela in the living room while something simmers on the stove. You almost do not want to walk in because what if you are wrong, what if it is private property and you just made it weird. But then the door opens and everything shifts. The music reaches you first, then the colors, then the smell of something sizzling. It hits you that this is a restaurant, a real one, and somehow that realization makes it better. A place that does not need to perform at you from the street because the moment you step inside, it takes care of the rest.
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
                        The Beef Quesadilla (₱325) arrives and the first thing you notice is the cheese. It stretches in all the right ways, golden and comforting in the way only melted cheese can be. That is what keeps you at the table. The beef, though, tells a different story. There is not enough of it, and what is there carries a faint smell of something reheated, like it has been waiting under a heat lamp longer than it should have. I want to be honest about this because a ₱325 quesadilla deserves honesty. The tortilla has good texture. The cheese works. But the beef needs to show up differently, needs to taste like it was just cooked and not pulled from a container that has been sitting around. Still, for one person, it is a decent enough portion, and the comfort factor is real. I would order it again. I would just wish for more beef, fresher beef, and maybe a little more heat so that it arrives at the table the way it should.
                    </Paragraph>
                    <Paragraph>
                        The Oreo Shake (₱145) is fine. I want to say that clearly because I know it might look exciting on a menu board or someone's Instagram story. It is a fine milkshake. The cookie bits are there. The chocolate is there. It is the kind of thing you order when you are thirsty or want something sweet and you are already here. It did not make me reach for my phone. Sometimes fine is just fine, and that is not an insult, just a fact. The shake is consistent and drinkable. It just does not stand out in a way that earns its own post.
                    </Paragraph>
                    <Paragraph>
                        The staff were warm and accommodating in a way that made the whole visit feel easy. When I mentioned Best of Cebu, one of them got flustered in the most endearing way and asked if I was a vlogger. I appreciated the confusion. Their friendliness scored a 4 out of 5 in my book, though attentiveness dipped to a 3. There were moments I had to flag someone down, nothing serious, just a small gap between what I needed and when it arrived. What mattered more was the space itself. The art on the walls, the music drifting softly through the room, the way the light moved across the tables. I forgot, for a little while, that I was in the middle of Lahug. There was one other couple dining when I was there, which made the whole place feel like it was exactly the right size. Not too full, not empty enough to feel awkward. Just right for a slow, quiet meal where time passes without you noticing.
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
                        From the road it looks like someone's home. But then the door opens and everything shifts.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Space</H2>
                    <Paragraph>
                        What stays with me most is the art on the walls. Paintings, colorful and full of character, the kind that make you slow down as you walk to your table. There is something about a space that fills its walls with care rather than leaving them blank, and La Salsa does exactly that. The paintings feel warm and intentional, like someone thought about what would make a guest feel at home. Even the brightness of the room, the way the natural light comes in and bounces off the walls, adds to the effect. It does not feel like a sterile restaurant. It feels like a garden that someone decided to put tables in. The papel picado banners strung across the ceiling catch the light and add to that festive, colorful energy without ever feeling overwhelming.
                    </Paragraph>
                    <Paragraph>
                        The space is more generous than it looks from the outside. I remember thinking, when I first walked in, that it might feel cramped once people started filling it. But it does not. Even with a full dining room, there is enough room to breathe, enough distance between tables that your conversation stays your own. The Mexican music playing softly in the background ties everything together without ever demanding attention. It is just there, part of the atmosphere, like the paint on the walls or the brightness coming through the windows. This is a place that works best for chill dates, casual meals with friends, and anyone looking for a small escape from the noise of the city. The ₱₱ price point is fair for what you are getting. If they tighten up the freshness and add a little more volume to the plates, this place could become a real neighborhood favorite. As it stands, I would come back. Not for the food alone, but for the feeling of sitting somewhere that actually tried to be something. That matters.
                    </Paragraph>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Address:</strong> 18 Salinas Dr, Lahug, Cebu City, Central Visayas<br/>
                                <strong>Hours:</strong> 10:00 AM – 10:00 PM daily<br/>
                                <strong>Parking:</strong> Yes, directly in front. No valet.<br/>
                                <strong>WiFi:</strong> No<br/>
                                <strong>Phone:</strong> 0920-900-9001<br/>
                                <strong>Email:</strong> lasalsalahug@gmail.com<br/>
                                <strong>Facebook:</strong> La Salsa Fil Mex Cantina Lahug Cebu Branch<br/>
                                <em>Near Cebu IT Park, Lahug area.</em>
                            </p>
                        </div>
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Rating:</strong> ★★★☆☆ (6/10)<br/>
                                <strong>Price:</strong> ₱₱ (₱200–₱500 per person)<br/>
                                <strong>Best Order:</strong> Beef Quesadilla (₱325)<br/>
                                <strong>Best For:</strong> Chill dates, friends, casual meals, quiet dining<br/>
                                <strong>Would Return:</strong> Yes — to chill and try other menu items
                            </p>
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