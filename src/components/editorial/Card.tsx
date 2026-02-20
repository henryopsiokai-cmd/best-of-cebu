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
    imageSrc?: string;
    className?: string;
};

export function Card({ category, title, excerpt, href, imageSrc, className }: CardProps) {
    return (
        <article className={clsx('border-b border-stone-200 pb-12 mb-12 last:border-0 group', className)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {imageSrc && (
                    <div className="md:col-span-1">
                        <Link href={href}>
                            <div className="aspect-[4/3] bg-stone-100 rounded-lg overflow-hidden border border-stone-200 shadow-sm relative">
                                <img 
                                    src={imageSrc} 
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </Link>
                    </div>
                )}
                <div className={imageSrc ? "md:col-span-2" : "md:col-span-3"}>
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
                </div>
            </div>
        </article>
    );
}
