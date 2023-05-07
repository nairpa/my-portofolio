import { Text } from "@/common/components/heading/Heading";
import { Paper } from "@/common/components/paper/Paper"
import { ProgressBar } from "@/common/components/progress-bar/ProgressBar"
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import { useEffect, useRef } from "react";
import styles from './SkillCard.module.css';
import Image from "next/image";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export const SkillCard = () => {
    const ref = useRef<HTMLDivElement>(null);
    const query = useMediaQuery('(max-width: 780px)');

    useEffect(() => {
        if(ref.current) {
            ref.current.style.gridColumn='1';
            ref.current.style.gridRow='2';

            if(query) {
                ref.current.style.gridArea = "4 / 1 / 5 / 4";
            } else {
                ref.current.style.gridArea = "2 / 1 / 2 / 4";
            }
        }
      
    }, [ref, query])

    return(
        <Paper ref={ref} isColumn >
            <Text variant="heading" bold text={'Technologies'} icon={faScrewdriverWrench} />
            <div className={styles.skillContainer}>
                <div className={styles.skillItem}>
                    <Image src="icons/javascript.svg" alt="js-icon" width="60" height="60"></Image>
                </div>
                <div className={styles.skillItem}>
                    <Image src="icons/react.svg" alt="react-icon" width="60" height="60"></Image>
                </div>
                <div className={styles.skillItem}>
                    <Image src="icons/angular.svg" alt="angular-icon" width="60" height="60"></Image>
                </div>
                <div className={styles.skillItem}>
                    <Image src="icons/nextjs.svg" alt="nextjs-icon" width="60" height="60"></Image>
                </div>
                <div className={styles.skillItem}>
                    <Image src="icons/css3.svg" alt="css-icon" width="60" height="60"></Image>
                </div>
                <div className={styles.skillItem}>
                    <Image src="icons/html5.svg" alt="html-icon" width="60" height="60"></Image>
                </div>
                <div className={styles.skillItem}>
                    <Image src="icons/redux.svg" alt="redux-icon" width="60" height="60"></Image>
                </div>
            </div>
        </Paper>
    )
}