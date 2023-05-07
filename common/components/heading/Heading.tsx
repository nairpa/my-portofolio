import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import styles from './Heading.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    text: string,
    variant: 'title' | 'heading' | 'subtitle' | 'text',
    bold?: boolean,
    icon?: IconProp,
}

export const Text = ({text, variant, bold=false, icon}:Props) => {

    const getIcon = () => {
        if(icon) {
            return <FontAwesomeIcon icon={icon} />
        } else {
            <></>
        }
    }
    return(
        <>
            <span className={`${styles.cardTitle} ${styles[variant]} ${bold? styles.bold : ''}`}>{getIcon()} {text}</span>
        </>
    )
}