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
    // Ordered: newest first (reverse chronological)
    const articles = [
        {
            category: "Latin Comfort",
            title: "La Salsa: Mexican Home Cooking on Salinas Drive",
            excerpt: "A colorful cantina in a Lahug corner house — charming, casual, and great for a low-key evening out.",
            href: "/la-salsa",
            imageSrc: "https://drive.google.com/thumbnail?id=1EjjXS9J6F5eBes8nkEnMvSzReqQkLVrj&sz=w1000",
            date: "March 2026"
        },
        {
            category: "European Cafe",
            title: "Cafe Cappuccino by Double Dutch",
            excerpt: "A European-style coffee bar bringing international cafe culture to Cebu.",
            href: "/cafe-cappuccino",
            imageSrc: "https://drive.google.com/thumbnail?id=10wmdOPGY__rL_XkEuTUIlTGpb760oGBW&sz=w1000",
            date: "March 2026"
        },
        {
            category: "Coffee & Escape",
            title: "Nimo Brew: A Garden Cafe on Mactan",
            excerpt: "Some of the best escapes hide in plain sight — Nimo Brew turns a quiet Mactan road into a destination.",
            href: "/nimo-brew",
            imageSrc: "https://drive.google.com/thumbnail?id=1-ntB8rfrmt4aDE0BdH0TnYs1MjuUpyXY&sz=w1000",
            date: "February 2026"
        },
        {
            category: "Mediterranean",
            title: "My Greek Taverna: Elevated Greek in Banilad",
            excerpt: "The Chicken Parmigiana alone is worth the drive — a calm, elegant Mediterranean spot that actually delivers on its promises.",
            href: "/my-greek-taverna",
            imageSrc: "https://drive.google.com/thumbnail?id=1FFwfSo2jIYC923oBApcfxu4s8ydKS8rF&sz=w1000",
            date: "February 2026"
        },
        {
            category: "Fine Dining",
            title: "Amato: Modern Italian in the Heart of Cebu",
            excerpt: "An intimate fine dining experience featuring contemporary Italian cuisine with a local twist.",
            href: "/amato",
            imageSrc: "https://drive.google.com/thumbnail?id=118SI_2XkELMzO2wbHo3YC6JwpAjkuoJc&sz=w1000",
            date: "January 2026"
        },
        {
            category: "Tradition",
            title: "Tablea Chocolate Cafe: The Cacao Ritual",
            excerpt: "Finding the best Sikwate in the city at the quiet, traditional Tablea Chocolate Cafe.",
            href: "/tablea",
            imageSrc: "https://drive.google.com/thumbnail?id=1MO9WVW5Jkupf35v8oe8prt8im3fghHS8&sz=w1000",
            date: "January 2026"
        },
        {
            category: "Coffee & Chill",
            title: "Gureum Cafe: The Half-Moon View",
            excerpt: "How Korean owner Felicia turned an empty corner in Country Mall into a monument of relaxation.",
            href: "/gureum",
            imageSrc: "https://drive.google.com/thumbnail?id=1WzTKTb1uOgmskLhAEzhrYq6CTOMN0UTF&sz=w1000",
            date: "December 2025"
        },
        {
            category: "Modern Comfort",
            title: "Tamp Cafe: The One Peso Cake That Actually Delivers",
            excerpt: "At Tamp Banawa, tender beef, warm service, and a standout promo make this cafe one of the easiest recommendations in the area.",
            href: "/tamp",
            imageSrc: "https://drive.google.com/thumbnail?id=1FSLuFuIQan4A0cb77gn12Tv9TUmlSinn&sz=w1000",
            date: "November 2025"
        },
        {
            category: "Community & Soul",
            title: "Pukot Kitchen: A Net of Local Flavors",
            excerpt: "Celebrating the vibrant textures and soulful Cebuano cuisine at Pukot Kitchen.",
            href: "/pukot",
            imageSrc: "https://drive.google.com/thumbnail?id=1y8jiUByV_-C-xU-8mgiq4AKwyaHE4YWN&sz=w1000",
            date: "October 2025"
        },
        {
            category: "Industrial Coffee",
            title: "Hatte Cafe: Minimalist Brew in Banilad",
            excerpt: "Concrete lines and technical extraction at Hatte Cafe, a sanctuary for the serious coffee enthusiast.",
            href: "/hatte",
            imageSrc: "https://drive.google.com/thumbnail?id=1l3TYo14AA8kylwsWEqABsMxFOt0CX1An&sz=w1000",
            date: "September 2025"
        },
        {
            category: "French Patisserie",
            title: "La Parisienne: A Romantic Escape on Gorordo Avenue",
            excerpt: "A Lahug destination where atmosphere, dessert, and thoughtful design details turn an ordinary dinner into an occasion.",
            href: "/laparisienne",
            imageSrc: "https://drive.google.com/thumbnail?id=1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m&sz=w1000",
            date: "August 2025"
        },
        {
            category: "Japanese Aesthetic",
            title: "Sakura Dining: Pink Blossoms and Pancakes",
            excerpt: "Valentine's Day at Sakura Dining: Fluffy pancakes, heart message trees, and aesthetic Japanese vibes.",
            href: "/sakura",
            imageSrc: "https://drive.google.com/thumbnail?id=1i5fm3k_YBqbHrdXWsKkRbswYqASB4vhD&sz=w1000",
            date: "February 2025"
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
                            backgroundImage: "url('/images/hero.png')"
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
                </motion.div>

                <div className="relative z-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl">
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
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
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
                                    date={article.date}
                                />
                            </AnimatedSection>
                        ))}
                    </section>

                    <aside className="md:col-span-4 space-y-12">
                        <AnimatedSection delay={0.8} direction="left">
                            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-stone-100 sticky top-10">
                                <h3 className="text-xl font-bold mb-8 font-serif tracking-tight">The Curated List</h3>
                                <ul className="space-y-6 font-sans">
                                    {articles.slice(0, 3).map((item, i) => (
                                        <li key={item.href} className="group border-b border-stone-100 pb-4">
                                            <a href={item.href} className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-xs font-bold text-stone-300">{String(i + 1).padStart(2, '0')}</span>
                                                    <span className="text-stone-600 group-hover:text-stone-900 transition-colors">Best of {item.category}</span>
                                                </div>
                                                <span className="font-bold text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">Open</span>
                                            </a>
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
