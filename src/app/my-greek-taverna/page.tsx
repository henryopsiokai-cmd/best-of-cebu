import React from 'react';
import Link from 'next/link';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function MyGreekTaverna() {
    return (
        <div className="min-h-screen bg-white text-stone-900 font-serif">

            <ArticleHeader
                category="Restaurant"
                title="My Greek Taverna"
                subtitle="Elevated Mediterranean cuisine in Banilad — where the food tastes like it was made by someone who actually loves Greece."
                author="Best of Cebu"
                publishedAt="2026"
                imageSrc="https://drive.google.com/thumbnail?id=1FFwfSo2jIYC923oBApcfxu4s8ydKS8rF&sz=w1600"
            />

            <article className="max-w-4xl mx-auto px-6 pb-24">
                <DropCap>
                    There's a particular kind of restaurant that slots perfectly into your life without you noticing — the kind that doesn't demand a special occasion but makes everything feel like one. My Greek Taverna, tucked inside the APB Arcade on Paseo Saturnino in Banilad, is exactly that. From the outside it's unassuming, the kind of place you could walk past a dozen times and never clock. But step inside and the energy shifts. The space is neat, orderly, and quietly elegant — white tablecloths, warm lighting, the faint scent of olive oil and herbs. It's the kind of quiet that feels intentional rather than empty, the kind of clean that scores a 5/5 without needing to try. Twenty-five seats, maybe less, all of them comfortable. On the night I visited, it was the kind of calm that made me glad I came alone, because I could actually taste my food without distraction.
                </DropCap>

                <AnimatedSection>
                    <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden border relative shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/Re9dgluG50Q"
                            title="Best of Cebu video"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">What I Ordered</H2>
                    <Paragraph>
                        The Chicken Parmigiana (₱465) arrived about fifteen minutes after I ordered, and I will tell you plainly: this is the best chicken I've ever had. The cheese on top is properly done — golden,闻到它的时候你就会流口水那种。The chicken itself is seasoned with herbs in a way that makes every bite interesting, not just functional. Underneath, the pasta is cooked exactly right — not mushy, not underdone — and there's olive oil in there, real olive oil, because you can smell it and it keeps the whole dish from drying out. At ₱465 it's not cheap for Cebu, but you understand where the money goes the moment you take your first bite. I'd come back for this alone. I'd drive across the city for this alone.
                    </Paragraph>
                    <Paragraph>
                        The Mango Yogurt (₱105) sounds like an afterthought on the menu — something between a smoothie and a dessert. It's not. It tastes like real mango, the kind that actually smells like mango, not the kind made with concentrate and wishful thinking. It's not very sweet, which I mean as the highest compliment. It tastes healthy without performing healthiness. The Greek yogurt base is clean and slightly tart, and the mango flavor lingers in a way that feels natural rather than engineered. I genuinely cannot stop thinking about this.
                    </Paragraph>
                    <Paragraph>
                        The Trio Dips (₱295) comes with your choice of bread — I went with pita — and three dips. One is orange and has a strong, almost briny olive character with a finish I haven't tasted anywhere else in Cebu. Another is hummus with a more assertive smell than the smooth, neutral versions you find at most places — it took me a few bites to adjust, but once I did, I appreciated the authenticity. The third is creamy and slightly sour, the kind of thing you'd find next to souvlaki. The pita was the weakest element of the meal for me — perfectly fine, but not distinctive. Everything else was.
                    </Paragraph>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                        <figure><img src="https://drive.google.com/thumbnail?id=1FFwfSo2jIYC923oBApcfxu4s8ydKS8rF&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="My Greek Taverna interior" /></figure>
                        <figure><img src="https://drive.google.com/thumbnail?id=1pLTFFlRrB2FF5Me6FapuneSugB56OP0H&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="My Greek Taverna food" /></figure>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <PullQuote>
                        The Chicken Parmigiana is the best chicken I've ever had. I'd drive across the city for this alone.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Space</H2>
                    <Paragraph>
                        Chill, peaceful, elegant. Three words that cover it well. The restaurant sits maybe twenty-five people in a space that feels bigger than it is, probably because it's not crowded with furniture. Air conditioning works well. WiFi is available. The noise level is quiet — genuinely conversational, not the kind of quiet that's just the absence of loud music. On a weeknight visit, it was nearly empty, which either tells you Cebernians haven't found it yet or that it's the kind of place people go when they specifically don't want to be around crowds. Both are appealing. Cleanliness scores a full 5/5 across the board — the bathrooms included. This is a place that pays attention.
                    </Paragraph>
                    <Paragraph>
                        Best suited for: a date night when you want to be able to hear each other, a special occasion that deserves a little elegance without full fine-dining formality, solo dining when you want to treat yourself, or a quiet family dinner. It doesn't have the energy of a loud bar or a casual hangout — it's more intentional than that. I'd describe it as the kind of place you'd take someone you actually wanted to spend time with, not just someone you were obligated to see.
                    </Paragraph>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Details</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Address:</strong> APB Arcade, Paseo Saturnino, Ma. Luisa Road, Banilad, Cebu City 6000, Philippines<br/>
                                <strong>Hours:</strong> 10:00 AM – 10:00 PM daily<br/>
                                <strong>Parking:</strong> Yes, in front of the building<br/>
                                <strong>WiFi:</strong> Yes<br/>
                                <strong>Air Conditioning:</strong> Yes<br/>
                                <strong>Phone:</strong> n/a<br/>
                                <strong>Facebook:</strong> My Greek Taverna Cebu<br/>
                                <em>Banilad (Paseo Saturnino / Maria Luisa Road area).</em>
                            </p>
                        </div>
                        <div className="p-8 bg-stone-50 border shadow-sm">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
                            <p className="text-sm text-stone-600">
                                <strong>Rating:</strong> ★★★★☆ (7.5/10)<br/>
                                <strong>Price:</strong> ₱₱₱ (₱400–₱800 per person)<br/>
                                <strong>Best Order:</strong> Chicken Parmigiana (₱465) + Mango Yogurt (₱105)<br/>
                                <strong>Best For:</strong> Date night, special occasions, solo dining, family dinner, quiet self-date<br/>
                                <strong>Would Return:</strong> Absolutely — the Chicken Parmigiana alone is worth it
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <Gallery images={["1feLJxM1d5y98Du84QvfmwrPix99ei3oY","1t5o0_jT5YzUGH0efTUxuw89M9YROSctl","1EnBlA_QcguJC7JV3JDOdGrIzKd4yjpuD","1d-D55IEz1eA9g1b1puw4oy9Kfpv3DQzJ","1W8gB3dLa5ayD4D6Q-_j0_NbKOATsqq_z","1N3ONEMZ0d5KbUPCauxna2-HtjO-QV5EB","1FbugPYjxJ6PCu8pOIEqMsZHIoBCLxcQg","10mu6RX3Ic9Uorp7bcN95vLWdoyuUth0w","1IDkhkL6pN6Dyy1KJ0jIoaLu_z8mfkBmT","1CmM9594uAFgJxUF_a07qTKhlcNIXv4u4","1AKAT9c0K74WxZeDT_7nlpP1Gqr3xXRd3","1Nhs7duSABwnSHGMAhEyPqBGt4j98rtbW","1LgKP51mqL_2P46ZqJqv3IiW63qw1AXrd","1s_kBPJlmpq8EPICB_9sCRPonmLzYTNa1","1LxOOgqD2eVL2v9HgiOaSN5h3jM6gH9iW","15v6NeSnNsrXxRGfhLR-7Fm1I49Lhvzks","1LYl9sogci3mkyVfBjN2M2pRvvFS7IByV","15agsuVghmpgT3K7eQU0FGyI0ktisXP1Z"]} />
            </article>

            <footer className="bg-stone-900 text-white py-24 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
                    </div>
                    <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
                        <Link href="/amato" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Amato</Link>
                        <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
                        <Link href="/food" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Food</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
