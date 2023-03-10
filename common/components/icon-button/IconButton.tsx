import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './IconButton.module.css';

export interface Props {
    icon: IconDefinition
}

export const IconButton = ({icon}: Props) => {
    return (
        <div className={`${styles.iconContainer} ${styles.border}`}>
            <FontAwesomeIcon size="xl" className={styles.iconColor} icon={icon}/>
            <div className={styles.borderHorizontal}></div>
            <div className={styles.borderVertical}></div>
        </div>
    )
}