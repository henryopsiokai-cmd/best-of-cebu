import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export type GalleryProps = {
    images: string[];
    title?: string;
};

export function Gallery({ images, title = "The Gallery" }: GalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <AnimatedSection>
            <div className="my-24">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400">{title}</h2>
                    <div className="h-[1px] flex-grow bg-stone-100"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((id, i) => (
                        <div key={id} className="aspect-square bg-stone-100 rounded-sm overflow-hidden relative group border border-stone-100 shadow-sm">
                            <img 
                                src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                alt={`Gallery ${i + 1}`}
                            />
                            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
