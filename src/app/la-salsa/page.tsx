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
                subtitle="A cheerful little cantina on Salinas Drive that hides a world of color behind an ordinary facade."
                author="Criste Joy"
                publishedAt="March 2026"
                imageSrc="https://drive.google.com/thumbnail?id=1EjjXS9J6F5eBes8nkEnMvSzReqQkLVrj&sz=w1600"
            />

            <article className="max-w-4xl mx-auto px-6 pb-24">

                <DropCap>
                    From the highway, La Salsa FilMex Cantina does not announce itself like a restaurant. It looks like a house. A regular house with a gate and some plants, the kind you might drive past a hundred times without a second thought. I pulled up on Salinas Drive and actually checked my phone twice to make sure I was in the right place. But the moment I stepped through the door, all that hesitation melted away. The staff greeted me with a smile before I could even say hello. And then I saw the walls. Bright colors. Paintings everywhere. Papel picado strung across the ceiling like confetti that decided to stay. Somehow the light in here feels different from the light outside, softer and warmer, like walking into someone's living room that just happens to serve enchiladas. Mexican music played softly in the background, not demanding attention, just filling the space the way good wallpaper does. I exhaled. I was glad I trusted the address.
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
                        I ordered the Beef Quesadilla because some things you just know you want. The cheese pulled beautifully when I lifted the first wedge, a stretch of molten comfort that reminded me of lazy Sundays and childhood kitchens. The taste of the cheese itself was good, genuinely comforting, the kind of familiar that makes you close your eyes for half a second. But the beef. I want to be honest here. There was very little of it, and what was there smelled like leftovers. Not bad, not spoiled, but not fresh either. The kind of smell that tells you this batch has been sitting a while. It did not taste hot either. It tasted like it had been warm once, then waited. If the kitchen served these hotter, with more generous portions of beef that actually taste freshly cooked, this quesadilla could be something special. The cheese alone almost makes it worth ordering anyway.
                    </Paragraph>
                    <Paragraph>
                        I also ordered the Oreo Shake, and here is the honest truth: it was fine. That is not a compliment you frame and hang on the wall, but it is not a complaint either. The shake was decent. If you are thirsty and want something sweet to wash down your meal, it will do the job. It did not stand out. It did not disappoint. It just existed, calmly and politely, and I drank it and moved on with my life. Sometimes a meal needs a supporting actor, and the Oreo Shake accepted that role with grace.
                    </Paragraph>
                    <Paragraph>
                        The staff were friendly in a way that felt genuine, not performative. When they found out I was writing about the place for Best of Cebu, their eyes lit up. They asked if I was a vlogger. They thought I was making content for TikTok or YouTube. The whole thing was endearing. They let me take photos and videos of everything without any fuss, no awkward hovering, no suspicious looks. Just a nod and a smile and go ahead. The friendliness score was high. The attentiveness was a little lower, the kind of place where you might need to flag someone down if you need a refill. But the warmth made up for the wait.
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
                        It looked like a regular house from the road, and honestly that is exactly why I almost did not go in. But houses hold the best meals. The ones cooked with care, served with a smile, eaten in rooms full of color and art and the quiet hum of good music. That is what I found behind the gate.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Space</H2>
                    <Paragraph>
                        The paintings are the first thing you notice and the last thing you forget. Every wall has something going on, a burst of color, a face, a landscape rendered in bold brushstrokes. It feels like the owners handed artists a bunch of paint and said make this place feel alive. And it worked. The space does not feel decorated. It feels curated, loved, like someone spent real time thinking about how each corner should make you feel. The brightness of the room has a garden like quality too. The way the light pours in and catches the colors, it lifts your mood without you even realizing it. I sat there sipping my shake and just looked at the walls for a while. That does not happen often.
                    </Paragraph>
                    <Paragraph>
                        The place is more spacious than it looks from outside. I was worried it might feel cramped, but the tables are laid out with room to breathe. The Mexican music played softly, a gentle undercurrent that added to the theme without overpowering conversation. It was quiet during my visit. Just me and one other couple, each of us eating at our own slow pace. The whole meal felt peaceful. There is something nice about a restaurant that does not rush you. Where the silence between bites feels comfortable, not awkward. Where you can take your time and no one looks at you like you are overstaying. La Salsa has roots in Zamboanga, and you can feel the history in the way they do things, the pride in the concept, the attempt at something different from the usual Cebu food scene.
                    </Paragraph>
                    <Paragraph>
                        Here is the honest feedback, because I think this place deserves it. The ingredients need work. The beef needs to taste fresh and arrive hot. The salsa portions need to be bigger, because a good salsa is not a garnish, it is a partner. If the owners invest in the quality of what goes inside the food, if they turn up the heat and the volume, this place could be genuinely great. The bones are good. The vibe is right. The art is wonderful. The staff are warm. The space is peaceful. It just needs the food to catch up to the soul of the restaurant. I would still come back. I would bring a friend. I would sit by the window and let the colors wash over me and try something else on the menu. Because a place this warm deserves a second chance to impress.
                    </Paragraph>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
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