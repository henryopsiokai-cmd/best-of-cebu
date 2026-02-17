'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export type TypographyProps = {
    children: React.ReactNode;
    className?: string;
};

export const H1 = ({ children, className = "" }: TypographyProps) => (
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={clsx('font-serif text-4xl md:text-6xl font-bold leading-tight tracking-tight text-stone-900 mb-6', className)}
    >
        {children}
    </motion.h1>
);

export const H2 = ({ children, className = "" }: TypographyProps) => (
    <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={clsx('font-serif text-2xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4', className)}
    >
        {children}
    </motion.h2>
);

export const H3 = ({ children, className = "" }: TypographyProps) => (
    <h3 className={clsx('font-serif text-2xl md:text-3xl font-semibold text-stone-900 mb-3', className)}>
        {children}
    </h3>
);

export const Paragraph = ({ children, className = "" }: TypographyProps) => (
    <p className={clsx('font-sans text-lg leading-relaxed text-stone-700 mb-6', className)}>
        {children}
    </p>
);

export const Label = ({ children, className = "" }: TypographyProps) => (
    <span className={clsx('font-sans text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block', className)}>
        {children}
    </span>
);
