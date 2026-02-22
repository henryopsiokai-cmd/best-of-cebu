'use client';

import React from 'react';
import { Card } from '../components/editorial/Card';
import { H1, H2, H3, Paragraph } from '../components/editorial/Typography';
import { AnimatedSection } from '../components/editorial/AnimatedSection';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    // Internal index to maintain order and prevent duplicates
    const articles = [
        {
            category: "Japanese Aesthetic",
            title: "Pink Blossoms and Pancakes",
            excerpt: "Valentine's Day at Sakura Dining: Fluffy pancakes, heart message trees, and aesthetic Japanese vibes.",
            href: "/sakura",
            imageSrc: "https://drive.google.com/thumbnail?id=1i5fm3k_YBqbHrdXWsKkRbswYqASB4vhD&sz=w1000"
        },
        {
            category: "French Patisserie",
            title: "French Soul in Cebu",
            excerpt: "Timeless charm and buttery layers at La Parisienne, a Gallic escape in the heart of Lahug.",
            href: "/laparisienne",
            imageSrc: "https://drive.google.com/thumbnail?id=1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m&sz=w1000"
        },
        {
            category: "Industrial Coffee",
            title: "Minimalist Brew in Mandaue",
            excerpt: "Concrete lines and technical extraction at Hatte Cafe, a sanctuary for the serious coffee enthusiast.",
            href: "/hatte",
            imageSrc: "https://drive.google.com/thumbnail?id=1l3TYo14AA8kylwsWEqABsMxFOt0CX1An&sz=w1000"
        },
        {
            category: "Community & Soul",
            title: "A Net of Local Flavors",
            excerpt: "Celebrating the vibrant textures and soulful Cebuano cuisine at Pukot Kitchen.",
            href: "/pukot",
            imageSrc: "https://drive.google.com/thumbnail?id=1y8jiUByV_-C-xU-8mgiq4AKwyaHE4YWN&sz=w1000"
        },
        {
            category: "Modern Comfort",
            title: "Effortless Elegance at Tamp",
            excerpt: "Technical precision and modern cafe culture at Tamp Cafe & Co., a reliable haven in the city.",
            href: "/tamp",
            imageSrc: "https://drive.google.com/thumbnail?id=1FSLuFuIQan4A0cb77gn12Tv9TUmlSinn&sz=w1000"
        },
        {
            category: "Coffee & Chill",
            title: "The Half-Moon View",
            excerpt: "How Korean owner Felicia turned an empty corner in Country Mall into a monument of relaxation.",
            href: "/gureum",
            imageSrc: "https://drive.google.com/thumbnail?id=1WzTKTb1uOgmskLhAEzhrYq6CTOMN0UTF&sz=w1000"
        },
        {
            category: "Tradition",
            title: "The Cacao Ritual",
            excerpt: "Finding the best Sikwate in the city at the quiet, traditional Tablea Chocolate Cafe.",
            href: "/tablea",
            imageSrc: "https://drive.google.com/thumbnail?id=1MO9WVW5Jkupf35v8oe8prt8im3fghHS8&sz=w1000"
        },
        {
            category: "The Island Table",
            title: "Exploring Cebuano Cafes",
            excerpt: "Beyond the roast. Exploring the new wave of Cebuano cafes and hidden culinary laboratories.",
            href: "/food",
            imageSrc: "https://drive.google.com/thumbnail?id=1bMZK-axAAMEbjV2tbn4aTAaKDr1kJYRj&sz=w1000"
        }
    ];

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-serif overflow-x-hidden">
            {/* Hero Section */}
            <header className="relative h-screen flex flex-col justify-center items-center text-center p-6 overflow-hidden">
                {/* Parallax Background */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: y1 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/hero.png')",
                            filter: "brightness(0.7)"
                        }}
                    ></div>
                </motion.div>

                <div className="relative z-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter text-white drop-shadow-2xl">
                            Best of Cebu
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <p className="text-xl md:text-3xl font-light tracking-wide text-white/90 mb-10 drop-shadow-lg max-w-2xl mx-auto">
                            The Definitive Guide to the Queen City of the South
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="w-24 h-1 bg-white mx-auto"
                    ></motion.div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    Scroll to Explore
                </motion.div>
            </header>

            {/* Editorial Content Preview */}
            <main className="max-w-7xl mx-auto py-32 px-6">
                <AnimatedSection className="mb-24 text-center max-w-3xl mx-auto">
                    <H2 className="text-center">The Edit</H2>
                    <Paragraph className="text-center text-xl text-stone-600">
                        We don't review everything. We only review what matters. From hidden culinary gems to architectural marvels, this is your essential guide.
                    </Paragraph>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <section className="md:col-span-8 space-y-16">
                        {articles.map((article, index) => (
                            <AnimatedSection key={article.href} delay={0.1 * (index + 1)}>
                                <Card
                                    category={article.category}
                                    title={article.title}
                                    excerpt={article.excerpt}
                                    href={article.href}
                                    imageSrc={article.imageSrc}
                                />
                            </AnimatedSection>
                        ))}
                    </section>

                    <aside className="md:col-span-4 space-y-12">
                        <AnimatedSection delay={0.8} direction="left">
                            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-stone-100 sticky top-10">
                                <h3 className="text-xl font-bold mb-8 font-serif tracking-tight">The Curated List</h3>
                                <ul className="space-y-6 font-sans">
                                    {[
                                        { id: '01', title: 'Best Sunset View', val: 'Busay' },
                                        { id: '02', title: 'Best Coffee', val: 'Tightrope' },
                                        { id: '03', title: 'Best Hidden Gem', val: 'Olango' }
                                    ].map((item, i) => (
                                        <li key={i} className="group flex justify-between items-center border-b border-stone-100 pb-4 cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <span className="text-xs font-bold text-stone-300">{item.id}</span>
                                                <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{item.title}</span>
                                            </div>
                                            <span className="font-bold text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">{item.val}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    </aside>
                </div>
            </main>

            <footer className="bg-stone-900 py-24 text-center text-white/40">
                <p className="font-sans text-xs uppercase tracking-widest">
                    &copy; 2026 Best of Cebu. Designed in the Philippines.
                </p>
            </footer>
        </div>
    );
}
