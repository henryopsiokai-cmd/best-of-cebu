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
                    I'd driven past Salinas Drive a dozen times and never once noticed the little house with the colorful signage tucked between the other buildings. That's the thing about La Salsa — from the outside, it looks like someone's home, which is exactly what makes it so charming. You half-expect to walk in and find someone's lola watching soap operas in the living room. Instead, you get mariachi music, bright papel picado banners strung across the ceiling, and the kind of warm, slightly chaotic energy that makes you exhale the moment you step through the door. It's casual in a way that feels intentional, like the owners decided early on that fancy didn't suit them. The air conditioning was a welcome relief from the Cebu heat, and the space — maybe 30 seats — had this cozy, lived-in quality. I could see myself settling into a corner booth here with friends, losing track of time over tacos and good conversation. Finding places like this, the ones that don't announce themselves with flashing lights or viral TikToks, is honestly one of my favorite parts of this job.
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
                        The Beef Quesadilla (₱325) is what I'd call the star of the menu, for better and for worse. The cheese pulls in all the right ways — stretchy, golden, comforting in that way only melted cheese can be. But the beef filling was sparse, and there was a faint whiff of something that reminded me of last night's dinner reheated. Not enough to send it back, but enough to notice. Still, at ₱325, it's a decent portion for one person, and the flour tortilla had good texture. I'd order it again, maybe with extra salsa on the side to make up for the skimpy meat. The Oreo Shake (₱145) was fine — I want to be honest about this because you might see it on Instagram and get excited. It's a decent milkshake. It's not a destination shake. The cookie bits were there, the chocolate flavor was there, but nothing made me want to snap a photo and tag my friends. Sometimes "fine" is just fine.
                    </Paragraph>
                    <Paragraph>
                        The staff were genuinely sweet. When I mentioned Best of Cebu, one of them got flustered and asked if I was a vlogger — I appreciated the confusion, honestly. Their friendliness scored a solid 4 out of 5 in my book, though attentiveness dipped to a 3. I never felt neglected, but there were moments I had to flag someone down. Mexican music played softly in the background throughout my meal, which felt appropriate if not especially authentic. For a chill afternoon with a friend, a casual date, or when you just want somewhere quiet to eat without the fanfare of a busy mall restaurant, La Salsa fits the bill. It's not going to blow your mind, but it might just become one of those places you return to when you need good-enough food in a comfortable space.
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
                        The cheese pulls in all the right ways — stretchy, golden, comforting in that way only melted cheese can be. But the beef filling was sparse.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Details</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Address:</strong> 18 Salinas Dr, Lahug, Cebu City, Central Visayas<br/>
                                <strong>Hours:</strong> 10:00 AM – 10:00 PM daily<br/>
                                <strong>Parking:</strong> Yes, directly in front<br/>
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
