import styles from './Select.module.css';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Flag from 'react-world-flags';

interface SelectOptions {
    icon?: string,
    value: any,
    label: string,
}

interface SelectProps {
    handleChange: (e: any) => void,
    options: SelectOptions[];
    defaultValue?: string;
}

export const Select = ({ handleChange, options, defaultValue }:SelectProps) => {
    const [ hide, setHide ] = useState(true);
    const [ value, setValue ] = useState<SelectOptions | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDefaultValue()
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if(!ref.current?.contains(event.target)) {
                setHide(true)
            }
        };

        document.addEventListener("mousedown", handleClickOutside)
    }, [ref])

    const setDefaultValue = () => {
        if(defaultValue) {
            const option = findOption(defaultValue);
            
            if(option) {
                setValue(option)
            }
        }
    }

    const handleClick = (e: any) => {
        setHide(!hide)
    }

    const handleSelectChange = (e: any) => {
        const option = findOption(e.target.value)
        
        if(option) {
            setValue(option)
            setHide(true)
        }

        handleChange(e.target.value)
    }

    const findOption = (value: string) => {
        return options.find(option => option.value === value)
    }

    return (
        <div className={styles.container}  ref={ref}>
            <div className={`${styles.select} ${!hide ? styles.bottomBorder : ''}`}>
                <div className={styles.selectLabel}>
                    <div className={styles.iconContainer}>
                        <Flag code={value?.icon} height={30} width={40} />
                    </div>
                    <p>{value?.label}</p>
                </div>
                <div className={`${styles.selectButton}`}>
                    <button className={styles.selectArrow} onClick={(e) => handleClick(e)}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
            </div>
            <span className={hide ? styles['hidden'] : ''}>
                {options.map(option => (
                    <div className={styles.selectOption}>
                        <div className={styles.iconContainer}>
                            <Flag code={option.icon} height={30} width={40} />
                        </div>
                        <option 
                            onClick={(e) => handleSelectChange(e)}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    </div>
                ))}
            </span>
        </div>
    )
}