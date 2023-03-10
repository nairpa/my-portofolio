import styles from './Heading.module.css';

interface Props {
    text: string,
    variant: 'title' | 'heading' | 'subtitle' | 'text',
    bold?: boolean,
}

export const Text = ({text, variant, bold=false}:Props) => {
    return(
        <span className={`${styles.cardTitle} ${styles[variant]} ${bold? styles.bold : ''}`}>{text}</span>
    )
}