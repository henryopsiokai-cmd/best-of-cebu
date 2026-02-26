import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

// -----------------------------------------------------------------------------
// BEST OF CEBU - FEATURE TEMPLATE
// -----------------------------------------------------------------------------
// Copy this file to src/app/[feature-slug]/page.tsx to start a new article.
// -----------------------------------------------------------------------------

export default function FeatureTemplate() {
    return (
        <div className="min-h-screen bg-white text-stone-900 font-serif">

            {/* 1. ARTICLE HEADER
          - Use a high-quality image (16:9 aspect ratio recommended).
          - If imageSrc is missing/broken, it will smoothly fallback to a text placeholder.
      */}
            <ArticleHeader
                category="Category Name"
                title="The Article Title"
                subtitle="A compelling subtitle that creates intrigue and summarizes the piece."
                author="Author Name"
                publishedAt="Month Year"
                imageSrc="/path/to/image.jpg"
            />

            <article className="max-w-4xl mx-auto px-6 pb-24">
                <DropCap>
                    This is the opening paragraph in first person. Start with atmosphere, location context, and emotional hook.
                </DropCap>

                <AnimatedSection>
                    <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden border relative shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
                            title="Best of Cebu video"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Section Title</H2>
                    <Paragraph>
                        Narrative paragraph one.
                    </Paragraph>
                    <Paragraph>
                        Narrative paragraph two.
                    </Paragraph>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                        <figure><img src="https://drive.google.com/thumbnail?id=IMAGE_ID_1&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="Feature image 1" /></figure>
                        <figure><img src="https://drive.google.com/thumbnail?id=IMAGE_ID_2&sz=w1600" className="w-full aspect-[4/5] object-cover border shadow-sm" alt="Feature image 2" /></figure>
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

                <Gallery images={["IMAGE_ID_1", "IMAGE_ID_2", "IMAGE_ID_3"]} />
            </article>

            {/* 5. FOOTER / NAVIGATION
          - Standard footer to navigate back to the issue or other stories.
      */}
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
