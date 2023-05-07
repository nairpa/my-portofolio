import { Text } from "@/common/components/heading/Heading"
import { Paper } from "@/common/components/paper/Paper"
import { Theme, ThemeContext } from "@/common/context/ThemeContext";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import Image from 'next/image';
import { useContext, useEffect, useRef  } from "react";
import styles from './ExperienceCard.module.css';
import { useTranslation } from 'react-i18next';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const ExperienceCard = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { t } = useTranslation()
    const { theme }  = useContext(ThemeContext) as Theme;
    const query = useMediaQuery('(max-width: 780px)');

    useEffect(() => {
        if(ref.current) {
            ref.current.style.gridColumn='2/4';
            ref.current.style.gridRow='2/4';
            ref.current.style.width='auto';

            if(query) { 
                ref.current.style.gridArea = "2 / 1 / 3 / 4"
            } else {
                ref.current.style.gridArea = "3 / 1 / 3 / 4"
            }
        }

    }, [theme, query, ref])

    const getLogoImage = () => {
        if(theme === 'dark') {
            return(
                <Image alt="logo-work" src="/Logo-light-EIV.svg" width={100} height={100}></Image>
            )
        } else {
            return(
                <Image alt="logo-work" src="/Logo-EIV.svg" width={100} height={100}></Image>
            )
        }
    }

    return (
        <Paper ref={ref} isColumn>
            <Text bold variant="heading" text={t("experiencia")} icon={faBriefcase}/>
            <div className={styles.cardHeading}> 
                { getLogoImage() }
                <div className={styles.cardContent}>
                    <Text variant="subtitle" text="Date - current" />
                    <Text bold variant="title" text={t("puesto")} />
                    <Text variant="text" text="Lorem ipsuum laresm."/>
                </div>
            </div>
        </Paper>
    )
}