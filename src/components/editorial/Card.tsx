import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { Label, H2, Paragraph } from './Typography';
import { ArrowRight } from 'lucide-react';

export type CardProps = {
    category: string;
    title: string;
    excerpt: string;
    href: string;
    className?: string;
};

export function Card({ category, title, excerpt, href, className }: CardProps) {
    return (
        <article className={clsx('border-b border-stone-200 pb-12 mb-12 last:border-0', className)}>
            <Label className="mb-3 block text-stone-400">{category}</Label>
            <Link href={href} className="group">
                <H2 className="mt-2 mb-4 group-hover:text-amber-700 transition-colors">{title}</H2>
            </Link>
            <Paragraph className="text-stone-600 mb-6">
                {excerpt}
            </Paragraph>
            <Link href={href} className="inline-flex items-center font-sans font-bold uppercase tracking-widest text-xs border-b-2 border-stone-900 pb-1 hover:border-amber-600 hover:text-amber-600 transition-colors">
                Read the Feature <ArrowRight className="w-3 h-3 ml-2" />
            </Link>
        </article>
    );
}
