import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from './Button.module.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string;
    fillMode?: 'filled' | 'outlined';
    link?: string,
    selected?: boolean,
}

export const Button = ({fillMode = 'filled', link, selected = false, ...props}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[fillMode]} ${selected ? styles.selected : ''}`} {...props} >{props.text}</button>
    )
}