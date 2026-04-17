import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { Label, H2, Paragraph } from './Typography';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export type CardProps = {
    category: string;
    title: string;
    excerpt: string;
    href: string;
    imageSrc?: string;
    date?: string;
    className?: string;
};

export function Card({ category, title, excerpt, href, imageSrc, date, className }: CardProps) {
    return (
        <article className={clsx('mb-16 group', className)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {imageSrc && (
                    <div className="md:col-span-1">
                        <Link href={href}>
                            <div className="aspect-[4/3] bg-stone-100 rounded-lg overflow-hidden border border-stone-200 shadow-sm relative">
                                <motion.img 
                                    src={imageSrc} 
                                    alt={title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </Link>
                    </div>
                )}
                <div className={imageSrc ? "md:col-span-2" : "md:col-span-3"}>
                    <div className="flex justify-between items-start mb-3">
                        <Label className="text-stone-400">{category}</Label>
                        {date && (
                            <span className="text-xs font-sans text-stone-400">{date}</span>
                        )}
                    </div>
                    <Link href={href} className="group">
                        <H2 className="mt-2 mb-4 transition-colors relative inline-block">
                            {title}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300 ease-out" />
                        </H2>
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
