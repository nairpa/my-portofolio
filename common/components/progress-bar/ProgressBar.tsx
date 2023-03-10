import styles from './ProgressBar.module.css';

interface Props {
    width?: string;
}

export const ProgressBar = ({width = '10'}: Props) => {
    return (
        <div className={styles.barContainer}>
            <span className={`${styles.barProgress} ${styles[`w${width}`]}`}></span>
        </div>
    )
}