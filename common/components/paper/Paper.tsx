import React, { ReactNode } from 'react';
import styles from './Paper.module.css';

interface Props {
    children: ReactNode,
    isColumn?: boolean,
}

export const Paper = React.forwardRef<HTMLDivElement, Props>(({children, isColumn}, ref) => (
    <div ref={ref} className={`${styles.paper} ${isColumn ? styles.flexCol : ''}`}>
        { children } 
    </div>
))