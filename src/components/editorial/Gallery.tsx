'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

export type GalleryProps = {
    images: string[];
    title?: string;
};

export function Gallery({ images, title = "The Gallery" }: GalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const hasImages = images && images.length > 0;
    const isOpen = activeIndex !== null;

    const imageUrls = useMemo(
        () => images.map((id) => `https://drive.google.com/thumbnail?id=${id}&sz=w2000`),
        [images]
    );

    const previewIndices = useMemo(() => {
        const targetCount = 12;
        const total = images.length;

        if (total <= targetCount) {
            return Array.from({ length: total }, (_, i) => i);
        }

        const picked = new Set<number>();
        const step = (total - 1) / (targetCount - 1);

        for (let i = 0; i < targetCount; i++) {
            picked.add(Math.round(i * step));
        }

        let cursor = 0;
        while (picked.size < targetCount && cursor < total) {
            picked.add(cursor);
            cursor += 1;
        }

        return Array.from(picked).sort((a, b) => a - b).slice(0, targetCount);
    }, [images]);

    const openAt = (index: number) => setActiveIndex(index);
    const close = () => setActiveIndex(null);

    const goPrev = () => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    const goNext = () => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex + 1) % images.length);
    };

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, activeIndex]);

    if (!hasImages) return null;

    return (
        <AnimatedSection>
            <div className="my-24">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400">{title}</h2>
                    <div className="h-[1px] flex-grow bg-stone-100"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {previewIndices.map((originalIndex, previewIndex) => {
                        const id = images[originalIndex];
                        return (
                            <button
                                key={id + previewIndex}
                                type="button"
                                onClick={() => openAt(originalIndex)}
                                className="aspect-square bg-stone-100 rounded-sm overflow-hidden relative group border border-stone-100 shadow-sm text-left"
                                aria-label={`Open image ${originalIndex + 1}`}
                            >
                                <img
                                    src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt={`Gallery preview ${previewIndex + 1}`}
                                />
                                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                            </button>
                        );
                    })}
                </div>

                {images.length > 12 && (
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-xs uppercase tracking-widest text-stone-500">
                            Showing 12 preview images · {images.length} total
                        </p>
                        <button
                            type="button"
                            onClick={() => openAt(0)}
                            className="text-xs uppercase tracking-widest border border-stone-300 px-3 py-2 hover:bg-stone-100 transition-colors"
                        >
                            Open Full Gallery
                        </button>
                    </div>
                )}
            </div>

            {isOpen && activeIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                >
                    <div className="flex items-center justify-between px-4 md:px-8 py-4 text-white/90">
                        <div className="text-xs md:text-sm tracking-widest uppercase">
                            Image {activeIndex + 1} of {images.length}
                        </div>
                        <button
                            type="button"
                            onClick={close}
                            className="text-xs md:text-sm uppercase tracking-widest border border-white/30 px-3 py-2 hover:bg-white/10 transition-colors"
                        >
                            Close
                        </button>
                    </div>

                    <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 pb-4">
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-2xl md:text-4xl w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                            aria-label="Previous image"
                        >
                            ‹
                        </button>

                        <img
                            src={imageUrls[activeIndex]}
                            alt={`Gallery full view ${activeIndex + 1}`}
                            className="max-h-[75vh] md:max-h-[80vh] w-auto max-w-full object-contain select-none"
                        />

                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-2xl md:text-4xl w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                            aria-label="Next image"
                        >
                            ›
                        </button>
                    </div>

                    <div className="px-3 md:px-8 pb-4 md:pb-6">
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {images.map((id, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <button
                                        type="button"
                                        key={id + `thumb-${i}`}
                                        onClick={() => setActiveIndex(i)}
                                        className={`shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 overflow-hidden transition-colors ${
                                            isActive ? 'border-amber-400' : 'border-white/20 hover:border-white/50'
                                        }`}
                                        aria-label={`View image ${i + 1}`}
                                    >
                                        <img
                                            src={`https://drive.google.com/thumbnail?id=${id}&sz=w300`}
                                            alt={`Thumbnail ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </AnimatedSection>
    );
}
