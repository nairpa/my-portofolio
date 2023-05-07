import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from './Button.module.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string;
    fillMode?: 'filled' | 'outlined';
    link?: string,
}

export const Button = ({fillMode = 'filled', link, ...props}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[fillMode]}`} {...props} >{props.text}</button>
    )
}