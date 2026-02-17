'use client';

import clsx from 'clsx';
import React from 'react';
import { H1, Label, Paragraph } from './Typography';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export type ArticleHeaderProps = {
    title: string;
    subtitle?: string;
    category: string;
    author?: string;
    publishedAt?: string;
    imageSrc?: string;
    className?: string;
};

export function ArticleHeader({
    title,
    subtitle,
    category,
    author,
    publishedAt,
    imageSrc,
    className
}: ArticleHeaderProps) {
    const [imageError, setImageError] = React.useState(false); // Tracks if the hero image failed to load

    return (
        <header className={clsx('w-full max-w-4xl mx-auto px-6 pt-12 pb-8 md:pt-20 md:pb-12', className)}>
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm font-sans font-medium text-stone-500 hover:text-amber-600 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
            </div>

            <div className="text-center mb-8">
                <Label className="mb-4 block">{category}</Label>
                <H1 className="mb-4">{title}</H1>
                {subtitle && (
                    <p className="font-sans text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>

            {(author || publishedAt) && (
                <div className="flex items-center justify-center space-x-4 mb-12 font-sans text-sm text-stone-500 border-t border-b border-stone-200 py-4 w-fit mx-auto px-8">
                    {author && <span className="font-medium text-stone-900">By {author}</span>}
                    {author && publishedAt && <span>•</span>}
                    {publishedAt && <span>{publishedAt}</span>}
                </div>
            )}

            {imageSrc && !imageError ? (
                <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-sm mt-8 bg-stone-100">
                    <img
                        src={imageSrc}
                        alt={title}
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            ) : imageSrc && imageError ? (
                <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-sm mt-8 bg-stone-100 flex items-center justify-center border border-stone-200">
                    <div className="text-center">
                        <span className="block text-stone-400 mb-2 font-sans font-bold uppercase tracking-widest text-xs">Image Unavailable</span>
                        <span className="text-stone-300 text-sm font-serif italic">{title}</span>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
