import clsx from 'clsx';
import React from 'react';

type DropCapProps = {
    children: string;
    className?: string;
};

export function DropCap({ children, className }: DropCapProps) {
    const firstLetter = children.charAt(0);
    const rest = children.slice(1);

    return (
        <p className={clsx('text-xl leading-relaxed text-stone-800 mb-6', className)}>
            <span className="float-left text-7xl font-bold leading-[0.8] mr-3 mt-2 font-serif text-stone-900">
                {firstLetter}
            </span>
            {rest}
        </p>
    );
}
