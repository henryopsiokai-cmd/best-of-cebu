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
                    The first thing you notice about La Salsa is that you almost drive right past it. Salinas Drive moves fast, and the little house tucked between the other buildings on the strip does not look like a restaurant. It does not look like a place where anyone serves anything more ambitious than Halo-Halo on a sidewalk table. You have to trust yourself a little. You slow down, you pull over, and you push open a door that feels like it belongs on a quiet residential street somewhere in Lahug. And then, just like that, everything changes. The colors hit you first. Bright papel picado banners strung across the ceiling catch the light and scatter it sideways. The walls are covered in paintings, in prints, in the kind of warm, layered decoration that takes years to accumulate and that no designer would ever assemble on a timeline. Mexican music plays softly from somewhere in the back, not loud enough to compete with conversation but present enough to move the room into a different geography. A staff member looks up from the counter and smiles at you, and you understand immediately that you have stumbled into someone else's idea of a good time. You have also stumbled into one of the most quietly charming restaurants in Lahug.
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
                        The Beef Quesadilla at La Salsa is the reason you should sit down and order something, even if you are not particularly hungry when you arrive. The cheese is the reason you should finish it. Pull apart a corner of the flour tortilla and you will find a stretch of golden, molten cheese that behaves exactly the way cheese should behave in a quesadilla, the way that makes you close your eyes a little and reconsider whatever diet you thought you were on. The ₱325 price feels fair when you account for the tortilla quality alone, which is considerable. But here is where the honesty comes in. The beef inside is light. Not light as in subtle or refined. Light as in barely there. And the smell of it carries something that you will not be able to unnotice once you notice it. It is the smell of something that was cooked earlier, possibly much earlier, and then reheated. It is not off. It does not make you push the plate away. But it sits in the same room as the word fresh, and the two of them do not greet each other. The quesadilla is still worth ordering. You just want them to load it differently, and you want the meat to arrive at your table the way the cheese already does, with some heat and some urgency and the confidence that comes from something that was just made.
                    </Paragraph>
                    <Paragraph>
                        The Oreo Shake costs ₱145, and it does exactly what it says on the menu. Cookie bits are in there. The chocolate is present. You drink it and you feel the sweetness and you move on. It is not the kind of milkshake you photograph. It is not the kind of thing you text a friend about. It is fine, and sometimes fine is just fine, and there is no reason to dress that up. Order it if you are thirsty. There are worse ways to spend a hundred and forty-five pesos in a cantina in Lahug.
                    </Paragraph>
                    <Paragraph>
                        There is a moment worth noting about the staff. When I mentioned Best of Cebu, one of the people working the room stopped what she was doing, tilted her head slightly, and asked, very genuinely, if I was a vlogger. The question was so sincere and so unguarded that it made me laugh. It turned out she had never heard of Best of Cebu, and the idea of a food magazine operating from a phone was apparently less interesting than the idea of someone showing up with a ring light and an opinion. I appreciated the confusion. It told me something about the kind of place this is, which is a place where the people working there are paying attention to what is actually happening in the room rather than what might be happening on the internet. Their friendliness scored a 4 out of 5 from me. Their attentiveness was a 3. I was never ignored, but there were stretches where I had to find someone to ask for things, and in a space this small, that is worth noting.
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
                        The cheese is the reason you should finish it. Pull apart a corner of the flour tortilla and you will find a stretch of golden, molten cheese that behaves exactly the way cheese should behave in a quesadilla.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Space</H2>
                    <Paragraph>
                        I want to stay on the subject of the paintings for a moment because they are the detail that most reviewers mention in passing and that deserves more than a passing mention. The walls at La Salsa are not decorated. They are inhabited. Whoever built this space over years decided that the walls would hold everything, every print and every painting and every piece of color that made them happy, and the result is a room that genuinely feels like someone's collection rather than someone's purchase order. There is a warmth to it that has nothing to do with temperature and everything to do with taste. The space is also more generous than it appears from the street. I expected it to feel cramped once I was inside. It did not. Even when there are people here, and on the afternoon I visited there were only two of us, the room does not push you toward anyone. It gives you air.
                    </Paragraph>
                    <Paragraph>
                        The brightness is another thing that stays with you after you leave. La Salsa does not feel like a cave the way so many Filipino restaurants feel like caves, with moody lighting and dark corners and the impression that you are eating inside someone's mood. It feels like a garden, or like a room that has been opened up to the light even if all the light is artificial. The papel picado helps with this. So does the color palette, which runs toward terracotta and saffron and the kind of saturated warmth that photographs poorly and lives beautifully. The Mexican music adds a thematic layer without becoming a performance. You stop hearing it after a few minutes, which is exactly what good background music should do. You only notice it again when you pay attention.
                    </Paragraph>
                    <Paragraph>
                        La Salsa opened as a franchise, originally from Zamboanga, and it has found a comfortable life in Cebu, drawing the kind of neighborhood affection that keeps a small restaurant open on Salinas Drive where the foot traffic does not do anyone any favors. TripAdvisor reviewers have called it a splendid Filipino-Mexican restaurant, and while that sounds like a category invention, it is actually accurate. The food is Filipino in its portion logic and in its relationship to comfort. It is Mexican in its flavors and its framing. The combination is not a fusion in the trendy sense. It is just a restaurant that figured out what it wanted to be and committed to it quietly.
                    </Paragraph>
                    <Paragraph>
                        If I were sitting across from the owners, which I am not, I would tell them a few things. I would tell them that the Beef Quesadilla is close. The cheese is already doing the heavy lifting. They need to give the beef the same treatment, the same freshness, the same heat, the same confidence. I would also tell them that the salsa portions are too small, which is a note I picked up from other diners on Foodpanda and that I think is worth passing along. And I would tell them to keep the paintings and the papel picado and the music and the brightness. Those things are the whole point. Those things are the reason people will find this little house on Salinas Drive and walk through the door and feel like they have arrived somewhere.
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
