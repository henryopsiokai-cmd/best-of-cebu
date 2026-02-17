import clsx from 'clsx';
import React from 'react';

export type PullQuoteProps = {
    children: React.ReactNode;
    attribution?: string;
    className?: string;
};

export function PullQuote({ children, attribution, className }: PullQuoteProps) {
    return (
        <figure className={clsx('my-12 pl-6 border-l-4 border-amber-600', className)}>
            <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed text-stone-900">
                "{children}"
            </blockquote>
            {attribution && (
                <figcaption className="mt-4 font-sans text-sm font-bold tracking-wider text-stone-500 uppercase">
                    — {attribution}
                </figcaption>
            )}
        </figure>
    );
}
