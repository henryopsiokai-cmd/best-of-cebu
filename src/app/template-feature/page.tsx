import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';

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

            <article className="max-w-3xl mx-auto px-6 pb-24">

                {/* 2. OPENING PARAGRAPH
            - Always use DropCap for the first paragraph.
            - Keep the first paragraph punchy and setting the scene.
        */}
                <DropCap>
                    This is the opening paragraph. It should start with a strong hook. The first letter will be automatically styled as a large drop cap to give that premium editorial feel.
                </DropCap>

                {/* 3. CONTENT SECTIONS
            - Wrap distinct sections in <AnimatedSection> to trigger scroll effects.
            - Use <Paragraph> for body text.
            - Use <H2> for section dividers.
        */}
                <AnimatedSection>
                    <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 mt-8">
                        Section Title
                    </H2>
                    <Paragraph>
                        This is standard body text. It is optimized for readability with a max-width and generous line-height.
                    </Paragraph>
                </AnimatedSection>

                {/* 4. PULL QUOTES
            - Use to highlight key takeaways or impactful statements.
        */}
                <AnimatedSection>
                    <PullQuote attribution="Person of Interest">
                        This is a pull quote. It breaks up the text and adds visual interest. It automatically adds the quotation marks.
                    </PullQuote>
                </AnimatedSection>

                <AnimatedSection>
                    <Paragraph>
                        Concluding thoughts. Wrap up the article with a final observation or call to action.
                    </Paragraph>
                </AnimatedSection>

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
