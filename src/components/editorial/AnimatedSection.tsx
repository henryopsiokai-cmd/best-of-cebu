'use client';

import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'framer-motion';

export type AnimatedSectionProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
};

export const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
    threshold = 0.2,
    direction = 'up'
}: AnimatedSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold } as UseInViewOptions);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Apple-like ease
                delay: delay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};
