import { Text } from "@/common/components/heading/Heading";
import { Paper } from "@/common/components/paper/Paper"
import { ProgressBar } from "@/common/components/progress-bar/ProgressBar"
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import { useEffect, useRef } from "react";
import styles from './SkillCard.module.css';

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
                ref.current.style.gridArea = "2 / 1 / 3 / 2";
            }
        }
      
    }, [ref, query])

    return(
        <Paper ref={ref} isColumn>
            <div className={styles.skillContainer}>
                <Text variant="heading" bold text={'Front end'} />
                <div className={styles.skillItem}>
                    <span>Javascript</span>
                    <ProgressBar width={'70'}/>
                </div>
                <div className={styles.skillItem}>
                    <span>React</span>
                    <ProgressBar width={'70'} />
                </div>
                <div className={styles.skillItem}>
                    <span>Angular</span>
                    <ProgressBar width={'80'} />
                </div>
                <div className={styles.skillItem}>
                    <span>Nextjs</span>
                    <ProgressBar width={'60'} />
                </div>
                <div className={styles.skillItem}>
                    <span>CSS</span>
                    <ProgressBar width={'90'} />
                </div>
                <div className={styles.skillItem}>
                    <span>Redux</span>
                    <ProgressBar width={'70'} />
                </div>
            </div>
        </Paper>
    )
}