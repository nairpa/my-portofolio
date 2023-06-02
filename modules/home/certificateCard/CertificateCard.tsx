import { Text } from "@/common/components/heading/Heading"
import { Paper } from "@/common/components/paper/Paper"
import { Theme, ThemeContext } from "@/common/context/ThemeContext";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import Image from 'next/image';
import { useContext, useEffect, useRef  } from "react";
import styles from './CertificateCard.module.css';
import { useTranslation } from 'react-i18next';
import { faAward } from "@fortawesome/free-solid-svg-icons";

export const CertificateCard = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { t } = useTranslation()
    const { theme }  = useContext(ThemeContext) as Theme;
    const query = useMediaQuery('(max-width: 780px)');

    useEffect(() => {
        if(ref.current) {
            ref.current.style.gridColumn='2/4';
            ref.current.style.gridRow='2/4';
            ref.current.style.width='auto';
            ref.current.style.boxSizing='border-box';

            if(query) { 
                ref.current.style.gridArea = "3 / 1 / 5 / 5"
            } else {
                ref.current.style.gridArea = "4 / 1 / 4 / 4"
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
            <Text bold variant="heading" text={t("certificaciones")} icon={faAward}/>
            <div className={styles.cardHeading}> 
                { getLogoImage() }
                <div className={styles.cardContent}>
                    <Text variant="subtitle" text="Date" />
                    <Text bold variant="title" text={t("curso")} />
                    <Text variant="text" text="Lorem ipsuum laresm."/>
                </div>
            </div>
        </Paper>
    )
}