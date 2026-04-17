'use client';

import Link from 'next/link';

export function Footer({ prevHref, prevTitle, nextHref, nextTitle }: { prevHref?: string; prevTitle?: string; nextHref?: string; nextTitle?: string }) {
    return (
        <footer className="bg-stone-900 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">Best of Cebu</h3>
                        <p className="text-stone-400 text-sm">The definitive guide to the Queen City of the South.</p>
                    </div>
                    <div>
                        <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">Newsletter</h4>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email"
                                className="bg-stone-800 px-4 py-2 text-sm flex-1 border border-stone-700 focus:border-amber-500 outline-none"
                            />
                            <button className="bg-amber-600 px-4 py-2 text-sm font-bold uppercase tracking-widest hover:bg-amber-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">Follow</h4>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com/bestofcebu" target="_blank" rel="noopener" className="text-stone-400 hover:text-amber-500 transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
                <nav className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800 font-sans text-xs font-bold uppercase tracking-widest">
                    {prevHref && prevTitle && (
                        <Link href={prevHref} className="hover:text-amber-500 transition-colors text-stone-400 mb-4 md:mb-0">
                            ← Previous: {prevTitle}
                        </Link>
                    )}
                    <Link href="/" className="hover:text-amber-500 transition-colors">
                        Back to Issues
                    </Link>
                    {nextHref && nextTitle && (
                        <Link href={nextHref} className="hover:text-amber-500 transition-colors text-stone-400 mb-4 md:mb-0">
                            Next: {nextTitle} →
                        </Link>
                    )}
                </nav>
            </div>
        </footer>
    );
}