import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.Loader, {}, [className])} />
);
