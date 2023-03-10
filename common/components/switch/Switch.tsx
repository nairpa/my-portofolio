import Image from 'next/image';
import styles from './Switch.module.css';

interface SwitchProps {
    handleChange: (e: any) => void,
    checked: boolean,
    icons?: any[],
}

export const Switch = ({ handleChange, checked, icons }: SwitchProps) => {
    return (
        <label className={`${styles.container}`} >
            <input className={`${styles.checkbox}`} checked={checked} type="checkbox" onChange={(e) => handleChange(e)}></input>
            <span className={`${styles.toggle}`}>
                { icons?.length ? icons.map(icon => <Image src={icon} width="20" height="20" alt="icon"></Image>) : null }
            </span>            
        </label>
    )
}