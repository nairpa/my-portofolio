import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import styles from './LinkButton.module.css';

interface LinkButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    text: string;
    link?: string,
    selected?: boolean,
}

export const LinkButton = ({link, selected = false, ...props}: LinkButtonProps) => {
    return (
        <a className={`${styles.link} ${ selected ? styles.selected : ''}`} {...props} >#{props.text}</a>
    )
}