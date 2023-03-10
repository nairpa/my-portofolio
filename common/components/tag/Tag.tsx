import styles from './Tag.module.css';

interface Props {
    text: string,
}

export const Tag = ({text}:Props) => {
    return (
        <span className={styles.tag}>#{text}</span>
    )
}